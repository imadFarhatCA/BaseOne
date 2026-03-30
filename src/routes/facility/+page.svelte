<script>
  import PageHero from '$lib/components/PageHero.svelte';
  import CtaBlock from '$lib/components/CtaBlock.svelte';
</script>

<svelte:head><title>Facility — Base One</title></svelte:head>

<PageHero
  image="/images/hero-facility.jpg"
  eyebrow="Facility & Equipment"
  heading="Support You Can Feel<br>Without Seeing"
  sub="Infrastructure designed so demanding dives feel smoother, calmer, and more focused."
/>

<section class="section">
  <div class="container-narrow">
    <p class="section-label reveal-left">The Facility</p>
    <h2 class="reveal-left delay-1">Everything you need. Nothing that gets in the way.</h2>
    <p class="lead mt-sm reveal-left delay-2">A good base does not ask for attention. It earns trust. The role of the facility is simple: remove friction from serious diving.</p>
  </div>
</section>

<section class="section section-alt">
  <div class="container">
    <div class="section-header blur-reveal">
      <p class="section-label">What We Offer</p>
      <h2>Built for Serious Operations</h2>
    </div>
    <div class="feature-cards">
      <div class="feature-card reveal-left delay-1"><div class="feature-icon"><img src="/images/icons/double-tanks.svg" alt="" /></div><h3>Gas Fills</h3><p>Air, Nitrox, Trimix, and custom blends. High-pressure fills for backmount, sidemount, and stage cylinders.</p></div>
      <div class="feature-card reveal-right delay-2"><div class="feature-icon"><img src="/images/icons/rib-boat.svg" alt="" /></div><h3>Boat Fleet</h3><p>RIBs and a larger vessel for reaching cave entrances accessible only from the sea. Reliable, maintained, skippered.</p></div>
      <div class="feature-card reveal-left delay-3"><div class="feature-icon"><img src="/images/icons/classroom.svg" alt="" /></div><h3>Classrooms</h3><p>Dedicated spaces for briefings, debriefs, theory sessions, and course work — with projection and whiteboards.</p></div>
      <div class="feature-card reveal-right delay-1"><div class="feature-icon"><img src="/images/icons/gauge.svg" alt="" /></div><h3>Charging Stations</h3><p>DPV charging, light charging, camera battery management — keep equipment powered and ready between dives.</p></div>
      <div class="feature-card reveal-left delay-2"><div class="feature-icon"><img src="/images/icons/mask.svg" alt="" /></div><h3>Equipment Hire</h3><p>Backmount and sidemount rigs, lights, reels, DPVs, and accessories. Well-maintained and regularly inspected.</p></div>
      <div class="feature-card reveal-right delay-3"><div class="feature-icon"><img src="/images/icons/storage-box.svg" alt="" /></div><h3>Storage & Security</h3><p>Secure storage between dive days. Rinse tanks, drying areas, and protected overnight storage.</p></div>
    </div>
  </div>
</section>

<div class="quote-divider"><p class="brand-line">Precision on the surface. Possibility below.</p></div>

<section class="section">
  <div class="container-narrow">
    <div class="section-header blur-reveal">
      <p class="section-label">A Day at Base One</p>
      <h2>How It Works</h2>
    </div>
    <div class="steps">
      <div class="step reveal-left delay-1"><div class="step-num">01</div><h3>Arrive & Prepare</h3><p>Collect equipment, check gas, load the boat. Everything charged and ready.</p></div>
      <div class="step reveal-right delay-2"><div class="step-num">02</div><h3>Briefing</h3><p>Review the dive plan, discuss conditions, confirm team roles.</p></div>
      <div class="step reveal-left delay-3"><div class="step-num">03</div><h3>Dive</h3><p>Boat transfer to the cave entrance. Execute with confidence.</p></div>
      <div class="step reveal-right delay-4"><div class="step-num">04</div><h3>Return & Debrief</h3><p>Rinse, upload data, review the dive. What went well. What to refine.</p></div>
      <div class="step reveal-left delay-5"><div class="step-num">05</div><h3>Recharge & Reset</h3><p>Plug in DPVs and lights, top off cylinders, update plans for tomorrow.</p></div>
    </div>
  </div>
</section>

<div class="image-divider scale-reveal" style="background-image:url('/images/divider-facility.jpg')"></div>

<CtaBlock
  heading="Plan Your Logistics"
  text="Gas mixes, boat schedules, equipment, classroom time — tell us what you need."
  primaryLabel="Plan Logistics"
  secondaryLabel="Contact Us"
/>
