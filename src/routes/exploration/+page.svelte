<script>
  import PageHero from '$lib/components/PageHero.svelte';
  import CtaBlock from '$lib/components/CtaBlock.svelte';
</script>

<svelte:head><title>Exploration — Base One</title></svelte:head>

<PageHero
  image="/images/hero-exploration.jpg"
  eyebrow="Exploration & Projects"
  heading="Because Not Everything<br>Has Been Found Yet"
  sub="A place where dives can still contribute to discovery, science, and a deeper understanding of the underground world."
/>

<section class="section">
  <div class="container-narrow">
    <p class="section-label reveal-left">The Mindset</p>
    <h2 class="reveal-left delay-1">Exploration is not just distance. It is attitude.</h2>
    <p class="lead mt-sm reveal-left delay-2">It is the willingness to stay curious, to document carefully, to collaborate well, and to treat the unknown with both ambition and restraint. Base One supports that mindset.</p>
    <ul class="check-list mt-md">
      <li class="reveal-left delay-1">Active cave survey and cartography projects</li>
      <li class="reveal-right delay-2">Phreatic citizen-science programme</li>
      <li class="reveal-left delay-3">Scientific diving support and documentation</li>
      <li class="reveal-right delay-4">Collaboration with international exploration teams</li>
    </ul>
  </div>
</section>

<div class="quote-divider"><p class="brand-line">Come for the caves. Leave with more.</p></div>

<section class="section section-alt">
  <div class="container">
    <div class="section-header blur-reveal">
      <p class="section-label">Active Projects</p>
      <h2>What We Work On</h2>
    </div>
    <div class="feature-cards">
      <div class="feature-card reveal-left delay-1">
        <div class="feature-icon"><img src="/images/icons/compass.svg" alt="" /></div>
        <h3>Cave Survey</h3>
        <p>Systematic mapping of cave passages using line surveys and 3D scanning — expanding the known extent of Gulf of Orosei systems.</p>
      </div>
      <div class="feature-card reveal-right delay-2">
        <div class="feature-icon"><img src="/images/icons/phreatic.png" alt="" /></div>
        <h3>Phreatic</h3>
        <p>A citizen-science programme connecting recreational and technical divers to environmental monitoring and biological documentation.</p>
      </div>
      <div class="feature-card reveal-left delay-3">
        <div class="feature-icon"><img src="/images/icons/dpv.svg" alt="" /></div>
        <h3>DPV Operations</h3>
        <p>Using SUEX DPVs to extend range and access in long cave systems — pushing the boundary of what can be safely explored in a single dive.</p>
      </div>
    </div>
  </div>
</section>

<div class="image-divider scale-reveal" style="background-image:url('/images/divider-exploration.jpg')"></div>

<CtaBlock
  heading="Be Part of the Discovery"
  text="Whether you want to join an ongoing project or bring your own, Base One is where serious exploration happens."
  primaryLabel="Join a Project"
  secondaryLabel="Learn More"
/>
