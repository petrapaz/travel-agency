// src/components/SpecialOffer.jsx
import React from 'react';
import Slider from "react-slick";
import { Link } from 'react-router-dom';
import { NextArrow, PrevArrow } from './SliderArrows'; // Importiramo naše custom strelice
import { toursData } from '../data/tours';

// Filtriramo ture koje su označene kao 'recommended'
const offers = toursData.filter(tour => tour.recommended);

export default function SpecialOffer() {
  const settings = {
    dots: true,
    infinite: offers.length > 3,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true, // ISPRAVAK: Uključujemo strelice
    nextArrow: <NextArrow />, // Koristimo našu custom strelicu
    prevArrow: <PrevArrow />, // Koristimo našu custom strelicu
    dotsClass: "slick-dots custom-dots",
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { 
        breakpoint: 768, 
        settings: { 
          slidesToShow: 1, 
          arrows: false // Na mobitelu i tabletu mičemo strelice radi prostora
        } 
      },
    ]
  };

  return (
    <section className="bg-gray-50 py-20">
      <div className="container mx-auto px-6">
        {/* ISPRAVAK: Dodana klasa 'text-center' za centriranje naslova */}
        <div className="text-center mb-12">
           <h2 className="text-4xl font-light text-gray-800 relative inline-block pb-2">
             Special Offer
             <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-0.5 bg-orange-500"></span>
           </h2>
           <p className="text-gray-500 mt-4">Check out our special offers and planned tours!</p>
        </div>
        
        {/* Wrapper za slider s odmakom za strelice */}
        <div className="relative px-8 md:px-12">
            <Slider {...settings}>
              {offers.map((offer) => (
                <div key={offer.id} className="p-2">
                    <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 h-full flex flex-col">
                      <img src={offer.image} alt={offer.title} className="w-full h-56 object-cover" />
                      <div className="p-6 flex flex-col flex-grow">
                        <h3 className="text-xl font-semibold text-gray-800 mb-3 h-16 leading-tight">{offer.title}</h3>
                        <p className="text-gray-600 text-sm mb-6 h-24 overflow-hidden">{offer.description}</p>
                        <div className="flex justify-between items-center border-t pt-4 mt-auto">
                          <div>
                            <span className="text-gray-500 text-sm">From</span>
                            <p className="text-2xl font-bold text-gray-800">€{offer.price}</p>
                          </div>
                          <Link to={`/day-tours/tour/${offer.id}`} className="bg-orange-500 text-white px-6 py-2 rounded-md hover:bg-orange-600 font-semibold transition-colors">
                            DETAILS
                          </Link>
                        </div>
                      </div>
                    </div>
                </div>
              ))}
            </Slider>
        </div>
      </div>
    </section>
  );
}