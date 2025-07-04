// src/components/Hero.jsx
import React from 'react';
import Slider from 'react-slick';

// 1. Importiramo slike koje ćemo koristiti u pozadini
import imgDubrovnik from '../assets/images/dubrovnik.jpg';
import imgJedrilice from '../assets/images/jedrilice.jpg';
import imgSunset from '../assets/images/sunset.jpg';
import imgPula from '../assets/images/pula.jpg';

// za potencijalno dodavanje videa:
// import videoKrajolik from '../assets/videos/krajolik.mp4';


// 2. Podaci za slider
const backgroundSlides = [
  {
    type: 'image',
    path: imgDubrovnik,
  },
  {
    type: 'image',
    path: imgJedrilice,
  },
  {
    type: 'image',
    path: imgSunset,
  },
  {
    type: 'image',
    path: imgPula,
  },
  // {
  //   type: 'video',
  //   path: videoKrajolik,
  // }
];

export default function Hero() {
  // 3. Postavke za pozadinski slider (fade, autoplay, bez strelica)
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 1500,       // Brzina prijelaza (u ms)
    autoplay: true,
    autoplaySpeed: 5000, // Vrijeme prikaza jedne slike (u ms)
    fade: true,          // Efekt prijelaza - 'fade'
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    // 4. Glavni kontejner postaje 'relative' da možemo pozicionirati elemente unutar njega
    <section className="h-screen relative overflow-hidden">
      
      {/* 5. Slider kao apsolutna pozadina koja zauzima cijeli ekran */}
      <Slider {...settings} className="absolute top-0 left-0 w-full h-full z-0">
        {backgroundSlides.map((slide, index) => (
          <div key={index}>
            {slide.type === 'image' && (
              <div
                className="w-full h-screen bg-cover bg-center"
                style={{ backgroundImage: `url(${slide.path})` }}
              ></div>
            )}
            {/* // DODAVANJE VIDEA
              // Treba imati video u 'assets' folderu
              {slide.type === 'video' && (
              <video className="w-full h-full object-cover" autoPlay loop muted>
                <source src={slide.path} type="video/mp4" />
              </video>
            )} */}
          </div>
        ))}
      </Slider>

      {/* 6. Sadržaj (naslov i overlay) preko slidera */}
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