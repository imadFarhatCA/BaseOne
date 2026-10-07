<script>
  export let image;
  export let eyebrow;
  export let heading;
  export let sub = '';
  export let credit = '';
</script>

<section class="hero hero-page">
  <div class="hero-bg" style="background-image:url('{image}')"></div>
  <div class="hero-content">
    <div class="eyebrow stone">{eyebrow}</div>
    <h1>{@html heading}</h1>
    {#if sub}<p class="hero-sub">{sub}</p>{/if}
  </div>
  {#if credit}<span class="hero-credit">© {credit}</span>{/if}
</section>

<style>
  .hero-credit {
    position: absolute; right: var(--gutter, 1.5rem); bottom: 1rem; z-index: 2;
    font-size: .72rem; letter-spacing: .03em;
    color: rgba(255,255,255,.8); text-shadow: 0 1px 6px rgba(0,0,0,.6);
    pointer-events: none;
  }
</style>
