<script>
  import PhotoGallery from '$lib/components/PhotoGallery.svelte';
  import Testimonials from '$lib/components/Testimonials.svelte';
  import GalleryGrid from '$lib/components/GalleryGrid.svelte';
  import Faq from '$lib/components/Faq.svelte';

  import { onMount } from 'svelte';

  // ── Phreatic — images from phreatic.org (saved locally), one CTA under each ──
  const phreaticCards = [
    { src: '/images/phreatic/exploration.jpg', alt: 'Diver silhouette in a glowing cave pool', label: 'Join a Project', href: 'https://www.phreatic.org/', external: true },
    { src: '/images/phreatic/survey.jpg', alt: 'Survey gear and DPVs staged at a cave water edge', label: 'Help by Donating', href: 'https://www.phreatic.org/', external: true },
    { src: '/images/phreatic/sediment.jpg', alt: 'Diver collecting a sediment sample', label: 'Download Annual Report ↓', href: 'https://www.phreatic.org/report/Phreatic-2024-Annual-Report.pdf', external: true },
  ];

  // ── Base One Experience — placeholder local photos; SWAP for real smiling-people shots ──
  const experienceShots = [
    { src: '/images/hero-about.jpg', alt: 'Divers preparing before a dive' },
    { src: '/images/alt-facility-2.jpg', alt: 'Relaxing in the Base One common area' },
    { src: '/images/divider-facility.jpg', alt: 'A day out on the Base One boats' },
    { src: '/images/hero-training.jpg', alt: 'Open-water DPV training together' },
    { src: '/images/alt-diving-1.jpg', alt: 'A team exploring a cave' },
    { src: '/images/hero-cala-gonone.jpg', alt: 'Cala Gonone in the sunshine' },
  ];

  // ── Topside activities (for non-divers) — verified placeholders, swap later ──
  const topsideShots = [
    { src: 'https://images.unsplash.com/photo-1604537466158-719b1972feb8?w=900&q=70&auto=format&fit=crop', alt: 'Kayaking on calm water', caption: 'Kayaking' },
    { src: 'https://images.unsplash.com/photo-1522163182402-834f871fd851?w=900&q=70&auto=format&fit=crop', alt: 'Rock climbing above the sea', caption: 'Rock climbing' },
    { src: 'https://images.unsplash.com/photo-1551632811-561732d1e306?w=900&q=70&auto=format&fit=crop', alt: 'Hiking toward a mountain', caption: 'Hiking & trekking' },
    { src: 'https://images.unsplash.com/photo-1530549387789-4c1017266635?w=900&q=70&auto=format&fit=crop', alt: 'Snorkelling in blue water', caption: 'DPV snorkeling' },
  ];

  const faqs = [
    { q: 'Do I need to be a certified diver to come?', a: 'No. Base One is built for serious divers, but Cala Gonone is also a stunning place to visit — non-divers can snorkel, kayak, hike, climb, and explore while their group dives.' },
    { q: 'What level of diver is Base One for?', a: 'Everyone from recreational divers through to advanced cave and CCR. We run GUE training from Fundamentals upward, plus guided cave, reef, and open-water dives.' },
    { q: 'When is the diving season?', a: 'Most diving and courses run April through November, with warm, clear water and long bottom times. Off-season diving is possible on request.' },
    { q: 'Can you help with accommodation and transfers?', a: 'Yes. We work with local hotels and apartments and can arrange airport shuttle transfers — you will not need a car in Cala Gonone.' },
    { q: 'How do I get a price?', a: 'Use the Plan your Trip page to tell us what you want to do, and we will build a tailored plan for diving, training, and your stay.' },
  ];

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
    <h1>Serious Diving,<br>Properly Supported</h1>
    <p class="hero-sub">Cave diving, training, DPV support, and expedition-level logistics from Cala Gonone, Sardinia.</p>
    <ul class="hero-highlights">
      <li>Cave &amp; CCR</li><li>GUE Training Hub</li><li>AION Group</li>
    </ul>
    <div class="hero-buttons">
      <a href="/plan" class="btn btn-teal btn-large">Book Training</a>
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
      <span class="info-card-label">Training Standard</span>
      <span class="info-card-value">GUE Training Center</span>
      <span class="info-card-sub">Fundamentals through Cave &amp; CCR</span>
    </div>
  </div>
</div>

<section class="section">
  <div class="container-narrow">
    <p class="section-label reveal-left">The Place</p>
    <h2 class="reveal-left delay-1">A base built for people who take diving seriously.</h2>
    <p class="lead mt-sm reveal-left delay-2">Base One is not a resort dive shop. It is a specialist operation built around cave diving, technical training, underwater technology, and exploration in Cala Gonone, one of the Mediterranean’s most striking coastal wilderness areas — a place where world-class diving meets dramatic limestone landscapes, clear blue water, and one of Sardinia’s most beautiful tourism destinations.</p>
    <ul class="check-list mt-md">
      <li class="reveal-left delay-1">Extraordinary cave-diving sites of remarkable variety, accessible by boat directly from Base One in Cala Gonone</li>
      <li class="reveal-right delay-2">GUE diving courses from Fundamentals to advanced cave, technical, and CCR training, including instructor development.</li>
      <li class="reveal-left delay-3">SUEX DPV rental, support, test center, and field-proven operational know-how</li>
      <li class="reveal-right delay-4">A community of selected GUE and non-GUE instructors, explorers, and professionals who raise the bar</li>
    </ul>
  </div>
</section>

<div class="quote-divider"><p class="brand-line">For divers who know that good dives start before entering the water.</p></div>

<PhotoGallery />

<section class="section section-alt">
  <div class="container">
    <div class="section-header blur-reveal"><p class="section-label">Four Pillars</p><h2>Everything Base One Offers</h2></div>
    <div class="pillars">
      <div class="pillar-card reveal-left delay-1"><ul class="tag-list"><li>Cave</li><li>Wreck</li><li>Recreational Options</li></ul><h3>Diving</h3><p>Cave systems of the Gulf of Orosei — shallow passages, power caves, narrow tunnels, halocline zones, speleothem galleries, and deep exploration frontiers.</p><a href="/diving" class="pillar-link">Explore the Diving →</a></div>
      <div class="pillar-card reveal-right delay-2"><ul class="tag-list"><li>GUE</li><li>TDI</li><li>IANTD</li></ul><h3>Training</h3><p>Real development in an environment shaped by active operations. GUE training from Fundamentals through advanced Cave and CCR, alongside selected TDI and IANTD instructors and training pathways.</p><a href="/training" class="pillar-link">Build your Training →</a></div>
      <div class="pillar-card reveal-left delay-3"><ul class="tag-list"><li>Survey</li><li>Science</li><li>Exploration</li></ul><h3>Phreatic</h3><p>Join selected exploration, survey, and citizen-science projects connected to the Phreatic ecosystem. Participation is project-based, and separate from normal booking.</p><a href="/exploration" class="pillar-link">Join Active Projects →</a></div>
      <div class="pillar-card reveal-right delay-4"><ul class="tag-list"><li>TÜV-Certified Gas Station</li><li>Boat &amp; Rhib Support</li><li>SUEX Center</li></ul><h3>Facility &amp; Logistics</h3><p>Gas fills, boats, classrooms, DPVs and equipment hire. Infrastructure that removes friction from serious diving.</p><a href="/about#the-facility" class="pillar-link">View Facility →</a></div>
    </div>
  </div>
</section>

<!-- ── Phreatic ─────────────────────────────────────────────── -->
<section class="section phreatic-section">
  <div class="container">
    <div class="section-header blur-reveal">
      <p class="section-label">Citizen Science &amp; Community</p>
      <h2>Phreatic</h2>
      <p class="lead">Base One is the operational home of Phreatic — a non-profit organization exploring and protecting the flooded caves and groundwater of Sardinia. Volunteer divers contribute to cave survey, 3D mapping, sediment or biology sampling, and conservation. Your dives become real data.</p>
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

<!-- ── The Base One Experience ──────────────────────────────── -->
<section class="section section-alt">
  <div class="container">
    <div class="section-header blur-reveal">
      <p class="section-label">More Than the Diving</p>
      <h2>The Base One Experience</h2>
      <p class="lead">Long days in the water, good people on the surface, and a place that stays with you. This is what it feels like to dive with Base One.</p>
    </div>
    <GalleryGrid images={experienceShots} columns={3} />
  </div>
</section>

<!-- ── Not Diving? Topside activities ───────────────────────── -->
<section class="section">
  <div class="container">
    <div class="section-header blur-reveal">
      <p class="section-label">Not Diving?</p>
      <h2>Plenty to Do Above the Surface</h2>
      <p class="lead">Travelling with non-divers, or taking a day off? Cala Gonone is one of Europe's great outdoor playgrounds, with kayaking, climbing, hiking, and snorkelling right on your doorstep.</p>
    </div>
    <GalleryGrid images={topsideShots} columns={4} />
    <div class="text-center mt-lg scale-reveal">
      <a href="/cala-gonone" class="btn btn-outline btn-large">Explore the Area →</a>
    </div>
  </div>
</section>

<section class="section section-dark">
  <div class="container-narrow">
    <p class="section-label reveal-left">The Environment</p>
    <h2 class="reveal-left delay-1">The Place That Raises Your Game</h2>
    <ul class="dot-list mt-md">
      <li class="reveal-left delay-1">Crystal clear and warm water conditions</li>
      <li class="reveal-right delay-2">Shallow and deeper caves ideal for training and long exposures</li>
      <li class="reveal-left delay-3">A community where standards are high because everyone holds them</li>
      <li class="reveal-right delay-4">Infrastructure that handles the logistics so you focus on the diving</li>
    </ul>
  </div>
</section>

<!-- Full-bleed video divider (shows poster until a video file is added) -->
<div class="video-divider scale-reveal">
  <video class="video-divider-media" poster="/images/divider-cave.jpg" muted loop playsinline autoplay preload="none">
    <!-- <source src="/videos/raises-your-game.mp4" type="video/mp4" /> -->
  </video>
</div>

<Testimonials />

<!-- ── FAQ ──────────────────────────────────────────────────── -->
<section class="section section-alt">
  <div class="container">
    <div class="section-header blur-reveal">
      <p class="section-label">Good to Know</p>
      <h2>Frequently Asked Questions</h2>
    </div>
    <Faq items={faqs} />
  </div>
</section>

<section class="cta-final">
  <div class="cta-final-inner scale-reveal">
    <div class="cta-final-text">
      <p class="eyebrow teal-light">Start Planning</p>
      <h2>Where Will You<br>Dive Next?</h2>
      <p class="lead">Tell us what you are here to do — training, cave diving, exploration, or all three.</p>
      <div class="cta-buttons">
        <a href="/training#schedule" class="btn btn-teal btn-large">Book Training</a>
        <a href="/plan#contact" class="btn btn-ghost btn-large">Get in Touch</a>
        <a href="/exploration" class="btn btn-ghost btn-large">Join a Project</a>
      </div>
    </div>
    <div class="cta-final-stats">
      <div class="cta-stat">
        <span class="cta-stat-num">100</span>
        <span class="cta-stat-label">Access to 100+ km of cave systems</span>
      </div>
      <div class="cta-stat-sep"></div>
      <div class="cta-stat">
        <span class="cta-stat-num">GUE</span>
        <span class="cta-stat-label">Premium Dive Center</span>
      </div>
      <div class="cta-stat-sep"></div>
      <div class="cta-stat">
        <span class="cta-stat-num">Active</span>
        <span class="cta-stat-label">Active by conditions and demand</span>
      </div>
    </div>
  </div>
</section>

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

  /* Full-bleed video divider */
  .video-divider {
    width: 100vw;
    margin-left: calc(50% - 50vw);
    height: clamp(320px, 55vh, 600px);
    overflow: hidden;
    background: #04121b;
  }
  .video-divider-media { width: 100%; height: 100%; object-fit: cover; display: block; }

  .mt-lg { margin-top: 2rem; }
  @media (max-width: 760px) {
    .phreatic-cards { grid-template-columns: 1fr; max-width: 420px; margin: 0 auto; }
  }
</style>
