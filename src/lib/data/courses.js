// Course schedule for the Training page.
// GUE rows: live from GUE.com (Cala Gonone) via /api/gue-classes, with a build-time snapshot as fallback.
// Non-GUE rows (TDI samples) open the enquiry popup; they stay as manually-entered samples and are listed after the live GUE classes.
import snapshot from './gueClasses.json';

const others = [
  // ── TDI / IANTD sample courses (visual reference only) ──
  { course: 'TDI Intro to Tech',           date: 'May 30, 2026', instructor: 'Olivier Bertieaux', org: 'TDI', level: 'Tech',       details: 'A bridge from recreational into technical diving - equipment configuration and skills.' },
  { course: 'TDI Cavern Diver',            date: 'Jun 5, 2026',  instructor: 'Mauro Bordignon',   org: 'TDI', level: 'Cave',       details: 'Daylight-zone overhead diving - an accessible first step into cave country.' },
  { course: 'TDI Advanced Nitrox',         date: 'Jun 18, 2026', instructor: 'Olivier Bertieaux', org: 'TDI', level: 'Nitrox',     details: 'Decompression procedures and accelerated deco with enriched-air mixes.' },
  { course: 'TDI Trimix',                  date: 'Jun 26, 2026', instructor: 'Mauro Bordignon',   org: 'TDI', level: 'Tech',       details: 'Helium-based mixes for deeper technical dives with reduced narcosis.' },
];

export const byDate = (a, b) => new Date(a.date) - new Date(b.date);
export const upcoming = (list) => {
  const today = new Date(); today.setHours(0, 0, 0, 0);
  return list.filter((c) => new Date(c.date) >= today).sort(byDate);
};
export const mergeCourses = (gue) => [...upcoming(gue), ...others];
export const courses = mergeCourses(snapshot);
