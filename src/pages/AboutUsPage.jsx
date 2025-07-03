// src/pages/AboutUsPage.jsx
import React, { useRef } from 'react';
import Slider from 'react-slick';
import { NextArrow, PrevArrow } from '../components/SliderArrows';

// Import slika
import heroBg from '../assets/images/adriatic-coast.jpg';
import whoAreWeImg from '../assets/images/mapa.jpg';
import professionalImg from '../assets/images/taxi.jpg';
import localsImg from '../assets/images/dalmatian-stone-street.jpg';
import gallery1 from '../assets/images/dubrovnik-roof.jpg';
import gallery2 from '../assets/images/jedrilice.jpg';
import gallery3 from '../assets/images/krka.jpg';
import gallery4 from '../assets/images/primosten.jpg';

const galleryImages = [gallery1, gallery2, gallery3, gallery4, heroBg];

export default function AboutUsPage() {
  const gallerySliderRef = useRef(null);

  const gallerySettings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px", // Koliko se vide susjedne slike
    slidesToShow: 3, // 3 slike odjednom
    speed: 500,
    arrows: false,
    dots: false,
    responsive: [
      {
        breakpoint: 768, // Na manjim ekranima
        settings: {
          slidesToShow: 1,
          centerPadding: "40px",
        }
      }
    ]
  };

  return (
    <>
      {/* Hero sekcija*/}
      <section className="h-[60vh] relative pt-20">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${heroBg})` }}></div>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative h-full flex items-center px-12 text-white max-w-4xl">
          <div>
            <h1 className="font-playfair text-5xl md:text-7xl font-normal leading-tight">
              Your journey starts in Croatia.
            </h1>
          </div>
        </div>
      </section>

      <div className="bg-white">
        <section className="container mx-auto px-6 py-20 text-left">
          <h2 className="text-4xl font-light text-gray-800 relative inline-block pb-2">
            About Us
            <span className="absolute bottom-0 left-0 w-3/4 h-0.5 bg-orange-500"></span>
          </h2>
          <p className="text-gray-500 mt-4 max-w-2xl text-lg">An insight into our family business.</p>
        </section>

        {/* 'Who are we?' sekcija */}
        <section className="container mx-auto px-6 py-12 grid md:grid-cols-2 gap-12 items-center">
          <div className="rounded-2xl overflow-hidden aspect-[4/3]">
            <img src={whoAreWeImg} alt="Who are we?" className="w-full h-full object-cover" />
          </div>
          <div>
            <h3 className="text-4xl font-light text-gray-800 mb-4">Who are we?</h3>
            <p className="text-gray-700 text-xl leading-relaxed">We are a locally owned and operated travel agency based in Croatia, dedicated to sharing the beauty, culture, and spirit of our country with travelers from around the world. With deep roots in the Dalmatian coast and years of experience in the travel industry, our team is passionate about creating authentic, well-organized, and memorable experiences—whether you’re here for a day or an extended adventure.</p>
          </div>
        </section>

        {/* 'Professional and Trust-Building' sekcija */}
        <section className="container mx-auto px-6 py-12 grid md:grid-cols-2 gap-12 items-center">
           <div className="md:order-2 rounded-2xl overflow-hidden aspect-[4/3]">
            <img src={professionalImg} alt="Professional and Trust-Building" className="w-full h-full object-cover" />
          </div>
          <div className="md:order-1">
            <h3 className="text-4xl font-light text-gray-800 mb-4">Professional and Trust-Building</h3>
            <p className="text-gray-700 text-xl leading-relaxed">From private transfers and guided day tours to island hopping and cultural excursions, we tailor every detail to match your needs. We work only with licensed local guides, trusted drivers, and carefully selected partners to ensure safety, comfort, and high-quality service.</p>
          </div>
        </section>

        {/* 'Discover Croatia with Locals' sekcija */}
        <section className="container mx-auto px-6 py-12 grid md:grid-cols-2 gap-12 items-center">
          <div className="rounded-2xl overflow-hidden aspect-[4/3]">
            <img src={localsImg} alt="Discover Croatia with Locals" className="w-full h-full object-cover" />
          </div>
          <div>
            <h3 className="text-4xl font-light text-gray-800 mb-4">Discover Croatia with Locals</h3>
            <p className="text-gray-700 text-xl leading-relaxed">As locals, we don’t just show you Croatia—we help you feel it, taste it, and live it. Start with the hidden coves, quiet viewpoints, family-run ‘konoba’, and untold stories that most guidebooks miss. Whether you’re dreaming of ancient cities, island escapes, or mountain trails, we’ll help you travel smarter, avoid the crowds, and make the most of your time.</p>
          </div>
        </section>

        {/* Galerija slider */}
        <section className="bg-white py-20 overflow-hidden">
  <div className="container mx-auto px-6">
      <div className="flex justify-between items-end mb-8">
          <div className="text-left">
              <h2 className="text-4xl font-light text-gray-800 relative inline-block pb-2">
                Slide through our gallery
                <span className="absolute bottom-0 left-0 w-1/4 h-0.5 bg-orange-500"></span>
              </h2>
          </div>
          <div className="flex space-x-3 items-center">
               <PrevArrow onClick={() => gallerySliderRef.current.slickPrev()} />
               <NextArrow onClick={() => gallerySliderRef.current.slickNext()} />
          </div>
      </div>
  </div>

  {/* Kontejner za slider*/}
  <div className="gallery-slider -mx-4">
      <Slider ref={gallerySliderRef} {...gallerySettings}>
          {galleryImages.map((image, index) => (
            <div key={index} className="px-4">
                <div className="h-80 rounded-xl overflow-hidden group">
                    <img src={image} alt={`Gallery image ${index + 1}`} className="w-full h-full object-cover" />
                </div>
            </div>
          ))}
      </Slider>
  </div>
</section>
      </div>
    </>
  );
}