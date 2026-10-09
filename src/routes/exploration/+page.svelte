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

  // ── Phreatic - images from phreatic.org (saved locally), one CTA under each ──
  const phreaticCards = [
    { src: '/images/phreatic/exploration.jpg', alt: 'Diver silhouette in a glowing cave pool', label: 'Join a Project', href: 'https://www.phreatic.org/', external: true },
    { src: '/images/phreatic/survey.jpg', alt: 'Survey gear and DPVs staged at a cave water edge', label: 'Help by Donating', href: 'https://www.phreatic.org/', external: true },
    { src: '/images/phreatic/sediment.jpg', alt: 'Diver collecting a sediment sample', label: 'Download Annual Report ↓', href: 'https://www.phreatic.org/report/Phreatic-2024-Annual-Report.pdf', external: true },
  ];
</script>

<svelte:head><title>Exploration - Base One</title>
  <meta property="og:title" content="Exploration - Base One">
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
    <h2 class="reveal-left delay-1">Exploration isn’t measured in distance. It’s a mindset.</h2>
    <p class="lead mt-sm reveal-left delay-2">It means staying curious, documenting carefully, working well as a team, and approaching the unknown with both ambition and restraint. At Base One, that mindset shapes everything we do, in training and beyond.</p>
    <ul class="check-list mt-md">
      <li class="reveal-left delay-1">Ongoing cave survey and cartography projects</li>
      <li class="reveal-right delay-2">Home of Phreatic A.p.S, our non-profit exploration organisation</li>
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
        <p>Systematic mapping of cave passages using line surveys and 3D scanning - expanding the known extent of Gulf of Orosei systems.</p>
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

<!-- ── Phreatic ─────────────────────────────────────────────── -->
<section class="section phreatic-section">
  <div class="container">
    <div class="section-header blur-reveal">
      <p class="section-label">Citizen Science &amp; Community</p>
      <h2>Phreatic</h2>
      <p class="lead">Base One is the operational home of Phreatic A.p.S - a non-profit organisation exploring and protecting the flooded caves and groundwater of Sardinia. Volunteer divers contribute to cave survey, 3D mapping, sediment or biology sampling, and conservation. Your dives become real data.</p>
    </div>
    <div class="phreatic-cards">
      {#each phreaticCards as c, i}
        <div class="phreatic-card reveal-up delay-{i + 1}">
          <div class="phreatic-card-img"><img src={c.src} alt={c.alt} loading="lazy" /></div>
          <a href={c.href} target="_blank" rel="noopener" class="btn btn-teal phreatic-card-btn">{c.label}</a>
        </div>
      {/each}
    </div>
  </div>
</section>

<section class="section">
  <div class="container">
    <div class="section-header blur-reveal">
      <p class="section-label">Gallery</p>
      <h2>Bue Marino - Dry Section</h2>
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

<style>
  .phreatic-cards {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1.5rem;
  }
  .phreatic-card { display: flex; flex-direction: column; gap: 1rem; }
  .phreatic-card-img {
    height: clamp(220px, 26vw, 300px);
    border-radius: var(--radius-lg);
    overflow: hidden;
    box-shadow: 0 8px 28px rgba(0,0,0,.12);
  }
  .phreatic-card-img img { width: 100%; height: 100%; object-fit: cover; display: block; transition: transform .5s ease; }
  .phreatic-card:hover .phreatic-card-img img { transform: scale(1.05); }
  .phreatic-card-btn { width: 100%; text-align: center; }
  @media (max-width: 760px) {
    .phreatic-cards { grid-template-columns: 1fr; max-width: 420px; margin: 0 auto; }
  }
</style>
