// src/data/tours.js

// Importiramo sve potrebne slike
import imgDalmatiaTour from '../assets/images/split.jpg';
import imgBracTour from '../assets/images/brač.jpg';
import imgDubrovnikTour from '../assets/images/dubrovnik-roof.jpg';
import imgMostarTour from '../assets/images/mostar.jpg';
import imgKrkaTour from '../assets/images/krka.jpg';
import imgZadarTour from '../assets/images/zadar.jpg';
import imgAquapark from '../assets/images/aquapark.jpg';
import imgPrimosten from '../assets/images/primosten.jpg';
import imgCetina from '../assets/images/cetina.jpg';
import imgImotski from '../assets/images/jezero-imotski.jpg';
import imgDalmatianTown from '../assets/images/dalmatian-town.jpg';
import imgSalona from '../assets/images/salona.jpg';
import imgSibenikCathedral from '../assets/images/sibenik-cathedral.jpg';
import imgVisovac from '../assets/images/visovac-krka.jpg';
import imgAdriaticCoast from '../assets/images/adriatic-coast.jpg';
import imgSplitPeristil from '../assets/images/split-peristil.jpg';


export const toursData = [
  { 
    id: 'dalmatia-tour', 
    title: 'Dalmatia Tour - Split, Trogir, Klis & Salona Tour', 
    description: 'Uncover centuries of history on this full-day guided tour through Dalmatia’s most iconic sites. Discover Diocletian\'s Palace, climb the dramatic Klis Fortress, and enjoy a traditional Dalmatian lunch before ending the day in the beautiful UNESCO town of Trogir.',
    gallery: [imgDalmatiaTour, imgSalona, imgSplitPeristil],
    includes: ['Licensed local guide', 'Transport', 'Entrance fees for Klis and Salona', 'Traditional lunch'], 
    duration: 'Approx. 8-9 hours', 
    departure: 'Split', 
    price: 300, 
    image: imgDalmatiaTour, 
    category: 'historic', 
    recommended: true 
  },
  { 
    id: 'krka-sibenik-tour', 
    title: 'Krka Waterfalls & Šibenik Day Tour – Nature Meets Heritage', 
    description: 'Experience the best of Dalmatia’s natural and cultural treasures in one day! Start your adventure at Krka National Park, where wooden trails wind through lush greenery and lead to spectacular waterfalls like Skradinski Buk. Enjoy free time to explore, take photos, or dip your feet in the river. Continue to the coastal town of Šibenik, one of Croatia’s oldest cities, and visit the stunning St. James’ Cathedral – a UNESCO World Heritage Site.',
    gallery: [imgKrkaTour, imgVisovac, imgSibenikCathedral],
    includes: ['Transport', 'Guide', 'Krka entrance ticket', 'Šibenik walking tour'], 
    duration: 'Approx. 9 hours', 
    departure: 'Morning from Split or nearby.', 
    price: 450, 
    image: imgKrkaTour, 
    category: 'nature', 
    recommended: true 
  },
  
  { id: 'brac-island-tour', title: 'Brač Island Day Tour', description: 'Discover the beauty and charm of Brač, one of Croatia’s most captivating islands, on a full-day guided tour with private vehicle transport.', includes: ['Local guide', 'Transport', 'All entrance tickets'], duration: 'Approx. 11 hours', departure: 'Morning from Split, return by early evening.', price: 500, image: imgBracTour, category: 'family', recommended: false },
  { id: 'dubrovnik-pearl-tour', title: 'Dubrovnik Day Tour – The Pearl of the Adriatic', description: 'Step into a storybook on a full-day tour to Dubrovnik, one of the most stunning and historic cities on the Adriatic coast.', includes: ['Local guide', 'Transport', 'All entrance tickets'], duration: 'Approx. 12 hours', departure: 'Split', price: 570, image: imgDubrovnikTour, category: 'historic', recommended: true },
  { id: 'mostar-kravice-tour', title: 'Mostar & Kravice Waterfalls - Bosnia and Herzegovina', description: 'Discover the cultural charm and natural beauty of Bosnia & Herzegovina on a full-day tour from Croatia.', includes: ['Transport', 'Border assistance', 'Local guide', 'Entrance to Kravice'], duration: 'Approx. 12 hours', departure: 'Morning from Split or Dubrovnik.', price: 550, image: imgMostarTour, category: 'nature', recommended: false },
  { id: 'zadar-paklenica-tour', title: 'Zadar and Paklenica – Culture and Nature in One', description: 'Discover the perfect blend of history and adventure on this full-day tour to Zadar and Paklenica National Park.', includes: ['Transport', 'Guide', 'Entrance to Paklenica', 'Zadar city tour'], duration: 'Approx. 11 hours', departure: 'Early morning from Split, Šibenik, or Zadar area.', price: 520, image: imgZadarTour, category: 'nature', recommended: false },
  { id: 'aquapark-dalmatia-tour', title: 'Aquapark Dalmatia and Rogoznica – Family tour', description: 'Enjoy a perfect mix of water fun and seaside charm on this laid-back day tour! Start your adventure at Aquapark Dalmatia near Šibenik.', includes: ['Transport', 'All entrance tickets'], duration: 'Approx. 8 hours', departure: 'Split', price: 450, image: imgAquapark, category: 'family', recommended: true },
  { id: 'primosten-loreto-tour', title: 'Primošten and Our Lady of Loreto – Wine, Views, Charm', description: 'Treat yourself to a relaxing day of coastal beauty, local wine, and spiritual heritage. Begin in Primošten, a postcard-perfect seaside town.', includes: ['Guide', 'Wine tasting', 'Entrance to Lady of Loreto statue'], duration: 'Approx. 9 hours', departure: 'Morning from Split or Šibenik area.', price: 500, image: imgPrimosten, category: 'food', recommended: false },
  { id: 'cetina-rafting-tour', title: 'Cetina River Rafting Adventure', description: 'Experience an unforgettable rafting adventure on the crystal clear Cetina River. Enjoy three hours of rapids, waterfalls, and stunning nature suitable for all ages.', includes: ['Certified guide', 'Rafting equipment', 'Insurance', 'Transport from Omiš'], duration: 'Approx. 4-5 hours', departure: 'Omiš', price: 50, image: imgCetina, category: 'family', recommended: true },
  { id: 'imotski-lakes-tour', title: 'Modro i Crveno Jezero - Imotski Tour', description: 'Visit the natural phenomena of the Blue and Red Lakes near the town of Imotski. A breathtaking view and fascinating stories await you.', includes: ['Transport', 'Guide', 'Entrance fees'], duration: 'Approx. 8 hours', departure: 'Split or Makarska area', price: 380, image: imgImotski, category: 'nature', recommended: false },
];