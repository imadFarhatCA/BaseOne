<script>
  import PageHero from '$lib/components/PageHero.svelte';
  import CtaBlock from '$lib/components/CtaBlock.svelte';
  import CaveTimeline from '$lib/components/CaveTimeline.svelte';
  import BigCta from '$lib/components/BigCta.svelte';
  import VideoSection from '$lib/components/VideoSection.svelte';
  import { openWater } from '$lib/data/openWater.js';
</script>

<svelte:head><title>Diving - Base One</title>
  <meta property="og:title" content="Diving - Base One">
  <meta property="og:description" content="Cave, wreck and open-water diving in the Gulf of Orosei, Sardinia. One of Europe's finest cave diving destinations, guided and supported by Base One.">
  <meta name="description" content="Cave, wreck and open-water diving in the Gulf of Orosei, Sardinia. One of Europe's finest cave diving destinations, guided and supported by Base One.">
</svelte:head>

<!-- ── Hero ─────────────────────────────────────────────────── -->
<PageHero
  image="/images/hero-diving.jpg"
  credit="JP Bresser"
  eyebrow="Cave Diving Sardinia"
  heading="Dive a Place That<br>Still Feels Wild"
  sub="Cave systems of extraordinary beauty, variety, and potential - supported by logistics built for serious diving."
/>

<!-- ── Intro (condensed: lead visible, long copy in Read more for SEO) ── -->
<section class="section">
  <div class="container-narrow">
    <p class="section-label reveal-left">The Environment</p>
    <h2 class="reveal-left delay-1">One of the last wild coastlines in the Mediterranean.</h2>
    <p class="lead mt-sm reveal-left delay-2">The Gulf of Orosei is one of the last stretches of Italian coastline without buildings or coastal roads. Along forty kilometres of wild limestone coast, high white cliffs drop into turquoise water and hide hundreds of dry and flooded caves, including some of the longest underwater cave systems in Europe.</p>
    <details class="read-more reveal-left delay-3">
      <summary>Read more about the geology</summary>
      <p class="mt-sm">These freshwater springs are shaped by saltwater intrusion from the sea, creating layered cave environments with both fresh and marine water. Speleothems, decorations, and changing passage levels show that many of these caves were once dry during different ice-age sea-level periods. Branching passages, sumps, and long shallow galleries make the Gulf of Orosei one of Europe's premier cave diving destinations - and a vast maze still being explored.</p>
      <p class="mt-sm">Most shallow cave systems in the Gulf of Orosei have average depths between 6 and 12 metres. Saltwater temperatures are usually above 22°C, while freshwater sections can be around 15°C. These conditions allow long bottom times and minimum decompression.</p>
      <p class="mt-sm">Other systems are deeper and more complex, requiring advanced planning, longer exposure, and staged decompression - ideal terrain for experienced rebreather cave divers.</p>
    </details>
  </div>
</section>

<!-- ── The Caves (tabs) ─────────────────────────────────────── -->
<CaveTimeline />

<!-- ── Open Water & Wrecks ──────────────────────────────────── -->
<CaveTimeline
  items={openWater}
  label="Beyond the Caves"
  heading="Open Water &amp; Wrecks"
  lead="Not every dive in the Gulf of Orosei goes overhead. Beyond its caves, the area offers clear-water wreck dives, wall dives, shallow coastal sites, caverns, and sheltered locations ideal for recreational divers, warm-up dives, and skills development before advanced cave, technical, or CCR training."
/>

<!-- ── Book Now ─────────────────────────────────────────────── -->
<BigCta
  heading="Ready to Get in the Water?"
  text="From cave systems to wrecks and open water, choose your diving days and let Base One handle the logistics."
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
      <div class="step reveal-left delay-1"><div class="step-num">01</div><h3>Prepare</h3><p>Prepare your equipment, check the gas, load the boat. Everything is charged and ready.</p></div>
      <div class="step reveal-right delay-2"><div class="step-num">02</div><h3>Brief</h3><p>Review. Discuss. Confirm. Go over the plan, assess the conditions, and make sure everyone knows their role.</p></div>
      <div class="step reveal-left delay-3"><div class="step-num">03</div><h3>Dive</h3><p>Ride out with the boat. Gear up. Dive with confidence, and don't forget to have fun.</p></div>
      <div class="step reveal-right delay-4"><div class="step-num">04</div><h3>Return</h3><p>Rinse the gear, upload the data, debrief the dive: what worked, and what needs refining.</p></div>
      <div class="step reveal-left delay-5"><div class="step-num">05</div><h3>Recharge</h3><p>Plug in. Top off. Plan ahead. DPVs and lights charging, cylinders filled, tomorrow's dive mapped out.</p></div>
      <div class="step reveal-right delay-5"><div class="step-num">06</div><h3>Reset</h3><p>Unwind and reset: good food, Aperol in hand and friends around the table.</p></div>
    </div>
  </div>
</section>

<!-- ── Video ────────────────────────────────────────────────── -->
<!-- Hidden text: "A short film from the caves and waters of the Gulf of Orosei." -->
<VideoSection
  eyebrow="See It in Motion"
  heading="A Glimpse Beneath the Surface"
  src="/videos/grotte.mp4"
  poster="/videos/grotte.jpg"
/>

<!-- ── HIDDEN (dropped for now - kept for later cleanup) ──────
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
