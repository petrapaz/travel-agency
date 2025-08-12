// src/data/tours.js

//Uklonjeni su SVI 'import'-i za slike.

//Sve putanje do slika su ažurirane da koriste direktne .webp putanje.
export const toursData = [
  { 
    id: 'dalmatia-tour', 
    title: 'Dalmatia Tour - Split, Trogir, Klis & Salona Tour', 
    description: 'Uncover centuries of history on this full-day guided tour through Dalmatia’s most iconic sites. Discover Diocletian\'s Palace, climb the dramatic Klis Fortress, and enjoy a traditional Dalmatian lunch before ending the day in the beautiful UNESCO town of Trogir.',
    gallery: ['/images/split.webp', '/images/salona.webp', '/images/split-peristil.webp'],
    includes: ['Licensed local guide', 'Transport', 'Entrance fees for Klis and Salona', 'Traditional lunch'], 
    duration: 'Approx. 8-9 hours', 
    departure: 'Split', 
    price: 300, 
    image: '/images/split.webp', 
    category: 'historic', 
    recommended: true 
  },
  { 
    id: 'krka-sibenik-tour', 
    title: 'Krka Waterfalls & Šibenik Day Tour – Nature Meets Heritage', 
    description: 'Experience the best of Dalmatia’s natural and cultural treasures in one day! Start your adventure at Krka National Park, where wooden trails wind through lush greenery and lead to spectacular waterfalls like Skradinski Buk. Enjoy free time to explore, take photos, or dip your feet in the river. Continue to the coastal town of Šibenik, one of Croatia’s oldest cities, and visit the stunning St. James’ Cathedral – a UNESCO World Heritage Site.',
    gallery: ['/images/krka.webp', '/images/visovac-krka.webp', '/images/sibenik-cathedral.webp'],
    includes: ['Transport', 'Guide', 'Krka entrance ticket', 'Šibenik walking tour'], 
    duration: 'Approx. 9 hours', 
    departure: 'Morning from Split or nearby.', 
    price: 450, 
    image: '/images/krka.webp', 
    category: 'nature', 
    recommended: true 
  },
  { 
    id: 'brac-island-tour', 
    title: 'Brač Island Day Tour', 
    description: 'Discover the beauty and charm of Brač, one of Croatia’s most captivating islands, on a full-day guided tour with private vehicle transport.', 
    includes: ['Local guide', 'Transport', 'All entrance tickets'], 
    duration: 'Approx. 11 hours', 
    departure: 'Morning from Split, return by early evening.', 
    price: 500, 
    image: '/images/brač.webp', 
    category: 'family', 
    recommended: false 
  },
  { 
    id: 'dubrovnik-pearl-tour', 
    title: 'Dubrovnik Day Tour – The Pearl of the Adriatic', 
    description: 'Step into a storybook on a full-day tour to Dubrovnik, one of the most stunning and historic cities on the Adriatic coast.', 
    includes: ['Local guide', 'Transport', 'All entrance tickets'], 
    duration: 'Approx. 12 hours', 
    departure: 'Split', 
    price: 570, 
    image: '/images/dubrovnik-roof.webp', 
    category: 'historic', 
    recommended: true 
  },
  { 
    id: 'mostar-kravice-tour', 
    title: 'Mostar & Kravice Waterfalls - Bosnia and Herzegovina', 
    description: 'Discover the cultural charm and natural beauty of Bosnia & Herzegovina on a full-day tour from Croatia.', 
    includes: ['Transport', 'Border assistance', 'Local guide', 'Entrance to Kravice'], 
    duration: 'Approx. 12 hours', 
    departure: 'Morning from Split or Dubrovnik.', 
    price: 550, 
    image: '/images/mostar.webp', 
    category: 'nature', 
    recommended: false 
  },
  { 
    id: 'zadar-paklenica-tour', 
    title: 'Zadar and Paklenica – Culture and Nature in One', 
    description: 'Discover the perfect blend of history and adventure on this full-day tour to Zadar and Paklenica National Park.', 
    includes: ['Transport', 'Guide', 'Entrance to Paklenica', 'Zadar city tour'], 
    duration: 'Approx. 11 hours', 
    departure: 'Early morning from Split, Šibenik, or Zadar area.', 
    price: 520, 
    image: '/images/zadar.webp', 
    category: 'nature', 
    recommended: false 
  },
  { 
    id: 'aquapark-dalmatia-tour', 
    title: 'Aquapark Dalmatia and Rogoznica – Family tour', 
    description: 'Enjoy a perfect mix of water fun and seaside charm on this laid-back day tour! Start your adventure at Aquapark Dalmatia near Šibenik.', 
    includes: ['Transport', 'All entrance tickets'], 
    duration: 'Approx. 8 hours', 
    departure: 'Split', 
    price: 450, 
    image: '/images/aquapark.webp', 
    category: 'family', 
    recommended: true 
  },
  { 
    id: 'primosten-loreto-tour', 
    title: 'Primošten and Our Lady of Loreto – Wine, Views, Charm', 
    description: 'Treat yourself to a relaxing day of coastal beauty, local wine, and spiritual heritage. Begin in Primošten, a postcard-perfect seaside town.', 
    includes: ['Guide', 'Wine tasting', 'Entrance to Lady of Loreto statue'], 
    duration: 'Approx. 9 hours', 
    departure: 'Morning from Split or Šibenik area.', 
    price: 500, 
    image: '/images/primosten.webp', 
    category: 'food', 
    recommended: false 
  },
  { 
    id: 'cetina-rafting-tour', 
    title: 'Cetina River Rafting Adventure', 
    description: 'Experience an unforgettable rafting adventure on the crystal clear Cetina River. Enjoy three hours of rapids, waterfalls, and stunning nature suitable for all ages.', 
    includes: ['Certified guide', 'Rafting equipment', 'Insurance', 'Transport from Omiš'], 
    duration: 'Approx. 4-5 hours', 
    departure: 'Omiš', 
    price: 50, 
    image: '/images/cetina.webp', 
    category: 'family', 
    recommended: true 
  },
  { 
    id: 'imotski-lakes-tour', 
    title: 'Modro i Crveno Jezero - Imotski Tour', 
    description: 'Visit the natural phenomena of the Blue and Red Lakes near the town of Imotski. A breathtaking view and fascinating stories await you.', 
    includes: ['Transport', 'Guide', 'Entrance fees'], 
    duration: 'Approx. 8 hours', 
    departure: 'Split or Makarska area', 
    price: 380, 
    image: '/images/jezero-imotski.webp', 
    category: 'nature', 
    recommended: false 
  },
];