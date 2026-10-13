// Open-water & wreck sites - shown in the same card format as the caves.
// Images are verified online placeholders; swap for real Base One photos later.
export const openWater = [
  {
    name: 'Ugo Bassi',
    access: 'Boat access · ~87 m',
    description: 'One of Sardinia’s most impressive deep wrecks. The Ugo Bassi, a cargo steamship torpedoed and sunk in 1941, rests upright off the coast of Orosei at approximately 87 metres. Its well-preserved hull, open holds, superstructure, and abundant marine life make it an exceptional technical-diving site. Discovered in 2012, the wreck requires advanced trimix procedures, precise planning, and substantial decompression, making it suitable only for experienced deep technical and rebreather divers.',
    tags: ['Wreck', 'Deep', 'Trimix', 'CCR'],
    images: [
      { video: '/videos/ugo-bassi-1.mp4', poster: '/videos/ugo-bassi-1.jpg', alt: 'Ugo Bassi wreck dive footage 1' },
      { video: '/videos/ugo-bassi-2.mp4', poster: '/videos/ugo-bassi-2.jpg', alt: 'Ugo Bassi wreck dive footage 2' },
      { video: '/videos/ugo-bassi-3.mp4', poster: '/videos/ugo-bassi-3.jpg', alt: 'Ugo Bassi wreck dive footage 3' },
      { video: '/videos/ugo-bassi-4.mp4', poster: '/videos/ugo-bassi-4.jpg', alt: 'Ugo Bassi wreck dive footage 4' },
    ],
  },
  {
    name: 'KT-12',
    access: 'Boat access · 24–34 m',
    description: 'A distinctive Second World War wreck in the Gulf of Orosei. The German transport ship KT12 was sunk in 1943 and now lies in two main sections between approximately 24 and 34 metres. Its stern, cannon, propeller, rudder, and scattered cargo remain clearly visible.',
    tags: ['Wreck', 'WWII', 'Technical'],
    images: [
      { src: '/images/kt12.jpg', alt: 'Three divers with DPVs above the KT12 wreck deck gun' },
      { src: '/images/kt12-2.jpg', alt: 'Diver with a light framed by the broken structure of the KT12 wreck' },
      { src: '/images/kt12-3.jpg', alt: 'Diver in drysuit inside the KT12 wreck, light shafts above' },
      { src: '/images/kt12-4.jpg', alt: 'Two divers with lights swimming along the structure of the KT12 wreck' },
      // hidden: 'https://images.unsplash.com/photo-1551244072-5d12893278ab?w=900&q=70&auto=format&fit=crop',
    ],
  },
  {
    name: 'Nasello',
    access: 'Boat access · ~30 m',
    description: 'A practical wreck site in the Gulf of Orosei. The Nasello lies at approximately 30 metres, with visible hull sections, machinery, propeller, and rudder. Its depth and simple layout make it particularly useful for advanced and technical-diving training.',
    tags: ['Wreck', 'Training', 'Advanced'],
    images: [
      {
        model: '9671bbd86d214a428a5ab8d4d94bd1ab',
        poster: '/images/nasello-3d.jpg',
        alt: 'Nasello wreck - 3D photogrammetry model',
        credit: 'Kees.BL',
        url: 'https://sketchfab.com/3d-models/nasello-9671bbd86d214a428a5ab8d4d94bd1ab'
      },
      // hidden: 'https://images.unsplash.com/photo-1583212292454-1fe6229603b7?w=900&q=70&auto=format&fit=crop',
    ],
  },
  {
    name: 'Le Gorgonie',
    access: 'Boat access · ~50 m',
    description: 'A deep reef north of Cala Gonone, descending to approximately 50 metres. Le Gorgonie is defined by steep rocky terrain, clear open water, and extensive growths of Mediterranean gorgonians that become increasingly prominent with depth.',
    tags: ['Reef', 'Deep', 'Gorgonians'],
    images: ['https://images.unsplash.com/photo-1518467166778-b88f373ffec7?w=900&q=70&auto=format&fit=crop'],
  },
  {
    name: 'Galleria & Swim-throughs',
    access: 'Boat access · Shallow',
    description: 'A varied selection of shallow dive sites along the Gulf of Orosei, shaped by limestone walls, submerged galleries, small caverns, and natural swim-throughs. Clear water and dramatic coastal geology define the experience.',
    tags: ['Reef', 'Swim-throughs', 'All levels'],
    images: [
      { video: '/videos/galleria-1.mp4', poster: '/videos/galleria-1.jpg', alt: 'Swim-through footage 1' },
      { video: '/videos/galleria-2.mp4', poster: '/videos/galleria-2.jpg', alt: 'Bel Torrente swim-through' },
      { video: '/videos/galleria-3.mp4', poster: '/videos/galleria-3.jpg', alt: 'Acqua Dolce at dawn' },
      { src: '/images/caves/galleria-2.jpg', alt: 'Diver with a SUEX DPV over a rock in shallow water' },
    ],
  },
  {
    name: 'Training Sites',
    access: 'Boat or shore access · All levels',
    description: 'Convenient training sites with excellent visibility, clear water, and broad sandy bottoms. Consistent conditions and easy beach or boat access allow teams to maximise in-water time and focus fully on skill development and the learning process.',
    tags: ['Training', 'Shallow', 'All levels'],
    images: [
      { src: '/images/training-site-1.jpg', alt: 'Divers with DPVs and side cylinders over a seagrass meadow' },
      { src: '/images/caves/galleria-1.jpg', alt: 'Diver with a DPV gliding over white sand in clear shallow water' },
      { src: '/images/training-site-2.jpg', alt: 'Diver with a SUEX DPV in clear shallow water under the surface', position: '50% 67%' },
      'https://images.unsplash.com/photo-1559825481-12a05cc00344?w=900&q=70&auto=format&fit=crop',
    ],
  },
];
