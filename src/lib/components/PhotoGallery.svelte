<script>
  import ImageCarousel from './ImageCarousel.svelte';

  const images = [
    { src: '/images/hero-cave.jpg',         alt: 'Cave entrance, divers at the surface' },
    { src: '/images/hero-diving.jpg',        alt: 'Two divers in a wide teal cave passage' },
    { src: '/images/divider-diving.jpg',     alt: 'Three divers exploring a cave with sand floor' },
    { src: '/images/hero-exploration.jpg',   alt: 'Diver looking up through dramatic cave ceiling' },
    { src: '/images/divider-exploration.jpg',alt: 'Solo diver with light shaft from above' },
    { src: '/images/divider-training.jpg',   alt: 'Three divers training in cave with stalactites' },
    { src: '/images/divider-about.jpg',      alt: 'Two divers with torch beams in a cave passage' },
    { src: '/images/divider-cave.jpg',       alt: 'Atmospheric cave arch with blue glow' },
    { src: '/images/hero-facility.jpg',      alt: 'Diver setting up heavy gear at Base One' },
    { src: '/images/hero-about.jpg',         alt: 'Divers preparing before a dive' },
    { src: '/images/hero-training.jpg',      alt: 'DPV training in open water' },
    { src: '/images/divider-facility.jpg',   alt: 'Dive RIB on the water' },
    { src: '/images/hero-plan.jpg',          alt: 'Cave passage with blue tones' },
  ];
</script>

<section class="section section-alt gallery-section">
  <div class="container">
    <div class="gallery-header blur-reveal">
      <div>
        <p class="section-label">The Place</p>
        <h2>See It for Yourself</h2>
        <p class="lead mt-sm">A place unlike any other — from the caves below to the people who dive them.</p>
      </div>
    </div>
  </div>
  <ImageCarousel {images} alt="Base One" />
</section>
