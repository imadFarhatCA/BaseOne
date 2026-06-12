<script>
  import PageHero from '$lib/components/PageHero.svelte';
  import CtaBlock from '$lib/components/CtaBlock.svelte';
  import CourseCalendar from '$lib/components/CourseCalendar.svelte';
  import GalleryGrid from '$lib/components/GalleryGrid.svelte';
  import { courses } from '$lib/data/courses.js';

  const trainingShots = [
    { src: '/images-training/_DSC0006.jpg', alt: 'Instructor leading a theory session in the classroom', caption: 'Theory & Briefings' },
    { src: '/images-training/_DSC0050.jpg', alt: 'Students on the dive boat heading to the site', caption: 'Boat Experience' },
    { src: '/images-training/_DSC0063.jpg', alt: 'Divers at the surface near the Sardinian cliffs', caption: 'Surface Briefs' },
    { src: '/images-training/_DSC0074.jpg', alt: 'Dive team pre-dive briefing on the boat', caption: 'Boat Briefings' },
  ];

  const reasons = [
    { t: 'Real caves as your classroom', d: 'Train in genuine Sardinian cave systems — not a pool or a simulated overhead.' },
    { t: 'High standards, lived daily', d: 'You enter an operation where details matter and progression is earned, not handed over.' },
    { t: 'Strong GUE presence', d: 'From Fundamentals through advanced Cave and CCR, taught by experienced instructors.' },
    { t: 'Connected to real operations', d: 'Training tied to active exploration and projects — learning with consequence and context.' },
    { t: 'Small groups', d: 'Limited numbers mean more water time, more feedback, and a pace that fits you.' },
    { t: 'Full logistics on site', d: 'Gas fills, boats, classrooms and equipment — so you focus only on the diving.' },
  ];
</script>

<svelte:head><title>Training — Base One</title>
  <meta property="og:title" content="Training — Base One">
  <meta property="og:description" content="GUE and technical training courses in Sardinia — Fundamentals through advanced cave and CCR. Color-coded course calendar at Base One.">
  <meta name="description" content="GUE and technical training courses in Sardinia — Fundamentals through advanced cave and CCR. Color-coded course calendar at Base One.">
</svelte:head>

<!-- ── Hero ─────────────────────────────────────────────────── -->
<PageHero
  image="/images/hero-training.jpg"
  eyebrow="Training & Education"
  heading="Training That Stays<br>With You"
  sub="Not just courses. Not just certifications. Real development in a place where high standards are lived every day."
/>

<!-- ── Why Train Here ───────────────────────────────────────── -->
<section class="section">
  <div class="container">
    <div class="section-header blur-reveal">
      <p class="section-label">The Approach</p>
      <h2>Why Come Train Here</h2>
      <p class="lead">Learning happens in an environment shaped by real operations, real experience, and real consequence.</p>
    </div>
    <div class="feature-cards">
      {#each reasons as r, i}
        <div class="feature-card reveal-up delay-{(i % 3) + 1}">
          <h3>{r.t}</h3>
          <p>{r.d}</p>
        </div>
      {/each}
    </div>
  </div>
</section>

<div class="quote-divider"><p class="brand-line">For people who know that good diving is never accidental.</p></div>

<!-- ── Training Gallery ─────────────────────────────────────── -->
<section class="section">
  <div class="container">
    <GalleryGrid images={trainingShots} columns={4} />
  </div>
</section>

<!-- ── Course Calendar (color-coded, click for details + enquiry) ── -->
<section class="section section-alt" id="schedule">
  <div class="container">
    <div class="section-header blur-reveal">
      <p class="section-label">Course Calendar</p>
      <h2>Upcoming at Base One</h2>
      <p class="lead">Click any course for details. GUE courses book through GUE.com; other courses send straight to us.</p>
    </div>
    <CourseCalendar {courses} />
    <div class="text-center mt-lg scale-reveal">
      <a href="https://www.gue.com/diver-training/gue-class-schedule" target="_blank" class="btn btn-outline btn-large">View Full GUE Schedule →</a>
    </div>
  </div>
</section>

<div class="image-divider scale-reveal" style="background-image:url('/images/divider-training.jpg')"></div>

<CtaBlock
  heading="Begin Your Journey"
  text="Whether it is your first serious training step or your most advanced Cave, CCR or technical program, the environment here will shape how you grow."
  primaryLabel="Ask About Training"
  secondaryLabel="Contact Us"
/>
