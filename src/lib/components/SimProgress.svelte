<script>
  import { tick } from 'svelte';
  import { createEventDispatcher } from 'svelte';

  export let steps = [];
  export let step  = 0;

  const dispatch = createEventDispatcher();

  let progressEl;

  $: step, centerActiveStep();
  async function centerActiveStep() {
    await tick();
    if (!progressEl) return;
    const dot = progressEl.querySelector('.sim-step-dot.active');
    if (!dot) return;
    progressEl.scrollTo({
      left: dot.offsetLeft - progressEl.offsetWidth / 2 + dot.offsetWidth / 2,
      behavior: 'smooth'
    });
  }
</script>

<div class="sim-progress" bind:this={progressEl}>
  {#each steps as label, i}
    <button
      class="sim-step-dot"
      class:active={step === i}
      class:done={step > i}
      on:click={() => step > i && dispatch('goto', i)}
      disabled={step <= i}
      aria-label={label}
    >
      <span class="sim-step-num">{step > i ? '✓' : i + 1}</span>
      <span class="sim-step-label">{label}</span>
    </button>
    {#if i < steps.length - 1}
      <div class="sim-step-line" class:done={step > i}></div>
    {/if}
  {/each}
</div>

<!-- styles → src/lib/styles/simulator.css -->
