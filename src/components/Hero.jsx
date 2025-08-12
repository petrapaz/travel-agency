// src/components/Hero.jsx
import React from 'react';
import Slider from 'react-slick';

// Uklonjeni svi 'import'-i za slike.

// Podaci za slider su ažurirani s direktnim putanjama do .webp slika
const backgroundSlides = [
  {
    type: 'image',
    path: '/images/dubrovnik.webp',
  },
  {
    type: 'image',
    path: '/images/jedrilice.webp',
  },
  {
    type: 'image',
    path: '/images/sunset.webp',
  },
  {
    type: 'image',
    path: '/images/pula.webp',
  },
];

export default function Hero() {
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 1500,
    autoplay: true,
    autoplaySpeed: 5000,
    fade: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <section className="h-screen relative overflow-hidden">
      
      <Slider {...settings} className="absolute top-0 left-0 w-full h-full z-0">
        {backgroundSlides.map((slide, index) => (
          <div key={index}>
            {slide.type === 'image' && (
              <div
                className="w-full h-screen bg-cover bg-center"
                style={{ backgroundImage: `url(${slide.path})` }}
              ></div>
            )}
          </div>
        ))}
      </Slider>

      <div className="absolute inset-0 bg-black opacity-50 z-10" />
      <div className="relative z-20 h-full flex items-center px-12 text-white max-w-4xl">
        <div>
          <h1 className="font-playfair text-5xl sm:text-6xl lg:text-[84px] font-normal leading-tight mb-4">
            Start your unforgettable <br /> journey with us.
          </h1>
          <p className="text-lg">Organise your holiday the way you like.</p>
        </div>
      </div>
    </section>
  );
}