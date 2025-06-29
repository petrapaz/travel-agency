// src/components/Experiences.jsx
import React from 'react'; // Više ne treba useRef
import Slider from "react-slick";
import StarRating from './StarRating';
import { NextArrow, PrevArrow } from './SliderArrows'; // Importamo ažurirane strelice

// ... import slika i 'testimonials' niz ostaju isti ...
import avatarHae from '../assets/images/girl-1.jpg';
import avatarMarkus from '../assets/images/man.png';
import avatarJulia from '../assets/images/woman.png';

const testimonials = [
  { id: 1, quote: "I fell in love with Dubrovnik! Walking the ancient city walls at sunset was a magical experience...", rating: 5, name: 'Hae', country: 'USA', avatar: avatarHae },
  { id: 2, quote: "Sailing between the islands of the Adriatic was the highlight of our Croatian holiday...", rating: 5, name: 'Markus', country: 'Germany', avatar: avatarMarkus },
  { id: 3, quote: "What surprised me most was how friendly the people are. We rented a boat with a local skipper...", rating: 5, name: 'Julia', country: 'Australia', avatar: avatarJulia },
  { id: 4, quote: "The food was incredible. Every meal was fresh and delicious. I recommend trying the local seafood.", rating: 5, name: 'David', country: 'Canada', avatar: avatarMarkus },
  { id: 5, quote: "Our guide was so knowledgeable and friendly. Made the whole trip much more interesting.", rating: 5, name: 'Sophia', country: 'United Kingdom', avatar: avatarHae },
];


export default function Experiences() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true, // 1. Vraćamo strelice da budu vidljive
    nextArrow: <NextArrow />, // 2. Koristimo nove komponente za strelice
    prevArrow: <PrevArrow />,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 768, settings: { slidesToShow: 1, arrows: false } } // Sakrivamo strelice na najmanjim ekranima
    ]
  };

  return (
    <section className="bg-white py-20">
      <div className="container mx-auto px-6">
        {/* NASLOV NA SREDINI S LINIJOM */}
        <div className="text-center mb-12">
           <h2 className="text-4xl font-light text-gray-800 relative inline-block pb-2">
                Traveler's Experiences
                {/* Jedina izmjena je w-3/4 da izgleda punija duža crta umjesto w-1/4 */}
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-orange-500"></span>
           </h2>
          <p className="text-gray-500 mt-4">Here are some feedback from our travelers.</p>
        </div>
        
        {/* Slider sada samostalno pozicionira strelice sa strane */}
        <div className="relative px-12">
          <Slider {...settings}>
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="p-3">
                  <div className="bg-gray-50 p-8 rounded-lg shadow-sm text-center h-full">
                    <img src={testimonial.avatar} alt={testimonial.name} className="w-20 h-20 rounded-full mx-auto mb-6 object-cover border-4 border-white shadow-md" />
                    <p className="text-gray-600 italic mb-6">"{testimonial.quote}"</p>
                    <div className="mb-4"><StarRating rating={testimonial.rating} /></div>
                    <p className="font-semibold text-gray-800">{testimonial.name}</p>
                    <p className="text-gray-400 text-sm">{testimonial.country}</p>
                  </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
}