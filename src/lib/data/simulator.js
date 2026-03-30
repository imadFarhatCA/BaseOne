// All simulator config — update pricing here when formula is ready

export const STANDARD_GASES = [
  { id: 'nx32',  label: 'NX32'  },
  { id: '21/35', label: '21/35' },
  { id: '18/45', label: '18/45' },
  { id: '15/55', label: '15/55' },
  { id: '12/65', label: '12/65' },
  { id: '10/70', label: '10/70' },
  { id: '50%',   label: '50%'   },
  { id: '100%',  label: '100%'  },
];

export const CCR_TANKS = [
  { id: '3l-dil',  label: '3L Dil'  },
  { id: '3l-o2',   label: '3L O2'   },
  { id: '2l',      label: '2L'      },
  { id: 'd7-lola', label: 'D7 Lola' },
];

export const SCR_TANKS = [
  { id: 'd7-lola',  label: 'D7 Lola'  },
  { id: 'd12-lola', label: 'D12 Lola' },
];

export const STAGE_TANKS = [
  { id: 'S80', label: 'S80' },
  { id: 'S40', label: 'S40' },
];

export const GEAR_ITEMS = [
  { id: 'wing-bp',      label: 'Wing / BP',                  pricePerDay: 15 },
  { id: 'double-regs',  label: 'Double Tank Regulators',     pricePerDay: 20 },
  { id: 'sm-regs',      label: 'Sidemount Regulators',       pricePerDay: 20 },
  { id: 'primary-light',label: 'Primary Light',              pricePerDay: 25 },
  { id: 'backup-light', label: 'Backup Light (set of 2)',    pricePerDay: 15 },
  { id: 'fins',         label: 'Fins',                       pricePerDay: 10 },
  { id: 'computer',     label: 'Dive Computer / Compass',    pricePerDay: 15 },
];

// Dummy pricing — replace with formula when ready
export const PRICING = {
  fillPerCylinder: 12,   // € per fill
  stagePerFill:    10,   // € per stage fill
  dpvPerDive:      80,   // € per DPV dive
};
