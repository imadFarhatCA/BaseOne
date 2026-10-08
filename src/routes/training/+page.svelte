<script>
  import PageHero from '$lib/components/PageHero.svelte';
  import CtaBlock from '$lib/components/CtaBlock.svelte';
  import CourseCalendar from '$lib/components/CourseCalendar.svelte';
  import GalleryGrid from '$lib/components/GalleryGrid.svelte';
  import { courses } from '$lib/data/courses.js';

  const trainingShots = [
    { src: '/images-training/P1010113.jpg', alt: 'Base One training' },
    { src: '/images-training/_DSC0006.jpg', alt: 'Instructor leading a theory session in the classroom' },
    { src: '/images-training/_DSC0050.jpg', alt: 'Students on the dive boat heading to the site' },
    { src: '/images-training/_DSC0063.jpg', alt: 'Divers at the surface near the Sardinian cliffs' },
    // hidden: { src: '/images-training/_DSC0074.jpg', alt: 'Dive team pre-dive briefing on the boat' },
    { src: '/images-training/IMG_2377.jpg', alt: 'Instructor explaining cylinder checks to students' },
    { src: '/images-training/P1010033.jpg', alt: 'Instructor adjusting a Halcyon backmount rig harness' },
  ];

  const reasons = [
    { t: 'Exceptional European cave environments', d: 'Clear water, stable conditions and varied passages make Sardinia’s cave systems an ideal classroom, from first cave dives to complex navigation.' },
    { t: 'High standards, lived daily', d: 'Every dive, briefing and debrief follows the same exacting standards. Details matter here, and progression is earned through demonstrated skill.' },
    { t: 'Strong GUE presence', d: 'The full GUE curriculum, from Fundamentals to advanced Cave, CCR and instructor training taught by instructors who apply these standards in their own diving.' },
    { t: 'Connected to real operations', d: 'Courses run alongside active exploration and project work, so you see how every skill is used beyond the training dive.' },
    { t: 'Small groups', d: 'Limited numbers mean more time in the water, more individual feedback, and a pace set by your progress, not the schedule.' },
    { t: 'Full logistics on site', d: 'Gas fills, boats, classrooms and equipment are all on site, so your energy goes into learning and diving, not logistics.' },
  ];
</script>

<svelte:head><title>Training - Base One</title>
  <meta property="og:title" content="Training - Base One">
  <meta property="og:description" content="GUE and technical training courses in Sardinia - Fundamentals through advanced cave and CCR. Color-coded course calendar at Base One.">
  <meta name="description" content="GUE and technical training courses in Sardinia - Fundamentals through advanced cave and CCR. Color-coded course calendar at Base One.">
</svelte:head>

<!-- ── Hero ─────────────────────────────────────────────────── -->
<PageHero
  image="/images/hero-training.jpg"
  eyebrow="Training & Education"
  heading="Training That Stays<br>With You"
  sub="Not just courses. Not just certifications. Real development in a place where high standards are lived every day."
/>

<!-- ── Training Philosophy ──────────────────────────────────── -->
<section class="section section-alt">
  <div class="container-narrow">
    <p class="section-label reveal-left">Mastery Training</p>
    <h2 class="reveal-left delay-1">Good training is about building skills you can rely on when it matters.</h2>
    <p class="lead mt-md reveal-left delay-2">Base One is not built around volume training. We operate primarily as a GUE-oriented hub, while welcoming selected high-level instructors from other agencies who share our standards for preparation, logistics, safety, and meaningful student progression.</p>
  </div>
</section>

<!-- ── Why Train Here ───────────────────────────────────────── -->
<section class="section">
  <div class="container">
    <div class="section-header blur-reveal">
      <p class="section-label">The Approach</p>
      <h2>Why Come Train Here</h2>
      <p class="lead">Learning happens in an environment shaped by real operations, deep experience, and high standards.</p>
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

<!-- Hidden: quote divider
<div class="quote-divider"><p class="brand-line">For people who know that good diving is never accidental.</p></div>
-->

<!-- ── Training Gallery ─────────────────────────────────────── -->
<section class="section section-alt">
  <div class="container">
    <GalleryGrid images={trainingShots} columns={3} />
  </div>
</section>

<!-- ── Course Calendar (color-coded, click for details + enquiry) ── -->
<section class="section" id="schedule">
  <div class="container">
    <div class="section-header blur-reveal">
      <p class="section-label">Course Calendar</p>
      <h2>Scheduled Courses at Base One</h2>
      <p class="lead">GUE courses are booked through GUE.com; other training options can be arranged directly with Base One.</p>
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
