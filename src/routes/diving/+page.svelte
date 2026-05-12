<script>
  import PageHero from '$lib/components/PageHero.svelte';
  import CtaBlock from '$lib/components/CtaBlock.svelte';
  import CaveTimeline from '$lib/components/CaveTimeline.svelte';
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
    <p class="section-label reveal-left">The Environment</p>
    <h2 class="reveal-left delay-1">One of the last wild coastlines in the Mediterranean.</h2>
    <p class="lead mt-sm reveal-left delay-2">The Gulf of Orosei and its forty kilometres of coastline are one of the last areas of the Italian coast without buildings or roads. Behind it lies the Supramonte limestone plateau — wild terrain, difficult to penetrate even on foot. High white limestone cliffs drop into turquoise water, carved over geological eras by wind and sea. In this interface there are hundreds of caverns and caves, both dry and flooded, with some of the longest underwater cave systems in Europe.</p>
    <p class="mt-sm reveal-left delay-3">These springs are freshwater rivers with saltwater intrusion from the sea. Multiple decorations and speleothems testify to varying water levels during different ice ages and prove such environments were once dry. Branching passages, sumps, and long shallow galleries make these caves the premier cave diving destination in Europe and a maze still being discovered. Average depth across most systems is extremely shallow — around nine metres — with water temperatures of 22°C in salt water and 15°C in fresh. These conditions allow long bottom times and very limited decompression. Other systems are deeper, requiring advanced planning, longer exposure, and decompression: ideal for rebreather cave dives.</p>
  </div>
</section>

<CaveTimeline />

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
