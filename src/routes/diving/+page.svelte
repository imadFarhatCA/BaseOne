<script>
  import PageHero from '$lib/components/PageHero.svelte';
  import CtaBlock from '$lib/components/CtaBlock.svelte';
  import CaveTimeline from '$lib/components/CaveTimeline.svelte';
  import GalleryGrid from '$lib/components/GalleryGrid.svelte';
  import BigCta from '$lib/components/BigCta.svelte';
  import VideoSection from '$lib/components/VideoSection.svelte';

  // Open-water & reef images — verified online placeholders, swap for real Base One photos later.
  const openWater = [
    { src: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=900&q=70&auto=format&fit=crop', alt: 'Scuba diver beside a school of fish on a reef', caption: 'Reef & wall dives' },
    { src: 'https://images.unsplash.com/photo-1551244072-5d12893278ab?w=900&q=70&auto=format&fit=crop', alt: 'Coral reef lit by sun rays', caption: 'Open water' },
    { src: 'https://images.unsplash.com/photo-1583212292454-1fe6229603b7?w=900&q=70&auto=format&fit=crop', alt: 'Colourful coral garden with fish', caption: 'Coral gardens' },
    { src: 'https://images.unsplash.com/photo-1518467166778-b88f373ffec7?w=900&q=70&auto=format&fit=crop', alt: 'Sea turtle in turquoise water', caption: 'Marine life' },
    { src: 'https://images.unsplash.com/photo-1437622368342-7a3d73a34c8f?w=900&q=70&auto=format&fit=crop', alt: 'Green sea turtle swimming', caption: 'Encounters' },
    { src: 'https://images.unsplash.com/photo-1559825481-12a05cc00344?w=900&q=70&auto=format&fit=crop', alt: 'Sunlight over a sandy shallow seabed', caption: 'Sandy shallows' },
  ];
</script>

<svelte:head><title>Diving — Base One</title>
  <meta property="og:title" content="Diving — Base One">
  <meta property="og:description" content="Cave, wreck and open-water diving in the Gulf of Orosei, Sardinia. One of Europe's finest cave diving destinations, guided and supported by Base One.">
  <meta name="description" content="Cave, wreck and open-water diving in the Gulf of Orosei, Sardinia. One of Europe's finest cave diving destinations, guided and supported by Base One.">
</svelte:head>

<!-- ── Hero ─────────────────────────────────────────────────── -->
<PageHero
  image="/images/hero-diving.jpg"
  eyebrow="Cave Diving Sardinia"
  heading="Dive a Place That<br>Still Feels Wild"
  sub="Cave systems of extraordinary beauty, variety, and potential — supported by logistics built for serious diving."
/>

<!-- ── Intro (condensed: lead visible, long copy in Read more for SEO) ── -->
<section class="section">
  <div class="container-narrow">
    <p class="section-label reveal-left">The Environment</p>
    <h2 class="reveal-left delay-1">One of the last wild coastlines in the Mediterranean.</h2>
    <p class="lead mt-sm reveal-left delay-2">The Gulf of Orosei is one of the last stretches of Italian coastline without buildings or coastal roads. Along forty kilometres of wild limestone coast, high white cliffs drop into turquoise water and hide hundreds of dry and flooded caves, including some of the longest underwater cave systems in Europe.</p>
    <details class="read-more reveal-left delay-3">
      <summary>Read more about the geology</summary>
      <p class="mt-sm">These freshwater springs are shaped by saltwater intrusion from the sea, creating layered cave environments with both fresh and marine water. Speleothems, decorations, and changing passage levels show that many of these caves were once dry during different ice-age sea-level periods. Branching passages, sumps, and long shallow galleries make the Gulf of Orosei one of Europe's premier cave diving destinations — and a vast maze still being explored.</p>
      <p class="mt-sm">Most shallow cave systems in the Gulf of Orosei have average depths between 6 and 12 metres. Saltwater temperatures are usually above 22°C, while freshwater sections can be around 15°C. These conditions allow long bottom times and minimum decompression.</p>
      <p class="mt-sm">Other systems are deeper and more complex, requiring advanced planning, longer exposure, and staged decompression — ideal terrain for experienced rebreather cave divers.</p>
    </details>
  </div>
</section>

<!-- ── The Caves (tabs) ─────────────────────────────────────── -->
<CaveTimeline />

<!-- ── Open Water & Wrecks ──────────────────────────────────── -->
<section class="section section-alt">
  <div class="container">
    <div class="section-header blur-reveal">
      <p class="section-label">Beyond the Caves</p>
      <h2>Open Water &amp; Reefs</h2>
      <p class="lead">Not every dive in the Gulf of Orosei goes overhead. Beyond its caves, the area offers clear-water wreck dives, wall dives, shallow coastal sites, caverns, and sheltered locations ideal for recreational divers, warm-up dives, and skills development before advanced cave, technical, or CCR training.</p>
    </div>
    <GalleryGrid images={openWater} columns={3} />
  </div>
</section>

<!-- ── Book Now ─────────────────────────────────────────────── -->
<BigCta
  heading="Ready to Get in the Water?"
  text="Cave, wreck, or open water — reserve your diving days with Base One."
  label="Request Availability"
  href="/plan"
/>

<!-- ── How It Works (brought from the Facility page) ────────── -->
<section class="section">
  <div class="container-narrow">
    <div class="section-header blur-reveal">
      <p class="section-label">A Day at Base One</p>
      <h2>How It Works</h2>
    </div>
    <div class="steps">
      <div class="step reveal-left delay-1"><div class="step-num">01</div><h3>Arrive &amp; Prepare</h3><p>Collect equipment, check gas, load the boat. Everything charged and ready.</p></div>
      <div class="step reveal-right delay-2"><div class="step-num">02</div><h3>Briefing</h3><p>Review the dive plan, discuss conditions, confirm team roles.</p></div>
      <div class="step reveal-left delay-3"><div class="step-num">03</div><h3>Dive</h3><p>Boat transfer to the cave entrance. Execute with confidence.</p></div>
      <div class="step reveal-right delay-4"><div class="step-num">04</div><h3>Return &amp; Debrief</h3><p>Rinse, upload data, review the dive. What went well. What to refine.</p></div>
      <div class="step reveal-left delay-5"><div class="step-num">05</div><h3>Recharge &amp; Reset</h3><p>Plug in DPVs and lights, top off cylinders, update plans for tomorrow.</p></div>
    </div>
  </div>
</section>

<!-- ── Video ────────────────────────────────────────────────── -->
<VideoSection
  eyebrow="See It in Motion"
  heading="A Glimpse Beneath the Surface"
  text="A short film from the caves and waters of the Gulf of Orosei. Video to be supplied."
/>

<!-- ── HIDDEN (dropped for now — kept for later cleanup) ──────
<section class="section">
  <div class="container">
    <div class="grid-2">
      <div>
        <p class="section-label">The Experience</p>
        <h2>Why Divers Keep Returning</h2>
        <ul class="arrow-list mt-md">
          <li>Variety that grows with your skill level</li>
          <li>Real cave, not simulated environments</li>
          <li>Water clarity that rewards good technique</li>
          <li>Boat access to sites unreachable from shore</li>
        </ul>
      </div>
      <div>
        <p class="section-label">The Standards</p>
        <h2>How We Approach It</h2>
        <ul class="check-list mt-md">
          <li>Small groups, never rushed</li>
          <li>Logistics handled so you focus on diving</li>
          <li>Gas fills, boats, and support on site</li>
          <li>Conservation mindset in every dive plan</li>
        </ul>
      </div>
    </div>
  </div>
</section>
─────────────────────────────────────────────────────────── -->

<div class="image-divider scale-reveal" style="background-image:url('/images/divider-diving.jpg')"></div>

<CtaBlock
  heading="Plan Your Diving Days"
  text="From introductory cave dives to multi-day expedition support."
  primaryLabel="Plan Your Diving Days"
  secondaryLabel="Talk to Us"
/>

<style>
  .read-more { margin-top: 1rem; }
  .read-more summary {
    cursor: pointer; color: var(--teal); font-weight: 700; font-size: .9rem;
    list-style: none;
  }
  .read-more summary::-webkit-details-marker { display: none; }
  .read-more summary::before { content: '+ '; }
  .read-more[open] summary::before { content: '– '; }
  .read-more p { color: var(--text-muted); font-size: .95rem; line-height: 1.75; }
</style>
