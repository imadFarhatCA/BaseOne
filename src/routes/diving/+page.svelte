<script>
  import PageHero from '$lib/components/PageHero.svelte';
  import CtaBlock from '$lib/components/CtaBlock.svelte';
</script>

<svelte:head><title>Diving — Base One</title>
  <meta property="og:title" content="Diving — Base One">
  <meta property="og:description" content="Cave and technical diving in the Gulf of Orosei, Sardinia. One of Europe's finest cave diving destinations, guided and supported by Base One.">
  <meta name="description" content="Cave and technical diving in the Gulf of Orosei, Sardinia. One of Europe's finest cave diving destinations, guided and supported by Base One.">
</svelte:head>

<PageHero
  image="/images/hero-diving.jpg"
  eyebrow="Cave Diving Sardinia"
  heading="Dive a Place That<br>Still Feels Wild"
  sub="Cave systems of extraordinary beauty, variety, and potential — supported by logistics built for serious diving."
/>

<section class="section">
  <div class="container-narrow">
    <p class="section-label reveal-left">The Diving</p>
    <h2 class="reveal-left delay-1">Systems that reward preparation and respect.</h2>
    <p class="lead mt-sm reveal-left delay-2">The cave systems of the Gulf of Orosei offer variety that keeps divers returning — broad passages and delicate formations, shallow systems with long profiles, more advanced dives that demand planning and control.</p>
  </div>
</section>

<section class="section section-alt">
  <div class="container">
    <div class="section-header blur-reveal">
      <p class="section-label">Cave Systems</p>
      <h2>What Awaits Below</h2>
      <p class="lead">Six categories of cave environment, all accessible from Cala Gonone.</p>
    </div>
    <div class="feature-cards">
      <div class="feature-card reveal-left delay-1"><div class="feature-icon">◈</div><h3>Shallow Systems</h3><p>Accessible cave profiles ideal for newer cave divers — clear water, manageable depths, excellent for building skills and confidence.</p></div>
      <div class="feature-card reveal-right delay-2"><div class="feature-icon">◈</div><h3>Complex Cave</h3><p>Multi-passage systems with route decisions, restrictions, and navigation challenges that develop real cave diving competence.</p></div>
      <div class="feature-card reveal-left delay-3"><div class="feature-icon">◈</div><h3>Halocline Zones</h3><p>Fresh and saltwater mixing layers create visual effects and unique environmental conditions found in few places in the Mediterranean.</p></div>
      <div class="feature-card reveal-right delay-1"><div class="feature-icon">◈</div><h3>Speleothem Galleries</h3><p>Decorated chambers with stalactites, stalagmites, and columns — demanding careful buoyancy and respectful movement.</p></div>
      <div class="feature-card reveal-left delay-2"><div class="feature-icon">◈</div><h3>Deep Profiles</h3><p>Extended-range cave dives for experienced technical divers, requiring staged decompression and rigorous gas planning.</p></div>
      <div class="feature-card reveal-right delay-3"><div class="feature-icon">◈</div><h3>Exploration Frontiers</h3><p>Unmapped passages and ongoing survey projects where qualified divers contribute to expanding the known cave systems.</p></div>
    </div>
  </div>
</section>

<div class="quote-divider"><p class="brand-line">Where exploration still matters.</p></div>

<section class="section">
  <div class="container">
    <div class="grid-2">
      <div>
        <p class="section-label reveal-left">The Experience</p>
        <h2 class="reveal-left delay-1">Why Divers Keep Returning</h2>
        <ul class="arrow-list mt-md">
          <li class="reveal-left delay-1">Variety that grows with your skill level</li>
          <li class="reveal-right delay-2">Real cave, not simulated environments</li>
          <li class="reveal-left delay-3">Water clarity that rewards good technique</li>
          <li class="reveal-right delay-4">Boat access to sites unreachable from shore</li>
        </ul>
      </div>
      <div>
        <p class="section-label reveal-right">The Standards</p>
        <h2 class="reveal-right delay-1">How We Approach It</h2>
        <ul class="check-list mt-md">
          <li class="reveal-right delay-1">Small groups, never rushed</li>
          <li class="reveal-left delay-2">Logistics handled so you focus on diving</li>
          <li class="reveal-right delay-3">Gas fills, boats, and support on site</li>
          <li class="reveal-left delay-4">Conservation mindset in every dive plan</li>
        </ul>
      </div>
    </div>
  </div>
</section>

<div class="image-divider scale-reveal" style="background-image:url('/images/divider-diving.jpg')"></div>

<CtaBlock
  heading="Plan Your Diving Days"
  text="From introductory cave dives to multi-day expedition support."
  primaryLabel="Plan Your Diving Days"
  secondaryLabel="Talk to Us"
/>
