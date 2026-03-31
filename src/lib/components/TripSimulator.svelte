<script>
  import { DIVE_TYPES, CYLINDERS, FILL_GASES, GEAR_ITEMS, PRICING, cylindersForDiveType, fillPrice } from '$lib/data/simulator.js';
  import { fly } from 'svelte/transition';
  import SimProgress from './SimProgress.svelte';
  import SimSummary  from './SimSummary.svelte';

  const STEPS = ['Days', 'Dive Type', 'Cylinders', 'Fills', 'Gear', 'DPV', 'Summary'];
  let direction = 1;
  let step = 0;

  // ── State ──────────────────────────────────────────────
  let divingDays = 3;
  let diveType   = '';

  let cylinderRentals = {};   // { cylId: qty }
  let fills = {};             // { cylId: { gasId: qty } }

  let needGear = null;
  let gearQtys = {};          // { gearId: qty }

  let needDPV  = null;
  let dpvDives = 1;

  // ── Navigation ─────────────────────────────────────────
  function next() {
    direction = 1;
    step = Math.min(step + 1, STEPS.length - 1);
    window.scrollTo({ top: document.getElementById('simulator').offsetTop - 80, behavior: 'smooth' });
  }
  function back() { direction = -1; step = Math.max(step - 1, 0); }

  function reset() {
    step = 0; diveType = '';
    cylinderRentals = {}; fills = {};
    needGear = null; gearQtys = {};
    needDPV = null; dpvDives = 1;
  }

  // ── Helpers ────────────────────────────────────────────
  function setRental(cylId, val) {
    const n = Math.max(0, parseInt(val) || 0);
    if (n === 0) { const { [cylId]: _, ...rest } = cylinderRentals; cylinderRentals = rest; }
    else cylinderRentals = { ...cylinderRentals, [cylId]: n };
  }

  function setFill(cylId, gasId, val) {
    const n = Math.max(0, parseInt(val) || 0);
    const cyls = { ...(fills[cylId] || {}) };
    if (n === 0) delete cyls[gasId]; else cyls[gasId] = n;
    if (Object.keys(cyls).length === 0) {
      const { [cylId]: _, ...rest } = fills; fills = rest;
    } else {
      fills = { ...fills, [cylId]: cyls };
    }
  }

  function toggleGear(gearId) {
    if (gearQtys[gearId]) { const { [gearId]: _, ...rest } = gearQtys; gearQtys = rest; }
    else gearQtys = { ...gearQtys, [gearId]: 1 };
  }

  function setGearQty(gearId, val) {
    const n = Math.max(1, parseInt(val) || 1);
    gearQtys = { ...gearQtys, [gearId]: n };
  }

  // ── Derived ────────────────────────────────────────────
  $: relevantCylinders = cylindersForDiveType(diveType);

  $: rentalTotal = Object.entries(cylinderRentals).reduce((s, [cylId, qty]) => {
    const cyl = CYLINDERS.find(c => c.id === cylId);
    return s + (cyl ? cyl.pricePerRental * qty : 0);
  }, 0);

  $: fillTotal = Object.entries(fills).reduce((s, [cylId, gases]) =>
    s + Object.entries(gases).reduce((gs, [gasId, qty]) =>
      gs + fillPrice(cylId, gasId) * qty, 0), 0);

  $: gearTotal = Object.entries(gearQtys).reduce((s, [gearId, qty]) => {
    const item = GEAR_ITEMS.find(g => g.id === gearId);
    return s + (item ? item.pricePerDay * divingDays * qty : 0);
  }, 0);

  $: boatTotal  = divingDays * PRICING.boatCaveDivePerDay;
  $: dpvTotal   = needDPV === 'yes' ? dpvDives * PRICING.dpvPerDive : 0;
  $: grandTotal = Math.ceil(boatTotal + rentalTotal + fillTotal + gearTotal + dpvTotal);

  $: canProceed = (
    (step === 0 && divingDays >= 1) ||
    (step === 1 && diveType !== '')  ||
    step === 2 || step === 3        ||
    (step === 4 && needGear !== null) ||
    (step === 5 && needDPV !== null)  ||
    step === 6
  );
</script>

<!-- ═══════════════════════════════════════════════════════ -->
<div class="simulator" id="simulator">

  <SimProgress steps={STEPS} {step} on:goto={e => { direction = -1; step = e.detail; }} />

  <!-- Card -->
  <div class="sim-card">
    {#key step}
    <div in:fly={{ x: direction * 40, duration: 300, delay: 80 }} out:fly={{ x: direction * -40, duration: 200 }}>

    <!-- ── Step 0: Days ────────────────────────────────── -->
    {#if step === 0}
      <div class="sim-step-content">
        <p class="sim-eyebrow">Step 1</p>
        <h3>How many days are you planning to dive?</h3>
        <div class="sim-field">
          <label>Diving days</label>
          <div class="sim-counter">
            <button on:click={() => divingDays = Math.max(1, divingDays - 1)}>−</button>
            <span>{divingDays}</span>
            <button on:click={() => divingDays++}>+</button>
          </div>
        </div>
        <div class="sim-summary-line">
          <strong>{divingDays} day{divingDays > 1 ? 's' : ''}</strong> · 1 dive per day = <strong>{divingDays} dive{divingDays > 1 ? 's' : ''}</strong> total
        </div>
      </div>

    <!-- ── Step 1: Dive Type ───────────────────────────── -->
    {:else if step === 1}
      <div class="sim-step-content">
        <p class="sim-eyebrow">Step 2</p>
        <h3>What type of diving are you planning?</h3>
        <div class="sim-option-grid">
          {#each DIVE_TYPES as dt}
            <button
              class="sim-option"
              class:selected={diveType === dt.id}
              on:click={() => { diveType = dt.id; cylinderRentals = {}; fills = {}; }}
            >
              <span class="sim-option-label">{dt.label}</span>
              <span class="sim-option-sub">{dt.sub}</span>
            </button>
          {/each}
        </div>
      </div>

    <!-- ── Step 2: Cylinder Rentals ───────────────────── -->
    {:else if step === 2}
      <div class="sim-step-content">
        <p class="sim-eyebrow">Step 3</p>
        <h3>Which cylinders do you need to rent?</h3>
        <p class="sim-desc">Enter the number of rentals for each. Leave at 0 if you're bringing your own.</p>
        <div class="sim-fills-grid">
          {#each relevantCylinders as cyl}
            <div class="sim-fill-row" class:active={cylinderRentals[cyl.id] > 0}>
              <span class="sim-fill-label">{cyl.label}</span>
              <div class="sim-counter small">
                <button on:click={() => setRental(cyl.id, (cylinderRentals[cyl.id] || 0) - 1)}>−</button>
                <span>{cylinderRentals[cyl.id] || 0}</span>
                <button on:click={() => setRental(cyl.id, (cylinderRentals[cyl.id] || 0) + 1)}>+</button>
              </div>
            </div>
          {/each}
        </div>
      </div>

    <!-- ── Step 3: Gas Fills ───────────────────────────── -->
    {:else if step === 3}
      <div class="sim-step-content">
        <p class="sim-eyebrow">Step 4</p>
        <h3>What fills do you need?</h3>
        <p class="sim-desc">Specify gas type and number of fills per cylinder. Leave at 0 if not needed.</p>
        {#each relevantCylinders as cyl}
          <div class="sim-fill-section">
            <p class="sim-fill-section-label">{cyl.label}</p>
            <div class="sim-fills-grid">
              {#each FILL_GASES as gas}
                <div class="sim-fill-row" class:active={fills[cyl.id]?.[gas.id] > 0}>
                  <span class="sim-fill-label">{gas.label}</span>
                  <div class="sim-counter small">
                    <button on:click={() => setFill(cyl.id, gas.id, (fills[cyl.id]?.[gas.id] || 0) - 1)}>−</button>
                    <span>{fills[cyl.id]?.[gas.id] || 0}</span>
                    <button on:click={() => setFill(cyl.id, gas.id, (fills[cyl.id]?.[gas.id] || 0) + 1)}>+</button>
                  </div>
                </div>
              {/each}
            </div>
          </div>
        {/each}
        <div class="sim-note">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
          Trimix fills are available and priced separately — contact us for a tailored quote.
        </div>
      </div>

    <!-- ── Step 4: Gear Rental ────────────────────────── -->
    {:else if step === 4}
      <div class="sim-step-content">
        <p class="sim-eyebrow">Step 5</p>
        <h3>Do you need to rent any gear?</h3>
        <div class="sim-toggle-group">
          <button class="sim-toggle" class:selected={needGear === 'no'}  on:click={() => { needGear = 'no'; gearQtys = {}; }}>No</button>
          <button class="sim-toggle" class:selected={needGear === 'yes'} on:click={() => needGear = 'yes'}>Yes</button>
        </div>
        {#if needGear === 'yes'}
          <div class="sim-sub-prompt">
            <label>Select items <span class="sim-hint">(priced per diving day)</span></label>
            <div class="sim-gear-list">
              {#each GEAR_ITEMS as item}
                <div
                  class="sim-gear-item"
                  class:selected={gearQtys[item.id] > 0}
                  on:click={() => toggleGear(item.id)}
                  role="button"
                  tabindex="0"
                  on:keydown={e => e.key === 'Enter' && toggleGear(item.id)}
                >
                  <span class="sim-gear-label">{item.label}</span>
                  <div class="sim-gear-right">
                    {#if item.hasQty && gearQtys[item.id] > 0}
                      <div class="sim-counter small" on:click|stopPropagation>
                        <button on:click|stopPropagation={() => setGearQty(item.id, (gearQtys[item.id] || 1) - 1)}>−</button>
                        <span>{gearQtys[item.id]}</span>
                        <button on:click|stopPropagation={() => setGearQty(item.id, (gearQtys[item.id] || 1) + 1)}>+</button>
                      </div>
                    {:else}
                      <span class="sim-gear-price">€{item.pricePerDay}/day</span>
                    {/if}
                  </div>
                </div>
              {/each}
            </div>
          </div>
        {/if}
      </div>

    <!-- ── Step 5: DPV ────────────────────────────────── -->
    {:else if step === 5}
      <div class="sim-step-content">
        <p class="sim-eyebrow">Step 6</p>
        <h3>Do you need a DPV?</h3>
        <div class="sim-toggle-group">
          <button class="sim-toggle" class:selected={needDPV === 'no'}  on:click={() => { needDPV = 'no'; dpvDives = 1; }}>No</button>
          <button class="sim-toggle" class:selected={needDPV === 'yes'} on:click={() => needDPV = 'yes'}>Yes</button>
        </div>
        {#if needDPV === 'yes'}
          <div class="sim-sub-prompt">
            <label>How many dives with DPV?</label>
            <div class="sim-counter">
              <button on:click={() => dpvDives = Math.max(1, dpvDives - 1)}>−</button>
              <span>{dpvDives}</span>
              <button on:click={() => dpvDives++}>+</button>
            </div>
            <div class="sim-note" style="margin-top:1rem;">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
              DPV cave rental includes a backup DPV at no extra cost.
            </div>
          </div>
        {/if}
      </div>

    <!-- ── Step 6: Summary ────────────────────────────── -->
    {:else if step === 6}
      <SimSummary
        {divingDays} {diveType} {cylinderRentals} {fills}
        {gearQtys} {needDPV} {dpvDives}
        {boatTotal} {rentalTotal} {fillTotal} {gearTotal} {dpvTotal} {grandTotal}
      />
    {/if}

    </div>
    {/key}

    <!-- Navigation -->
    {#if step < 6}
      <div class="sim-nav">
        {#if step > 0}
          <button class="sim-btn-back" on:click={back}>← Back</button>
        {:else}
          <div></div>
        {/if}
        <button class="sim-btn-next" on:click={next} disabled={!canProceed}>
          {step === 5 ? 'See Estimate →' : 'Continue →'}
        </button>
      </div>
    {:else}
      <div class="sim-nav">
        <button class="sim-btn-back" on:click={back}>← Back</button>
        <button class="sim-btn-next" on:click={reset}>Start Over</button>
      </div>
    {/if}

  </div>
</div>

<!-- styles → src/lib/styles/simulator.css -->
