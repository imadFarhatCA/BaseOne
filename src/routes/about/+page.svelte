<script>
  import PageHero from '$lib/components/PageHero.svelte';
  import CtaBlock from '$lib/components/CtaBlock.svelte';
  import GalleryGrid from '$lib/components/GalleryGrid.svelte';
  // import { team } from '$lib/data/team.js';   // hidden — Alessandro & Andrea section dropped

  // Logistics gallery — real Base One facility photos (local), plus one verified placeholder.
  const logisticsShots = [
    { src: '/images/divider-facility.jpg', alt: 'Base One RIB fleet in Cala Gonone harbour', caption: 'Boat Fleet' },
    { src: '/images/alt-facility-1.jpg', alt: 'SUEX equipment and servicing room', caption: 'Equipment & Servicing' },
    { src: '/images/alt-facility-3.jpg', alt: 'SUEX DPV speed controls', caption: 'DPV & Filling Station' },
    { src: '/images/alt-facility-2.jpg', alt: 'Common area and briefing lounge', caption: 'Classrooms & Common Areas' },
    { src: '/images/hero-facility.jpg', alt: 'RIB dive boat deck rigged for diving', caption: 'On the Water' },
    { src: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=900&q=70&auto=format&fit=crop', alt: 'Team briefing around a table', caption: 'Briefings & Planning' },
  ];

  // Events support gallery — verified event shots + real Base One dive-team photos.
  const eventsShots = [
    { src: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=900&q=70&auto=format&fit=crop', alt: 'Conference audience', caption: 'Conferences & launches' },
    { src: 'https://images.unsplash.com/photo-1517457373958-b7bdd4587205?w=900&q=70&auto=format&fit=crop', alt: 'Evening team gathering', caption: 'Team gatherings' },
    { src: '/images/hero-about.jpg', alt: 'Divers preparing before a dive', caption: 'Professional dive teams' },
    { src: '/images/divider-about.jpg', alt: 'Divers with torch beams in a cave', caption: 'Military & expedition support' },
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
      <p class="section-label">The Group</p>
      <h2>Part of AION Group</h2>
      <p class="lead">Three brands, one vision — advancing what is possible underwater.</p>
    </div>
    <div class="feature-cards">
      <div class="feature-card reveal-left delay-1"><div class="feature-logo"><img src="/images/logo.png" alt="Base One" /></div><h3>Base One</h3><p>The operational hub. A dive center in Sardinia built for cave diving, technical training, and exploration.</p></div>
      <div class="feature-card reveal-up delay-2"><div class="feature-logo"><img src="/images/logo-suex.svg" alt="SUEX" /></div><h3>SUEX</h3><p>Underwater propulsion vehicles engineered for performance. DPVs built for cave, technical, and professional diving.</p></div>
      <div class="feature-card reveal-right delay-3"><div class="feature-logo"><img src="/images/logo-blueprint.png" alt="Blueprint Subsea" /></div><h3>Blueprint Subsea</h3><p>Subsea technology and survey solutions. Precision tools for underwater mapping and data collection.</p></div>
    </div>
  </div>
</section>

<div class="quote-divider blur-reveal"><p class="brand-line">Precision on the surface. Possibility below.</p></div>

<!-- ── Logistics: Built for Serious Operations + gallery ─────── -->
<section class="section">
  <div class="container">
    <div class="section-header blur-reveal">
      <p class="section-label">Logistics</p>
      <h2>Built for Serious Operations</h2>
      <p class="lead">Everything you need on site. Nothing that gets in the way.</p>
    </div>
    <div class="feature-cards">
      <div class="feature-card reveal-left delay-1"><div class="feature-icon"><img src="/images/icons/double-tanks.svg" alt="" /></div><h3>Gas Fills</h3><p>Air, Nitrox, Trimix, and custom blends. High-pressure fills for backmount, sidemount, and stage cylinders.</p></div>
      <div class="feature-card reveal-right delay-2"><div class="feature-icon"><img src="/images/icons/rib-boat.svg" alt="" /></div><h3>Boat Fleet</h3><p>RIBs and a larger vessel for reaching cave entrances accessible only from the sea. Reliable, maintained, skippered.</p></div>
      <div class="feature-card reveal-left delay-3"><div class="feature-icon"><img src="/images/icons/classroom.svg" alt="" /></div><h3>Classrooms</h3><p>Dedicated spaces for briefings, debriefs, theory sessions, and course work — with projection and whiteboards.</p></div>
      <div class="feature-card reveal-right delay-1"><div class="feature-icon"><img src="/images/icons/gauge.svg" alt="" /></div><h3>Filling Station</h3><p>DPV charging, light charging, camera battery management — keep equipment powered and ready between dives.</p></div>
      <div class="feature-card reveal-left delay-2"><div class="feature-icon"><img src="/images/icons/mask.svg" alt="" /></div><h3>Equipment Hire</h3><p>Backmount and sidemount rigs, lights, reels, DPVs, and accessories. Well-maintained and regularly inspected.</p></div>
      <div class="feature-card reveal-right delay-3"><div class="feature-icon"><img src="/images/icons/storage-box.svg" alt="" /></div><h3>Storage &amp; Security</h3><p>Secure storage between dive days. Rinse tanks, drying areas, and protected overnight storage.</p></div>
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
      <p class="lead">Base One regularly hosts companies, agencies, and expedition teams — from SUEX military and professional diving programmes to product testing, training weeks, and corporate events. We provide the water access, logistics, boats, gas, and local know-how to make ambitious events run smoothly.</p>
    </div>
    <GalleryGrid images={eventsShots} columns={4} />
    <div class="text-center mt-lg scale-reveal">
      <a href="/plan#contact" class="btn btn-teal btn-large">Talk to Us About Your Event →</a>
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
  primaryLabel="Cost Estimates"
  secondaryLabel="Get in Touch"
/>

<style>
  .mt-lg { margin-top: 2.5rem; }
</style>
