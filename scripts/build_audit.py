#!/usr/bin/env python3
"""Build a content-audit Excel file for the Base One website.

Reads every page/component and the relevant data files, extracts user-visible
text, assigns stable IDs, and writes:
  - content-audit.xlsx  (one sheet per page; auditor edits "New Text" column)
  - content-audit-manifest.json  (id -> file path + exact original text)

After the auditor returns the Excel, apply_audit.py uses the manifest to
replace each modified text in the source files.

Re-run any time the site changes — the Excel always reflects the CURRENT live
copy (the "New Text" column starts blank for the next round of edits).
"""
import json
import re
import sys
from pathlib import Path
from openpyxl import Workbook
from openpyxl.styles import Alignment, Font, PatternFill, Border, Side
from openpyxl.utils import get_column_letter

ROOT = Path("/Users/imadfarhat/imadFarhat projects/Base One")
SRC = ROOT / "src"
OUT_XLSX = ROOT / "content-audit.xlsx"
OUT_MANIFEST = ROOT / "content-audit-manifest.json"

# ────────────────────────────────────────────────────────────────────────────
# Page configuration — order matters (becomes sheet order).
# Each page has its own ID prefix. Files listed in render order; the first is
# the page itself, the rest are data/components that feed into it.
# ────────────────────────────────────────────────────────────────────────────
PAGES = [
    {"key": "HOME",  "name": "Home",            "files": ["routes/+page.svelte"]},
    {"key": "DIVE",  "name": "Diving",          "files": ["routes/diving/+page.svelte", "lib/data/caves.js"]},
    {"key": "TRAIN", "name": "Training",        "files": ["routes/training/+page.svelte", "lib/data/courses.js"]},
    {"key": "EXPL",  "name": "Exploration",     "files": ["routes/exploration/+page.svelte"]},
    {"key": "FAC",   "name": "The Facility",    "files": ["routes/about/+page.svelte", "lib/data/team.js"]},
    {"key": "CALA",  "name": "Cala Gonone",     "files": ["routes/cala-gonone/+page.svelte", "lib/data/area.js"]},
    {"key": "PLAN",  "name": "Plan Your Trip",  "files": ["routes/plan/+page.svelte", "lib/data/simulator.js"]},
    {"key": "TERMS", "name": "Terms",           "files": ["routes/terms/+page.svelte"]},
    {"key": "SHARED","name": "Shared (Nav · Footer · CTA · Hero)", "files": [
        "lib/components/Nav.svelte",
        "lib/components/Footer.svelte",
        "lib/components/CtaBlock.svelte",
        "lib/components/BigCta.svelte",
        "lib/components/PageHero.svelte",
        "lib/components/Testimonials.svelte",
    ]},
]

# Friendly section names per source file (used as the section heading prefix for
# component/data files so rows are clearly "allocated where they are").
FILE_SECTION = {
    "lib/components/Nav.svelte":          "Navigation Bar",
    "lib/components/Footer.svelte":       "Footer",
    "lib/components/CtaBlock.svelte":     "Closing CTA block",
    "lib/components/BigCta.svelte":       "Mid-page CTA block",
    "lib/components/PageHero.svelte":     "Reusable Page Hero",
    "lib/components/Testimonials.svelte": "Testimonials",
}

# Friendly section names for data-file export arrays.
DATA_SECTION = {
    "caves":          "Caves (cards)",
    "courses":        "Course calendar",
    "team":           "Team members",
    "activities":     "Things to Do (cards)",
    "gettingHere":    "Getting Here (flights)",
    "ferryRoutes":    "Ferry routes",
    "accommodations": "Accommodations",
    "testimonials":   "Testimonials",
    "DIVE_TYPES":     "Planner · Dive types",
    "CYLINDERS":      "Planner · Cylinders",
    "FILL_GASES":     "Planner · Fill gases",
    "GEAR_ITEMS":     "Planner · Gear items",
}

# ────────────────────────────────────────────────────────────────────────────
# Section detection
# ────────────────────────────────────────────────────────────────────────────
# A "divider comment" looks like:  <!-- ── Hero ──────── -->
DIVIDER_COMMENT_RE = re.compile(r"<!--\s*[─\-]{2,}\s*(.*?)\s*[─\-]{2,}\s*-->")

# Component → friendly section name (when a page renders these directly).
COMPONENT_SECTION = [
    ("<PageHero",     "Hero"),
    ("<CtaBlock",     "Closing CTA"),
    ("<BigCta",       "Mid-page CTA"),
    ("<VideoSection", "Video"),
    ("<Testimonials", "Testimonials"),
    ("<PhotoGallery", "Photo gallery"),
    ("<CaveTimeline", "The Caves (tabs)"),
    ("<CourseCalendar", "Course calendar"),
    ("<TripSimulator", "Trip planner"),
]

# class="..." substring → friendly section name (for hero/info/cta blocks that
# have no eyebrow label or divider comment).
CLASS_SECTION = [
    ("hero-content", "Hero"),
    ('class="hero"', "Hero"),
    ("info-cards",   "Info cards"),
    ("cta-final",    "Closing CTA"),
    ("quote-divider", None),   # decorative — keep current section
]

# Text-bearing HTML tags.
TEXT_TAGS = ["h1", "h2", "h3", "h4", "h5", "p", "li", "button", "a",
             "span", "blockquote", "summary", "label"]

# Attributes worth auditing.
TEXT_ATTRS = ["alt", "title", "placeholder", "aria-label"]

# Component props that carry text.
COMPONENT_TEXT_PROPS = ["heading", "eyebrow", "sub", "text", "label",
                        "primaryLabel", "secondaryLabel"]

SCRIPT_RE = re.compile(r"<script[^>]*>.*?</script>", re.S)
STYLE_RE  = re.compile(r"<style[^>]*>.*?</style>", re.S)
ALL_COMMENTS_RE = re.compile(r"<!--.*?-->", re.S)


def strip_inline_tags(html: str) -> str:
    out = re.sub(r"<br\s*/?>", " ", html)
    out = re.sub(r"</?\s*(strong|em|b|i|u|small)\s*[^>]*>", "", out, flags=re.I)
    return out


def clean_text(s: str) -> str:
    if s is None: return ""
    s = s.replace("&amp;", "&").replace("&nbsp;", " ").replace("&mdash;", "—") \
         .replace("&ndash;", "–").replace("&apos;", "'").replace("&quot;", '"') \
         .replace("&#39;", "'")
    s = re.sub(r"\{[#:/][^}]*\}", " ", s)
    s = re.sub(r"\{[^}]*\}", " ", s)
    s = re.sub(r"\s+", " ", s).strip()
    return s


def looks_like_text(s: str) -> bool:
    if not s: return False
    if len(s) < 2: return False
    if s.isdigit(): return False
    if re.match(r"^(https?://|/|\.\.?/|#|mailto:|tel:|wa\.me|javascript:)", s): return False
    if re.match(r"^[a-z][a-z0-9-]*\.(svg|png|jpg|jpeg|webp|gif|css|js|json)$", s, re.I): return False
    if re.match(r"^[a-z][a-z0-9_-]*(\s+[a-z][a-z0-9_-]*)+$", s) and not " " in s.strip(" "): return False
    if re.match(r"^[\W_]+$", s): return False
    return True


def section_label_text(line: str):
    """If the line carries a visible eyebrow (section-label / eyebrow class),
    return its inner text — used as the human-facing section name."""
    m = re.search(r'class="(?:[^"]*\b)?(?:section-label|eyebrow)\b[^"]*"[^>]*>(.*?)</', line)
    if m:
        t = clean_text(strip_inline_tags(m.group(1)))
        if looks_like_text(t):
            return t
    return None


def li_element_label(line: str) -> str:
    """Pills/tags vs ordinary list items, judged from the line's list class."""
    if "tag-list" in line or "hero-highlights" in line:
        return "pill / tag"
    return "<li>"


def preprocess_svelte(raw: str) -> str:
    """Remove script/style, drop dead (commented-out) HTML, and convert section
    divider comments into @@SEC:Name@@ markers so live content never leaks."""
    body = SCRIPT_RE.sub("", raw)
    body = STYLE_RE.sub("", body)

    def repl(m):
        inner = m.group(0)
        dm = DIVIDER_COMMENT_RE.match(inner.strip())
        # A real divider comment is short and title-like; anything else (a
        # multi-line block of commented-out markup) is dead content → drop it.
        if dm and "\n" not in inner:
            name = dm.group(1).strip(" ─-:")
            return f"\n@@SEC:{name}@@\n" if name else "\n"
        # Plain single-line title comment "<!-- Foo Bar -->"
        cand = inner[4:-3].strip()
        if "\n" not in inner and 3 <= len(cand) <= 60 and cand[:1].isupper() \
           and "<" not in cand:
            return f"\n@@SEC:{cand}@@\n"
        return "\n"  # drop everything else (incl. multi-line HIDDEN blocks)

    return ALL_COMMENTS_RE.sub(repl, body)


def extract_svelte(path: Path, base_section: str):
    raw = path.read_text(encoding="utf-8")
    body = preprocess_svelte(raw)
    section = base_section

    for ln in body.split("\n"):
        sm = re.match(r"\s*@@SEC:(.*?)@@\s*$", ln)
        if sm:
            section = sm.group(1).strip() or section
            continue

        # Component-rendered sections.
        for marker, name in COMPONENT_SECTION:
            if marker in ln:
                section = name
                break
        # Eyebrow label → friendly section name (override; it is the visible label).
        lbl = section_label_text(ln)
        if lbl:
            section = lbl
        # Class-based hints for hero/info/cta blocks without a label.
        for sub, name in CLASS_SECTION:
            if sub in ln and name:
                section = name
                break

        # Component props. Lookbehind prevents aria-label / data-label etc.
        # from matching the bare "label" prop.
        for prop in COMPONENT_TEXT_PROPS:
            for m in re.finditer(rf'(?<![\w-]){prop}\s*=\s*"([^"]+)"', ln):
                t = clean_text(strip_inline_tags(m.group(1)))
                if looks_like_text(t):
                    yield section, f"prop:{prop}", t, m.group(1)

        # Attributes.
        for attr in TEXT_ATTRS:
            for m in re.finditer(rf'\b{attr}\s*=\s*"([^"]+)"', ln):
                t = clean_text(strip_inline_tags(m.group(1)))
                if looks_like_text(t):
                    yield section, f"attr:{attr}", t, m.group(1)

        # Tag text.
        for tag in TEXT_TAGS:
            for m in re.finditer(rf"<{tag}\b[^>]*>(.*?)</{tag}>", ln, flags=re.I):
                inner = strip_inline_tags(m.group(1))
                # Skip if the inner still wraps another element (its own text is
                # captured separately) — incl. <a> links and <svg> icons.
                if re.search(r"<(h[1-6]|p|li|button|blockquote|section|div|ul|ol|a|svg|img|nav)\b", inner, re.I):
                    continue
                t = clean_text(inner)
                if not looks_like_text(t):
                    continue
                elem = li_element_label(ln) if tag == "li" else f"<{tag}>"
                yield section, elem, t, m.group(1)


def extract_js_data(path: Path):
    raw = path.read_text(encoding="utf-8")
    text_fields = {
        "name", "role", "title", "desc", "label", "sub", "text", "heading",
        "time", "notes", "from", "to", "via", "eyebrow", "course", "instructor",
        "level", "details",
    }
    pattern = re.compile(
        r"\b(" + "|".join(text_fields) + r")\s*:\s*(['\"])((?:\\\2|(?!\2).)*)\2",
        re.S,
    )
    export_blocks = []
    for m in re.finditer(r"export const (\w+)\s*=", raw):
        export_blocks.append((m.start(), m.group(1)))

    def section_for(pos: int) -> str:
        last = "(data)"
        for start, name in export_blocks:
            if start <= pos:
                last = name
        return DATA_SECTION.get(last, last.replace("_", " ").title())

    for m in pattern.finditer(raw):
        field = m.group(1)
        val = clean_text(strip_inline_tags(m.group(3)))
        if looks_like_text(val):
            yield section_for(m.start()), f"data:{field}", val, m.group(3)

    for m in re.finditer(r"\bbio\s*:\s*\[(.*?)\]", raw, re.S):
        for s in re.finditer(r"(['\"])((?:\\\1|(?!\1).)*)\1", m.group(1)):
            val = clean_text(strip_inline_tags(s.group(2)))
            if looks_like_text(val):
                yield section_for(m.start()), "data:bio", val, s.group(2)

    for m in re.finditer(r"\btags\s*:\s*\[(.*?)\]", raw, re.S):
        for s in re.finditer(r"(['\"])((?:\\\1|(?!\1).)*)\1", m.group(1)):
            val = clean_text(strip_inline_tags(s.group(2)))
            if looks_like_text(val):
                yield section_for(m.start()), "data:tag", val, s.group(2)

    for m in re.finditer(r"\bexamples\s*:\s*\[(.*?)\]", raw, re.S):
        for s in re.finditer(r"(['\"])((?:\\\1|(?!\1).)*)\1", m.group(1)):
            val = clean_text(strip_inline_tags(s.group(2)))
            if looks_like_text(val):
                yield section_for(m.start()), "data:example", val, s.group(2)


def collect_for_page(page_cfg):
    rows = []
    seen = set()
    for rel in page_cfg["files"]:
        path = SRC / rel
        if not path.exists():
            continue
        if path.suffix == ".js":
            gen = extract_js_data(path)
        else:
            base = FILE_SECTION.get(rel, "(top of page)")
            gen = extract_svelte(path, base)
        for section, etype, text, anchor in gen:
            key = (section, etype, text)
            if key in seen: continue
            seen.add(key)
            rows.append({
                "section": section, "element": etype, "text": text,
                "anchor": anchor, "file": str(path.relative_to(ROOT)),
            })
    return rows


def write_excel(all_rows, manifest):
    wb = Workbook()
    wb.remove(wb.active)

    HEADER = ["ID", "Section / Block", "Element", "Current Text", "New Text", "Notes"]
    header_fill = PatternFill(start_color="1A8C8E", end_color="1A8C8E", fill_type="solid")
    header_font = Font(bold=True, color="FFFFFF", size=11)
    section_fill = PatternFill(start_color="EFF7F7", end_color="EFF7F7", fill_type="solid")
    section_font = Font(bold=True, color="0C1A2A", size=11)
    new_fill = PatternFill(start_color="FFFDF2", end_color="FFFDF2", fill_type="solid")
    thin = Side(border_style="thin", color="D0D7DE")
    border = Border(left=thin, right=thin, top=thin, bottom=thin)
    wrap = Alignment(wrap_text=True, vertical="top")

    ws_inst = wb.create_sheet("README", 0)
    ws_inst.append(["Base One — Content Audit"])
    ws_inst["A1"].font = Font(bold=True, size=18, color="1A8C8E")
    ws_inst.append([])
    ws_inst.append(["How this works:"])
    ws_inst["A3"].font = Font(bold=True, size=12)
    instructions = [
        "1. Each sheet is one page of the website (tabs along the bottom).",
        "2. Rows are grouped by the visible section/block (teal headings).",
        "3. To change wording, type the replacement in the 'New Text' column (cream).",
        "4. Leave 'New Text' blank if the current text is fine.",
        "5. Use 'Notes' for questions or instructions (e.g. \"shorten\", \"link to Training\", \"remove\").",
        "6. DO NOT edit the ID column — it maps your edits back to the website.",
        "7. Save and send back; changes are applied to the live site exactly.",
        "",
        "Every line of visible copy is listed, including the small 'pill / tag' labels.",
        "The 'Shared' sheet holds the nav bar, footer and reusable hero/CTA blocks that",
        "appear on every page — edit once there.",
        "",
        "Element column legend:",
        "   <h1>/<h2>/<h3>  →  page title / section heading / subheading",
        "   <p>              →  body paragraph",
        "   <li>             →  list item (bullet)",
        "   pill / tag       →  small rounded label chip (e.g. Cave · CCR · DPV)",
        "   <a>              →  link / button text",
        "   <button>         →  button label",
        "   <span>           →  inline label or stat",
        "   <blockquote>     →  pulled quote",
        "   prop:heading     →  text passed into a reusable component (hero / CTA / etc.)",
        "   attr:alt         →  image alt-text (accessibility / SEO)",
        "   attr:title       →  hover/title attribute",
        "   data:name        →  structured data (cave / team / hotel name, etc.)",
        "   data:desc        →  structured data description",
        "   data:tag         →  structured data label chip",
    ]
    for line in instructions:
        ws_inst.append([line])
    ws_inst.column_dimensions["A"].width = 110

    for page in PAGES:
        rows = all_rows[page["key"]]
        ws = wb.create_sheet(page["name"][:31])
        ws.append(HEADER)
        for col, _ in enumerate(HEADER, start=1):
            c = ws.cell(row=1, column=col)
            c.font = header_font
            c.fill = header_fill
            c.alignment = Alignment(vertical="center", horizontal="left")
            c.border = border
        ws.row_dimensions[1].height = 26
        ws.freeze_panes = "A2"

        current_section = None
        idx = 0
        for r in rows:
            if r["section"] != current_section:
                current_section = r["section"]
                ws.append(["", current_section, "", "", "", ""])
                row = ws.max_row
                for col in range(1, 7):
                    cell = ws.cell(row=row, column=col)
                    cell.fill = section_fill
                    cell.font = section_font
                    cell.border = border
                ws.merge_cells(start_row=row, start_column=2, end_row=row, end_column=6)
            idx += 1
            id_ = f"{page['key']}-{idx:03d}"
            ws.append([id_, r["section"], r["element"], r["text"], "", ""])
            row = ws.max_row
            for col in range(1, 7):
                cell = ws.cell(row=row, column=col)
                cell.alignment = wrap
                cell.border = border
            ws.cell(row=row, column=1).font = Font(name="Menlo", size=10, color="6B7280")
            ws.cell(row=row, column=5).fill = new_fill  # highlight the edit column

            manifest[id_] = {
                "page": page["name"], "section": r["section"],
                "element": r["element"], "file": r["file"],
                "text": r["text"], "anchor": r["anchor"],
            }

        widths = [12, 26, 16, 58, 58, 30]
        for i, w in enumerate(widths, start=1):
            ws.column_dimensions[get_column_letter(i)].width = w

    wb.save(OUT_XLSX)


def main():
    all_rows = {}
    manifest = {}
    for page in PAGES:
        rows = collect_for_page(page)
        all_rows[page["key"]] = rows
        print(f"  {page['key']:6s} {page['name']:35s} → {len(rows):3d} strings")

    write_excel(all_rows, manifest)
    OUT_MANIFEST.write_text(json.dumps(manifest, indent=2, ensure_ascii=False))
    print(f"\n  ✓ {OUT_XLSX.relative_to(ROOT)}")
    print(f"  ✓ {OUT_MANIFEST.relative_to(ROOT)}  ({len(manifest)} entries)")


if __name__ == "__main__":
    main()
