<script>
  import PageHero from '$lib/components/PageHero.svelte';
  import CtaBlock from '$lib/components/CtaBlock.svelte';
  import GalleryGrid from '$lib/components/GalleryGrid.svelte';
  // import { team } from '$lib/data/team.js';   // hidden — Alessandro & Andrea section dropped

  const logisticsShots = [
    { src: '/images-facility/_DSC0017.jpg', alt: 'Base One dive boat at Cala Gonone marina', caption: 'Boat Fleet' },
    { src: '/images-facility/_DSC0539.jpg', alt: 'Base One blue dive boat at harbour', caption: 'Big Boat' },
    { src: '/images-facility/_DSC0012.jpg', alt: 'Tank storage room with compressor and dive gear', caption: 'Equipment & Storage' },
    { src: '/images-facility/P1010163.jpg', alt: 'MPS gas blending system — oxygen and helium fills', caption: 'Gas Fills' },
    { src: '/images-facility/_DSC0568.jpg', alt: 'Classroom with tables, screen and whiteboard', caption: 'Classrooms' },
    { src: '/images-facility/_DSC0579.jpg', alt: 'SUEX DPV storage and logistics warehouse', caption: 'Storage' },
    { src: '/images-facility/P1010183.jpg', alt: 'Rental dive cylinders lined up and ready', caption: 'Tank Rentals' },
    { src: '/images-facility/P1010175.jpg', alt: 'Gas filling panel with cylinders connected', caption: 'Fills Made Easy' },
    { src: '/images-facility/_DSC0531.jpg', alt: 'Base One large dive vessel at sea', caption: 'Big Boat' },
  ];

  const eventsShots = [
    { src: '/images-facility/_DSC0590.jpg', alt: 'Briefing room with cave-diving mural', caption: 'Briefings & Planning' },
    { src: '/images-facility/_DSC0615.jpg', alt: 'Small meeting room with map and screen', caption: 'Team Meetings' },
    { src: '/images-facility/_DSC0574.jpg', alt: 'Research bench with microscope and underwater robots', caption: 'Research & Tech' },
    { src: '/images-facility/_DSC0010.jpg', alt: 'Base One support van', caption: 'Logistics & Transport' },
  ];
</script>

<svelte:head><title>Facility — Base One</title>
  <meta property="og:title" content="Facility — Base One">
  <meta property="og:description" content="Base One is part of AION Group, alongside SUEX and Blueprint Subsea. Full technical diving support in Cala Gonone — gas fills, filling station, boat fleet, classrooms, storage, and event support.">
  <meta name="description" content="Base One is part of AION Group, alongside SUEX and Blueprint Subsea. Full technical diving support in Cala Gonone — gas fills, filling station, boat fleet, classrooms, storage, and event support.">
</svelte:head>

<!-- ── Hero ─────────────────────────────────────────────────── -->
<PageHero
  image="/images/hero-about.jpg"
  eyebrow="The Facility"
  heading="Built by People Who Care<br>Deeply About Diving"
  sub="A living network of collaborators, instructors, explorers, and engineers — supported by infrastructure built for serious diving."
/>

<!-- ── The Group ────────────────────────────────────────────── -->
<section class="section section-alt">
  <div class="container">
    <div class="section-header blur-reveal">
      <p class="section-label">Part of</p>
      <img class="aion-logo" src="/images/logo-aion.png" alt="AION Group" />
      <p class="lead">Three brands, one vision — advancing what is possible underwater.</p>
    </div>
    <div class="feature-cards">
      <div class="feature-card reveal-left delay-1"><div class="feature-logo"><img src="/images/logo.png" alt="Base One" /></div><h3>Base One</h3><p>AION’s Mediterranean Operational, Training and Customer Experience Hub.</p></div>
      <div class="feature-card reveal-up delay-2"><div class="feature-logo"><img src="/images/logo-suex.svg" alt="SUEX" /></div><h3>SUEX</h3><p>Underwater propulsion vehicles engineered for performance. DPVs built for cave, technical, and professional diving.</p></div>
      <div class="feature-card reveal-right delay-3"><div class="feature-logo"><img src="/images/logo-blueprint.png" alt="Blueprint Subsea" /></div><h3>Blueprint Subsea</h3><p>Subsea technology and survey solutions. Precision tools for underwater mapping and data collection.</p></div>
    </div>
  </div>
</section>

<div class="quote-divider blur-reveal"><p class="brand-line">Precision on the surface. Capability below.</p></div>

<!-- ── Logistics: Built for Serious Operations + gallery ─────── -->
<section class="section" id="the-facility">
  <div class="container">
    <div class="section-header blur-reveal">
      <p class="section-label">Logistics</p>
      <h2>Built for Serious Operations</h2>
      <p class="lead">Everything you need on site. Nothing that gets in the way.</p>
    </div>
    <div class="feature-cards">
      <div class="feature-card reveal-left delay-1"><div class="feature-icon"><img src="/images/icons/gauge.svg" alt="" /></div><h3>Gas Fills</h3><p>Air, Nitrox, Trimix, and custom gas blends from a TÜV-certified gas station equipped with BAUER compressors and MPS oxygen boosters.</p></div>
      <div class="feature-card reveal-right delay-2"><div class="feature-icon"><img src="/images/icons/rib-boat.svg" alt="" /></div><h3>Boat Fleet</h3><p>Purpose-built dive RHIBs and a larger vessel designed as professional working platforms, with stainless-steel diver structures, comfortable ladders, VHF communication, Garmin inReach, and experienced skippers supporting reliable access to sea-entry cave sites, offshore dive locations, and long-range open-water navigation operations.</p></div>
      <div class="feature-card reveal-left delay-3"><div class="feature-icon"><img src="/images/icons/classroom.svg" alt="" /></div><h3>Classrooms</h3><p>Dedicated spaces for briefings, debriefs, theory sessions, and course work — with monitors, whiteboards, high-speed internet, and air conditioning.</p></div>
      <div class="feature-card reveal-right delay-1"><div class="feature-icon"><img src="/images/icons/charging.png" alt="" /></div><h3>Charging Stations</h3><p>Dedicated charging and battery-management areas for DPVs, lights, cameras, and mission equipment, keeping every system organised and ready between operations.</p></div>
      <div class="feature-card reveal-left delay-2"><div class="feature-icon"><img src="/images/icons/mask.svg" alt="" /></div><h3>Equipment Hire</h3><p>Selected Halcyon backmount and sidemount systems, SUEX DPVs, primary lights, reels, cylinders, accessories, and JJ-CCR frames are available for hire. Equipment is professionally maintained, inspected, and prepared before use.</p></div>
      <div class="feature-card reveal-right delay-3"><div class="feature-icon"><img src="/images/icons/storage-box.svg" alt="" /></div><h3>Storage &amp; Security</h3><p>Secure overnight equipment storage, dedicated rinse tanks, and a climate-controlled drying room with dehumidification for wetsuits, drysuits, undersuits, and technical diving equipment.</p></div>
    </div>
    <div class="mt-lg">
      <GalleryGrid images={logisticsShots} columns={3} />
    </div>
  </div>
</section>

<!-- ── Events Support ───────────────────────────────────────── -->
<section class="section section-alt">
  <div class="container">
    <div class="section-header blur-reveal">
      <p class="section-label">Events Support</p>
      <h2>A Base for Serious Gatherings</h2>
      <p class="lead">Base One hosts companies, agencies, manufacturers, specialist organisations, professional teams, and premium groups in one of Sardinia’s most spectacular coastal locations. From product testing and training weeks to partner events, expedition support, and tailored group experiences, we provide the boats, gas, water access, equipment support, logistics, and local know-how to make complex projects run smoothly.</p>
    </div>
    <GalleryGrid images={eventsShots} columns={4} />
    <div class="text-center mt-lg scale-reveal">
      <a href="/plan#contact" class="btn btn-teal btn-large">Plan Your Event →</a>
    </div>
  </div>
</section>

<!-- ── Core Values ──────────────────────────────────────────── -->
<section class="section">
  <div class="container-narrow">
    <div class="section-header blur-reveal">
      <p class="section-label">What Drives Us</p>
      <h2>Core Values</h2>
    </div>
    <div class="steps">
      <div class="step reveal-left delay-1"><div class="step-num">01</div><h3>Excellence</h3><p>The relentless pursuit of doing things properly — in training, operations, and how we treat the environment.</p></div>
      <div class="step reveal-right delay-2"><div class="step-num">02</div><h3>Community</h3><p>Instructors, explorers, students, engineers — every perspective strengthens the whole.</p></div>
      <div class="step reveal-left delay-3"><div class="step-num">03</div><h3>Environment</h3><p>Every dive plan must leave the place better than we found it. No exceptions.</p></div>
      <div class="step reveal-right delay-4"><div class="step-num">04</div><h3>Innovation</h3><p>Diving advances when people are willing to question, test, and improve.</p></div>
    </div>
  </div>
</section>

<!-- ── HIDDEN (dropped for now — kept for later cleanup) ──────
  Dropped: The Story intro, The Team (Alessandro & Andrea), The Facility blurb, A Day at Base One
  (moved to Diving page), The Living Network.

<section class="section"><div class="container-narrow">
  <p class="section-label">The Story</p>
  <h2>A place built around contribution, not ownership.</h2>
  <p class="lead">Base One is shaped by the people who teach here, guide here, test here, return here, and invest their energy here.</p>
</div></section>

<section class="team-section">… team grid with Alessandro & Andrea …</section>

<section class="section section-dark"><div class="container-narrow">
  <p class="section-label teal-light">The Network</p>
  <h2>A Living Network</h2>
  <ul class="dot-list">… GUE instructors / technical divers / engineers / scientists / new divers …</ul>
</div></section>
─────────────────────────────────────────────────────────── -->

<div class="image-divider scale-reveal" style="background-image:url('/images/divider-about.jpg')"></div>

<CtaBlock
  heading="Come Be Part of It"
  text="Whether you are here to teach, learn, explore, test, or simply dive well — you are welcome."
  primaryLabel="Plan your Trip"
  secondaryLabel="Get in Touch"
/>

<style>
  .mt-lg { margin-top: 2.5rem; }
  .aion-logo { display: block; height: 64px; width: auto; margin: 0 auto .5rem; }
</style>
