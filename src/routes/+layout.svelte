<script>
  import Nav from '$lib/components/Nav.svelte';
  import Footer from '$lib/components/Footer.svelte';
  import '../app.css';
  import { onMount } from 'svelte';
  import { afterNavigate } from '$app/navigation';

  const sel = '.reveal,.reveal-left,.reveal-right,.reveal-up,.scale-reveal,.blur-reveal,.schedule-table tbody tr';

  function initReveal() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('visible');
          observer.unobserve(e.target);
        }
      });
    }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });

    document.querySelectorAll(sel).forEach(el => {
      const r = el.getBoundingClientRect();
      if (r.top < window.innerHeight) el.classList.add('visible');
      else observer.observe(el);
    });
  }

  onMount(() => {
    initReveal();

    // Parallax (desktop only, set once)
    if (!matchMedia('(max-width:768px)').matches) {
      window.addEventListener('scroll', () => {
        document.querySelectorAll('.image-divider').forEach(d => {
          const r = d.getBoundingClientRect();
          if (r.top < window.innerHeight && r.bottom > 0)
            d.style.backgroundPositionY = `calc(50% + ${(r.top - window.innerHeight/2) * 0.15}px)`;
        });
      }, { passive: true });
    }
  });

  afterNavigate(() => {
    initReveal();
  });
</script>

<svelte:head>
  <meta name="description" content="Base One is a technical dive center in Cala Gonone, Sardinia — specialising in cave diving, GUE training, DPV operations, and underwater exploration.">
  <meta name="robots" content="index, follow">
  <meta property="og:site_name" content="Base One">
  <meta property="og:type" content="website">
  <meta property="og:image" content="https://baseone-ec0.pages.dev/images/og-image.jpg">
  <meta property="og:image:width" content="1200">
  <meta property="og:image:height" content="630">
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:image" content="https://baseone-ec0.pages.dev/images/og-image.jpg">
</svelte:head>

<Nav />
<slot />
<Footer />
