<script>
  export let image;
  export let eyebrow;
  export let heading;
  export let sub = '';
</script>

<section class="hero hero-page">
  <div class="hero-bg" style="background-image:url('{image}')"></div>
  <div class="hero-content">
    <div class="eyebrow stone">{eyebrow}</div>
    <h1>{@html heading}</h1>
    {#if sub}<p class="hero-sub">{sub}</p>{/if}
  </div>
</section>
