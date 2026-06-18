<script>
  import ImageCarousel from './ImageCarousel.svelte';
  import { caves } from '$lib/data/caves.js';

  let active = 0;
  let timelineWrap;
  let scrollTimer;

  function selectCave(i) { active = i; }

  function onTimelineScroll() {
    clearTimeout(scrollTimer);
    scrollTimer = setTimeout(() => {
      if (!timelineWrap) return;
      const cardWidth = timelineWrap.scrollWidth / caves.length;
      active = Math.max(0, Math.min(caves.length - 1, Math.round(timelineWrap.scrollLeft / cardWidth)));
    }, 150);
  }
</script>

<section class="cave-selector">
  <div class="cave-selector-header container">
    <p class="section-label">The Systems</p>
    <h2>Six Coastal Caves</h2>
    <p class="lead">Each cave system is remarkably different from the next, shaped by its own combination of haloclines, hydrogen sulphide layers, speleothems, changing passage levels, and varied limestone morphology.</p>
  </div>

  <div class="cave-timeline-wrap" bind:this={timelineWrap} on:scroll={onTimelineScroll}>
    <div class="cave-timeline">
      <div class="cave-timeline-line"></div>
      {#each caves as cave, i}
        <button class="cave-milestone" class:active={active === i} on:click={() => selectCave(i)}>
          <div class="cave-bubble">
            <span class="cave-num">0{i + 1}</span>
            <span class="cave-label">{cave.name}</span>
          </div>
          <div class="cave-connector"></div>
          <div class="cave-bullet"></div>
        </button>
      {/each}
    </div>
  </div>

  {#key active}
    <div class="cave-panel">
      <div class="cave-panel-body container">
        <div class="cave-panel-text">
          <p class="cave-access">{caves[active].access}</p>
          <h3 class="cave-title">{caves[active].name}</h3>
          <p class="cave-desc">{caves[active].description}</p>
          <div class="cave-tags">
            {#each caves[active].tags as tag}
              <span class="cave-tag">{tag}</span>
            {/each}
          </div>
        </div>
      </div>
      <ImageCarousel images={caves[active].images} alt={caves[active].name} theme="dark" />
    </div>
  {/key}
</section>
