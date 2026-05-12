<script>
  import { onMount } from 'svelte';

  export let images = [];
  export let alt = '';
  export let theme = 'light'; // 'light' or 'dark'

  let slider;
  let atStart = true;
  let atEnd = false;

  onMount(() => { updateBounds(); });

  $: showArrows = images.length > 3;

  function updateBounds() {
    if (!slider) return;
    atStart = slider.scrollLeft <= 1;
    atEnd = slider.scrollLeft >= slider.scrollWidth - slider.clientWidth - 1;
  }

  function onScroll() { updateBounds(); }

  function scroll(dir) {
    if (!slider) return;
    slider.scrollBy({ left: dir * slider.clientWidth, behavior: 'smooth' });
  }
</script>

<div class="image-carousel" class:dark={theme === 'dark'}>
  {#if showArrows}
    <div class="image-carousel-nav">
      <button class="gallery-arrow" type="button" on:click={() => scroll(-1)} aria-label="Previous" disabled={atStart}>←</button>
      <button class="gallery-arrow" type="button" on:click={() => scroll(1)} aria-label="Next" disabled={atEnd}>→</button>
    </div>
  {/if}
  <div class="gallery-slider-wrap">
    <div class="gallery-slider" bind:this={slider} on:scroll={onScroll}>
      {#each images as img, i}
        <div class="gallery-card">
          <img src={typeof img === 'string' ? img : img.src} alt={typeof img === 'string' ? `${alt} — photo ${i + 1}` : img.alt} loading="lazy" />
        </div>
      {/each}
    </div>
  </div>
</div>

<style>
  .image-carousel { position: relative; }
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
