<script>
  import PageHero from '$lib/components/PageHero.svelte';
  import CtaBlock from '$lib/components/CtaBlock.svelte';
  import GalleryGrid from '$lib/components/GalleryGrid.svelte';

  const bueMarinoDryShots = [
    { src: '/images/exploration/bue-marino-dry-1.jpg', alt: 'Bue Marino dry section' },
    { src: '/images/exploration/bue-marino-dry-2.jpg', alt: 'Bue Marino dry section' },
    { src: '/images/exploration/bue-marino-dry-3.jpg', alt: 'Bue Marino dry section' },
    { src: '/images/exploration/bue-marino-dry-4.jpg', alt: 'Bue Marino dry section' },
    { src: '/images/exploration/bue-marino-dry-5.jpg', alt: 'Bue Marino dry section' },
    { src: '/images/exploration/bue-marino-dry-6.jpg', alt: 'Bue Marino dry section' },
    { src: '/images/exploration/bue-marino-dry-7.jpg', alt: 'Bue Marino dry section' },
  ];

  const utopiaShots = [
    { src: '/images/exploration/utopia-1.jpg', alt: 'Utopia cave system' },
    { src: '/images/exploration/utopia-2.jpg', alt: 'Utopia cave system' },
    { src: '/images/exploration/utopia-3.jpg', alt: 'Utopia cave system' },
    { src: '/images/exploration/utopia-4.jpg', alt: 'Utopia cave system' },
    { src: '/images/exploration/utopia-5.jpg', alt: 'Utopia cave system' },
  ];
</script>

<svelte:head><title>Exploration — Base One</title>
  <meta property="og:title" content="Exploration — Base One">
  <meta property="og:description" content="Cave survey, DPV operations, and the Phreatic citizen-science programme. Pushing the boundaries of what is known beneath Sardinia.">
  <meta name="description" content="Cave survey, DPV operations, and the Phreatic citizen-science programme. Pushing the boundaries of what is known beneath Sardinia.">
</svelte:head>

<PageHero
  image="/images/hero-exploration.jpg"
  eyebrow="Exploration & Projects"
  heading="Because Not Everything<br>Has Been Found Yet"
  sub="A place where dives can still contribute to discovery, science, and a deeper understanding of the underground world."
/>

<section class="section">
  <div class="container-narrow">
    <p class="section-label reveal-left">The Mindset</p>
    <h2 class="reveal-left delay-1">Exploration is not just distance. It is attitude.</h2>
    <p class="lead mt-sm reveal-left delay-2">It is the willingness to stay curious, to document carefully, to collaborate well, and to treat the unknown with both ambition and restraint. Base One supports that mindset.</p>
    <ul class="check-list mt-md">
      <li class="reveal-left delay-1">Active cave survey and cartography projects</li>
      <li class="reveal-right delay-2">Phreatic non-profit organisation</li>
      <li class="reveal-left delay-3">Scientific diving support and documentation</li>
      <li class="reveal-right delay-4">Collaboration with international exploration teams</li>
    </ul>
  </div>
</section>

<div class="quote-divider"><p class="brand-line">Come for the caves. Leave with more.</p></div>

<section class="section section-alt">
  <div class="container">
    <div class="section-header blur-reveal">
      <p class="section-label">Active Projects</p>
      <h2>What We Work On</h2>
    </div>
    <div class="feature-cards">
      <div class="feature-card reveal-left delay-1">
        <div class="feature-icon"><img src="/images/icons/compass.svg" alt="" /></div>
        <h3>Cave Mapping &amp; GIS</h3>
        <p>Systematic mapping of cave passages using line surveys and 3D scanning — expanding the known extent of Gulf of Orosei systems.</p>
      </div>
      <div class="feature-card reveal-right delay-2">
        <div class="feature-icon"><img src="/images/icons/phreatic.png" alt="" /></div>
        <h3>Phreatic</h3>
        <p>Phreatic is a not-for-profit organisation bringing cave divers, explorers, and scientists together to study, document, and protect underwater caves, groundwater systems, and fragile coastal environments.</p>
      </div>
      <div class="feature-card reveal-left delay-3">
        <div class="feature-icon"><img src="/images/icons/dpv.svg" alt="" /></div>
        <h3>Technology</h3>
        <p>Combining SUEX DPVs with advanced acoustic navigation, underwater positioning, and environmental sensing to extend exploration range and operate safely in long, complex cave systems.</p>
      </div>
    </div>
  </div>
</section>

<section class="section">
  <div class="container">
    <div class="section-header blur-reveal">
      <p class="section-label">Gallery</p>
      <h2>Bue Marino — Dry Section</h2>
    </div>
    <GalleryGrid images={bueMarinoDryShots} columns={3} />
  </div>
</section>

<section class="section section-alt">
  <div class="container">
    <div class="section-header blur-reveal">
      <p class="section-label">Gallery</p>
      <h2>Utopia</h2>
    </div>
    <GalleryGrid images={utopiaShots} columns={3} />
  </div>
</section>

<div class="image-divider scale-reveal" style="background-image:url('/images/divider-exploration.jpg')"></div>

<CtaBlock
  heading="Be Part of the Discovery"
  text="Join an established project or discuss a carefully developed initiative. Base One supports serious exploration grounded in preparation, collaboration, and responsible practice."
  primaryLabel="Join a Project"
  secondaryLabel="Learn More"
/>
