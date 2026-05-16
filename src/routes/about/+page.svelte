<script>
  import PageHero from '$lib/components/PageHero.svelte';
  import CtaBlock from '$lib/components/CtaBlock.svelte';
  import { team } from '$lib/data/team.js';
</script>

<style>
  :global(.team-card.reveal-left:not(.visible))  { transform: translateX(-160px); }
  :global(.team-card.reveal-right:not(.visible)) { transform: translateX(160px); }
</style>

<svelte:head><title>About & Facility — Base One</title>
  <meta property="og:title" content="About & Facility — Base One">
  <meta property="og:description" content="Base One is part of AION Group, alongside SUEX and Blueprint Subsea. Full technical diving support in Cala Gonone — gas fills, DPV charging, boat fleet, classrooms, and storage.">
  <meta name="description" content="Base One is part of AION Group, alongside SUEX and Blueprint Subsea. Full technical diving support in Cala Gonone — gas fills, DPV charging, boat fleet, classrooms, and storage.">
</svelte:head>

<PageHero
  image="/images/hero-about.jpg"
  eyebrow="About Base One"
  heading="Built by People Who Care<br>Deeply About Diving"
  sub="A living network of collaborators, instructors, explorers, and engineers — supported by infrastructure built for serious diving."
/>

<!-- ── The Story ────────────────────────────────────────────── -->
<section class="section">
  <div class="container-narrow">
    <p class="section-label reveal-left">The Story</p>
    <h2 class="reveal-left delay-1">A place built around contribution, not ownership.</h2>
    <p class="lead mt-sm reveal-left delay-2">Base One is shaped by the people who teach here, guide here, test here, return here, and invest their energy here. What holds it together is a shared belief that diving can be done better.</p>
  </div>
</section>

<!-- ── The Team ─────────────────────────────────────────────── -->
<section class="team-section">
  <div class="section-header blur-reveal">
    <p class="section-label">The People</p>
    <h2>Behind Base One</h2>
    <p class="lead">Two decades of cave diving experience, exploration, and education — distilled into one place.</p>
  </div>

  <div class="team-grid">
    {#each team as member, i}
      <div class="team-card {i % 2 === 0 ? 'reveal-left' : 'reveal-right'}">
        <div class="team-photo">
          <img src={member.photo} alt={member.name} />
        </div>
        <div class="team-body">
          <p class="team-role reveal-up delay-2">{member.role}</p>
          <h3 class="team-name reveal-up delay-3">{member.name}</h3>
          {#each member.bio as paragraph, j}
            <p class="team-bio reveal-up delay-{j + 4}">{paragraph}</p>
          {/each}
          <div class="team-tags reveal-up delay-5">
            {#each member.tags as tag}
              <span class="team-tag">{tag}</span>
            {/each}
          </div>
        </div>
      </div>
    {/each}
  </div>
</section>

<!-- ── AION Group ───────────────────────────────────────────── -->
<section class="section section-alt">
  <div class="container">
    <div class="section-header blur-reveal">
      <p class="section-label">The Ecosystem</p>
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

<div class="quote-divider blur-reveal"><p class="brand-line">A place that changes how you dive.</p></div>

<!-- ── The Facility ─────────────────────────────────────────── -->
<section class="section" id="the-facility">
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

<!-- ── A Day at Base One ────────────────────────────────────── -->
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

<!-- ── Core Values ──────────────────────────────────────────── -->
<section class="section section-alt">
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

<!-- ── The Living Network ───────────────────────────────────── -->
<section class="section section-dark">
  <div class="container-narrow">
    <p class="section-label reveal-left teal-light">The Network</p>
    <h2 class="reveal-left delay-1">A Living Network</h2>
    <ul class="dot-list mt-md">
      <li class="reveal-left delay-1">GUE instructors delivering courses from Fundamentals to advanced cave and CCR</li>
      <li class="reveal-right delay-2">Technical divers returning season after season to push their limits</li>
      <li class="reveal-left delay-3">Engineers testing equipment in real operational conditions</li>
      <li class="reveal-right delay-4">Scientists contributing to cave survey and environmental monitoring</li>
      <li class="reveal-left delay-5">New divers experiencing serious diving culture for the first time</li>
    </ul>
  </div>
</section>

<div class="image-divider scale-reveal" style="background-image:url('/images/divider-about.jpg')"></div>

<CtaBlock
  heading="Come Be Part of It"
  text="Whether you are here to teach, learn, explore, test, or simply dive well — you are welcome."
  primaryLabel="Plan Your Trip"
  secondaryLabel="Get in Touch"
/>
