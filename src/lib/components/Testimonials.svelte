<script>
  import { onMount } from 'svelte';

  let reviews = [];
  let rating = null;
  let loading = true;

  onMount(async () => {
    try {
      const res = await fetch('/api/reviews');
      const data = await res.json();
      reviews = data.reviews ?? [];
      rating = data.rating;
    } catch {
      reviews = [];
    } finally {
      loading = false;
    }
  });

  function stars(n) {
    return Array.from({ length: 5 }, (_, i) => i < n ? '★' : '☆').join('');
  }
</script>

{#if loading}
  <div class="testimonials-loading">Loading reviews…</div>
{:else if reviews.length > 0}
<section class="section section-alt testimonials-section">
  <div class="container">
    <div class="section-header blur-reveal">
      <p class="section-label">Guest Reviews</p>
      <h2>What Divers Say</h2>
      {#if rating}
        <p class="testimonials-rating">
          <span class="testimonials-stars">{'★'.repeat(Math.round(rating))}</span>
          <strong>{rating.toFixed(1)}</strong> on Google Reviews
        </p>
      {/if}
    </div>

    <div class="testimonials-grid">
      {#each reviews as r, i}
        <div class="testimonial-card reveal-up delay-{(i % 3) + 1}">
          <div class="testimonial-head">
            {#if r.photo}
              <img src={r.photo} alt={r.author} class="testimonial-avatar" referrerpolicy="no-referrer" />
            {:else}
              <div class="testimonial-avatar testimonial-avatar-fallback">{r.author[0]}</div>
            {/if}
            <div>
              <p class="testimonial-author">{r.author}</p>
              <p class="testimonial-time">{r.time}</p>
            </div>
          </div>
          <p class="testimonial-stars">{stars(r.rating)}</p>
          <p class="testimonial-text">{r.text}</p>
        </div>
      {/each}
    </div>

    <p class="testimonials-source blur-reveal">Reviews sourced from Google. <a href="https://g.page/r/baseone-sardinia/review" target="_blank" rel="noopener">Leave a review →</a></p>
  </div>
</section>
{/if}

<style>
  .testimonials-loading { text-align: center; padding: 3rem; color: var(--text-muted); font-size: 0.9rem; }

  .testimonials-rating {
    display: flex; align-items: center; gap: 0.5rem; justify-content: center;
    font-size: 1rem; color: var(--text-muted); margin-top: 0.5rem;
  }
  .testimonials-stars { color: #f59e0b; letter-spacing: 0.05em; }

  .testimonials-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1.25rem;
    margin-top: 2.5rem;
  }

  .testimonial-card {
    background: #fff; border: 1px solid var(--border); border-radius: var(--radius-lg);
    padding: 1.5rem; display: flex; flex-direction: column; gap: 0.75rem;
    transition: box-shadow .25s, border-color .25s;
  }
  .testimonial-card:hover { border-color: var(--teal); box-shadow: 0 8px 30px rgba(26,140,142,.08); }

  .testimonial-head { display: flex; align-items: center; gap: 0.75rem; }

  .testimonial-avatar {
    width: 40px; height: 40px; border-radius: 50%;
    object-fit: cover; flex-shrink: 0;
  }
  .testimonial-avatar-fallback {
    background: var(--teal); color: #fff;
    display: flex; align-items: center; justify-content: center;
    font-weight: 700; font-size: 1rem;
  }

  .testimonial-author { font-weight: 600; font-size: 0.9rem; margin: 0; }
  .testimonial-time   { font-size: 0.78rem; color: var(--text-muted); margin: 0; }

  .testimonial-stars  { color: #f59e0b; font-size: 0.95rem; letter-spacing: 0.05em; margin: 0; }

  .testimonial-text {
    font-size: 0.88rem; line-height: 1.7; color: var(--text-muted);
    margin: 0; flex: 1;
    display: -webkit-box; -webkit-line-clamp: 6; -webkit-box-orient: vertical;
    overflow: hidden;
  }

  .testimonials-source {
    text-align: center; margin-top: 2rem;
    font-size: 0.82rem; color: var(--text-muted);
  }
  .testimonials-source a { color: var(--teal); text-decoration: none; }
  .testimonials-source a:hover { text-decoration: underline; }

  @media (max-width: 1024px) {
    .testimonials-grid { grid-template-columns: repeat(2, 1fr); }
  }
  @media (max-width: 640px) {
    .testimonials-grid { grid-template-columns: 1fr; }
  }
</style>
