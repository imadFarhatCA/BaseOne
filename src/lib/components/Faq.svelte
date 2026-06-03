<script>
  // items: [{ q, a }]
  export let items = [];
  let openIdx = 0;
  const toggle = (i) => openIdx = openIdx === i ? -1 : i;
</script>

<div class="faq">
  {#each items as item, i}
    <div class="faq-item" class:open={openIdx === i}>
      <button class="faq-q" type="button" on:click={() => toggle(i)} aria-expanded={openIdx === i}>
        <span>{item.q}</span>
        <span class="faq-icon" aria-hidden="true">{openIdx === i ? '–' : '+'}</span>
      </button>
      {#if openIdx === i}
        <div class="faq-a"><p>{item.a}</p></div>
      {/if}
    </div>
  {/each}
</div>

<style>
  .faq { max-width: 760px; margin: 0 auto; }
  .faq-item { border-bottom: 1px solid var(--border); }
  .faq-q {
    width: 100%; background: none; border: none; cursor: pointer;
    display: flex; align-items: center; justify-content: space-between; gap: 1rem;
    padding: 1.3rem .25rem; text-align: left;
    font-size: 1.05rem; font-weight: 700; color: var(--charcoal);
  }
  .faq-icon { color: var(--teal); font-size: 1.5rem; flex-shrink: 0; line-height: 1; }
  .faq-a { padding: 0 .25rem 1.3rem; }
  .faq-a p { margin: 0; color: var(--text-muted); line-height: 1.7; }
</style>
