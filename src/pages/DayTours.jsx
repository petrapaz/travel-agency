// src/pages/DayTours.jsx
import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import { NextArrow, PrevArrow } from '../components/SliderArrows';
import { IoLocationSharp } from 'react-icons/io5';
import { toursData } from '../data/tours'; // 1. Importiramo centralizirane podatke

// Import slika za stranicu
import heroImg1 from '../assets/images/plitvice.jpg';
import heroImg2 from '../assets/images/krka.jpg';
import heroImg3 from '../assets/images/sunset.jpg';
import imgExplore from '../assets/images/wine-tasting.jpg';
import imgOrganise from '../assets/images/pula.jpg';

// 2. Koristimo prvih 8 tura iz centraliziranih podataka za donji slider
const tourOffers = toursData.slice(0, 8);

export default function DayTours() {
  const offerSliderRef = useRef(null);

  // Postavke za hero slider
  const heroSliderSettings = {
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
  
  // Postavke za donji slider
  const offerSliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
        { breakpoint: 1024, settings: { slidesToShow: 3 } },
        { breakpoint: 768, settings: { slidesToShow: 2 } },
        { breakpoint: 600, settings: { slidesToShow: 1 } },
    ]
  };

  return (
    <>
      <section className="h-screen relative overflow-hidden">
        <Slider {...heroSliderSettings} className="absolute top-0 left-0 w-full h-full z-0">
          <div><div className="h-screen bg-cover bg-center" style={{ backgroundImage: `url(${heroImg1})` }}></div></div>
          <div><div className="h-screen bg-cover bg-center" style={{ backgroundImage: `url(${heroImg2})` }}></div></div>
          <div><div className="h-screen bg-cover bg-center" style={{ backgroundImage: `url(${heroImg3})` }}></div></div>
        </Slider>
        <div className="absolute inset-0 bg-black opacity-50 z-10" />
        <div className="relative z-20 h-full flex items-center px-12 text-white max-w-4xl">
          <div>
            <h1 className="font-playfair text-5xl sm:text-6xl lg:text-[84px] font-normal leading-tight mb-4">
              Explore Croatia and <br/> near-by attractions.
            </h1>
            <p className="text-lg">Use our one day tours to explore multiple locations.</p>
          </div>
        </div>
      </section>

      <div className="bg-white">
        {/* ... Ovdje ide ostatak sadržaja stranice ... */}
        <section className="container mx-auto px-6 py-20 text-left">
          <h2 className="text-4xl font-light text-gray-800 relative inline-block pb-2">Day Tours<span className="absolute bottom-0 left-0 w-1/4 h-0.5 bg-orange-500"></span></h2>
          <p className="text-gray-500 mt-4 max-w-2xl text-lg">An insight into the incredible experience around Croatia.</p>
        </section>

        <section className="container mx-auto px-6 py-16 grid md:grid-cols-2 gap-16 items-center">
          <div className="rounded-2xl overflow-hidden max-h-[500px]"><img src={imgExplore} alt="Explore more in less time" className="w-full h-full object-cover" /></div>
          <div>
            <h3 className="text-4xl font-light text-gray-800 mb-4">Explore more in less time</h3>
            <p className="text-gray-600 text-lg mb-4">Croatia isn’t just a destination—it’s a collection of unforgettable experiences. If you’re short on time or want to maximize every moment of your trip, day tours are the perfect way to explore this country’s rich history, natural beauty, and coastal charm.</p>
            <p className="text-gray-600 text-lg">Whether you’re based in a city like Split or Dubrovnik or just passing through, day tours are an easy way to dive deeper into Croatia’s beauty and diversity—without packing and unpacking your bags. One country, endless day trips. Let's go explore!</p>
          </div>
        </section>

        <section className="container mx-auto px-6 py-16 grid md:grid-cols-2 gap-16 items-center">
           <div className="md:order-2 rounded-2xl overflow-hidden max-h-[500px]"><img src={imgOrganise} alt="Organise and book in advance" className="w-full h-full object-cover" /></div>
          <div className="md:order-1">
            <h3 className="text-4xl font-light text-gray-800 mb-4">Organise and book in advance</h3>
            <p className="text-gray-600 text-lg mb-4">When planning a trip to Croatia, it's easy to get swept up in the excitement of turquoise waters, ancient towns, and lush national parks. But amidst all the beauty, there’s one bit of practical advice that can make or break your experience: book your day tours in advance.</p>
            <p className="text-gray-600 text-lg">Croatia is incredibly popular—especially in the summer months when travelers from around the world flock to the Dalmatian Coast. By reserving your spot ahead of time, you avoid the disappointment of missing out on a highlight you were dreaming about.</p>
          </div>
        </section>
      </div>

      <section className="bg-gray-50 py-20">
          <div className="container mx-auto px-6">
              <div className="flex justify-between items-end mb-8">
                  <div className="text-left">
                      <h2 className="text-4xl font-light text-gray-800">Slide through our Day Tours offer</h2>
                      <p className="text-gray-500 mt-2 text-lg">Most popular destinations in Croatia and near-by.</p>
                  </div>
                  <div className="flex space-x-3 items-center">
                       <Link to="/day-tours/offers" className="text-sm font-semibold text-orange-500 border border-orange-500 rounded-md px-4 py-2 hover:bg-orange-500 hover:text-white transition-colors">View all trips</Link>
                       <PrevArrow onClick={() => offerSliderRef.current.slickPrev()} />
                       <NextArrow onClick={() => offerSliderRef.current.slickNext()} />
                  </div>
              </div>
              <div className="-mx-2">
                <Slider ref={offerSliderRef} {...offerSliderSettings}>
                    {tourOffers.map((dest) => (
                      // 3. ISPRAVAK: Link sada koristi ispravnu putanju
                      <Link to={`/day-tours/tour/${dest.id}`} key={dest.id} className="p-2 block">
                          <div className="relative h-80 rounded-xl overflow-hidden group shadow-lg">
                              <img src={dest.image} alt={dest.title} className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500" />
                              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                              <div className="absolute bottom-0 left-0 p-6 text-white">
                                  <h3 className="text-xl font-semibold">{dest.title}</h3>
                                  <div className="flex items-center mt-2 text-sm"><IoLocationSharp /><span className="ml-1">{dest.location}</span></div>
                              </div>
                          </div>
                      </Link>
                    ))}
                </Slider>
              </div>
          </div>
      </section>
    </>
  );
}