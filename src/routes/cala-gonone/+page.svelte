<script>
  import PageHero from '$lib/components/PageHero.svelte';
  import CtaBlock from '$lib/components/CtaBlock.svelte';
  import GalleryGrid from '$lib/components/GalleryGrid.svelte';
  import Faq from '$lib/components/Faq.svelte';
  import { activities, gettingHere, accommodations, ferryRoutes } from '$lib/data/area.js';

  const activityShots = [
    { src: '/images-calaGonone/643e520806694.webp', alt: 'Boat and kayak at cave entrance in the Gulf of Orosei', caption: 'Sea Kayaking' },
    { src: '/images-calaGonone/0afeb458e8ba2b68b956ccd39b6971c433825af87d90fc538b95b1c5d7754018.webp', alt: 'RIB boat at a secluded turquoise cove', caption: 'Cala Exploration' },
    { src: '/images-calaGonone/54e596e09b35fa9d2c13faefbecb2cf3b818dc375ffc7296e938fa9bcf204c54.webp', alt: 'Hikers on rocky terrain in the Supramonte canyon', caption: 'Hiking & Trekking' },
    { src: '/images-calaGonone/ebcf565d435443cf88a5c3042c6f981e7288864edd7d24e060277d440509acd4.webp', alt: 'Horse riders with Sardinian coastline panorama', caption: 'Horse Riding' },
    { src: '/images-calaGonone/4b542faea188925d1151524252372902985613dfbe805ed960d0676a47a11c9d.avif', alt: 'Gulf of Orosei coastline', caption: 'Blue Caverns' },
    { src: '/images-calaGonone/174bfb6a4986352fb21a97c295242aa04fa9ffa75cee9583feec3bc1c4b64f8b.avif', alt: 'Show caves of Cala Gonone', caption: 'Show Caves' },
    { src: '/images-calaGonone/665730fa72a19d6414060d78b5d1f63cf3e6c1a24cbbc605650c33b7489742e2.avif', alt: 'Dry caves of the Supramonte', caption: 'Dry Caves' },
    { src: '/images-calaGonone/DJI_0590.jpg', alt: 'Rock climber on limestone cliff above the Gulf of Orosei', caption: 'Rock Climbing' },
    { src: '/images-calaGonone/_V6A5839-gallery.jpg', alt: 'Snorkeler with underwater DPV scooter in the Gulf of Orosei', caption: 'DPV Snorkeling' },
    { src: '/images-calaGonone/sup-paddling.webp', alt: 'Stand-up paddleboarder gliding over clear water', caption: 'SUP Paddling' },
    { src: '/images-calaGonone/shepherd-hut.webp', alt: 'Traditional Sardinian shepherd hut in the Supramonte', caption: 'Shepherd Hut Experience' },
    { src: '/images-calaGonone/scenic-views.webp', alt: 'Couple taking in a Sardinian coastal panorama', caption: 'Scenic Views Hunting' },
  ];

  const faqs = [
    { q: 'When is the best time to visit Cala Gonone?', a: 'The season runs roughly April through November. Late spring and early autumn offer warm water, calm seas, and fewer crowds — ideal for diving and the outdoors.' },
    { q: 'Do I need a car once I am there?', a: 'No. Cala Gonone is walkable, and we can arrange shuttle transfers from the airport. Most dive sites are reached by our boats, and activities are nearby.' },
    { q: 'How do I get to Sardinia?', a: 'Fly into Olbia or Cagliari, or take an overnight ferry from the Italian mainland (handy if you want to bring a car or equipment). See the routes above.' },
    { q: 'What is there to do besides diving?', a: 'Sea and river kayaking, rock climbing, hiking and trekking in the Supramonte, and DPV snorkeling. Contact us and we will tell you what is running during your stay.' },
    { q: 'Can you help arrange accommodation?', a: 'Yes. We work directly with local hotels and apartments and can match options to your group size and length of stay — just get in touch.' },
  ];

  const transportIcons = {
    plane: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z"/></svg>`,
    ferry: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M20 21c-1.39 0-2.78-.47-4-1.32-2.44 1.71-5.56 1.71-8 0C6.78 20.53 5.39 21 4 21H2v2h2c1.38 0 2.74-.35 4-.99 2.52 1.29 5.48 1.29 8 0 1.26.65 2.62.99 4 .99h2v-2h-2zM3.95 19H4c1.6 0 3.02-.88 4-2 .98 1.12 2.4 2 4 2s3.02-.88 4-2c.98 1.12 2.4 2 4 2h.05l1.89-6.68c.08-.26.06-.54-.06-.78s-.34-.42-.6-.5L19 10.62V6c0-1.1-.9-2-2-2h-3V1H10v3H7c-1.1 0-2 .9-2 2v4.62l-1.29.42c-.26.08-.48.26-.6.5s-.15.52-.06.78L3.95 19zM17 6v3.97L12 8 7 9.97V6h10z"/></svg>`,
  };

  const icons = {
    boat: `<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M2 20a2.4 2.4 0 0 0 2 1 2.4 2.4 0 0 0 2-1 2.4 2.4 0 0 1 2-1 2.4 2.4 0 0 1 2 1 2.4 2.4 0 0 0 2 1 2.4 2.4 0 0 0 2-1 2.4 2.4 0 0 1 2-1 2.4 2.4 0 0 1 2 1"/><path d="M4 18l-1-5h18l-2 5"/><path d="M12 2v8"/><path d="M6.8 15L12 2l5.2 13"/></svg>`,
    canyon: `<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="m8 3 4 8 5-5 5 15H2L8 3z"/></svg>`,
    kayak: `<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M2 12h20"/><path d="M12 2v4"/><path d="M12 18v4"/><path d="M4.93 4.93 7.76 7.76"/><path d="M16.24 16.24l2.83 2.83"/><path d="M19.07 4.93l-2.83 2.83"/><path d="M7.76 16.24 4.93 19.07"/><circle cx="12" cy="12" r="3"/></svg>`,
    sup: `<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><circle cx="13" cy="3.5" r="1.5"/><path d="M13 5v6"/><path d="M13 11l-2 6"/><path d="M13 11l2 6"/><path d="M6 2.5l2 1"/><path d="M7 3l9 9"/><path d="M13 7l3 3"/><ellipse cx="12" cy="19.5" rx="8" ry="1.6"/></svg>`,
    climbing: `<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M5 3v18"/><circle cx="13" cy="5" r="1.6"/><path d="M13 6.6l1.2 4.4"/><path d="M13.2 7.5 9 6"/><path d="M14.2 11l-4.6 1.8"/><path d="M14.2 11l1.4 4.6"/><path d="M13.6 8l3.4-2"/></svg>`,
    hiking: `<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M3 17l4-8 4 4 3-6 4 10"/><path d="M3 21h18"/></svg>`,
    ruins: `<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M3 21h18"/><path d="M5 21V7l7-4 7 4v14"/><path d="M9 21v-4a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v4"/><path d="M9 7h1"/><path d="M14 7h1"/><path d="M9 11h1"/><path d="M14 11h1"/></svg>`,
    murals: `<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 19l7-7 3 3-7 7-3-3z"/><path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"/><path d="M2 2l7.586 7.586"/><circle cx="11" cy="11" r="2"/></svg>`,
  };
</script>

<svelte:head>
  <title>Cala Gonone Area Guide — Base One</title>
  <meta property="og:title" content="Cala Gonone Area Guide — Base One">
  <meta property="og:description" content="A complete guide to Cala Gonone, Sardinia — activities, getting here, where to stay, and why divers keep returning to the Gulf of Orosei.">
  <meta name="description" content="A complete guide to Cala Gonone, Sardinia — activities, getting here, where to stay, and why divers keep returning to the Gulf of Orosei.">
</svelte:head>

<PageHero
  image="/images/hero-cala-gonone.jpg"
  eyebrow="Cala Gonone, Sardinia"
  heading="A Place Worth<br>Coming Back To"
  sub="The Gulf of Orosei is one of the last wild coastlines in the Mediterranean. Here is how to make the most of it."
/>

<!-- ── Intro ───────────────────────────────────────────────────── -->
<section class="section">
  <div class="container-narrow">
    <p class="section-label reveal-left">The Place</p>
    <h2 class="reveal-left delay-1">Remote, wild, and extraordinarily beautiful.</h2>
    <p class="lead mt-sm reveal-left delay-2">Cala Gonone sits at the foot of the Supramonte limestone plateau, opening onto the Gulf of Orosei. The forty kilometres of coastline to the south have no roads or buildings — only white pebble coves reachable by boat or on foot through the mountains.</p>
    <p class="mt-sm reveal-left delay-3">It is not a resort. It is a base — for people who want to be close to something genuinely wild.</p>
  </div>
</section>

<!-- ── 3-image horizontal strip ──────────────────────────────── -->
<div class="photo-strip">
  <div class="photo-strip-item scale-reveal">
    <img src="/images-calaGonone/6458cd8639bc7.webp" alt="Aerial view of cave beach in the Gulf of Orosei" />
  </div>
  <div class="photo-strip-item scale-reveal delay-1">
    <img src="/images-calaGonone/f3dda76f07224a461a758a530aa28a1f4071b32c1fb03778877ffd985092251b.webp" alt="Brilliant blue sea along the Sardinian coastline" />
  </div>
  <div class="photo-strip-item scale-reveal delay-2">
    <img src="/images-calaGonone/0897ba534113a960e638417095c0ea9169a0c937fbe9d82c5f17ecff8c080a71.webp" alt="Dramatic limestone cliffs of the Gulf of Orosei" />
  </div>
</div>

<!-- ── Getting Here — Flights ─────────────────────────────────── -->
<section class="section section-alt">
  <div class="container">
    <div class="section-header blur-reveal">
      <p class="section-label">Getting Here · Flights</p>
      <h2>How to Reach Cala Gonone</h2>
      <p class="lead">Car rental is not needed; book a shuttle transfer directly through us and enjoy the scenery — the Supramonte landscape and the scenic road through Barbagia is part of the trip. You will not need a car once you are in Cala Gonone.</p>
      <a href="/plan#contact" class="btn btn-teal mt-md">Contact us for a shuttle transfer →</a>
    </div>
    <div class="transport-grid">
      {#each gettingHere as g, i}
        <div class="transport-card reveal-up delay-{i + 1}">
          <div class="transport-icon-wrap">
            {@html transportIcons[g.icon]}
          </div>
          <div class="transport-body">
            <p class="transport-time">{g.time}</p>
            <h3 class="transport-name">{g.from}</h3>
            <p class="transport-notes">{g.notes}</p>
          </div>
        </div>
      {/each}
    </div>
  </div>
</section>

<!-- ── Ferry Routes ──────────────────────────────────────────── -->
<section class="section section-alt" style="padding-top: 0">
  <div class="container">
    <div class="ferry-routes-section">
      <div class="ferry-routes-header blur-reveal">
        <p class="section-label">Getting Here · Ferries</p>
        <h3>Ferry Routes to Sardinia</h3>
        <p class="ferry-routes-sub">Take the overnight ferry — ideal if you want to bring your own equipment or a car.</p>
      </div>
      {#each [...new Set(ferryRoutes.map(r => r.region))] as region}
        <p class="ferry-routes-region-label">{region}</p>
        <div class="ferry-routes-grid">
          {#each ferryRoutes.filter(r => r.region === region) as r, i}
            <div class="ferry-route-card reveal-up delay-{(i % 3) + 1}">
              <span class="ferry-flag">{r.flag}</span>
              <div class="ferry-route-body">
                <p class="ferry-route-from">{r.from}</p>
                <div class="ferry-route-arrow" aria-hidden="true">
                  <svg width="18" height="10" viewBox="0 0 18 10" fill="none"><path d="M0 5h16M12 1l4 4-4 4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
                </div>
                <p class="ferry-route-to">{r.to}{#if r.via}<span class="ferry-route-via">{r.via}</span>{/if}</p>
              </div>
            </div>
          {/each}
        </div>
      {/each}
      <div class="ferry-routes-book">
        <p class="ferry-routes-book-text">Compare schedules and book your crossing at <a href="https://www.traghettilines.it" target="_blank" rel="noopener" class="ferry-inline-link">traghettilines.it</a></p>
      </div>
    </div>
  </div>
</section>

<!-- ── Accommodations ─────────────────────────────────────────── -->
<section class="section">
  <div class="container">
    <div class="accom-layout">
      <div class="accom-intro reveal-left">
        <p class="section-label">Where to Stay</p>
        <h2>We Take Care</h2>
        <p class="lead mt-sm">Most visiting divers stay in Cala Gonone within walking distance of the base. We work directly with the hotels we recommend, and use our local knowledge to find apartments that fit groups and longer stays.</p>
      </div>
      <div class="accom-right">
        <div class="accom-cards">
          {#each accommodations as a, i}
            <div class="accom-card reveal-right delay-{i + 1}">
              <h3>{a.name}</h3>
              <p>{a.desc}</p>
              <ul class="accom-list">
                {#each a.examples as ex}
                  <li class="accom-list-item">
                    <span class="accom-list-icon" aria-hidden="true">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                    </span>
                    <span>{ex}</span>
                  </li>
                {/each}
              </ul>
            </div>
          {/each}
        </div>
        <div class="accom-cta reveal-up">
          <div class="accom-cta-body">
            <p class="accom-cta-eyebrow">Need help choosing?</p>
            <p class="accom-cta-text">Tell us when you'll be here and we'll send you the viable options.</p>
          </div>
          <a href="/plan#contact" class="btn btn-teal accom-cta-btn">Get in Touch</a>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- ── Things to Do ──────────────────────────────────────────── -->
<section class="section">
  <div class="container">
    <div class="section-header blur-reveal">
      <p class="section-label">While You're Here</p>
      <h2>Things to Do</h2>
      <p class="lead">Beyond the diving, Cala Gonone and the surrounding region offer some of the best outdoor experiences in Italy.</p>
      <p class="lead mt-sm">Cala Gonone works well for mixed groups. Technical and cave divers can train or dive with Base One, certified recreational divers can join selected small-group dives, and non-divers can enjoy DPV snorkeling, kayaking, hiking and climbing.</p>
    </div>
    <div class="feature-cards">
      {#each activities as a, i}
        <svelte:element this={a.url ? 'a' : 'div'}
          class="feature-card reveal-up delay-{(i % 3) + 1}"
          class:feature-card-link={a.url}
          href={a.url || undefined}
          target={a.url ? '_blank' : undefined}
          rel={a.url ? 'noopener' : undefined}>
          <div class="activity-icon">{@html icons[a.icon]}</div>
          <h3>{a.title}{#if a.url}<span class="feature-card-arrow" aria-hidden="true"> →</span>{/if}</h3>
          <p>{a.desc}</p>
          <div class="area-tags">
            {#each a.tags as tag}
              <span class="area-tag">{tag}</span>
            {/each}
          </div>
        </svelte:element>
      {/each}
    </div>

    <div class="activity-gallery mt-lg">
      <GalleryGrid images={activityShots} columns={3} />
    </div>

    <div class="accom-cta reveal-up activity-cta">
      <div class="accom-cta-body">
        <p class="accom-cta-eyebrow">Want to add an activity?</p>
        <p class="accom-cta-text">Availability changes with the season — tell us when you’re coming, and we’ll help you choose the best experiences running during your stay.</p>
      </div>
      <a href="/plan#contact" class="btn btn-teal accom-cta-btn">Plan your Stay</a>
    </div>
  </div>
</section>

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

<!-- ── Why Divers — dark with aerial image background ────────── -->
<section class="section section-dark why-section">
  <div class="why-bg scale-reveal" style="background-image:url('/images/divider-cala-gonone.jpg')"></div>
  <div class="why-overlay"></div>
  <div class="container why-content">
    <div class="why-inner">
      <p class="section-label reveal-up teal-light">Why Divers Choose Here</p>
      <h2 class="reveal-up delay-1">More Than Just a Dive Trip</h2>
      <ul class="dot-list mt-md">
        <li class="reveal-up delay-1">Access to some of Europe’s longest and most varied underwater cave systems</li>
        <li class="reveal-up delay-2">Protected coastline with some of the clearest water in the Mediterranean Sea</li>
        <li class="reveal-up delay-3">Warm, turquoise, calm seas with minimal currents</li>
        <li class="reveal-up delay-4">An authentic coastal town that retains a strong local character and has not been overrun by mass tourism</li>
        <li class="reveal-up delay-5">Year-round diving with most courses running April through November</li>
      </ul>
    </div>
  </div>
</section>

<CtaBlock
  heading="Plan your Stay"
  text="Tell us what you want to do. We'll help you plan the right combination of diving, training, and time in the water."
  primaryLabel=""
  secondaryLabel="Get in Touch"
/>

<style>
  /* Darker hero overlay */
  :global(.hero-page .hero-bg::after) {
    background: rgba(4,10,18,.52) !important;
  }


  /* ── 3-image horizontal strip ── */
  .photo-strip {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 10px;
    padding: 0 10px;
  }
  .photo-strip-item {
    overflow: hidden;
    height: clamp(220px, 28vw, 420px);
    border-radius: 12px;
  }
  .photo-strip-item img { width: 100%; height: 100%; object-fit: cover; display: block; transition: transform .6s cubic-bezier(0.16,1,0.3,1); }
  .photo-strip-item:hover img { transform: scale(1.04); }

  /* ── Transport cards ── */
  .transport-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1.25rem;
    margin-top: 0;
  }
  .transport-ferry {
    grid-column: 1 / -1;
    display: grid;
    grid-template-columns: auto 1fr;
    align-items: center;
    gap: 1.5rem;
  }
  .transport-card {
    background: #fff;
    border: 1px solid var(--border);
    border-radius: var(--radius-lg);
    padding: 1.75rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    transition: border-color .25s, box-shadow .25s, transform .25s;
  }
  .transport-card:hover {
    border-color: var(--teal);
    box-shadow: 0 8px 32px rgba(26,140,142,.1);
    transform: translateY(-3px);
  }
  .transport-ferry.transport-card {
    flex-direction: row;
    align-items: center;
  }
  .transport-icon-wrap {
    width: 56px; height: 56px; border-radius: 14px; flex-shrink: 0;
    background: rgba(26,140,142,.1);
    display: flex; align-items: center; justify-content: center;
    color: var(--teal);
  }
  .transport-icon-wrap svg { width: 28px; height: 28px; }
  .transport-time {
    font-size: 0.68rem; font-weight: 700; letter-spacing: 0.12em; text-transform: uppercase;
    color: var(--teal); margin: 0;
  }
  .transport-name { font-size: 1.1rem; font-weight: 700; margin: 0.2rem 0 0; color: var(--charcoal); }
  .transport-notes { font-size: 0.85rem; color: var(--text-muted); line-height: 1.65; margin: 0.4rem 0 0; }

  /* ── Ferry routes ── */
  .ferry-routes-section { margin-top: 0; padding-top: 0; }
  .ferry-routes-header { text-align: center; margin-bottom: 2rem; }
  .ferry-routes-header h3 {
    font-size: clamp(1.4rem, 2.4vw, 1.85rem);
    font-weight: 700;
    color: var(--charcoal);
    margin: 0.4rem 0 0.6rem;
  }
  .ferry-routes-sub {
    color: var(--text-muted);
    font-size: 0.95rem;
    line-height: 1.6;
    max-width: 540px;
    margin: 0 auto;
  }
  .ferry-routes-region-label {
    font-size: 0.72rem;
    font-weight: 700;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    color: var(--teal);
    margin: 1.75rem 0 0.75rem;
  }
  .ferry-routes-region-label:first-of-type { margin-top: 0.5rem; }
  .ferry-routes-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1.25rem;
  }
  .ferry-routes-book {
    margin-top: 2.5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
  }
  .ferry-routes-book-text {
    font-size: 0.92rem;
    color: var(--text-muted);
    margin: 0;
    text-align: center;
  }
  .ferry-inline-link { color: var(--teal); font-weight: 700; text-decoration: none; }
  .ferry-inline-link:hover { text-decoration: underline; }
  .activity-cta { margin-top: 2rem; }

  /* Clickable activity card (DPV link) */
  .feature-card-link { text-decoration: none; color: inherit; display: flex; flex-direction: column; }
  .feature-card-link:hover { border-color: var(--teal); box-shadow: 0 8px 32px rgba(26,140,142,.1); transform: translateY(-3px); }
  .feature-card-arrow { color: var(--teal); font-weight: 700; }
  .ferry-route-card {
    background: #fff;
    border: 1px solid var(--border);
    border-radius: var(--radius-lg);
    padding: 1.5rem 1.5rem;
    display: flex;
    align-items: center;
    gap: 1rem;
    transition: border-color .25s, box-shadow .25s, transform .25s;
  }
  .ferry-route-card:hover {
    border-color: var(--teal);
    box-shadow: 0 8px 32px rgba(26,140,142,.1);
    transform: translateY(-3px);
  }
  .ferry-flag {
    font-size: 1.8rem;
    line-height: 1;
    flex-shrink: 0;
  }
  .ferry-route-body { flex: 1; min-width: 0; }
  .ferry-route-from {
    font-size: 0.66rem;
    font-weight: 700;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    color: var(--text-muted);
    margin: 0;
  }
  .ferry-route-arrow {
    color: var(--teal);
    margin: 0.25rem 0;
    display: flex;
  }
  .ferry-route-to {
    font-size: 1.05rem;
    font-weight: 700;
    color: var(--charcoal);
    margin: 0;
    line-height: 1.2;
  }
  .ferry-route-via {
    display: block;
    margin-top: 0.15rem;
    font-size: 0.78rem;
    font-weight: 400;
    font-style: italic;
    color: var(--text-muted);
  }

  /* ── Accommodations ── */
  .accom-layout {
    display: grid;
    grid-template-columns: 1fr 2fr;
    gap: 4rem;
    align-items: start;
  }
  .accom-right { display: flex; flex-direction: column; gap: 1.25rem; }
  .accom-cards { display: flex; flex-direction: column; gap: 1rem; }
  .accom-cta {
    display: flex; align-items: center; gap: 1.5rem;
    padding: 1.4rem 1.6rem;
    background: rgba(26,140,142,0.06);
    border: 1px solid rgba(26,140,142,0.2);
    border-radius: var(--radius-lg);
  }
  .accom-cta-body { flex: 1; min-width: 0; }
  .accom-cta-eyebrow {
    font-size: 0.7rem; font-weight: 700; letter-spacing: 0.12em; text-transform: uppercase;
    color: var(--teal); margin: 0 0 0.25rem;
  }
  .accom-cta-text { font-size: 0.95rem; color: var(--charcoal); margin: 0; line-height: 1.45; }
  .accom-cta-btn { flex-shrink: 0; white-space: nowrap; }
  @media (max-width: 640px) {
    .accom-cta { flex-direction: column; align-items: flex-start; gap: 1rem; }
    .accom-cta-btn { width: 100%; text-align: center; }
  }
  .accom-card {
    padding: 1.5rem;
    border: 1px solid var(--border);
    border-radius: var(--radius-lg);
    transition: border-color .25s, box-shadow .2s;
  }
  .accom-card:hover { border-color: var(--teal); box-shadow: 0 4px 20px rgba(26,140,142,.07); }
  .accom-card h3 { margin-bottom: 0.3rem; }
  .accom-card p  { font-size: 0.88rem; color: var(--text-muted); line-height: 1.65; margin-bottom: 0.65rem; }

  /* ── Accommodation list (replaces pills) ── */
  .accom-list {
    list-style: none;
    margin: 0.6rem 0 0;
    padding: 0;
    display: flex;
    flex-direction: column;
  }
  .accom-list-item {
    display: flex;
    align-items: center;
    gap: 0.7rem;
    padding: 0.55rem 0;
    border-top: 1px solid var(--border);
    font-size: 0.95rem;
    font-weight: 600;
    color: var(--charcoal);
  }
  .accom-list-item:first-child { border-top: none; padding-top: 0.45rem; }
  .accom-list-icon {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 22px; height: 22px;
    border-radius: 50%;
    background: rgba(26,140,142,0.12);
    color: var(--teal);
    flex-shrink: 0;
  }
  .mt-lg { margin-top: 2rem; }

  /* ── Tags ── */
  .area-tags { display: flex; flex-wrap: wrap; gap: 0.35rem; margin-top: 0.75rem; }
  .area-tag {
    font-size: 0.68rem; font-weight: 700; letter-spacing: 0.04em; text-transform: uppercase;
    padding: 0.25rem 0.65rem; border-radius: 2rem;
    background: rgba(26,140,142,0.08); color: var(--teal); border: 1px solid rgba(26,140,142,0.2);
  }

  /* ── Activity icon ── */
  .activity-icon {
    width: 52px; height: 52px; border-radius: 12px;
    background: rgba(26,140,142,0.08); border: 1px solid rgba(26,140,142,0.18);
    display: flex; align-items: center; justify-content: center;
    color: var(--teal); margin-bottom: 1.1rem; flex-shrink: 0;
  }

  /* ── Why section with background image ── */
  .why-section {
    position: relative;
    overflow: hidden;
    padding: 0;
  }
  .why-bg {
    position: absolute; inset: 0;
    background-size: cover; background-position: center;
    opacity: 1;
  }
  .why-overlay {
    position: absolute; inset: 0;
    background: linear-gradient(135deg, rgba(4,10,18,.92) 0%, rgba(4,10,18,.75) 100%);
  }
  .why-content {
    position: relative; z-index: 2;
    padding-top: 6rem; padding-bottom: 6rem;
  }
  .why-inner { max-width: 640px; }

  /* ── Responsive ── */
  @media (max-width: 1024px) {
    .transport-grid { grid-template-columns: 1fr 1fr; }
    .transport-ferry { grid-column: 1 / -1; }
    .accom-layout { grid-template-columns: 1fr; gap: 2rem; }
  }
  @media (max-width: 768px) {
    .photo-strip { grid-template-columns: 1fr; gap: 8px; padding: 0 8px; }
    .photo-strip-item { height: 240px; }
    .transport-grid { grid-template-columns: 1fr; }
    .transport-ferry.transport-card { flex-direction: column; align-items: flex-start; }
    .ferry-routes-grid { grid-template-columns: 1fr; }
  }
  @media (max-width: 1024px) and (min-width: 769px) {
    .ferry-routes-grid { grid-template-columns: repeat(2, 1fr); }
  }
</style>
