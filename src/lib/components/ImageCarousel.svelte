<script>
  import { onMount } from 'svelte';

  export let images = [];
  export let alt = '';
  export let theme = 'light'; // 'light' or 'dark'
  export let hideNav = false; // parent renders its own arrows
  export let atStart = true;
  export let atEnd = false;

  let slider;

  onMount(() => { updateBounds(); });

  $: showArrows = images.length > 3;

  function updateBounds() {
    if (!slider) return;
    atStart = slider.scrollLeft <= 1;
    atEnd = slider.scrollLeft >= slider.scrollWidth - slider.clientWidth - 1;
  }

  function onScroll() { updateBounds(); }

  export function scroll(dir) {
    if (!slider) return;
    slider.scrollBy({ left: dir * slider.clientWidth, behavior: 'smooth' });
  }
</script>

<div class="image-carousel" class:dark={theme === 'dark'}>
  {#if showArrows && !hideNav}
    <div class="image-carousel-nav">
      <button class="gallery-arrow" type="button" on:click={() => scroll(-1)} aria-label="Previous" disabled={atStart}>←</button>
      <button class="gallery-arrow" type="button" on:click={() => scroll(1)} aria-label="Next" disabled={atEnd}>→</button>
    </div>
  {/if}
  <div class="gallery-slider-wrap">
    <div class="gallery-slider" bind:this={slider} on:scroll={onScroll}>
      {#each images as img, i}
        <div class="gallery-card">
          <img src={typeof img === 'string' ? img : img.src} alt={typeof img === 'string' ? `${alt} - photo ${i + 1}` : img.alt} loading="lazy" />
          {#if img.credit}<span class="gallery-credit">© {img.credit}</span>{/if}
        </div>
      {/each}
    </div>
  </div>
</div>

<style>
  .image-carousel { position: relative; }
  :global(.gallery-card) { position: relative; }
  .gallery-credit {
    position: absolute; left: 0; right: 0; bottom: 0;
    padding: 1.4rem .9rem .6rem;
    font-size: .72rem; letter-spacing: .03em; color: rgba(255,255,255,.9);
    background: linear-gradient(to top, rgba(0,0,0,.6), transparent);
    pointer-events: none;
  }
  .image-carousel-nav {
    display: flex; justify-content: flex-end; gap: 0.5rem;
    max-width: var(--container);
    margin: 0 auto 1.5rem;
    padding: 0 var(--gutter);
  }

  /* Dark theme (cave section): contained, exactly 3 cards desktop / 1 mobile */
  .image-carousel.dark :global(.gallery-slider-wrap) {
    max-width: var(--container);
    margin-left: auto;
    margin-right: auto;
    padding: 0 var(--gutter);
  }
  .image-carousel.dark :global(.gallery-card) {
    flex: 0 0 calc((100% - 2rem) / 3);
    height: 280px;
    box-shadow: 0 4px 24px rgba(0,0,0,0.35);
  }
  .image-carousel.dark :global(.gallery-slider) {
    gap: 1rem;
  }
  @media (max-width: 768px) {
    .image-carousel.dark :global(.gallery-card) {
      flex: 0 0 100%;
      height: 240px;
    }
  }
  .image-carousel.dark :global(.gallery-arrow) {
    background: rgba(255,255,255,0.08);
    border-color: rgba(255,255,255,0.2);
    color: #fff;
  }
  .image-carousel.dark :global(.gallery-arrow:hover:not(:disabled)) {
    background: var(--teal);
    border-color: var(--teal-light);
    color: #fff;
  }
  :global(.gallery-arrow:disabled) {
    opacity: 0.3;
    cursor: default;
  }
</style>
