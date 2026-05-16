<script>
  import PhotoGallery from '$lib/components/PhotoGallery.svelte';
  import Testimonials from '$lib/components/Testimonials.svelte';

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
        <div class="gyro-icon">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 283.46 283.46" width="64" height="64">
            <path fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="4" d="M253.41,151.28c-.12,0-.24-.38-.39-.38l-.58.57c.99,5.13.09,10.51-.09,15.71-1.6,1.5-4.81,5.85-6.85,6.18-1.8.29-10.91.34-12.6.01-1.94-.37-4.01-4.17-6.35-4.32-2.8-.18-5.45,4.01-7.09,4.32-1.42.27-9.97.26-11.42-.01-1.8-.33-2.89-2.56-4.19-3.31-4.81-2.75-6.01,2.63-9.34,3.23-1.43.26-11.43.3-12.33-.11-1.33-.6-3.65-4.14-5.72-4.17-2.36-.03-4.59,3.8-6.8,4.29-1.49.33-7.74.3-9.4.09-3.24-.4-5.96-3.6-8.23-4.42-1.89-.68-4.01-.03-5.92-.63-2.18,1.18-3.05,4.95-5.59,5.41-5.41.99-14.18-.46-20.13,0-5.24.41-6.55,5.08-10.73,7.43l-19.23.43c-.5.36.16,3.43-1.23,4.77-1.67,1.61-8.51.43-11.06.78-.92.13-1.41.7-2.33.83-2.84.4-12.64-.73-14.26.34-.57.37-.84,1.41-1.04,1.52-.41.24-5.9.16-6.75,0-1.36-.27-1.05-1.09-1.62-1.51-1.42-1.04-11.2.02-13.87-.35-.87-.12-1.43-.74-1.97-.79-6.41-.55-15.29.86-16.38-7.7l.02-76.59c-.04-2.69,3.28-6.65,5.8-7.22,1.65-.38,4.03.04,5.83-.09,2.71-.18,4.83-.9,7.1-1.19,3.75-.47,8.42.41,12.25.01,1.78-.19,1.76-1.12,2.04-1.18.87-.19,6.48-.14,7.33.09,6.17,1.67,9.42.35,15.11,1.07,1.21.15,1.67,1.01,2.76,1.18,2.75.44,6.7,0,9.43.44,3.01.48,2.02,4.26,4.38,4.7l17.57.19c2.01,1.44,5.61,6.85,8.09,7.3,2.61.48,5.76-.35,8.25-.39,3-.05,12.19-.5,14.44.19,1.69.52,4.27,4.14,4.98,5.77,1.62-.44,3.8-.17,5.28-.6,1.94-.57,5.44-4.06,7.5-4.73,1.05-.34,10.51-.46,11.55-.15,1.24.85,2.35,3.18,3.6,3.89,4.05,2.33,6.48-3.57,9.88-3.98,1.53-.18,10.26-.25,11.38.09,1.35.4,1.16,2.21,1.55,2.59.25.25,3.87,1.71,4.45,1.71,2.62,0,4.75-2.99,6.7-4.4h12.58c.66,1.86,3.73,4.37,5.58,4.41,3.5.08,4.74-3.92,7.12-4.37,1.65-.32,10.86-.27,12.6.01,1.92.32,1.57,1.54,2.37,2.36,1.37,1.42,3.59,2.51,4.37,4.33.93,2.19.45,4.61.6,6.9.16,2.53.92,5.3.09,7.92l.5.57h14.21c.71,0,1.3,2.28,1.38,2.96.4,3.49.32,11.04.02,14.62-.09,1.01-.48,3.34-1.79,3.34-4.46,0-8.96.12-13.42,0ZM259.02,135.58c-6.47,1.36-4.79,11.56,2.58,9.68,5.13-1.3,3.44-10.95-2.58-9.68Z"/>
          </svg>
        </div>
        <p class="gyro-title">Move the light</p>
        <p class="gyro-sub">Tilt your phone to explore the cave</p>
        <button class="gyro-confirm" on:click={enableGyro}>Enable</button>
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
      <div class="pillar-card reveal-right delay-4"><ul class="tag-list"><li>Trimix</li><li>DPV</li><li>CCR Support</li></ul><h3>Facility</h3><p>Gas fills, boats, classrooms, DPV charging, equipment hire. Infrastructure that removes friction from serious diving.</p><a href="/about#the-facility" class="pillar-link">View Facility →</a></div>
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

<Testimonials />

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
        <span class="cta-stat-label">Affiliated Center</span>
      </div>
      <div class="cta-stat-sep"></div>
      <div class="cta-stat">
        <span class="cta-stat-num">365</span>
        <span class="cta-stat-label">Days a Year</span>
      </div>
    </div>
  </div>
</section>
