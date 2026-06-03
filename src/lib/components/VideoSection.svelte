<script>
  // Title + intro text over a video player. Pass a `src` later (mp4) or a `poster`.
  export let eyebrow = '';
  export let heading = '';
  export let text = '';
  export let src = '';                 // /videos/xxx.mp4 — supplied later
  export let poster = '/images/divider-cave.jpg';
</script>

<section class="section videosec">
  <div class="container-narrow videosec-head">
    {#if eyebrow}<p class="section-label reveal-up">{eyebrow}</p>{/if}
    {#if heading}<h2 class="reveal-up delay-1">{heading}</h2>{/if}
    {#if text}<p class="lead mt-sm reveal-up delay-2">{text}</p>{/if}
  </div>
  <div class="videosec-frame scale-reveal">
    {#if src}
      <video controls playsinline {poster} preload="none">
        <source {src} type="video/mp4" />
      </video>
    {:else}
      <!-- Placeholder until the real video is provided -->
      <div class="videosec-placeholder" style="background-image:url('{poster}')">
        <span class="videosec-play" aria-hidden="true">▶</span>
        <p>Video coming soon</p>
      </div>
    {/if}
  </div>
</section>

<style>
  .videosec-head { text-align: center; }
  /* Full-bleed: span the entire viewport width regardless of container */
  .videosec-frame {
    width: 100vw;
    margin-left: calc(50% - 50vw);
    margin-top: 2.5rem;
    overflow: hidden;
    aspect-ratio: 16 / 9;
    max-height: 100vh;
    background: #000;
  }
  .videosec-frame video { width: 100%; height: 100%; object-fit: cover; display: block; }
  .videosec-placeholder {
    width: 100%; height: 100%;
    background-size: cover; background-position: center;
    display: flex; flex-direction: column; align-items: center; justify-content: center;
    gap: .75rem; color: #fff; position: relative;
  }
  .videosec-placeholder::after { content: ''; position: absolute; inset: 0; background: rgba(4,10,18,.45); }
  .videosec-play, .videosec-placeholder p { position: relative; z-index: 1; }
  .videosec-play {
    width: 74px; height: 74px; border-radius: 50%;
    background: rgba(255,255,255,.16); border: 2px solid #fff;
    display: flex; align-items: center; justify-content: center; font-size: 1.5rem;
  }
  .videosec-placeholder p { font-size: .85rem; letter-spacing: .08em; text-transform: uppercase; opacity: .85; }
</style>
