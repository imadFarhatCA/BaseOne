// Trip Simulator config — pricing from Base One Pricelist 2026

export const DIVE_TYPES = [
  { id: 'single',    label: 'Single Tank',  sub: '12L' },
  { id: 'doubles',   label: 'Doubles',      sub: '2×12L' },
  { id: 'sidemount', label: 'Sidemount',    sub: '2×12L side' },
  { id: 'ccr',       label: 'CCR',          sub: 'Closed Circuit' },
];

// volumeL = water capacity in litres (used to calculate fill cost)
// pricePerRental = € per rental unit
export const CYLINDERS = [
  { id: 'doubles_2x12',    label: 'Doubles 2×12',         groups: ['doubles'],            pricePerRental: 20, volumeL: 24  },
  { id: 'single_12_steel', label: 'Single 12L Steel',     groups: ['single','sidemount'], pricePerRental: 10, volumeL: 12  },
  { id: 'single_12_alu',   label: 'Single 12L Aluminum',  groups: ['single','sidemount'], pricePerRental: 10, volumeL: 12  },
  { id: 'ccr_3l_o2',       label: 'CCR 3L Oxygen',        groups: ['ccr'],                pricePerRental: 10, volumeL: 3   },
  { id: 'ccr_3l_dil',      label: 'CCR 3L Diluent',       groups: ['ccr'],                pricePerRental: 10, volumeL: 3   },
  { id: 'ccr_2x7l',        label: 'CCR 2×7L (Lola D7)',   groups: ['ccr'],                pricePerRental: 20, volumeL: 14  },
  { id: 'ccr_2x3l',        label: 'CCR 2×3L (Lola D3)',   groups: ['ccr'],                pricePerRental: 20, volumeL: 6   },
  { id: 'stage_s80',       label: 'Stage S80',            groups: ['all'],                pricePerRental: 10, volumeL: 11  },
  { id: 'stage_s40',       label: 'Stage S40',            groups: ['all'],                pricePerRental: 10, volumeL: 6   },
];

// pricePerLitre = € per litre of cylinder water capacity (at 200/220 bar)
export const FILL_GASES = [
  { id: 'ean32', label: 'EAN32', pricePerLitre: 1.20 },
  { id: 'ean50', label: 'EAN50', pricePerLitre: 1.55 },
  { id: 'o2',    label: 'O2',    pricePerLitre: 5.00 },
  { id: 'air',   label: 'Air',   pricePerLitre: 1.00 },
];

export const GEAR_ITEMS = [
  { id: 'wing',          label: 'Wing',                          pricePerDay: 10, hasQty: false },
  { id: 'bp',            label: 'Backplate',                     pricePerDay: 10, hasQty: false },
  { id: 'double-regs',   label: 'Double Tank Regulators (set)', pricePerDay: 20, hasQty: false },
  { id: 'single-regs',   label: 'Single Tank Regulators',       pricePerDay: 15, hasQty: false },
  { id: 'stage-reg',     label: 'Stage Regulator',              pricePerDay: 10, hasQty: true  },
  { id: 'sm-regs',       label: 'Sidemount Regulators (set)',   pricePerDay: 20, hasQty: false },
  { id: 'fins',          label: 'Fins',                         pricePerDay: 10, hasQty: false },
  { id: 'primary-light', label: 'Primary Light',                pricePerDay: 10, hasQty: false },
  { id: 'backup-light',  label: 'Backup Light (set of 2)',      pricePerDay:  5, hasQty: false },
];

export const PRICING = {
  boatCaveDivePerDay: 135, // Boat cave dive fee €135/dive (1 dive/day)
  dpvPerDive: 95,          // DPV XK €95/dive
};

// Fill cost for one fill of a given cylinder with a given gas
export function fillPrice(cylId, gasId) {
  const cyl = CYLINDERS.find(c => c.id === cylId);
  const gas = FILL_GASES.find(g => g.id === gasId);
  if (!cyl || !gas) return 0;
  return Math.ceil(cyl.volumeL * gas.pricePerLitre);
}

// Returns cylinders relevant to the selected dive type
export function cylindersForDiveType(diveType) {
  if (!diveType) return [];
  return CYLINDERS.filter(c => c.groups.includes(diveType) || c.groups.includes('all'));
}
