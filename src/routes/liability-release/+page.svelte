<script>
  import PageHero from '$lib/components/PageHero.svelte';
  import { onMount } from 'svelte';

  // ── Form state ──────────────────────────────────────────────
  let f = {
    name: '', residentOf: '', fiscalCode: '',
    country: '', town: '', zip: '', street: '', phone: '', email: '',
    issuedBy: '', level: '', certNumber: '', issuedOn: '',
    numDives: '', specialties: '',
    place: '', date: ''
  };

  // "I declare that" statements (each its own checkbox, as on the paper form)
  const declarations = [
    'I am properly trained and updated on all diving techniques, safety, and emergency procedures required by this certification.',
    'I am aware of and understand the depth limits of my certification and all rules, procedures, standards of conduct and safety applicable before, during, and after the dive.',
    'I have sufficient training, competence, and confidence to perform the diving activities I intend to participate in at the Dive Centre.',
    'I can use and am comfortable with all equipment, essentials, and accessories owned by me or provided by the Dive Centre or third parties.',
    'I am in good physical, medical, and mental shape for scuba diving and have a recent Fit to Dive examination and certificate.',
    'I am aware that certain physical/pathological conditions, diseases, or substances are contraindications to scuba diving, and I do not suffer from such, nor am I under the influence of such substances.',
    'I am aware of and unconditionally accept the inherent risks associated with scuba diving, knowing they may cause severe injury or even death.'
  ];

  // "I declare and agree to the following" statements
  const agreements = [
    'Execute correctly, during every dive at/with the Dive Centre, the diving techniques for which I have been trained, complying with the rules of conduct, safety, and emergency procedures (buddy system, buoyancy, gas consumption, ascent speed, decompression, and emergency ascents).',
    'Respect the rules and recommendations of the Dive Centre and its staff about the use of equipment and services provided.',
    'Observe and follow the instructions, provisions, and directives provided by the Dive Centre’s staff members.',
    'Never exceed the training limits of my certification during dives conducted by the Dive Centre, even in the presence of more experienced or higher-certified fellow divers.'
  ];

  let declChecked = declarations.map(() => false);
  let agreeChecked = agreements.map(() => false);

  let isMinor = false;
  let guardian = { name: '', place: '', date: '' };

  let error = '';
  let done = false;
  let saving = false;

  // ── Signature pads ──────────────────────────────────────────
  let sigCanvas, guardianCanvas;
  let sigHasInk = false, guardianHasInk = false;

  function makePad(canvas, onInk) {
    const ctx = canvas.getContext('2d');
    const dpr = window.devicePixelRatio || 1;
    function resize() {
      const w = canvas.clientWidth, h = canvas.clientHeight;
      canvas.width = w * dpr; canvas.height = h * dpr;
      ctx.scale(dpr, dpr);
      ctx.strokeStyle = '#111'; ctx.lineWidth = 1.8; ctx.lineCap = 'round'; ctx.lineJoin = 'round';
    }
    resize();
    let drawing = false, lx = 0, ly = 0;
    const pos = (e) => {
      const r = canvas.getBoundingClientRect();
      const sx = canvas.clientWidth / r.width, sy = canvas.clientHeight / r.height;
      const p = e.touches ? e.touches[0] : e;
      return { x: (p.clientX - r.left) * sx, y: (p.clientY - r.top) * sy };
    };
    const start = (e) => { e.preventDefault(); drawing = true; const p = pos(e); lx = p.x; ly = p.y; onInk(); };
    const move = (e) => { if (!drawing) return; e.preventDefault(); const p = pos(e); ctx.beginPath(); ctx.moveTo(lx, ly); ctx.lineTo(p.x, p.y); ctx.stroke(); lx = p.x; ly = p.y; };
    const stop = () => drawing = false;
    canvas.addEventListener('mousedown', start); canvas.addEventListener('mousemove', move);
    canvas.addEventListener('mouseup', stop); canvas.addEventListener('mouseleave', stop);
    canvas.addEventListener('touchstart', start, { passive: false });
    canvas.addEventListener('touchmove', move, { passive: false });
    canvas.addEventListener('touchend', stop);
    return { ctx, resize, clear: () => ctx.clearRect(0, 0, canvas.width, canvas.height) };
  }

  let sigPad, guardianPad;

  onMount(() => {
    // default place/date to today (reassign so bound inputs update)
    const today = new Date().toISOString().split('T')[0];
    f = { ...f, date: today };
    guardian = { ...guardian, date: today };
    sigPad = makePad(sigCanvas, () => sigHasInk = true);
  });

  // init guardian pad lazily when the section appears
  $: if (isMinor && guardianCanvas && !guardianPad) {
    requestAnimationFrame(() => { guardianPad = makePad(guardianCanvas, () => guardianHasInk = true); });
  }

  function clearSig() { sigPad?.clear(); sigHasInk = false; }
  function clearGuardian() { guardianPad?.clear(); guardianHasInk = false; }

  function captureCanvas(canvas) {
    const tmp = document.createElement('canvas');
    tmp.width = canvas.width; tmp.height = canvas.height;
    const c = tmp.getContext('2d');
    c.fillStyle = '#fff'; c.fillRect(0, 0, tmp.width, tmp.height);
    c.drawImage(canvas, 0, 0);
    return tmp.toDataURL('image/jpeg', 0.92);
  }

  // ── Submit / generate PDF ───────────────────────────────────
  async function submit(e) {
    e.preventDefault();
    error = '';
    const miss = [];
    if (!f.name) miss.push('Full name');
    if (!f.email) miss.push('Email');
    if (!f.country) miss.push('Country');
    if (!declChecked.every(Boolean)) miss.push('all declarations');
    if (!agreeChecked.every(Boolean)) miss.push('all agreements');
    if (!sigHasInk) miss.push('your signature');
    if (isMinor && (!guardian.name || !guardianHasInk)) miss.push('guardian name & signature');
    if (miss.length) { error = `Please complete: ${miss.join(', ')}.`; return; }

    saving = true;
    try {
      const sigImg = captureCanvas(sigCanvas);
      const guardianImg = isMinor ? captureCanvas(guardianCanvas) : null;
      await buildPDF(sigImg, guardianImg);
      done = true;
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } catch (err) {
      console.error(err);
      error = 'Could not generate the PDF. Please try again.';
    } finally {
      saving = false;
    }
  }

  async function buildPDF(sigImg, guardianImg) {
    const { jsPDF } = await import('jspdf');
    const doc = new jsPDF({ orientation: 'p', unit: 'mm', format: 'a4' });
    const M = 18, PW = 210, PH = 297, CW = PW - 2 * M;
    let y = M;
    const newPage = () => { doc.addPage(); y = M; };
    const checkY = (n) => { if (y + n > PH - M) newPage(); };
    const txt = (t, x, w, lh, bold, size, r, g, b) => {
      doc.setFont('helvetica', bold ? 'bold' : 'normal'); doc.setFontSize(size); doc.setTextColor(r, g, b);
      const lines = doc.splitTextToSize(t, w); checkY(lines.length * lh + 2); doc.text(lines, x, y); y += lines.length * lh;
    };
    const gap = (n) => y += n || 5;
    const sectionHead = (label) => {
      checkY(14); doc.setFillColor(240, 240, 240); doc.roundedRect(M, y - 4, CW, 9, 1.5, 1.5, 'F');
      doc.setFont('helvetica', 'bold'); doc.setFontSize(8); doc.setTextColor(60, 60, 60); doc.text(label, M + 4, y + 1); y += 10;
    };
    const field = (label, value) => {
      checkY(8); doc.setFont('helvetica', 'bold'); doc.setFontSize(8); doc.setTextColor(100, 100, 100); doc.text(label + ':', M, y);
      doc.setFont('helvetica', 'normal'); doc.setTextColor(30, 30, 30);
      const lines = doc.splitTextToSize(value || '—', CW - 52); doc.text(lines, M + 52, y); y += Math.max(lines.length * 4.5, 6);
    };
    const checkedItem = (t) => {
      checkY(9); doc.setFillColor(26, 140, 142); doc.rect(M, y - 2.6, 3, 3, 'F');
      doc.setFont('helvetica', 'normal'); doc.setFontSize(8.5); doc.setTextColor(50, 50, 50);
      const lines = doc.splitTextToSize(t, CW - 6); checkY(lines.length * 4.5 + 2); doc.text(lines, M + 5, y); y += lines.length * 4.5 + 1.5;
    };

    // Header
    doc.setFillColor(17, 17, 17); doc.rect(0, 0, PW, 26, 'F');
    doc.setFont('helvetica', 'bold'); doc.setFontSize(15); doc.setTextColor(255, 255, 255); doc.text('BASE1 SARDINIA', M, 13);
    doc.setFont('helvetica', 'normal'); doc.setFontSize(7); doc.setTextColor(150, 150, 150);
    doc.text('Via C. Colombo 15, Cala Gonone, Dorgali 08022 (NU)  ·  www.baseone.it', M, 19);
    y = 34;

    doc.setFont('helvetica', 'bold'); doc.setFontSize(11); doc.setTextColor(17, 17, 17);
    const titleLines = doc.splitTextToSize('ACKNOWLEDGEMENT OF TRAINING, EXPERIENCE AND FITNESS FOR SCUBA DIVING ACTIVITIES — DECLARATION OF RISK AWARENESS AND ASSUMPTION OF OBLIGATIONS', CW);
    doc.text(titleLines, PW / 2, y, { align: 'center' }); y += titleLines.length * 6 + 4;

    txt('I, the undersigned, intend to use the facilities and services offered by Base1 Sardinia (the “Diving Centre”) to perform scuba diving activities. By signing this document I acknowledge and accept the importance and consequences of the statements made and the obligations assumed. In accordance with Articles 46 and 47, D.P.R. n. 445/2000, I assume all responsibility in case of false or inaccurate statements.', M, CW, 4.5, false, 8.5, 70, 70, 70);
    gap(6);

    sectionHead('SECTION A — PERSONAL INFORMATION');
    field('Full Name', f.name);
    field('Resident of', f.residentOf);
    field('Country', f.country);
    field('Town', f.town);
    field('Zip / Postal Code', f.zip);
    field('Street Address', f.street);
    field('Phone', f.phone);
    field('Email', f.email);
    field('Fiscal Code', f.fiscalCode);
    gap(4);

    sectionHead('SECTION B — CERTIFICATION & EXPERIENCE');
    field('Issued by', f.issuedBy);
    field('Certification Level', f.level);
    field('Certification Number', f.certNumber);
    field('Issued on', f.issuedOn);
    field('Number of dives', f.numDives ? `Not less than ${f.numDives}` : '');
    field('Specialties / environments', f.specialties);
    gap(4);

    sectionHead('SECTION C — I DECLARE THAT');
    declarations.forEach(checkedItem);
    gap(4);

    sectionHead('SECTION D — I DECLARE AND AGREE TO THE FOLLOWING');
    agreements.forEach(checkedItem);
    gap(4);

    sectionHead('CANCELLATION POLICY & CODE OF CONDUCT');
    txt('Cancellation Policy: Cancellations made less than 12 hours prior to the scheduled dive will be charged at 100% of the agreed price. No-shows will be charged in full.', M, CW, 4.3, false, 8, 90, 90, 90);
    gap(2);
    txt('Code of Conduct & Environmental Protection: All divers must respect the marine environment and the fragile cave systems. Any diver found deliberately damaging the environment, disturbing formations, or violating conservation rules will be immediately excluded from further diving activities, without refund.', M, CW, 4.3, false, 8, 90, 90, 90);
    gap(6);

    sectionHead('SECTION E — SIGNATURE');
    checkY(42); doc.addImage(sigImg, 'JPEG', M, y, 80, 30);
    doc.setDrawColor(200, 200, 200); doc.setLineWidth(0.25); doc.line(M, y + 30, M + 80, y + 30); y += 35;
    field('Print Name', f.name);
    field('Place and Date', `${f.place || '—'}  ·  ${f.date}`);
    gap(4);

    if (isMinor) {
      sectionHead('SECTION F — PARENT / LEGAL GUARDIAN CONSENT');
      txt('I sign as the parent or legal guardian of the minor participant named above, confirm all information is accurate, and accept responsibility for their participation.', M, CW, 4.5, false, 8.5, 80, 80, 80);
      gap(3);
      if (guardianImg) {
        checkY(42); doc.addImage(guardianImg, 'JPEG', M, y, 80, 30);
        doc.setDrawColor(200, 200, 200); doc.setLineWidth(0.25); doc.line(M, y + 30, M + 80, y + 30); y += 35;
      }
      field('Guardian Print Name', guardian.name);
      field('Place and Date', `${guardian.place || '—'}  ·  ${guardian.date}`);
    }

    checkY(12); doc.setDrawColor(210, 210, 210); doc.line(M, y, PW - M, y); y += 5;
    doc.setFont('helvetica', 'normal'); doc.setFontSize(7); doc.setTextColor(170, 170, 170);
    doc.text(`Base1 Sardinia  ·  Completed electronically: ${new Date().toLocaleString('en-GB')}`, PW / 2, y, { align: 'center' });

    const safe = (f.name || 'diver').replace(/[^a-z0-9]/gi, '_').toLowerCase();
    doc.save(`base1_liability_${safe}_${f.date}.pdf`);
  }
</script>

<svelte:head><title>Liability Release — Base One</title>
  <meta name="description" content="Complete and sign the Base One Sardinia scuba diving liability release online, then save it as a PDF.">
  <meta name="robots" content="noindex">
</svelte:head>

<PageHero
  image="/images/hero-about.jpg"
  eyebrow="Base One Sardinia"
  heading="Liability Release"
  sub="Acknowledgement of training, experience and fitness for scuba diving. Fill in, sign, and save a PDF copy."
/>

<section class="section">
  <div class="container-narrow">
    {#if done}
      <div class="lr-success">
        <div class="lr-check">
          <svg width="42" height="42" viewBox="0 0 24 24" fill="none" stroke="#30d158" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
        </div>
        <h2>Release Completed</h2>
        <p>Your signed PDF has been downloaded. Please bring a copy on your dive day, or email it to <a href="mailto:info@baseone.it">info@baseone.it</a>.</p>
        <a href="/" class="btn btn-teal btn-large">Back to Site</a>
      </div>
    {:else}
      <form class="lr-form" on:submit={submit} novalidate>

        <!-- A — Personal -->
        <div class="lr-section">
          <h2><span class="lr-num">A</span> Personal Information</h2>
          <div class="lr-grid">
            <div class="lr-group lr-col-2"><label for="name">Full Name *</label><input id="name" type="text" bind:value={f.name} /></div>
            <div class="lr-group"><label for="residentOf">Resident of</label><input id="residentOf" type="text" bind:value={f.residentOf} /></div>
            <div class="lr-group"><label for="fiscalCode">Fiscal Code</label><input id="fiscalCode" type="text" bind:value={f.fiscalCode} /></div>
            <div class="lr-group"><label for="country">Country *</label><input id="country" type="text" bind:value={f.country} /></div>
            <div class="lr-group"><label for="town">Town</label><input id="town" type="text" bind:value={f.town} /></div>
            <div class="lr-group"><label for="zip">Zip / Postal Code</label><input id="zip" type="text" bind:value={f.zip} /></div>
            <div class="lr-group"><label for="street">Street Address &amp; Number</label><input id="street" type="text" bind:value={f.street} /></div>
            <div class="lr-group"><label for="phone">Phone</label><input id="phone" type="tel" bind:value={f.phone} /></div>
            <div class="lr-group"><label for="email">Email *</label><input id="email" type="email" bind:value={f.email} /></div>
          </div>
        </div>

        <!-- B — Certification -->
        <div class="lr-section">
          <h2><span class="lr-num">B</span> Certification &amp; Experience</h2>
          <div class="lr-grid">
            <div class="lr-group"><label for="issuedBy">Issued by</label><input id="issuedBy" type="text" placeholder="e.g. GUE, TDI, PADI" bind:value={f.issuedBy} /></div>
            <div class="lr-group"><label for="level">Certification Level / Degree</label><input id="level" type="text" bind:value={f.level} /></div>
            <div class="lr-group"><label for="certNumber">Certification Number</label><input id="certNumber" type="text" bind:value={f.certNumber} /></div>
            <div class="lr-group"><label for="issuedOn">Issued on</label><input id="issuedOn" type="date" bind:value={f.issuedOn} /></div>
            <div class="lr-group"><label for="numDives">Number of dives (not less than)</label><input id="numDives" type="number" min="0" bind:value={f.numDives} /></div>
            <div class="lr-group lr-col-2"><label for="specialties">Specialties / diving environments</label><input id="specialties" type="text" placeholder="e.g. Cave, CCR, DPV, Sidemount" bind:value={f.specialties} /></div>
          </div>
        </div>

        <!-- C — Declarations -->
        <div class="lr-section">
          <h2><span class="lr-num">C</span> I Declare That</h2>
          <ul class="lr-checklist">
            {#each declarations as d, i}
              <li><label><input type="checkbox" bind:checked={declChecked[i]} /><span>{d}</span></label></li>
            {/each}
          </ul>
        </div>

        <!-- D — Agreements -->
        <div class="lr-section">
          <h2><span class="lr-num">D</span> I Declare and Agree to the Following</h2>
          <ul class="lr-checklist">
            {#each agreements as a, i}
              <li><label><input type="checkbox" bind:checked={agreeChecked[i]} /><span>{a}</span></label></li>
            {/each}
          </ul>
        </div>

        <!-- Policies -->
        <div class="lr-policy">
          <h3>Cancellation Policy</h3>
          <p>Cancellations made less than 12 hours prior to the scheduled dive will be charged at 100% of the agreed price. No-shows will be charged in full.</p>
          <h3>Code of Conduct &amp; Environmental Protection</h3>
          <p>All divers are required to respect the marine environment and the fragile cave systems. Any diver found deliberately damaging the environment, disturbing formations, or violating conservation rules will be immediately excluded from further diving activities, without refund.</p>
        </div>

        <!-- Minor toggle -->
        <div class="lr-section">
          <label class="lr-minor-toggle"><input type="checkbox" bind:checked={isMinor} /><span>I am signing on behalf of a minor (parental or legal guardian consent required)</span></label>
        </div>

        <!-- E — Signature -->
        <div class="lr-section">
          <h2><span class="lr-num">E</span> Signature</h2>
          <div class="lr-grid">
            <div class="lr-group"><label for="place">Place</label><input id="place" type="text" bind:value={f.place} /></div>
            <div class="lr-group"><label for="date">Date</label><input id="date" type="date" bind:value={f.date} /></div>
          </div>
          <p class="lr-hint">Draw your signature below using your mouse or finger.</p>
          <div class="lr-sig"><canvas bind:this={sigCanvas}></canvas></div>
          <button type="button" class="lr-clear" on:click={clearSig}>Clear signature</button>
        </div>

        <!-- F — Guardian -->
        {#if isMinor}
          <div class="lr-section">
            <h2><span class="lr-num">F</span> Parent / Legal Guardian</h2>
            <div class="lr-grid">
              <div class="lr-group lr-col-2"><label for="gname">Guardian Full Name *</label><input id="gname" type="text" bind:value={guardian.name} /></div>
              <div class="lr-group"><label for="gplace">Place</label><input id="gplace" type="text" bind:value={guardian.place} /></div>
              <div class="lr-group"><label for="gdate">Date</label><input id="gdate" type="date" bind:value={guardian.date} /></div>
            </div>
            <p class="lr-hint">Guardian signature:</p>
            <div class="lr-sig"><canvas bind:this={guardianCanvas}></canvas></div>
            <button type="button" class="lr-clear" on:click={clearGuardian}>Clear signature</button>
          </div>
        {/if}

        {#if error}<p class="lr-error">{error}</p>{/if}

        <div class="lr-submit">
          <button type="submit" class="btn btn-teal btn-large" disabled={saving}>{saving ? 'Generating…' : 'Sign & Save as PDF'}</button>
          <p class="lr-note">A signed PDF will be generated and downloaded to your device.</p>
        </div>
      </form>
    {/if}
  </div>
</section>

<style>
  .lr-form { display: flex; flex-direction: column; gap: 1.75rem; }
  .lr-section { background: #fff; border: 1px solid var(--border); border-radius: var(--radius-lg); padding: 1.75rem; }
  .lr-section h2 { display: flex; align-items: center; gap: .75rem; font-size: 1.2rem; margin: 0 0 1.25rem; }
  .lr-num { width: 30px; height: 30px; flex-shrink: 0; border-radius: 50%; background: var(--teal); color: #fff; font-size: .9rem; font-weight: 800; display: inline-flex; align-items: center; justify-content: center; }
  .lr-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; }
  .lr-col-2 { grid-column: 1 / -1; }
  .lr-group { display: flex; flex-direction: column; gap: .4rem; }
  .lr-group label { font-size: .82rem; font-weight: 600; color: var(--charcoal); }
  .lr-group input { padding: .75rem .9rem; border: 1px solid var(--border); border-radius: 10px; font-size: .95rem; font-family: inherit; }
  .lr-group input:focus { outline: none; border-color: var(--teal); }

  .lr-checklist { list-style: none; margin: 0; padding: 0; display: flex; flex-direction: column; gap: .85rem; }
  .lr-checklist label { display: flex; gap: .75rem; align-items: flex-start; cursor: pointer; font-size: .9rem; line-height: 1.55; color: var(--text-muted); }
  .lr-checklist input { margin-top: .2rem; width: 18px; height: 18px; flex-shrink: 0; accent-color: var(--teal); cursor: pointer; }

  .lr-policy { background: rgba(26,140,142,.05); border: 1px solid rgba(26,140,142,.2); border-radius: var(--radius-lg); padding: 1.5rem 1.75rem; }
  .lr-policy h3 { font-size: .95rem; margin: 0 0 .35rem; color: var(--charcoal); }
  .lr-policy h3:not(:first-child) { margin-top: 1.1rem; }
  .lr-policy p { font-size: .85rem; color: var(--text-muted); line-height: 1.6; margin: 0; }

  .lr-minor-toggle { display: flex; gap: .75rem; align-items: center; cursor: pointer; font-weight: 600; font-size: .92rem; }
  .lr-minor-toggle input { width: 18px; height: 18px; accent-color: var(--teal); }

  .lr-hint { font-size: .82rem; color: var(--text-muted); margin: 1rem 0 .6rem; }
  .lr-sig { border: 2px dashed var(--border); border-radius: 12px; background: #fafafa; }
  .lr-sig canvas { width: 100%; height: 160px; display: block; touch-action: none; cursor: crosshair; }
  .lr-clear { margin-top: .6rem; background: none; border: none; color: var(--teal); font-weight: 600; font-size: .85rem; cursor: pointer; padding: 0; }

  .lr-error { color: var(--red, #ff453a); background: rgba(255,69,58,.08); border: 1px solid rgba(255,69,58,.25); border-radius: 10px; padding: .9rem 1.1rem; font-size: .9rem; font-weight: 600; margin: 0; }
  .lr-submit { text-align: center; }
  .lr-note { font-size: .8rem; color: var(--text-muted); margin: .9rem 0 0; }

  .lr-success { text-align: center; max-width: 520px; margin: 0 auto; padding: 2rem 0; }
  .lr-check { width: 80px; height: 80px; border-radius: 50%; background: rgba(48,209,88,.12); display: flex; align-items: center; justify-content: center; margin: 0 auto 1.5rem; }
  .lr-success h2 { margin: 0 0 .75rem; }
  .lr-success p { color: var(--text-muted); line-height: 1.6; margin: 0 0 1.75rem; }

  @media (max-width: 600px) {
    .lr-grid { grid-template-columns: 1fr; }
    .lr-section { padding: 1.25rem; }
  }
</style>
