<script>
  import { onMount } from 'svelte';

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

  let slider;

  function scroll(dir) {
    const card = slider.querySelector('.gallery-card');
    slider.scrollBy({ left: dir * (card.offsetWidth + 20), behavior: 'smooth' });
  }
</script>

<section class="section section-alt gallery-section">
  <div class="container">
    <div class="gallery-header blur-reveal">
      <div>
        <p class="section-label">The Place</p>
        <h2>See It for Yourself</h2>
        <p class="lead mt-sm">A place unlike any other — from the caves below to the people who dive them.</p>
      </div>
      <div class="gallery-nav">
        <button class="gallery-arrow" on:click={() => scroll(-1)} aria-label="Previous">←</button>
        <button class="gallery-arrow" on:click={() => scroll(1)} aria-label="Next">→</button>
      </div>
    </div>
  </div>
  <div class="gallery-slider-wrap">
    <div class="gallery-slider" bind:this={slider}>
      {#each images as img}
        <div class="gallery-card">
          <img src={img.src} alt={img.alt} loading="lazy" />
        </div>
      {/each}
    </div>
  </div>
</section>
