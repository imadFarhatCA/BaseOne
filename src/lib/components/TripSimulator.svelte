<script>
  import { STANDARD_GASES, CCR_TANKS, SCR_TANKS, STAGE_TANKS, GEAR_ITEMS, PRICING } from '$lib/data/simulator.js';
  import { fly, fade } from 'svelte/transition';

  const STEPS = ['Basics', 'Dive Type', 'Gas Fills', 'Stages', 'Gear', 'DPV', 'Summary'];
  let direction = 1; // 1 = forward, -1 = backward
  let visible = true;

  // ── State ──────────────────────────────────────────────
  let step = 0;

  let divingDays   = 3;
  let divesPerDay  = 2;

  let diveType  = '';   // backmount | sidemount | ccr | scr
  let ccrTanks  = [];
  let scrTanks  = [];

  let fills = {};       // { gasId: qty }

  let needStages  = null;
  let stages      = []; // [{ tank, gas }]
  let stageTank   = 'S80';
  let stageGas    = '';

  let needGear     = null;
  let selectedGear = [];

  let needDPV  = null;
  let dpvDives = 1;

  // ── Navigation ─────────────────────────────────────────
  async function next() { direction = 1; step = Math.min(step + 1, STEPS.length - 1); window.scrollTo({ top: document.getElementById('simulator').offsetTop - 80, behavior: 'smooth' }); }
  async function back() { direction = -1; step = Math.max(step - 1, 0); }

  // ── Helpers ────────────────────────────────────────────
  function toggle(arr, id) {
    return arr.includes(id) ? arr.filter(x => x !== id) : [...arr, id];
  }

  function setFill(gasId, val) {
    const n = Math.max(0, parseInt(val) || 0);
    if (n === 0) { const { [gasId]: _, ...rest } = fills; fills = rest; }
    else fills = { ...fills, [gasId]: n };
  }

  function addStage() {
    if (!stageGas) return;
    stages = [...stages, { tank: stageTank, gas: stageGas }];
    stageGas = '';
  }
  function removeStage(i) { stages = stages.filter((_, idx) => idx !== i); }

  // ── Labels ─────────────────────────────────────────────
  const DIVE_TYPE_LABELS = {
    backmount: 'Backmount — D12',
    sidemount: 'Sidemount — 12L × 2',
    ccr:       'CCR',
    scr:       'SCR',
  };

  function gasLabel(id) {
    return STANDARD_GASES.find(g => g.id === id)?.label ?? id;
  }

  // ── Totals ─────────────────────────────────────────────
  $: fillTotal = Object.entries(fills).reduce((s, [, qty]) => s + qty * PRICING.fillPerCylinder, 0);

  $: stageTotal = stages.reduce((s) => s + PRICING.stagePerFill, 0);

  $: gearTotal = selectedGear.reduce((s, id) => {
    const item = GEAR_ITEMS.find(g => g.id === id);
    return s + (item ? item.pricePerDay * divingDays : 0);
  }, 0);

  $: dpvTotal = needDPV === 'yes' ? dpvDives * PRICING.dpvPerDive : 0;

  $: grandTotal = fillTotal + stageTotal + gearTotal + dpvTotal;

  // ── Step validation ────────────────────────────────────
  $: canProceed = (
    (step === 0 && divingDays >= 1) ||
    (step === 1 && diveType !== '') ||
    (step === 2) ||
    (step === 3 && needStages !== null) ||
    (step === 4 && needGear !== null) ||
    (step === 5 && needDPV !== null) ||
    step === 6
  );
</script>

<!-- ═══════════════════════════════════════════════════════ -->
<div class="simulator" id="simulator">

  <!-- Progress bar -->
  <div class="sim-progress">
    {#each STEPS as label, i}
      <button
        class="sim-step-dot"
        class:active={step === i}
        class:done={step > i}
        on:click={() => step > i ? step = i : null}
        disabled={step <= i}
        aria-label={label}
      >
        <span class="sim-step-num">{step > i ? '✓' : i + 1}</span>
        <span class="sim-step-label">{label}</span>
      </button>
      {#if i < STEPS.length - 1}
        <div class="sim-step-line" class:done={step > i}></div>
      {/if}
    {/each}
  </div>

  <!-- Card -->
  <div class="sim-card">

    <!-- ── Step 0: Basics ──────────────────────────────── -->
    {#key step}
    <div in:fly={{ x: direction * 40, duration: 300, delay: 80 }} out:fly={{ x: direction * -40, duration: 200 }}>
    {#if step === 0}
      <div class="sim-step-content">
        <p class="sim-eyebrow">Step 1</p>
        <h3>How are you planning your trip?</h3>

        <div class="sim-field">
          <label>How many diving days?</label>
          <div class="sim-counter">
            <button on:click={() => divingDays = Math.max(1, divingDays - 1)}>−</button>
            <span>{divingDays}</span>
            <button on:click={() => divingDays++}>+</button>
          </div>
        </div>

        <div class="sim-field">
          <label>How many dives per day?</label>
          <div class="sim-toggle-group">
            <button class="sim-toggle" class:selected={divesPerDay === 1} on:click={() => divesPerDay = 1}>1 dive</button>
            <button class="sim-toggle" class:selected={divesPerDay === 2} on:click={() => divesPerDay = 2}>2 dives</button>
          </div>
        </div>

        <div class="sim-summary-line">
          <strong>{divingDays} days</strong> · <strong>{divesPerDay} dive{divesPerDay > 1 ? 's' : ''}/day</strong> = {divingDays * divesPerDay} dives total
        </div>
      </div>

    <!-- ── Step 1: Dive Type ───────────────────────────── -->
    {:else if step === 1}
      <div class="sim-step-content">
        <p class="sim-eyebrow">Step 2</p>
        <h3>What type of diving are you doing?</h3>

        <div class="sim-option-grid">
          {#each [['backmount','Backmount','D12'],['sidemount','Sidemount','12L × 2'],['ccr','CCR','Closed Circuit'],['scr','SCR','Semi-Closed']] as [val, label, sub]}
            <button
              class="sim-option"
              class:selected={diveType === val}
              on:click={() => { diveType = val; ccrTanks = []; scrTanks = []; }}
            >
              <span class="sim-option-label">{label}</span>
              <span class="sim-option-sub">{sub}</span>
            </button>
          {/each}
        </div>

        <!-- CCR sub-prompt -->
        {#if diveType === 'ccr'}
          <div class="sim-sub-prompt">
            <label>Which tanks will you be using? <span class="sim-hint">(select all that apply)</span></label>
            <div class="sim-check-group">
              {#each CCR_TANKS as t}
                <button
                  class="sim-check"
                  class:selected={ccrTanks.includes(t.id)}
                  on:click={() => ccrTanks = toggle(ccrTanks, t.id)}
                >{t.label}</button>
              {/each}
            </div>
          </div>
        {/if}

        <!-- SCR sub-prompt -->
        {#if diveType === 'scr'}
          <div class="sim-sub-prompt">
            <label>Which tanks will you be using? <span class="sim-hint">(select all that apply)</span></label>
            <div class="sim-check-group">
              {#each SCR_TANKS as t}
                <button
                  class="sim-check"
                  class:selected={scrTanks.includes(t.id)}
                  on:click={() => scrTanks = toggle(scrTanks, t.id)}
                >{t.label}</button>
              {/each}
            </div>
          </div>
        {/if}
      </div>

    <!-- ── Step 2: Gas Fills ───────────────────────────── -->
    {:else if step === 2}
      <div class="sim-step-content">
        <p class="sim-eyebrow">Step 3</p>
        <h3>What fills do you need?</h3>
        <p class="sim-desc">Select each gas mix and the number of fills required.</p>

        <div class="sim-fills-grid">
          {#each STANDARD_GASES as gas}
            <div class="sim-fill-row" class:active={fills[gas.id] > 0}>
              <span class="sim-fill-label">{gas.label}</span>
              <div class="sim-counter small">
                <button on:click={() => setFill(gas.id, (fills[gas.id] || 0) - 1)}>−</button>
                <span>{fills[gas.id] || 0}</span>
                <button on:click={() => setFill(gas.id, (fills[gas.id] || 0) + 1)}>+</button>
              </div>
            </div>
          {/each}
        </div>

        {#if Object.keys(fills).length === 0}
          <p class="sim-hint-text">Select 0 fills if you are providing your own gas.</p>
        {/if}
      </div>

    <!-- ── Step 3: Stages ─────────────────────────────── -->
    {:else if step === 3}
      <div class="sim-step-content">
        <p class="sim-eyebrow">Step 4</p>
        <h3>Do you need stages?</h3>

        <div class="sim-toggle-group">
          <button class="sim-toggle" class:selected={needStages === 'no'} on:click={() => { needStages = 'no'; stages = []; }}>No</button>
          <button class="sim-toggle" class:selected={needStages === 'yes'} on:click={() => needStages = 'yes'}>Yes</button>
        </div>

        {#if needStages === 'yes'}
          <div class="sim-sub-prompt">
            <label>Add a stage configuration</label>
            <div class="sim-stage-builder">
              <div class="sim-stage-selects">
                <div class="sim-select-wrap">
                  <span class="sim-select-label">Tank</span>
                  <div class="sim-check-group">
                    {#each STAGE_TANKS as t}
                      <button class="sim-check" class:selected={stageTank === t.id} on:click={() => stageTank = t.id}>{t.label}</button>
                    {/each}
                  </div>
                </div>
                <div class="sim-select-wrap">
                  <span class="sim-select-label">Gas</span>
                  <div class="sim-check-group">
                    {#each STANDARD_GASES as g}
                      <button class="sim-check" class:selected={stageGas === g.id} on:click={() => stageGas = g.id}>{g.label}</button>
                    {/each}
                  </div>
                </div>
              </div>
              <button class="sim-add-btn" on:click={addStage} disabled={!stageGas}>+ Add Stage</button>
            </div>

            {#if stages.length > 0}
              <div class="sim-stage-list">
                {#each stages as s, i}
                  <div class="sim-stage-item">
                    <span>{s.tank} — {gasLabel(s.gas)}</span>
                    <button class="sim-remove" on:click={() => removeStage(i)}>✕</button>
                  </div>
                {/each}
              </div>
            {/if}
          </div>
        {/if}
      </div>

    <!-- ── Step 4: Gear Rental ────────────────────────── -->
    {:else if step === 4}
      <div class="sim-step-content">
        <p class="sim-eyebrow">Step 5</p>
        <h3>Do you need to rent any gear?</h3>

        <div class="sim-toggle-group">
          <button class="sim-toggle" class:selected={needGear === 'no'} on:click={() => { needGear = 'no'; selectedGear = []; }}>No</button>
          <button class="sim-toggle" class:selected={needGear === 'yes'} on:click={() => needGear = 'yes'}>Yes</button>
        </div>

        {#if needGear === 'yes'}
          <div class="sim-sub-prompt">
            <label>Select items <span class="sim-hint">(priced per diving day)</span></label>
            <div class="sim-gear-list">
              {#each GEAR_ITEMS as item}
                <button
                  class="sim-gear-item"
                  class:selected={selectedGear.includes(item.id)}
                  on:click={() => selectedGear = toggle(selectedGear, item.id)}
                >
                  <span class="sim-gear-label">{item.label}</span>
                  <span class="sim-gear-price">€{item.pricePerDay}/day</span>
                </button>
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
          <button class="sim-toggle" class:selected={needDPV === 'no'} on:click={() => { needDPV = 'no'; dpvDives = 1; }}>No</button>
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
            <div class="sim-note">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
              DPV cave rental includes a backup DPV at no extra cost.
            </div>
          </div>
        {/if}
      </div>

    <!-- ── Step 6: Summary ────────────────────────────── -->
    {:else if step === 6}
      <div class="sim-step-content">
        <p class="sim-eyebrow">Summary</p>
        <h3>Your Trip Estimate</h3>

        <div class="sim-summary">

          <div class="sim-summary-section">
            <div class="sim-summary-row header">
              <span>Trip Overview</span>
            </div>
            <div class="sim-summary-row">
              <span>Duration</span>
              <span>{divingDays} days · {divesPerDay} dive{divesPerDay > 1 ? 's' : ''}/day</span>
            </div>
            <div class="sim-summary-row">
              <span>Configuration</span>
              <span>{DIVE_TYPE_LABELS[diveType] || '—'}</span>
            </div>
            {#if diveType === 'ccr' && ccrTanks.length > 0}
              <div class="sim-summary-row">
                <span>CCR Tanks</span>
                <span>{ccrTanks.map(id => CCR_TANKS.find(t => t.id === id)?.label).join(', ')}</span>
              </div>
            {/if}
            {#if diveType === 'scr' && scrTanks.length > 0}
              <div class="sim-summary-row">
                <span>SCR Tanks</span>
                <span>{scrTanks.map(id => SCR_TANKS.find(t => t.id === id)?.label).join(', ')}</span>
              </div>
            {/if}
          </div>

          {#if Object.keys(fills).length > 0}
            <div class="sim-summary-section">
              <div class="sim-summary-row header"><span>Gas Fills</span><span>Cost</span></div>
              {#each Object.entries(fills) as [gasId, qty]}
                <div class="sim-summary-row">
                  <span>{gasLabel(gasId)} × {qty}</span>
                  <span>€{qty * PRICING.fillPerCylinder}</span>
                </div>
              {/each}
              <div class="sim-summary-row subtotal">
                <span>Fills subtotal</span><span>€{fillTotal}</span>
              </div>
            </div>
          {/if}

          {#if needStages === 'yes' && stages.length > 0}
            <div class="sim-summary-section">
              <div class="sim-summary-row header"><span>Stages</span><span>Cost</span></div>
              {#each stages as s}
                <div class="sim-summary-row">
                  <span>{s.tank} — {gasLabel(s.gas)}</span>
                  <span>€{PRICING.stagePerFill}</span>
                </div>
              {/each}
              <div class="sim-summary-row subtotal">
                <span>Stages subtotal</span><span>€{stageTotal}</span>
              </div>
            </div>
          {/if}

          {#if needGear === 'yes' && selectedGear.length > 0}
            <div class="sim-summary-section">
              <div class="sim-summary-row header"><span>Gear Rental ({divingDays} days)</span><span>Cost</span></div>
              {#each selectedGear as id}
                {@const item = GEAR_ITEMS.find(g => g.id === id)}
                <div class="sim-summary-row">
                  <span>{item.label}</span>
                  <span>€{item.pricePerDay * divingDays}</span>
                </div>
              {/each}
              <div class="sim-summary-row subtotal">
                <span>Gear subtotal</span><span>€{gearTotal}</span>
              </div>
            </div>
          {/if}

          {#if needDPV === 'yes'}
            <div class="sim-summary-section">
              <div class="sim-summary-row header"><span>DPV Rental</span><span>Cost</span></div>
              <div class="sim-summary-row">
                <span>DPV × {dpvDives} dive{dpvDives > 1 ? 's' : ''} (incl. backup)</span>
                <span>€{dpvTotal}</span>
              </div>
              <div class="sim-summary-row subtotal">
                <span>DPV subtotal</span><span>€{dpvTotal}</span>
              </div>
            </div>
          {/if}

          <div class="sim-total-row">
            <span>Estimated Total</span>
            <span>€{grandTotal}</span>
          </div>
        </div>

        <div class="sim-disclaimer">
          These figures are approximations based on standard rates and are provided for planning purposes only. Final pricing may vary depending on gas volumes, equipment availability, dive conditions, and specific requirements. Please contact us to confirm your booking and receive an accurate quote.
        </div>

        <a href="#contact" class="sim-cta-btn">Send Your Inquiry</a>
      </div>
    {/if}
    </div>
    {/key}

    <!-- Navigation buttons -->
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
        <button class="sim-btn-next" on:click={() => { step = 0; fills = {}; stages = []; selectedGear = []; diveType = ''; needStages = null; needGear = null; needDPV = null; }}>
          Start Over
        </button>
      </div>
    {/if}

  </div>
</div>

<!-- styles → src/lib/styles/simulator.css -->
