// src/components/SpecialOffer.jsx
import React, { useRef } from 'react'; // 1. Importiramo 'useRef'
import Slider from "react-slick";
import { NextArrow, PrevArrow } from './SliderArrows'; // 2. Importiramo nove strelice

import imgWine from '../assets/images/wine-tasting.jpg';
import imgAquapark from '../assets/images/aquapark.jpg';
import imgPlitvice from '../assets/images/plitvice.jpg';
import imgBlueLagoon from '../assets/images/bluelagoon.jpg';
import imgBrac from '../assets/images/brač.jpg';

const offers = [
  { id: 1, title: 'Wine Tasting in Dalmatia', description: 'Try local wines, fresh bread and specialty Dalmatian food. Enjoy with your family and friends.', price: 60, image: imgWine },
  { id: 2, title: 'Aquapark Dalmatia', description: 'Enjoyment for the whole family.', price: 75, image: imgAquapark },
  { id: 3, title: 'National Park Plitvice', description: 'Visit the most popular national park in Croatia and enjoy one of the most preserved natural sights in the world.', price: 150, image: imgPlitvice },
  { id: 4, title: 'Blue Lagoon Tour', description: 'Discover hidden bays and crystal clear sea on our full day boat tour.', price: 80, image: imgBlueLagoon },
  { id: 5, title: 'Zlatni Rat Beach', description: 'Visit one of the most famous and beautiful beaches on the Adriatic coast.', price: 70, image: imgBrac },
];

export default function SpecialOffer() {
  const sliderRef = useRef(null); // 4. Kreiramo referencu na slider

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false, // 5. Isključujemo defaultne strelice
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 600, settings: { slidesToShow: 1 } }
    ]
  };

  return (
    <section className="bg-gray-50 py-20">
      <div className="container mx-auto px-6">
        {/* 6. Strelice lijevo, naslov s linijom desno */}
        <div className="flex justify-between items-end mb-12">
           <div className="flex space-x-3">
             <PrevArrow onClick={() => sliderRef.current.slickPrev()} />
             <NextArrow onClick={() => sliderRef.current.slickNext()} />
           </div>
           <div className="text-right">
             <h2 className="text-4xl font-light text-gray-800 relative inline-block pb-2">
               Special Offer
               <span className="absolute bottom-0 right-0 w-3/4 h-0.5 bg-orange-500"></span>
             </h2>
             <p className="text-gray-500 mt-4">Check out our special offer and discounts</p>
           </div>
        </div>
        
        {/* 7. Povezujemo 'ref' sa Slider komponentom */}
          {/* ... naslov i strelice ... */}
      <div className="-mx-2">
        <Slider ref={sliderRef} {...settings}>
            {offers.map((offer) => (
              <div key={offer.id} className="p-2">
                <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 h-full flex flex-col">
                  <img src={offer.image} alt={offer.title} className="w-full h-56 object-cover" />
                  <div className="p-6 flex flex-col flex-grow">
                    <h3 className="text-xl font-semibold text-gray-800 mb-3">{offer.title}</h3>
                    <p className="text-gray-600 text-sm mb-6 flex-grow">{offer.description}</p>
                    <div className="flex justify-between items-center border-t pt-4 mt-auto">
                      <div>
                        <span className="text-gray-500 text-sm">From</span>
                        <p className="text-2xl font-bold text-gray-800">€{offer.price}</p>
                      </div>
                      <button className="bg-orange-500 text-white px-6 py-2 rounded-md hover:bg-orange-600 transition-colors font-semibold">
                        DETAILS
                      </button>
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