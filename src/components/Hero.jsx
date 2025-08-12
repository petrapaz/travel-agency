// src/components/Hero.jsx
import React, { useState, useEffect } from 'react';

const backgroundSlides = [
  '/images/dubrovnik.webp',
  '/images/jedrilice.webp',
  '/images/sunset.webp',
  '/images/pula.webp',
];

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % backgroundSlides.length);
    }, 5000); // Mijenja sliku svakih 5 sekundi

    return () => clearInterval(timer); // Čisti timer kad se komponenta uništi
  }, []);

  return (
    <section className="h-screen relative overflow-hidden">
      
      {/* Kontejner za pozadinske slike. Ima z-index 0 (po defaultu).
      */}
      {backgroundSlides.map((path, index) => (
        <div
          key={path}
          className="absolute inset-0 w-full h-full bg-cover bg-center transition-opacity duration-1000"
          style={{ 
            backgroundImage: `url(${path})`,
            opacity: index === currentSlide ? 1 : 0
          }}
        ></div>
      ))}

      {/* Tamni sloj preko slika. Ima z-index 10, pa se nalazi IZNAD slika.
      */}
      <div className="absolute inset-0 bg-black opacity-50 z-10" />
      
      {/* Sadržaj s tekstom. Ima z-index 20, pa se nalazi IZNAD tamnog sloja.
      */}
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