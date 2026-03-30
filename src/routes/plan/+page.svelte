<script>
  import PageHero from '$lib/components/PageHero.svelte';
</script>

<svelte:head><title>Plan Your Trip — Base One</title>
  <meta property="og:title" content="Plan Your Trip — Base One">
  <meta property="og:description" content="Plan your cave diving trip to Cala Gonone, Sardinia. Contact Base One for dive planning, accommodation advice, and course bookings.">
  <meta name="description" content="Plan your cave diving trip to Cala Gonone, Sardinia. Contact Base One for dive planning, accommodation advice, and course bookings.">
</svelte:head>

<PageHero
  image="/images/hero-plan.jpg"
  eyebrow="Plan Your Trip"
  heading="Start With the Idea.<br>We'll Help Build the Experience."
  sub="Training, cave diving, projects, logistics, testing, events — tell us where you want to go."
/>

<section class="section">
  <div class="container-narrow">
    <p class="section-label reveal-left">The Conversation</p>
    <h2 class="reveal-left delay-1">Not with a generic package. With a question: what are you here to build?</h2>
    <p class="lead mt-sm reveal-left delay-2">No two divers arrive with the same goal. Some are coming for their first serious step into cave training. Some are returning to continue a journey started years ago. Some are organizing a team, an event, or a test program.</p>
  </div>
</section>

<section class="section section-alt" id="contact">
  <div class="container" style="max-width:720px;">
    <div class="section-header reveal">
      <div class="eyebrow">Get in Touch</div>
      <h2>Send Your Inquiry</h2>
      <p class="lead">Tell us about your plans and we will get back to you within 24 hours.</p>
    </div>

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
          <label for="message">Tell Us About Your Plans</label>
          <textarea id="message" name="message" placeholder="What are you here to build?" required></textarea>
        </div>
        <div class="form-field full">
          <button type="submit" class="btn btn-teal btn-large" style="width:100%;" id="submitBtn">Send Inquiry</button>
        </div>
      </div>
      <div id="formStatus" style="text-align:center; margin-top:1rem; font-size:0.95rem;"></div>
    </form>

    <div class="text-center mt-lg reveal" style="padding-top:2rem; border-top:1px solid var(--border);">
      <p class="muted" style="font-size:0.95rem; margin-bottom:1rem;">Prefer a quick conversation?</p>
      <a href="https://wa.me/393403430380" target="_blank" class="btn btn-outline btn-large">Message on WhatsApp</a>
    </div>
  </div>
</section>

<section class="section section-dark cta-block">
  <div class="container reveal">
    <h2>Built for Divers Who Want More</h2>
    <p class="lead" style="color:var(--text-light);">Whatever brought you here, we will help you make the most of it.</p>
  </div>
</section>
