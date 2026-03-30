<script>
  import PageHero from '$lib/components/PageHero.svelte';
  import CtaBlock from '$lib/components/CtaBlock.svelte';
</script>

<svelte:head><title>About — Base One</title></svelte:head>

<PageHero
  image="/images/hero-about.jpg"
  eyebrow="About Base One"
  heading="Built by People Who Care<br>Deeply About Diving"
  sub="Not a fixed cast. A living network of collaborators, instructors, explorers, and professionals."
/>

<section class="section">
  <div class="container-narrow">
    <p class="section-label reveal-left">The Story</p>
    <h2 class="reveal-left delay-1">A place built around contribution, not ownership.</h2>
    <p class="lead mt-sm reveal-left delay-2">Base One is shaped by the people who teach here, guide here, test here, return here, and invest their energy here. What holds it together is a shared belief that diving can be done better.</p>
  </div>
</section>

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

<div class="quote-divider"><p class="brand-line">A place that changes how you dive.</p></div>

<section class="section">
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
