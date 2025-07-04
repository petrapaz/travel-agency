// src/components/Destinations.jsx
import React, { useRef } from 'react'; // 1. Importiramo 'useRef' za ručnu kontrolu slidera
import Slider from 'react-slick';
import { IoLocationSharp } from 'react-icons/io5';
import { NextArrow, PrevArrow } from './SliderArrows'; // Importiramo redizajnirane strelice

// Import slika
import imgDubrovnik from '../assets/images/dubrovnik-roof.jpg';
import imgIslands from '../assets/images/jedrilice.jpg';
import imgKrka from '../assets/images/krka.jpg';
import imgPrimosten from '../assets/images/primosten.jpg';
import imgPula from '../assets/images/pula.jpg';
import imgZadar from '../assets/images/zadar.jpg';
import imgMostar from '../assets/images/mostar.jpg';
import imgTrogir from '../assets/images/trogir.jpg';

const destinations = [
  { id: 1, title: 'Dubrovnik old town', location: 'Dubrovnik, Croatia', image: imgDubrovnik },
  { id: 2, title: 'Islands Tour', location: 'Dalmatia, Croatia', image: imgIslands },
  { id: 3, title: 'Krka National Park', location: 'Dalmatia, Croatia', image: imgKrka },
  { id: 4, title: 'Primošten', location: 'Dalmatia, Croatia', image: imgPrimosten },
  { id: 5, title: 'Pula Arena', location: 'Pula, Croatia', image: imgPula },
  { id: 6, title: 'Greetings from Zadar', location: 'Zadar, Croatia', image: imgZadar },
  { id: 7, title: 'Old bridge Mostar', location: 'Mostar, BiH', image: imgMostar },
  { id: 8, title: 'Trogir Promenade', location: 'Trogir, Croatia', image: imgTrogir },
];

export default function Destinations() {
  const sliderRef = useRef(null); // 2. Kreiramo referencu na slider

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false, // 3. U postavkama gasimo defaultne strelice
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 3 } },
      { breakpoint: 600, settings: { slidesToShow: 2 } },
      { breakpoint: 480, settings: { slidesToShow: 1 } }
    ]
  };

  return (
    <section className="container mx-auto px-6 py-20">
      {/* 4. AŽURIRANI BLOK: Naslov s linijom lijevo, strelice desno */}
      <div className="flex justify-between items-end mb-8">
        <div className="text-left">
          <h2 className="text-4xl font-light text-gray-800 relative inline-block pb-2">
            Popular Destinations
            <span className="absolute bottom-0 left-0 w-3/4 h-0.5 bg-orange-500"></span>
          </h2>
          <p className="text-gray-500 mt-2">Most popular destinations in Croatia and near-by.</p>
        </div>
        
        <div className="flex space-x-3">
          <PrevArrow onClick={() => sliderRef.current.slickPrev()} />
          <NextArrow onClick={() => sliderRef.current.slickNext()} />
        </div>
      </div>
      
      {/* 5. Povezujemo 'ref' sa Slider komponentom */}
      <div className="-mx-2">
        <Slider ref={sliderRef} {...settings}>
          {destinations.map((dest) => (
            <div key={dest.id} className="p-2">
              <div className="relative h-96 rounded-xl overflow-hidden group shadow-lg">
                <img src={dest.image} alt={dest.title} className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-6 text-white">
                  <h3 className="text-xl font-semibold">{dest.title}</h3>
                  <div className="flex items-center mt-2 text-sm">
                    <IoLocationSharp />
                    <span className="ml-1">{dest.location}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}