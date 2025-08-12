// src/components/Destinations.jsx
import React, { useRef } from 'react';
import Slider from 'react-slick';
import { IoLocationSharp } from 'react-icons/io5';
import { NextArrow, PrevArrow } from './SliderArrows';

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
//Uklonjeni su svi 'import'-i za slike. 
// slike se sada učitavaju direktno iz 'public' foldera.

// Ažurirane putanje do slika
const destinations = [
  { id: 1, title: 'Dubrovnik old town', location: 'Dubrovnik, Croatia', image: '/images/dubrovnik-roof.webp' },
  { id: 2, title: 'Islands Tour', location: 'Dalmatia, Croatia', image: '/images/jedrilice.webp' },
  { id: 3, title: 'Krka National Park', location: 'Dalmatia, Croatia', image: '/images/krka.webp' },
  { id: 4, title: 'Primošten', location: 'Dalmatia, Croatia', image: '/images/primosten.webp' },
  { id: 5, title: 'Pula Arena', location: 'Pula, Croatia', image: '/images/pula.webp' },
  { id: 6, title: 'Greetings from Zadar', location: 'Zadar, Croatia', image: '/images/zadar.webp' },
  { id: 7, title: 'Old bridge Mostar', location: 'Mostar, BiH', image: '/images/mostar.webp' },
  { id: 8, title: 'Trogir Promenade', location: 'Trogir, Croatia', image: '/images/trogir.webp' },
];

export default function Destinations() {
  const sliderRef = useRef(null);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 3 } },
      { breakpoint: 600, settings: { slidesToShow: 2 } },
      { breakpoint: 480, settings: { slidesToShow: 1 } }
    ]
  };

  return (
    <section className="container mx-auto px-6 py-20">
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
      
      <div className="-mx-2">
        <Slider ref={sliderRef} {...settings}>
          {destinations.map((dest) => (
            <div key={dest.id} className="p-2">
              <div className="relative h-96 rounded-xl overflow-hidden group shadow-lg">
                {/* 'loading="lazy"' atribut za bolje performanse */}
                <img 
                  src={dest.image} 
                  alt={dest.title} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                />
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