export const activities = [
  {
    icon: 'boat',
    title: 'Boat Tours to the Coves',
    desc: 'The most iconic experience in the Gulf of Orosei. Cala Luna, Cala Mariolu, and Cala Sisine are only reachable by sea — stunning white pebble beaches framed by towering limestone cliffs.',
    tags: ['Cala Luna', 'Cala Mariolu', 'Cala Sisine'],
  },
  {
    icon: 'canyon',
    title: 'Gorropu Canyon',
    desc: 'One of the deepest canyons in Europe. The hike into Gorropu passes through Supramonte scrubland before descending into a narrow limestone gorge with walls up to 400m high.',
    tags: ['Trekking', 'Gorropu', 'Supramonte'],
  },
  {
    icon: 'kayak',
    title: 'Sea Kayaking',
    desc: "Paddle the coastline at your own pace. Launch from Cala Gonone and explore sea caves, arches, and quiet coves that motor boats can't reach. Early morning is best.",
    tags: ['Kayak', 'Sea Caves', 'Coastline'],
  },
  {
    icon: 'hiking',
    title: 'Supramonte Hiking',
    desc: 'Wild limestone plateau rising above the gulf. Trails through ancient oak and holm oak forests lead to panoramic ridges, nuragic ruins, and shepherd tracks unchanged for centuries.',
    tags: ['Hiking', 'Wilderness', 'Plateau'],
  },
  {
    icon: 'ruins',
    title: 'Tiscali Nuragic Village',
    desc: 'A Bronze Age settlement hidden inside a collapsed cave. The walk through the valley of Lanaittu is as rewarding as the site itself — a genuinely hidden piece of ancient Sardinia.',
    tags: ['History', 'Nuragic', 'Culture'],
  },
  {
    icon: 'murals',
    title: 'Orgosolo Murals',
    desc: 'The hilltop town of Orgosolo, 40 minutes inland, is covered in hundreds of politically charged murals painted directly onto building facades — a living museum of Sardinian identity.',
    tags: ['Art', 'Culture', 'Orgosolo'],
  },
];

export const gettingHere = [
  {
    icon: 'plane',
    from: 'Olbia Airport',
    time: 'approx. 2 hours',
    notes: 'Closest for summer connections from Northern Europe. Follow SS131 south then SS125 east. Scenic road through Barbagia.',
  },
  {
    icon: 'plane',
    from: 'Cagliari Airport',
    time: 'approx. 2.5 hours',
    notes: 'Best option from Rome and Southern Italy. SS131 north then SS125. Larger airport, more year-round flights.',
  },
  {
    icon: 'plane',
    from: 'Alghero Airport',
    time: 'approx. 3 hours',
    notes: 'Good for low-cost European flights. Longer drive through the interior — rewarding scenery, light traffic.',
  },
  {
    icon: 'ferry',
    from: 'Ferry — Olbia or Cagliari',
    time: 'varies by crossing',
    notes: 'Overnight ferries from Genova, Livorno, Civitavecchia, and Palermo dock at Olbia or Cagliari. Direct routes also from France (Toulon, Nice) and Spain (Barcelona) to Porto Torres. Ideal for bringing equipment.',
  },
];

export const ferryRoutes = [
  { flag: '🇪🇸', from: 'Barcelona', to: 'Porto Torres' },
  { flag: '🇫🇷', from: 'Toulon',    to: 'Porto Torres' },
  { flag: '🇫🇷', from: 'Toulon',    to: 'Olbia', via: 'via Golfo Aranci' },
  { flag: '🇫🇷', from: 'Nice',      to: 'Porto Torres' },
  { flag: '🇫🇷', from: 'Nice',      to: 'Olbia', via: 'via Golfo Aranci' },
];

export const accommodations = [
  {
    name: 'Recommended Hotels',
    desc: 'Base One has long-standing relationships with the best places in Cala Gonone. We can put you in touch directly and help you book.',
    examples: ['Marino Hotel', 'Nuovo Gabbiano', 'Piccolo Hotels'],
  },
  {
    name: 'Apartments — Local Knowledge',
    desc: 'For longer stays or groups, apartments work best. Tell us your dates and group size and we will use our local network to find the right place near the port.',
    examples: ['Groups & families', 'Long stays', 'Walk to base'],
  },
];
