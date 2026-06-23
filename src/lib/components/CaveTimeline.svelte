<script>
  import ImageCarousel from './ImageCarousel.svelte';
  import { caves } from '$lib/data/caves.js';

  export let items = caves;
  export let label = 'The Systems';
  export let heading = 'Six Coastal Caves';
  export let lead = 'Each cave system is remarkably different from the next, shaped by its own combination of haloclines, hydrogen sulphide layers, speleothems, changing passage levels, and varied limestone morphology.';

  let active = 0;
  let timelineWrap;
  let scrollTimer;

  function selectCave(i) { active = i; }

  function onTimelineScroll() {
    clearTimeout(scrollTimer);
    scrollTimer = setTimeout(() => {
      if (!timelineWrap) return;
      const cardWidth = timelineWrap.scrollWidth / items.length;
      active = Math.max(0, Math.min(items.length - 1, Math.round(timelineWrap.scrollLeft / cardWidth)));
    }, 150);
  }
</script>

<section class="cave-selector">
  <div class="cave-selector-header container">
    <p class="section-label">{label}</p>
    <h2>{heading}</h2>
    <p class="lead">{lead}</p>
  </div>

  <div class="cave-timeline-wrap" bind:this={timelineWrap} on:scroll={onTimelineScroll}>
    <div class="cave-timeline">
      <div class="cave-timeline-line"></div>
      {#each items as cave, i}
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
          <p class="cave-access">{items[active].access}</p>
          <h3 class="cave-title">{items[active].name}</h3>
          <p class="cave-desc">{items[active].description}</p>
          <div class="cave-tags">
            {#each items[active].tags as tag}
              <span class="cave-tag">{tag}</span>
            {/each}
          </div>
        </div>
      </div>
      <ImageCarousel images={items[active].images} alt={items[active].name} theme="dark" />
    </div>
  {/key}
</section>
