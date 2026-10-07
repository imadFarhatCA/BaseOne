<script>
  import ImageCarousel from './ImageCarousel.svelte';

  let carousel;
  let atStart = true;
  let atEnd = false;

  const images = [
    { src: '/images/hero-cave.jpg',         alt: 'Cave entrance, divers at the surface', credit: 'Imad Farhat' },
    { src: '/images/hero-diving.jpg',        alt: 'Two divers in a wide teal cave passage', credit: 'JP Bresser' },
    { src: '/images/divider-diving.jpg',     alt: 'Three divers exploring a cave with sand floor', credit: 'JP Bresser' },
    { src: '/images/hero-exploration.jpg',   alt: 'Diver looking up through dramatic cave ceiling', credit: 'Imad Farhat' },
    { src: '/images/divider-exploration.jpg',alt: 'Solo diver with light shaft from above', credit: 'SJ Bennett' },
    { src: '/images/divider-training.jpg',   alt: 'Three divers training in cave with stalactites', credit: 'Imad Farhat' },
    { src: '/images/divider-about.jpg',      alt: 'Two divers with torch beams in a cave passage', credit: 'Olga Martinelli' },
    { src: '/images/divider-cave.jpg',       alt: 'Atmospheric cave arch with blue glow', credit: 'Alex Dawson' },
    // Hidden for now (images 9-13):
    /*
    { src: '/images/hero-facility.jpg',      alt: 'Diver setting up heavy gear at Base One' },
    { src: '/images/hero-about.jpg',         alt: 'Divers preparing before a dive' },
    { src: '/images/hero-training.jpg',      alt: 'DPV training in open water' },
    { src: '/images/divider-facility.jpg',   alt: 'Dive RIB on the water' },
    { src: '/images/hero-plan.jpg',          alt: 'Cave passage with blue tones' },
    */
  ];
</script>

<section class="section section-alt gallery-section">
  <div class="container">
    <div class="gallery-header blur-reveal">
      <div>
        <p class="section-label">The Place</p>
        <h2>See It for Yourself</h2>
        <p class="lead mt-sm">A place unlike any other - from the caves below to the people who dive them.</p>
      </div>
      <div class="gallery-nav">
        <button class="gallery-arrow" type="button" on:click={() => carousel.scroll(-1)} aria-label="Previous" disabled={atStart}>←</button>
        <button class="gallery-arrow" type="button" on:click={() => carousel.scroll(1)} aria-label="Next" disabled={atEnd}>→</button>
      </div>
    </div>
  </div>
  <ImageCarousel {images} alt="Base One" hideNav bind:this={carousel} bind:atStart bind:atEnd />
</section>
