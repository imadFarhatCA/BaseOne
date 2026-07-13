<script>
  // Four muted portrait clips playing side by side.
  export let heading = '';
  export let eyebrow = '';
  const reels = [
    { src: '/videos/reel-1.mp4', poster: '/videos/reel-1.jpg' },
    { src: '/videos/reel-2.mp4', poster: '/videos/reel-2.jpg' },
    { src: '/videos/reel-3.mp4', poster: '/videos/reel-3.jpg' },
    { src: '/videos/reel-4.mp4', poster: '/videos/reel-4.jpg' },
  ];
</script>

<section class="section reelsec">
  {#if eyebrow || heading}
    <div class="container-narrow reelsec-head">
      {#if eyebrow}<p class="section-label reveal-up">{eyebrow}</p>{/if}
      {#if heading}<h2 class="reveal-up delay-1">{heading}</h2>{/if}
    </div>
  {/if}
  <div class="reel-grid">
    {#each reels as r}
      <div class="reel-item scale-reveal">
        <video src={r.src} poster={r.poster} muted loop autoplay playsinline preload="metadata"></video>
      </div>
    {/each}
  </div>
</section>

<style>
  .reelsec-head { text-align: center; margin-bottom: 2.5rem; }
  .reel-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 12px;
    max-width: 1400px;
    margin: 0 auto;
    padding: 0 1.5rem;
  }
  .reel-item {
    aspect-ratio: 9 / 16;
    overflow: hidden;
    border-radius: 10px;
    background: #000;
  }
  .reel-item video { width: 100%; height: 100%; object-fit: cover; display: block; }
  @media (max-width: 780px) {
    .reel-grid { grid-template-columns: repeat(2, 1fr); }
  }
</style>
