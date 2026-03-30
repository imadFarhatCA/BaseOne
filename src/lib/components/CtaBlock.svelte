<script>
  export let heading;
  export let text = '';
  export let primaryLabel = 'Plan Your Trip';
  export let primaryHref  = '/plan/';
  export let secondaryLabel = 'Get in Touch';
  export let secondaryHref  = '/plan/#contact';
</script>

<section class="section section-dark cta-block">
  <div class="container scale-reveal">
    <h2>{heading}</h2>
    {#if text}
      <p class="lead">{text}</p>
    {/if}
    <div class="cta-buttons">
      <a href={primaryHref}   class="btn btn-teal btn-large">{primaryLabel}</a>
      <a href={secondaryHref} class="btn btn-ghost btn-large">{secondaryLabel}</a>
    </div>
  </div>
</section>
