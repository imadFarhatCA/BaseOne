<script>
  // Self-contained trailer block - drop <TrailerSection /> on any page.
  import VideoSection from './VideoSection.svelte';
  export let eyebrow = 'In the Water';
  export let heading = 'Moments from Below';
  export let text = '';
</script>

<VideoSection {eyebrow} {heading} {text} src="/videos/trailer.mp4" poster="/videos/trailer.jpg" player />
