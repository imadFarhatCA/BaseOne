<script>
  // Reusable photo exhibition with click-to-enlarge lightbox.
  // images: [{ src, alt, caption? }]
  export let images = [];
  export let columns = 3;

  let active = -1;
  const open = (i) => active = i;
  const close = () => active = -1;
  const next = (e) => { e?.stopPropagation(); active = (active + 1) % images.length; };
  const prev = (e) => { e?.stopPropagation(); active = (active - 1 + images.length) % images.length; };

  function onKey(e) {
    if (active < 0) return;
    if (e.key === 'Escape') close();
    if (e.key === 'ArrowRight') next();
    if (e.key === 'ArrowLeft') prev();
  }
</script>

<svelte:window on:keydown={onKey} />

<div class="ggrid" style="--cols:{columns}">
  {#each images as img, i}
    <button class="ggrid-item reveal-up delay-{(i % 3) + 1}" type="button" on:click={() => open(i)}>
      <img src={img.src} alt={img.alt} loading="lazy" />
      {#if img.caption}<span class="ggrid-caption">{img.caption}</span>{/if}
    </button>
  {/each}
</div>

{#if active > -1}
  <div class="ggrid-lightbox" on:click={close} role="dialog" aria-modal="true">
    <button class="ggrid-x" on:click={close} aria-label="Close">×</button>
    <button class="ggrid-arrow ggrid-prev" on:click={prev} aria-label="Previous">‹</button>
    <figure class="ggrid-figure" on:click|stopPropagation>
      <img src={images[active].src} alt={images[active].alt} />
      {#if images[active].caption}<figcaption>{images[active].caption}</figcaption>{/if}
    </figure>
    <button class="ggrid-arrow ggrid-next" on:click={next} aria-label="Next">›</button>
  </div>
{/if}

<style>
  .ggrid {
    display: grid;
    grid-template-columns: repeat(var(--cols), 1fr);
    gap: 1rem;
  }
  .ggrid-item {
    position: relative; padding: 0; border: none; cursor: pointer;
    height: clamp(180px, 22vw, 280px);
    border-radius: var(--radius-lg); overflow: hidden;
    box-shadow: 0 4px 20px rgba(0,0,0,.1);
  }
  .ggrid-item img { width: 100%; height: 100%; object-fit: cover; display: block; transition: transform .5s ease; }
  .ggrid-item:hover img { transform: scale(1.06); }
  .ggrid-caption {
    position: absolute; left: 0; right: 0; bottom: 0;
    padding: 1.4rem .9rem .7rem; text-align: left;
    color: #fff; font-size: .82rem; font-weight: 600;
    background: linear-gradient(transparent, rgba(0,0,0,.7));
  }
  /* Lightbox */
  .ggrid-lightbox {
    position: fixed; inset: 0; z-index: 200;
    background: rgba(4,8,14,.92);
    display: flex; align-items: center; justify-content: center;
    padding: 2rem;
  }
  .ggrid-figure { margin: 0; max-width: 92vw; max-height: 88vh; }
  .ggrid-figure img { max-width: 92vw; max-height: 80vh; object-fit: contain; border-radius: 8px; display: block; }
  .ggrid-figure figcaption { color: #fff; text-align: center; margin-top: .8rem; font-size: .9rem; opacity: .85; }
  .ggrid-x { position: absolute; top: 1.2rem; right: 1.4rem; }
  .ggrid-x, .ggrid-arrow {
    background: rgba(255,255,255,.1); border: 1px solid rgba(255,255,255,.25);
    color: #fff; width: 48px; height: 48px; border-radius: 50%;
    font-size: 1.6rem; cursor: pointer; display: flex; align-items: center; justify-content: center;
    transition: background .2s;
  }
  .ggrid-x:hover, .ggrid-arrow:hover { background: var(--teal); }
  .ggrid-arrow { position: absolute; top: 50%; transform: translateY(-50%); }
  .ggrid-prev { left: 1.4rem; }
  .ggrid-next { right: 1.4rem; }
  @media (max-width: 900px) { .ggrid { grid-template-columns: repeat(2, 1fr); } }
  @media (max-width: 560px) {
    .ggrid { grid-template-columns: 1fr; }
    .ggrid-arrow { width: 40px; height: 40px; }
  }
</style>
