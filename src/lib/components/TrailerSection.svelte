<script>
  // Self-contained trailer block - drop <TrailerSection /> on any page.
  import FramedVideo from './FramedVideo.svelte';
  export let eyebrow = 'In the Water';
  export let heading = 'Moments from Below';
  export let text = '';
</script>

<section class="section">
  <div class="container-narrow trailer-head">
    {#if eyebrow}<p class="section-label reveal-up">{eyebrow}</p>{/if}
    {#if heading}<h2 class="reveal-up delay-1">{heading}</h2>{/if}
    {#if text}<p class="lead mt-sm reveal-up delay-2">{text}</p>{/if}
  </div>
  <FramedVideo src="/videos/trailer.mp4" poster="/videos/trailer.jpg" />
</section>

<style>
  .trailer-head { text-align: center; }
</style>
