<script>
  import { DIVE_TYPES, CYLINDERS, FILL_GASES, GEAR_ITEMS, fillPrice } from '$lib/data/simulator.js';

  export let divingDays;
  export let diveType;
  export let cylinderRentals;
  export let fills;
  export let gearQtys;
  export let needDPV;
  export let dpvDives;
  export let boatTotal;
  export let rentalTotal;
  export let fillTotal;
  export let gearTotal;
  export let dpvTotal;
  export let grandTotal;
</script>

<div class="sim-step-content">
  <p class="sim-eyebrow">Summary</p>
  <h3>Your Trip Estimate</h3>

  <div class="sim-summary">

    <!-- Overview -->
    <div class="sim-summary-section">
      <div class="sim-summary-row header"><span>Trip Overview</span></div>
      <div class="sim-summary-row">
        <span>Duration</span>
        <span>{divingDays} day{divingDays > 1 ? 's' : ''} · 1 dive/day</span>
      </div>
      <div class="sim-summary-row">
        <span>Configuration</span>
        <span>{DIVE_TYPES.find(d => d.id === diveType)?.label || '—'}</span>
      </div>
    </div>

    <!-- Boat cave dive fee -->
    <div class="sim-summary-section">
      <div class="sim-summary-row header"><span>Boat Cave Diving</span><span>Cost</span></div>
      <div class="sim-summary-row">
        <span>Cave dive fee × {divingDays} day{divingDays > 1 ? 's' : ''}</span>
        <span>€{boatTotal}</span>
      </div>
      <div class="sim-summary-row subtotal"><span>Boat subtotal</span><span>€{boatTotal}</span></div>
    </div>

    <!-- Cylinder rentals -->
    {#if Object.keys(cylinderRentals).length > 0}
      <div class="sim-summary-section">
        <div class="sim-summary-row header"><span>Cylinder Rentals</span><span>Cost</span></div>
        {#each Object.entries(cylinderRentals) as [cylId, qty]}
          {@const cyl = CYLINDERS.find(c => c.id === cylId)}
          <div class="sim-summary-row">
            <span>{cyl?.label} × {qty}</span>
            <span>€{cyl ? cyl.pricePerRental * qty : 0}</span>
          </div>
        {/each}
        <div class="sim-summary-row subtotal"><span>Rentals subtotal</span><span>€{rentalTotal}</span></div>
      </div>
    {/if}

    <!-- Fills -->
    {#if Object.keys(fills).length > 0}
      <div class="sim-summary-section">
        <div class="sim-summary-row header"><span>Gas Fills</span><span>Cost</span></div>
        {#each Object.entries(fills) as [cylId, gases]}
          {@const cyl = CYLINDERS.find(c => c.id === cylId)}
          {#each Object.entries(gases) as [gasId, qty]}
            {@const gas = FILL_GASES.find(g => g.id === gasId)}
            <div class="sim-summary-row">
              <span>{cyl?.label} — {gas?.label} × {qty}</span>
              <span>€{fillPrice(cylId, gasId) * qty}</span>
            </div>
          {/each}
        {/each}
        <div class="sim-summary-row subtotal"><span>Fills subtotal</span><span>€{fillTotal}</span></div>
      </div>
    {/if}

    <!-- Gear -->
    {#if Object.keys(gearQtys).length > 0}
      <div class="sim-summary-section">
        <div class="sim-summary-row header"><span>Gear Rental ({divingDays} days)</span><span>Cost</span></div>
        {#each Object.entries(gearQtys) as [gearId, qty]}
          {@const item = GEAR_ITEMS.find(g => g.id === gearId)}
          <div class="sim-summary-row">
            <span>{item?.label}{qty > 1 ? ` × ${qty}` : ''}</span>
            <span>€{item ? item.pricePerDay * divingDays * qty : 0}</span>
          </div>
        {/each}
        <div class="sim-summary-row subtotal"><span>Gear subtotal</span><span>€{gearTotal}</span></div>
      </div>
    {/if}

    <!-- DPV -->
    {#if needDPV === 'yes'}
      <div class="sim-summary-section">
        <div class="sim-summary-row header"><span>DPV Rental</span><span>Cost</span></div>
        <div class="sim-summary-row">
          <span>DPV × {dpvDives} dive{dpvDives > 1 ? 's' : ''} (incl. backup)</span>
          <span>€{dpvTotal}</span>
        </div>
        <div class="sim-summary-row subtotal"><span>DPV subtotal</span><span>€{dpvTotal}</span></div>
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

  <div class="sim-summary-actions">
    <a href="#contact" class="sim-cta-btn">Send Your Inquiry</a>
    <a href="/pricelist.pdf" target="_blank" class="sim-pricelist-link">
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
      Download full pricelist
    </a>
  </div>
</div>

<!-- styles → src/lib/styles/simulator.css -->
