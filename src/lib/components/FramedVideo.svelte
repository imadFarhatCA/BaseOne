<script>
  import { tick } from 'svelte';
  // Contained, rounded video with a custom play button. Plays with sound and controls.
  export let src;
  export let poster = '';
  export let label = 'Watch the trailer';
  let video;
  let started = false;

  async function start() {
    started = true;
    await tick();
    video.play();
  }
</script>

<div class="fv scale-reveal">
  <div class="fv-frame">
    <video bind:this={video} controls={started} playsinline {poster} preload="metadata">
      <source {src} type="video/mp4" />
    </video>
    {#if !started}
      <button class="fv-play" type="button" on:click={start} aria-label={label}>
        <span class="fv-icon" aria-hidden="true">▶</span>
        <span class="fv-label">{label}</span>
      </button>
    {/if}
  </div>
</div>

<style>
  .fv { max-width: 1040px; margin: 2.5rem auto 0; padding: 0 var(--gutter); }
  .fv-frame { position: relative; aspect-ratio: 16 / 9; border-radius: 28px; overflow: hidden; background: #000; box-shadow: 0 30px 70px rgba(6, 33, 43, .28), 14px 14px 0 -1px var(--teal); }
  video { width: 100%; height: 100%; object-fit: cover; display: block; }
  .fv-play { position: absolute; inset: 0; border: none; cursor: pointer; color: #fff; display: flex; flex-direction: column; align-items: center; justify-content: center; gap: .9rem; background: linear-gradient(to top, rgba(4, 10, 18, .65), rgba(4, 10, 18, .15)); transition: background .3s; }
  .fv-play:hover { background: linear-gradient(to top, rgba(4, 10, 18, .75), rgba(4, 10, 18, .3)); }
  .fv-icon { width: 86px; height: 86px; border-radius: 50%; background: var(--teal); display: grid; place-items: center; font-size: 1.7rem; padding-left: 5px; transition: transform .3s; box-shadow: 0 10px 30px rgba(0, 0, 0, .35); }
  .fv-play:hover .fv-icon { transform: scale(1.1); }
  .fv-label { font-size: .85rem; font-weight: 600; letter-spacing: .14em; text-transform: uppercase; }
  @media (max-width: 640px) { .fv-frame { border-radius: 18px; box-shadow: 0 18px 40px rgba(6, 33, 43, .25), 8px 8px 0 -1px var(--teal); } .fv-icon { width: 64px; height: 64px; } }
</style>
