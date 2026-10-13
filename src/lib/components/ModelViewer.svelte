<script>
  // 3D model card: a still preview that loads the Sketchfab viewer only after a click.
  export let uid;
  export let poster = '';
  export let title = '3D model';
  export let credit = '';
  export let url = `https://sketchfab.com/models/${uid}`;
  let active = false;
</script>

<div class="model">
  {#if active}
    <iframe
      {title}
      src="https://sketchfab.com/models/{uid}/embed?autostart=1&dnt=1&ui_theme=dark"
      allow="autoplay; fullscreen; xr-spatial-tracking"
      allowfullscreen
    ></iframe>
  {:else}
    <button class="model-start" type="button" on:click={() => (active = true)} aria-label="Explore {title} in 3D">
      <img src={poster} alt="" loading="lazy" />
      <span class="model-cta">
        <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 2 3 7v10l9 5 9-5V7z" /><path d="M3 7l9 5 9-5M12 12v10" /></svg>
        Explore in 3D
      </span>
      <span class="model-hint">Photogrammetry model - drag to rotate</span>
    </button>
    {#if credit}
      <a class="model-credit" href={url} target="_blank" rel="noopener noreferrer">3D model by {credit} · Sketchfab</a>
    {/if}
  {/if}
</div>

<style>
  .model { position: relative; width: 100%; height: 100%; background: #000; }
  iframe { width: 100%; height: 100%; border: 0; display: block; }
  .model-start { position: absolute; inset: 0; width: 100%; height: 100%; padding: 0; border: 0; background: #000; cursor: pointer; color: #fff; display: block; }
  .model-start img { width: 100%; height: 100%; object-fit: cover; display: block; opacity: 0.9; transition: opacity 0.3s, transform 0.5s; }
  .model-start:hover img { opacity: 1; transform: scale(1.03); }
  .model-cta { position: absolute; left: 50%; top: 50%; transform: translate(-50%, -50%); display: inline-flex; align-items: center; gap: 0.6rem; padding: 0.85rem 1.5rem; border-radius: 999px; background: rgba(6, 33, 43, 0.78); border: 1px solid rgba(255, 255, 255, 0.5); font-weight: 600; font-size: 0.95rem; letter-spacing: 0.04em; backdrop-filter: blur(6px); transition: background 0.25s, transform 0.25s; white-space: nowrap; }
  .model-start:hover .model-cta { background: var(--teal); transform: translate(-50%, -50%) scale(1.05); }
  .model-hint { position: absolute; left: 0; right: 0; top: 1rem; text-align: center; font-size: 0.72rem; letter-spacing: 0.1em; text-transform: uppercase; color: rgba(255, 255, 255, 0.75); }
  .model-credit { position: absolute; left: 0.9rem; bottom: 0.7rem; z-index: 2; font-size: 0.72rem; color: rgba(255, 255, 255, 0.8); text-decoration: none; text-shadow: 0 1px 6px rgba(0, 0, 0, 0.7); }
  .model-credit:hover { color: #fff; text-decoration: underline; }
</style>
