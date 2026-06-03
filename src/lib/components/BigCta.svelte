<script>
  // Prominent full-width call-to-action band (e.g. "Book Now").
  export let heading = 'Ready to Dive?';
  export let text = '';
  export let label = 'Book Now';
  export let href = '/plan';          // destination TBD — change later
  export let target = '_self';
</script>

<section class="bigcta scale-reveal">
  <div class="bigcta-inner">
    <div class="bigcta-text">
      <h2>{heading}</h2>
      {#if text}<p>{text}</p>{/if}
    </div>
    <a class="bigcta-btn" {href} {target} rel={target === '_blank' ? 'noopener' : undefined}>{label}</a>
  </div>
</section>

<style>
  .bigcta {
    background: linear-gradient(135deg, var(--teal) 0%, var(--dark, #06212b) 100%);
    padding: clamp(2.5rem, 6vw, 4.5rem) var(--gutter);
  }
  .bigcta-inner {
    max-width: var(--container);
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 2rem;
    flex-wrap: wrap;
  }
  .bigcta-text h2 { color: #fff; margin: 0; font-size: clamp(1.6rem, 3.5vw, 2.6rem); }
  .bigcta-text p { color: rgba(255,255,255,.82); margin: .5rem 0 0; max-width: 46ch; }
  .bigcta-btn {
    flex-shrink: 0;
    background: #fff;
    color: var(--teal);
    font-weight: 800;
    font-size: 1.05rem;
    padding: 1.1rem 2.6rem;
    border-radius: 999px;
    text-decoration: none;
    box-shadow: 0 10px 30px rgba(0,0,0,.25);
    transition: transform .2s, box-shadow .2s;
  }
  .bigcta-btn:hover { transform: translateY(-2px); box-shadow: 0 14px 38px rgba(0,0,0,.32); }
  @media (max-width: 640px) {
    .bigcta-inner { flex-direction: column; align-items: flex-start; }
    .bigcta-btn { width: 100%; text-align: center; }
  }
</style>
