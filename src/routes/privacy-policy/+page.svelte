<script>
  import PageHero from '$lib/components/PageHero.svelte';
  import { privacyPolicy } from '$lib/data/privacyPolicy.js';

  // Group consecutive list items so they render as one <ul>
  const grouped = privacyPolicy.sections.map((s) => {
    const out = [];
    for (const b of s.blocks) {
      const last = out[out.length - 1];
      if (b.type === 'li' && last?.type === 'ul') last.items.push(b.html);
      else if (b.type === 'li') out.push({ type: 'ul', items: [b.html] });
      else out.push(b);
    }
    return { ...s, blocks: out };
  });
</script>

<svelte:head>
  <title>Privacy Policy - Base One</title>
  <meta name="description" content="How Base One processes personal data and uses cookies on this website.">
  <meta name="robots" content="noindex">
</svelte:head>

<PageHero
  image="/images/hero-about.jpg"
  eyebrow="Base One Sardinia"
  heading="Privacy Policy"
  sub="Informativa sul trattamento dei dati personali e Cookie Policy."
/>

<section class="section">
  <div class="container-narrow policy">
    {#each grouped as section}
      <h2 class:policy-title={section.level === 2}>{section.heading}</h2>
      {#each section.blocks as block}
        {#if block.type === 'ul'}
          <ul class="check-list policy-list">
            {#each block.items as item}<li>{@html item}</li>{/each}
          </ul>
        {:else}
          <p class="lead">{@html block.html}</p>
        {/if}
      {/each}
    {/each}
  </div>
</section>

<style>
  .policy h2 { font-size: clamp(1.25rem, 2.4vw, 1.6rem); margin: 2.5rem 0 0.75rem; }
  .policy h2.policy-title { font-size: clamp(1.8rem, 3.5vw, 2.4rem); margin-top: 0; }
  .policy .lead { margin-bottom: 0.9rem; }
  .policy .lead :global(a) { color: var(--teal); text-decoration: underline; }
  .policy-list li { font-size: clamp(1.05rem, 2vw, 1.2rem); line-height: 1.7; color: var(--text-muted); }
  .policy-list li :global(a) { color: var(--teal); text-decoration: underline; }
</style>
