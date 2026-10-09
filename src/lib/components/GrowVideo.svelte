<script>
  import { tick } from 'svelte';
  import { scrollProgress } from '$lib/actions/scrollProgress.js';
  // Cinematic video that grows from a small rounded card to full width as it scrolls into view.
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

<div class="gv" use:scrollProgress>
  <div class="gv-frame">
    <video bind:this={video} controls={started} playsinline {poster} preload="metadata">
      <source {src} type="video/mp4" />
    </video>
    {#if !started}
      <button class="gv-play" type="button" on:click={start} aria-label={label}>
        <span class="gv-icon" aria-hidden="true">▶</span>
        <span class="gv-label">{label}</span>
      </button>
    {/if}
  </div>
</div>

<style>
  .gv { --p: 0; margin-top: 2.5rem; display: flex; justify-content: center; }
  .gv-frame { position: relative; aspect-ratio: 16 / 9; overflow: hidden; background: #000; width: calc(58% + 42% * var(--p)); max-width: 100%; border-radius: calc(36px * (1 - var(--p))); box-shadow: 0 30px 80px rgba(0, 0, 0, .5); will-change: width; }
  video { width: 100%; height: 100%; object-fit: cover; display: block; transform: scale(calc(1.12 - .12 * var(--p))); }
  .gv-play { position: absolute; inset: 0; border: none; cursor: pointer; color: #fff; display: flex; flex-direction: column; align-items: center; justify-content: center; gap: .9rem; background: linear-gradient(to top, rgba(4, 10, 18, .6), rgba(4, 10, 18, .1)); }
  .gv-icon { width: 84px; height: 84px; border-radius: 50%; background: #fff; color: var(--dark, #06212b); display: grid; place-items: center; font-size: 1.6rem; padding-left: 5px; transition: transform .3s; }
  .gv-play:hover .gv-icon { transform: scale(1.12); }
  .gv-label { font-size: .85rem; font-weight: 600; letter-spacing: .14em; text-transform: uppercase; }
  @media (max-width: 640px) { .gv-frame { width: calc(88% + 12% * var(--p)); } .gv-icon { width: 64px; height: 64px; } }
</style>
