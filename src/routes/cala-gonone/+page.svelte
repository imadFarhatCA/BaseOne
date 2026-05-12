<script>
  import PageHero from '$lib/components/PageHero.svelte';
  import CtaBlock from '$lib/components/CtaBlock.svelte';
  import Testimonials from '$lib/components/Testimonials.svelte';
  import { activities, gettingHere, accommodations } from '$lib/data/area.js';
</script>

<svelte:head>
  <title>Cala Gonone Area Guide — Base One</title>
  <meta property="og:title" content="Cala Gonone Area Guide — Base One">
  <meta property="og:description" content="A complete guide to Cala Gonone, Sardinia — activities, getting here, where to stay, and why divers keep returning to the Gulf of Orosei.">
  <meta name="description" content="A complete guide to Cala Gonone, Sardinia — activities, getting here, where to stay, and why divers keep returning to the Gulf of Orosei.">
</svelte:head>

<PageHero
  image="/images/hero-diving.jpg"
  eyebrow="Cala Gonone, Sardinia"
  heading="A Place Worth<br>Coming Back To"
  sub="The Gulf of Orosei is one of the last wild coastlines in the Mediterranean. Here is how to make the most of it."
/>

<section class="section">
  <div class="container-narrow">
    <p class="section-label reveal-left">The Place</p>
    <h2 class="reveal-left delay-1">Remote, wild, and extraordinarily beautiful.</h2>
    <p class="lead mt-sm reveal-left delay-2">Cala Gonone is a small town at the foot of the Supramonte limestone plateau, opening onto the Gulf of Orosei. The forty kilometres of coastline to the south have no roads or buildings — only white pebble coves reachable by boat or on foot after long walks through the mountains.</p>
    <p class="mt-sm reveal-left delay-3">The town itself is unhurried. A small port, a handful of restaurants, a market in summer. It is not a resort. It is a base — for people who want to be close to something genuinely wild.</p>
  </div>
</section>

<div class="quote-divider blur-reveal"><p class="brand-line">Forty kilometres with no roads, no buildings, just sea and limestone.</p></div>

<section class="section section-alt">
  <div class="container">
    <div class="section-header blur-reveal">
      <p class="section-label">While You're Here</p>
      <h2>Things to Do</h2>
      <p class="lead">Beyond the diving, Cala Gonone and the surrounding region offer some of the best outdoor experiences in Italy.</p>
    </div>
    <div class="feature-cards">
      {#each activities as a, i}
        <div class="feature-card reveal-up delay-{(i % 3) + 1}">
          <div class="feature-icon" style="font-size:2rem; height:auto; margin-bottom:0.75rem;">{a.icon}</div>
          <h3>{a.title}</h3>
          <p>{a.desc}</p>
          <div class="area-tags">
            {#each a.tags as tag}
              <span class="area-tag">{tag}</span>
            {/each}
          </div>
        </div>
      {/each}
    </div>
  </div>
</section>

<div class="image-divider scale-reveal" style="background-image:url('/images/divider-about.jpg')"></div>

<section class="section">
  <div class="container">
    <div class="grid-2">
      <div>
        <p class="section-label reveal-left">Getting Here</p>
        <h2 class="reveal-left delay-1">How to Reach Cala Gonone</h2>
        <p class="lead mt-sm reveal-left delay-2">A car is essential. Cala Gonone is not well served by public transport, and many of the best experiences in the region require one. Rent at the airport and enjoy the drive — the Supramonte scenery is part of the trip.</p>
        <div class="steps mt-lg">
          {#each gettingHere as g, i}
            <div class="step reveal-left delay-{i + 1}">
              <div class="step-num">{String(i + 1).padStart(2, '0')}</div>
              <div>
                <h3>{g.from}</h3>
                <p class="step-time">{g.time}</p>
                <p>{g.notes}</p>
              </div>
            </div>
          {/each}
        </div>
      </div>

      <div>
        <p class="section-label reveal-right">Where to Stay</p>
        <h2 class="reveal-right delay-1">Accommodation Options</h2>
        <p class="lead mt-sm reveal-right delay-2">Most visiting divers stay in town or in Dorgali just above. For longer stays, an apartment near the port is the most practical option.</p>
        <div class="accom-list">
          {#each accommodations as a, i}
            <div class="accom-card reveal-right delay-{i + 1}">
              <h3>{a.name}</h3>
              <p>{a.desc}</p>
              <div class="area-tags">
                {#each a.examples as ex}
                  <span class="area-tag">{ex}</span>
                {/each}
              </div>
            </div>
          {/each}
        </div>
      </div>
    </div>
  </div>
</section>

<section class="section section-dark">
  <div class="container-narrow">
    <p class="section-label reveal-left teal-light">Why Divers Choose Here</p>
    <h2 class="reveal-left delay-1">More Than Just a Dive Trip</h2>
    <ul class="dot-list mt-md">
      <li class="reveal-left delay-1">Cave systems among the longest and most varied in Europe</li>
      <li class="reveal-right delay-2">Protected coastline with some of the clearest water in the Mediterranean</li>
      <li class="reveal-left delay-3">Warm, calm seas from May through October with minimal currents</li>
      <li class="reveal-right delay-4">A small town that has not been overrun by mass tourism</li>
      <li class="reveal-left delay-5">Year-round diving with most courses running April through November</li>
    </ul>
  </div>
</section>

<Testimonials />

<CtaBlock
  heading="Ready to Come?"
  text="Tell us what you want to do. We'll help you plan the right combination of diving, training, and time in the water."
  primaryLabel="Plan Your Trip"
  secondaryLabel="Get in Touch"
/>

<style>
  .step-time {
    font-size: 0.78rem; font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase;
    color: var(--teal); margin: 0.15rem 0 0.4rem;
  }

  .accom-list { display: flex; flex-direction: column; gap: 1.25rem; margin-top: 2rem; }
  .accom-card {
    padding: 1.25rem 1.5rem; border: 1px solid var(--border); border-radius: var(--radius-lg);
    transition: border-color .25s;
  }
  .accom-card:hover { border-color: var(--teal); }
  .accom-card h3 { margin-bottom: 0.35rem; }
  .accom-card p  { font-size: 0.9rem; color: var(--text-muted); line-height: 1.65; margin-bottom: 0.75rem; }

  .area-tags { display: flex; flex-wrap: wrap; gap: 0.35rem; margin-top: 0.75rem; }
  .area-tag {
    font-size: 0.68rem; font-weight: 700; letter-spacing: 0.04em; text-transform: uppercase;
    padding: 0.25rem 0.65rem; border-radius: 2rem;
    background: rgba(26,140,142,0.08); color: var(--teal); border: 1px solid rgba(26,140,142,0.2);
  }
  .mt-lg { margin-top: 2rem; }
</style>
