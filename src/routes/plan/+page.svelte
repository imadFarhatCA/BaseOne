<script>
  import PageHero from '$lib/components/PageHero.svelte';
  import TripSimulator from '$lib/components/TripSimulator.svelte';
  import Faq from '$lib/components/Faq.svelte';

  const faqs = [
    { q: 'What certification and experience do I need?', a: 'The required certification depends on the planned activity. Cave, technical, wreck, CCR, and DPV dives are organised according to certification, recent experience, team capability, and current conditions. Certification alone does not automatically determine site suitability.' },
    { q: 'Can I come without an established team?', a: 'Yes. Divers arriving without a buddy or complete team should contact us in advance so we can assess suitable options. Depending on certification, experience, objectives, dates, and availability, Base One may coordinate an appropriate team arrangement or provide guided diving on request.' },
    { q: 'How are dive sites and daily plans selected?', a: 'Dive sites are confirmed by the Base One team according to sea state, cave conditions, diver qualifications, recent experience, planned runtime, and team objectives. We always aim to accommodate individual preferences, but plans may be adjusted when environmental or operational conditions require it.' },
    { q: 'How far in advance should I book?', a: 'Advance booking is recommended, particularly for cave diving, guided support, DPV rental, helium, special gas blends, and private team logistics. Availability depends on dates, vessel requirements, equipment, and the level of operational support required.' },
    { q: 'How do I receive an estimate or quotation?', a: 'Standard diving arrangements can be explored through Plan Your Trip for an initial estimate. Cave programmes, training, private teams, professional operations, and manufacturer projects are reviewed and quoted individually.' },
  ];
</script>

<svelte:head><title>Plan Your Trip — Base One</title>
  <meta property="og:title" content="Plan Your Trip — Base One">
  <meta property="og:description" content="Plan your cave diving trip to Cala Gonone, Sardinia. Contact Base One for dive planning, accommodation advice, and course bookings.">
  <meta name="description" content="Plan your cave diving trip to Cala Gonone, Sardinia. Contact Base One for dive planning, accommodation advice, and course bookings.">
</svelte:head>

<PageHero
  image="/images/alt-diving-1.jpg"
  eyebrow="Plan Your Trip"
  heading="Start With the Idea.<br>We'll Help Build the Experience."
  sub="Training, cave diving, projects, logistics, testing, events — tell us where you want to go."
/>

<section class="section">
  <div class="container-narrow">
    <p class="section-label reveal-left">The Conversation</p>
    <h2 class="reveal-left delay-1">Not with a generic package. With a question: what are you here to build?</h2>
    <p class="lead mt-sm reveal-left delay-2">No two divers arrive with the same goal. Some come for cave training, others to continue their progression, organise a team, or support a product test.</p>
    <p class="lead mt-sm reveal-left delay-3">Standard diving arrangements can be explored through Plan Your Trip for an initial estimate, while team, training, professional, and manufacturer programmes are quoted individually.</p>
  </div>
</section>

<section class="section section-dark sim-section">
  <div class="container">
    <div class="section-header reveal">
      <p class="section-label" style="color:var(--teal-light)">Trip Simulator</p>
      <h2 style="color:#fff">Build Your Estimate</h2>
      <p class="lead" style="color:rgba(255,255,255,0.65)">Walk through your planned trip and get an indicative cost breakdown in seconds.</p>
    </div>
    <TripSimulator />
  </div>
</section>

<section class="section section-alt" id="contact">
  <div class="container" style="max-width:720px;">
    <div class="section-header reveal">
      <div class="eyebrow">Get in Touch</div>
      <h2>Discuss Your Plans</h2>
      <p class="lead">Tell us about your team, experience, objectives, and preferred dates. We normally respond within 24 hours with the most appropriate options.</p>
    </div>

    <a href="https://wa.me/393403430380" target="_blank" rel="noopener" class="wa-cta reveal">
      <span class="wa-cta-icon" aria-hidden="true">
        <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0 0 20.464 3.488"/></svg>
      </span>
      <div class="wa-cta-body">
        <p class="wa-cta-eyebrow">Fastest way to reach us</p>
        <p class="wa-cta-title">Message us on WhatsApp</p>
      </div>
      <span class="wa-cta-arrow" aria-hidden="true">→</span>
    </a>

    <div class="form-divider reveal"><span>or fill the form below</span></div>

    <form id="contactForm" class="reveal">
      <div class="form-grid">
        <div class="form-field">
          <label for="firstName">First Name</label>
          <input type="text" id="firstName" name="firstname" required>
        </div>
        <div class="form-field">
          <label for="lastName">Last Name</label>
          <input type="text" id="lastName" name="lastname" required>
        </div>
        <div class="form-field full">
          <label for="email">Email</label>
          <input type="email" id="email" name="email" required>
        </div>
        <div class="form-field">
          <label for="phone">Phone / WhatsApp</label>
          <input type="tel" id="phone" name="phone">
        </div>
        <div class="form-field">
          <label for="interest">I'm Interested In</label>
          <select id="interest" name="interest">
            <option value="">Select...</option>
            <option value="cave-diving">Cave Diving</option>
            <option value="training">Training / Courses</option>
            <option value="exploration">Exploration / Projects</option>
            <option value="equipment">Equipment / Logistics</option>
            <option value="team-event">Team / Event</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div class="form-field full">
          <label for="dates">Preferred Dates</label>
          <input type="text" id="dates" name="dates" placeholder="e.g. June 15–22, 2026">
        </div>
        <div class="form-field full">
          <label for="message">Discuss Your Plans</label>
          <textarea id="message" name="message" placeholder="What are you here to build?" required></textarea>
        </div>
        <div class="form-field full">
          <button type="submit" class="btn btn-teal btn-large" style="width:100%;" id="submitBtn">Send Inquiry</button>
        </div>
      </div>
      <div id="formStatus" style="text-align:center; margin-top:1rem; font-size:0.95rem;"></div>
    </form>

  </div>
</section>


<!-- ── FAQ ──────────────────────────────────────────────────── -->
<section class="section">
  <div class="container">
    <div class="section-header blur-reveal">
      <p class="section-label">Good to Know</p>
      <h2>Frequently Asked Questions</h2>
    </div>
    <Faq items={faqs} />
  </div>
</section>

<section class="section section-dark cta-block">
  <div class="container reveal">
    <h2>Built for Divers Who Want More</h2>
    <p class="lead" style="color:var(--text-light);">Whatever brought you here, we will help you make the most of it.</p>
  </div>
</section>

<style>
  .wa-cta {
    display: flex;
    align-items: center;
    gap: 1.25rem;
    margin: 2rem 0 2.5rem;
    padding: 1.5rem 1.75rem;
    background: linear-gradient(135deg, #25D366 0%, #128C7E 100%);
    color: #fff;
    border-radius: var(--radius-lg);
    text-decoration: none;
    box-shadow: 0 8px 24px rgba(37,211,102,.25);
    transition: transform .25s, box-shadow .25s;
  }
  .wa-cta:hover {
    transform: translateY(-3px);
    box-shadow: 0 14px 36px rgba(37,211,102,.35);
  }
  .wa-cta-icon {
    flex-shrink: 0;
    width: 52px; height: 52px;
    background: rgba(255,255,255,.18);
    border-radius: 14px;
    display: flex; align-items: center; justify-content: center;
  }
  .wa-cta-body { flex: 1; min-width: 0; }
  .wa-cta-eyebrow {
    margin: 0 0 .25rem;
    font-size: .72rem;
    font-weight: 700;
    letter-spacing: .12em;
    text-transform: uppercase;
    color: rgba(255,255,255,.85);
  }
  .wa-cta-title {
    margin: 0;
    font-size: 1.2rem;
    font-weight: 700;
    line-height: 1.2;
  }
  .wa-cta-arrow {
    font-size: 1.6rem;
    font-weight: 700;
    margin-left: .5rem;
    transition: transform .25s;
  }
  .wa-cta:hover .wa-cta-arrow { transform: translateX(4px); }

  .form-divider {
    display: flex;
    align-items: center;
    gap: 1rem;
    color: var(--text-muted);
    font-size: .8rem;
    letter-spacing: .12em;
    text-transform: uppercase;
    margin: 0 0 2rem;
  }
  .form-divider::before, .form-divider::after {
    content: "";
    flex: 1;
    height: 1px;
    background: var(--border);
  }

  @media (max-width: 540px) {
    .wa-cta { padding: 1.1rem 1.25rem; gap: .9rem; }
    .wa-cta-icon { width: 44px; height: 44px; }
    .wa-cta-title { font-size: 1rem; }
  }
</style>
