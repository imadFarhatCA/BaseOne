<script>
  // Color-coded course calendar. GUE rows go to GUE.com; others open an enquiry popup
  // with course name, details, and an email-capture field (delivery wired later).
  export let courses = [];

  let selected = null;            // course shown in the popup
  let email = '';
  let sent = false;

  function openCourse(c) { selected = c; email = ''; sent = false; }
  function close() { selected = null; }
  function submit(e) {
    e.preventDefault();
    // TODO: wire to backend / email. For now just acknowledge.
    sent = true;
  }
</script>

<div class="cal-legend">
  <span class="cal-key"><i class="dot dot-gue"></i> GUE — book on GUE.com</span>
  <span class="cal-key"><i class="dot dot-tdi"></i> Non-GUE — enquire with us</span>
</div>

<div class="cal-list">
  {#each courses as c}
    <button class="cal-row org-{c.org.toLowerCase()}" type="button" on:click={() => openCourse(c)}>
      <span class="cal-date">{c.date}</span>
      <span class="cal-main">
        <span class="cal-course">{c.course}</span>
        <span class="cal-instructor">{c.instructor}</span>
      </span>
      <span class="cal-tags">
        <span class="cal-org">{c.org}</span>
        <span class="cal-level">{c.level}</span>
      </span>
    </button>
  {/each}
</div>

{#if selected}
  <div class="course-modal" on:click={close} role="dialog" aria-modal="true">
    <div class="course-card org-{selected.org.toLowerCase()}" on:click|stopPropagation>
      <button class="course-x" on:click={close} aria-label="Close">×</button>
      <span class="course-badge">{selected.org} · {selected.level}</span>
      <h3>{selected.course}</h3>
      <p class="course-meta">{selected.date} · {selected.instructor}</p>
      <p class="course-details">{selected.details}</p>

      {#if selected.org === 'GUE'}
        <a href={selected.gueUrl} target="_blank" rel="noopener" class="btn btn-teal btn-large course-go">Book on GUE.com →</a>
        <p class="course-note">GUE courses are booked directly through the GUE class schedule.</p>
      {:else if sent}
        <p class="course-sent">Thanks — we'll be in touch about <strong>{selected.course}</strong> shortly.</p>
      {:else}
        <form class="course-form" on:submit={submit}>
          <label for="course-email">Leave your email and we'll contact you about this course:</label>
          <div class="course-form-row">
            <input id="course-email" type="email" required placeholder="you@email.com" bind:value={email} />
            <button type="submit" class="btn btn-teal">Contact Me</button>
          </div>
        </form>
      {/if}
    </div>
  </div>
{/if}

<style>
  .cal-legend { display: flex; flex-wrap: wrap; gap: 1.5rem; justify-content: center; margin-bottom: 1.75rem; }
  .cal-key { display: inline-flex; align-items: center; gap: .5rem; font-size: .85rem; color: var(--text-muted); font-weight: 600; }
  .dot { width: 12px; height: 12px; border-radius: 50%; display: inline-block; }
  .dot-gue { background: var(--teal); }
  .dot-tdi { background: #e0982a; }

  .cal-list { display: flex; flex-direction: column; gap: .6rem; max-width: 860px; margin: 0 auto; }
  .cal-row {
    display: grid; grid-template-columns: 120px 1fr auto; align-items: center; gap: 1rem;
    width: 100%; text-align: left; cursor: pointer;
    background: #fff; border: 1px solid var(--border);
    border-left: 4px solid var(--teal);
    border-radius: var(--radius-lg); padding: 1rem 1.25rem;
    transition: border-color .2s, box-shadow .2s, transform .2s;
  }
  .cal-row:hover { box-shadow: 0 8px 28px rgba(0,0,0,.1); transform: translateY(-2px); }
  .cal-row.org-tdi { border-left-color: #e0982a; }
  .cal-date { font-weight: 700; color: var(--charcoal); font-size: .9rem; }
  .cal-main { display: flex; flex-direction: column; }
  .cal-course { font-weight: 700; color: var(--charcoal); }
  .cal-instructor { font-size: .82rem; color: var(--text-muted); }
  .cal-tags { display: flex; gap: .4rem; }
  .cal-org, .cal-level {
    font-size: .66rem; font-weight: 700; letter-spacing: .04em; text-transform: uppercase;
    padding: .25rem .6rem; border-radius: 999px;
  }
  .cal-org { background: rgba(26,140,142,.1); color: var(--teal); }
  .org-tdi .cal-org { background: rgba(224,152,42,.12); color: #c47f17; }
  .cal-level { background: rgba(0,0,0,.05); color: var(--text-muted); }

  /* Modal */
  .course-modal {
    position: fixed; inset: 0; z-index: 200; background: rgba(4,8,14,.85);
    display: flex; align-items: center; justify-content: center; padding: 1.5rem;
  }
  .course-card {
    position: relative; background: #fff; border-radius: var(--radius-lg);
    max-width: 480px; width: 100%; padding: 2.25rem; border-top: 5px solid var(--teal);
  }
  .course-card.org-tdi { border-top-color: #e0982a; }
  .course-x { position: absolute; top: 1rem; right: 1.1rem; background: none; border: none; font-size: 1.8rem; cursor: pointer; color: var(--text-muted); line-height: 1; }
  .course-badge { font-size: .7rem; font-weight: 700; letter-spacing: .08em; text-transform: uppercase; color: var(--teal); }
  .org-tdi .course-badge { color: #c47f17; }
  .course-card h3 { margin: .5rem 0 .25rem; }
  .course-meta { font-size: .85rem; color: var(--text-muted); margin: 0 0 1rem; }
  .course-details { color: var(--charcoal); line-height: 1.65; margin: 0 0 1.5rem; }
  .course-go { width: 100%; text-align: center; }
  .course-note, .course-sent { font-size: .82rem; color: var(--text-muted); margin: .9rem 0 0; }
  .course-form label { display: block; font-size: .88rem; font-weight: 600; margin-bottom: .6rem; }
  .course-form-row { display: flex; gap: .6rem; }
  .course-form-row input {
    flex: 1; padding: .8rem 1rem; border: 1px solid var(--border); border-radius: 10px; font-size: .95rem;
  }
  .course-form-row input:focus { outline: none; border-color: var(--teal); }
  @media (max-width: 560px) {
    .cal-row { grid-template-columns: 1fr; gap: .4rem; }
    .cal-tags { margin-top: .3rem; }
    .course-form-row { flex-direction: column; }
  }
</style>
