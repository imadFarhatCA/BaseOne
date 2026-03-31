<script>
  import PhotoGallery from '$lib/components/PhotoGallery.svelte';

  import { onMount } from 'svelte';

  let mx = 50, my = 50;
  let showGyroBtn = false;
  let gyroActive = false;

  function onMouseMove(e) {
    const r = e.currentTarget.getBoundingClientRect();
    mx = ((e.clientX - r.left) / r.width) * 100;
    my = ((e.clientY - r.top) / r.height) * 100;
  }

  function onOrient(e) {
    mx = Math.min(100, Math.max(0, 50 + (e.gamma / 45) * 50));
    my = Math.min(100, Math.max(0, 50 + ((e.beta - 30) / 45) * 50));
  }

  async function enableGyro() {
    if (typeof DeviceOrientationEvent !== 'undefined' && typeof DeviceOrientationEvent.requestPermission === 'function') {
      const perm = await DeviceOrientationEvent.requestPermission();
      if (perm === 'granted') {
        window.addEventListener('deviceorientation', onOrient);
        gyroActive = true;
        showGyroBtn = false;
      }
    } else {
      window.addEventListener('deviceorientation', onOrient);
      gyroActive = true;
      showGyroBtn = false;
    }
  }

  onMount(() => {
    // Show button only on touch devices that support orientation
    if (window.matchMedia('(hover: none)').matches && typeof DeviceOrientationEvent !== 'undefined') {
      showGyroBtn = true;
    }
    return () => window.removeEventListener('deviceorientation', onOrient);
  });
</script>

<svelte:head><title>Base One</title>
  <meta property="og:title" content="Base One | Cave Diving &amp; Technical Training in Sardinia">
  <meta property="og:description" content="A technical dive center in Cala Gonone, Sardinia. Cave diving, GUE training, DPV operations, and exploration — built for serious divers.">
  <meta name="description" content="A technical dive center in Cala Gonone, Sardinia. Cave diving, GUE training, DPV operations, and exploration — built for serious divers.">
</svelte:head>

<section class="hero" role="region" aria-label="Hero" on:mousemove={onMouseMove}>
  <div class="hero-bg" style="background-image:url('/images/hero-cave.jpg')"></div>
  <div class="hero-spotlight" style="--mx:{mx}%;--my:{my}%"></div>
  {#if showGyroBtn}
    <div class="gyro-prompt">
      <div class="gyro-prompt-inner">
        <div class="gyro-icon">🔦</div>
        <p class="gyro-title">Move the light</p>
        <p class="gyro-sub">Tilt your phone to explore the cave</p>
        <button class="gyro-confirm" on:click={enableGyro}>Enable</button>
        <button class="gyro-skip" on:click={() => showGyroBtn = false}>Skip</button>
      </div>
    </div>
  {/if}
  <div class="hero-content">
    <div class="eyebrow stone">Cala Gonone, Sardinia</div>
    <h1>Where Serious Divers<br>Come to Grow</h1>
    <p class="hero-sub">Training, exploration, technology, and community — in one place.</p>
    <ul class="hero-highlights">
      <li>GUE Training Hub</li><li>Cave &amp; Technical Diving</li><li>SUEX DPV Base</li><li>AION Group</li>
    </ul>
    <div class="hero-buttons">
      <a href="/plan" class="btn btn-teal btn-large">Plan Your Trip</a>
      <a href="/diving" class="btn btn-ghost btn-large">Explore the Diving</a>
    </div>
  </div>
</section>

<div class="info-cards-wrap">
  <div class="info-cards">
    <div class="info-card reveal-left delay-1">
      <span class="info-card-icon">◎</span>
      <span class="info-card-label">Location</span>
      <span class="info-card-value">Cala Gonone, Sardinia</span>
      <span class="info-card-sub">Gulf of Orosei</span>
    </div>
    <div class="info-card reveal-up delay-2">
      <span class="info-card-icon">◈</span>
      <span class="info-card-label">Part of</span>
      <span class="info-card-value">AION Group</span>
      <span class="info-card-sub">Base One · SUEX · Blueprint Subsea</span>
    </div>
    <div class="info-card reveal-right delay-3">
      <span class="info-card-icon">◉</span>
      <span class="info-card-label">Standard</span>
      <span class="info-card-value">GUE Training Center</span>
      <span class="info-card-sub">Fundamentals through Cave &amp; CCR</span>
    </div>
  </div>
</div>

<section class="section">
  <div class="container-narrow">
    <p class="section-label reveal-left">The Place</p>
    <h2 class="reveal-left delay-1">A base built for people who take diving seriously.</h2>
    <p class="lead mt-sm reveal-left delay-2">Base One is not a resort dive shop. It is a specialist operation — built around cave diving, technical training, underwater technology, and exploration in one of the Mediterranean's most significant cave systems.</p>
    <ul class="check-list mt-md">
      <li class="reveal-left delay-1">Cave systems of extraordinary variety, accessible by boat from the base</li>
      <li class="reveal-right delay-2">GUE training from Fundamentals through advanced cave and CCR</li>
      <li class="reveal-left delay-3">SUEX DPV operations and testing in real cave environments</li>
      <li class="reveal-right delay-4">A community of instructors, explorers, and professionals who raise the bar</li>
    </ul>
  </div>
</section>

<div class="quote-divider"><p class="brand-line">For people who know that good diving is never accidental.</p></div>

<PhotoGallery />

<section class="section section-alt">
  <div class="container">
    <div class="section-header blur-reveal"><p class="section-label">Four Pillars</p><h2>Everything Base One Offers</h2></div>
    <div class="pillars">
      <div class="pillar-card reveal-left delay-1"><ul class="tag-list"><li>Cave</li><li>Technical</li><li>Recreational</li></ul><h3>Diving</h3><p>Cave systems of the Gulf of Orosei — broad passages, halocline zones, speleothem galleries, and exploration frontiers.</p><a href="/diving" class="pillar-link">Explore the Diving →</a></div>
      <div class="pillar-card reveal-right delay-2"><ul class="tag-list"><li>GUE</li><li>Cave</li><li>CCR</li><li>DPV</li></ul><h3>Training</h3><p>Real development in an environment shaped by real operations. GUE courses from Fundamentals through advanced cave and CCR.</p><a href="/training" class="pillar-link">View Training →</a></div>
      <div class="pillar-card reveal-left delay-3"><ul class="tag-list"><li>Survey</li><li>Science</li><li>Projects</li></ul><h3>Exploration</h3><p>Active survey projects, citizen science through Phreatic, and support for demanding operations where discovery still happens.</p><a href="/exploration" class="pillar-link">See Projects →</a></div>
      <div class="pillar-card reveal-right delay-4"><ul class="tag-list"><li>Trimix</li><li>DPV</li><li>CCR Support</li></ul><h3>Facility</h3><p>Gas fills, boats, classrooms, DPV charging, equipment hire. Infrastructure that removes friction from serious diving.</p><a href="/facility" class="pillar-link">View Facility →</a></div>
    </div>
  </div>
</section>

<section class="section section-dark">
  <div class="container-narrow">
    <p class="section-label reveal-left">The Environment</p>
    <h2 class="reveal-left delay-1">A Place That Raises Your Game</h2>
    <ul class="dot-list mt-md">
      <li class="reveal-left delay-1">Water so clear your buoyancy flaws are immediately visible</li>
      <li class="reveal-right delay-2">Caves that reward patience, planning, and precise movement</li>
      <li class="reveal-left delay-3">A community where standards are high because everyone holds them</li>
      <li class="reveal-right delay-4">Infrastructure that handles the logistics so you focus on the diving</li>
    </ul>
  </div>
</section>

<div class="image-divider scale-reveal" style="background-image:url('/images/divider-cave.jpg')"></div>

<section class="cta-final">
  <div class="cta-final-inner scale-reveal">
    <div class="cta-final-text">
      <p class="eyebrow teal-light">Start Planning</p>
      <h2>Where Will You<br>Dive Next?</h2>
      <p class="lead">Tell us what you are here to do — training, cave diving, exploration, or all three.</p>
      <div class="cta-buttons">
        <a href="/plan" class="btn btn-teal btn-large">Plan Your Trip</a>
        <a href="/plan#contact" class="btn btn-ghost btn-large">Get in Touch</a>
      </div>
    </div>
    <div class="cta-final-stats">
      <div class="cta-stat">
        <span class="cta-stat-num">12+</span>
        <span class="cta-stat-label">Cave Systems</span>
      </div>
      <div class="cta-stat-sep"></div>
      <div class="cta-stat">
        <span class="cta-stat-num">GUE</span>
        <span class="cta-stat-label">Certified Center</span>
      </div>
      <div class="cta-stat-sep"></div>
      <div class="cta-stat">
        <span class="cta-stat-num">365</span>
        <span class="cta-stat-label">Days a Year</span>
      </div>
    </div>
  </div>
</section>
