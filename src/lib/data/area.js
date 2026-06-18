export const activities = [
  {
    icon: 'boat',
    title: 'DPV Snorkel Experience',
    url: 'https://sardiniasnorkeldpv.com/',
    desc: `This is snorkelling with a boost: you'll use easy-to-handle scooters to explore coastline and shallow-water scenery with a supervisor—at a pace that's fun, controlled, and beginner-friendly.`,
    tags: ['Cala Luna', 'Grottacce'],
  },
  {
    icon: 'canyon',
    title: 'Gorropu Canyon',
    desc: 'One of the deepest canyons in Europe. The hike into Gorropu passes through Supramonte scrubland before descending into a narrow limestone gorge with walls up to 400m high.',
    tags: ['Trekking', 'Gorropu', 'Supramonte'],
  },
  {
    icon: 'sup',
    title: 'Paddle the Coastline',
    desc: 'Explore the Cala Gonone coastline by SUP. Paddle through clear-water shallows, quiet coves, limestone cliffs, and sea caves at a relaxed pace. Early morning is best.',
    tags: ['Kayak', 'Sea Caves', 'Coastline'],
  },
  {
    icon: 'hiking',
    title: 'Supramonte Hiking',
    desc: 'Discover Cala Luna on a guided hike through the wild limestone landscapes of the Supramonte. Walk ancient shepherd tracks, visit Todeitto’s hidden cave and a traditional shepherd hut, then reach Cala Luna for a swim before returning to Cala Gonone on foot or by boat.',
    tags: ['Hiking', 'Wilderness', 'Plateau'],
  },
  {
    icon: 'climbing',
    title: 'Rock Climbing',
    desc: 'Cala Gonone is one of the Mediterranean’s premier sport-climbing destinations. Hundreds of bolted limestone routes overlook the sea, from gentle beginner crags to overhanging test-pieces, all minutes from the village.',
    tags: ['Climbing', 'Limestone', 'Sea Views'],
  },
  {
    icon: 'kayak',
    title: 'Sea Kayaking',
    desc: 'Explore the Gulf of Orosei’s hidden coves, arches, and sea caves by kayak. Guided coastal paddles reach beaches unreachable by road, with swimming and snorkelling stops in turquoise water along the way.',
    tags: ['Kayak', 'Sea Caves', 'Coastline'],
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
    notes: 'Closest for summer connections; direct flights from North Europe and USA.',
  },
  {
    icon: 'plane',
    from: 'Cagliari Airport',
    time: 'approx. 2.5 hours',
    notes: 'Best option from Rome and Southern Italy. Larger airport, more year-round flights.',
  },
  {
    icon: 'plane',
    from: 'Alghero Airport',
    time: 'approx. 3 hours',
    notes: 'Good for low-cost European flights. Longer drive through the interior, but in a rewarding natural scenery.',
  },
];

export const ferryRoutes = [
  // From mainland Italy
  { region: 'From Italy',             flag: '🇮🇹', from: 'Genova',        to: 'Olbia · Porto Torres' },
  { region: 'From Italy',             flag: '🇮🇹', from: 'Livorno',       to: 'Olbia' },
  { region: 'From Italy',             flag: '🇮🇹', from: 'Civitavecchia', to: 'Olbia · Cagliari · Arbatax' },
  { region: 'From Italy',             flag: '🇮🇹', from: 'Palermo',       to: 'Cagliari' },
  // From France & Spain
  { region: 'From France & Spain',    flag: '🇪🇸', from: 'Barcelona',     to: 'Porto Torres' },
  { region: 'From France & Spain',    flag: '🇫🇷', from: 'Toulon',        to: 'Porto Torres' },
  { region: 'From France & Spain',    flag: '🇫🇷', from: 'Toulon',        to: 'Olbia', via: 'via Golfo Aranci' },
  { region: 'From France & Spain',    flag: '🇫🇷', from: 'Nice',          to: 'Porto Torres' },
  { region: 'From France & Spain',    flag: '🇫🇷', from: 'Nice',          to: 'Olbia', via: 'via Golfo Aranci' },
];

export const accommodations = [
  {
    name: 'Recommended Hotels',
    desc: 'Base One has long-standing relationships with the best structures in Cala Gonone. We can help you book.',
    examples: ['Bue Marino Hotel', 'Hotel Nuovo Gabbiano', 'Piccolo Hotel'],
  },
  {
    name: 'Apartments — Local Knowledge',
    desc: 'For bigger groups or family stays, apartments work best. Tell us your dates and group size and we will use our local network to find the right place for you.',
    examples: ['Groups & families', 'Long stays', 'Walk to base'],
  },
];
