<script>
  import PageHero from '$lib/components/PageHero.svelte';
  import CtaBlock from '$lib/components/CtaBlock.svelte';
</script>

<svelte:head><title>Training — Base One</title>
  <meta property="og:title" content="Training — Base One">
  <meta property="og:description" content="GUE training courses in Sardinia — Fundamentals through advanced cave and CCR. Taught by experienced instructors at Base One.">
  <meta name="description" content="GUE training courses in Sardinia — Fundamentals through advanced cave and CCR. Taught by experienced instructors at Base One.">
</svelte:head>

<PageHero
  image="/images/hero-training.jpg"
  eyebrow="Training & Education"
  heading="Training That Stays<br>With You"
  sub="Not just courses. Not just certifications. Real development in a place where high standards are lived every day."
/>

<section class="section">
  <div class="container-narrow">
    <p class="section-label reveal-left">The Approach</p>
    <h2 class="reveal-left delay-1">Training that changes how you carry yourself underwater.</h2>
    <p class="lead mt-sm reveal-left delay-2">At Base One, learning happens in an environment shaped by real operations, real experience, and real consequence. You are entering a place where diving is taken seriously, where details matter, and where progression is something you earn.</p>
    <ul class="check-list mt-md">
      <li class="reveal-left delay-1">Strong GUE presence with courses from Fundamentals through advanced cave and CCR</li>
      <li class="reveal-right delay-2">Real cave systems as your classroom — not a simulated environment</li>
      <li class="reveal-left delay-3">Training connected to active exploration and operational projects</li>
      <li class="reveal-right delay-4">High-quality instruction from across the diving community welcomed</li>
    </ul>
  </div>
</section>

<div class="quote-divider"><p class="brand-line">For people who know that good diving is never accidental.</p></div>

<section class="section section-alt" id="schedule">
  <div class="container">
    <div class="section-header blur-reveal">
      <p class="section-label">GUE Class Schedule</p>
      <h2>Upcoming at Base One</h2>
      <p class="lead">Real classes, real instructors, real caves. Book directly through GUE.</p>
    </div>
    <table class="schedule-table">
      <thead>
        <tr><th>Course</th><th>Date</th><th>Instructor</th><th>Category</th></tr>
      </thead>
      <tbody>
        <tr><td><span class="schedule-course">CCR Technical Diver 2</span></td><td class="schedule-date">Apr 3, 2026</td><td class="schedule-instructor">Stefano Di Cosimo</td><td><span class="schedule-tag schedule-tag-tech">Tech</span></td></tr>
        <tr><td><span class="schedule-course">DPV Cave</span></td><td class="schedule-date">Apr 19, 2026</td><td class="schedule-instructor">Zsolt Szilagyi</td><td><span class="schedule-tag schedule-tag-dpv">DPV</span></td></tr>
        <tr><td><span class="schedule-course">Cave Sidemount</span></td><td class="schedule-date">Apr 28, 2026</td><td class="schedule-instructor">Zsolt Szilagyi</td><td><span class="schedule-tag schedule-tag-cave">Cave</span></td></tr>
        <tr><td><span class="schedule-course">Cave Diver 1</span></td><td class="schedule-date">May 24, 2026</td><td class="schedule-instructor">Per Normark</td><td><span class="schedule-tag schedule-tag-cave">Cave</span></td></tr>
        <tr><td><span class="schedule-course">Cave Diver 1</span></td><td class="schedule-date">May 24, 2026</td><td class="schedule-instructor">Sven Nelles</td><td><span class="schedule-tag schedule-tag-cave">Cave</span></td></tr>
        <tr><td><span class="schedule-course">Cave Diver 1</span></td><td class="schedule-date">May 24, 2026</td><td class="schedule-instructor">Peter Gaertner</td><td><span class="schedule-tag schedule-tag-cave">Cave</span></td></tr>
        <tr><td><span class="schedule-course">GUE Technical Fundamentals</span></td><td class="schedule-date">May 25, 2026</td><td class="schedule-instructor">Imad Farhat</td><td><span class="schedule-tag schedule-tag-fund">Fundamentals</span></td></tr>
        <tr><td><span class="schedule-course">CCR Technical Diver 1</span></td><td class="schedule-date">Jun 8, 2026</td><td class="schedule-instructor">JP Bresser</td><td><span class="schedule-tag schedule-tag-tech">Tech</span></td></tr>
        <tr><td><span class="schedule-course">DPV Cave</span></td><td class="schedule-date">Jun 8, 2026</td><td class="schedule-instructor">JP Bresser</td><td><span class="schedule-tag schedule-tag-dpv">DPV</span></td></tr>
        <tr><td><span class="schedule-course">Cave Diver 1</span></td><td class="schedule-date">Jun 14, 2026</td><td class="schedule-instructor">Sven Nelles</td><td><span class="schedule-tag schedule-tag-cave">Cave</span></td></tr>
        <tr><td><span class="schedule-course">CCR Technical Diver 2</span></td><td class="schedule-date">Jun 16, 2026</td><td class="schedule-instructor">JP Bresser</td><td><span class="schedule-tag schedule-tag-tech">Tech</span></td></tr>
        <tr><td><span class="schedule-course">Advanced Open Water Diver</span></td><td class="schedule-date">Jun 6, 2026</td><td class="schedule-instructor">Gemma Thomas</td><td><span class="schedule-tag schedule-tag-fund">Fundamentals</span></td></tr>
        <tr><td><span class="schedule-course">GUE Basic Fundamentals</span></td><td class="schedule-date">Jun 12, 2026</td><td class="schedule-instructor">Gemma Thomas</td><td><span class="schedule-tag schedule-tag-fund">Fundamentals</span></td></tr>
      </tbody>
    </table>
    <div class="text-center mt-lg scale-reveal">
      <a href="https://www.gue.com/diver-training/gue-class-schedule" target="_blank" class="btn btn-outline btn-large">View Full Schedule on GUE.com →</a>
    </div>
  </div>
</section>

<div class="image-divider scale-reveal" style="background-image:url('/images/divider-training.jpg')"></div>

<CtaBlock
  heading="Begin Your Journey"
  text="Whether it is your first cave course or your most advanced, the environment here will shape how you grow."
  primaryLabel="Ask About Training"
  secondaryLabel="Contact Us"
/>
