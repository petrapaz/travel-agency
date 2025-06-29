// src/components/Blog.jsx
import React, { useRef } from 'react'; // 1. Importiramo useRef
import Slider from 'react-slick'; // 2. Importiramo Slider
import { FaArrowRight } from 'react-icons/fa';
import { NextArrow, PrevArrow } from './SliderArrows'; // 3. Importiramo nove strelice

import imgPula from '../assets/images/pula.jpg';
import imgSplit from '../assets/images/split.jpg';
import imgZadar from '../assets/images/zadar.jpg';

const blogPosts = [
  {
    id: 1,
    category: 'Destinations',
    title: 'Beautiful Croatia, let\'s travel',
    excerpt: 'Croatian cuisine is a hidden gem that deserves a top spot on every traveler\'s bucket list, with its medieval towns...',
    image: imgPula,
  },
  {
    id: 2,
    category: 'Food & Drink',
    title: 'A taste of Split\'s old town',
    excerpt: 'Discover the vibrant tastes and smells of Split, from fresh seafood at the fish market to traditional peka.',
    image: imgSplit,
  },
  {
    id: 3,
    category: 'Culture',
    title: 'The unique sea organ of Zadar',
    excerpt: 'Listen to the unique sound of Zadar\'s sea organ, an architectural object and an experimental musical instrument.',
    image: imgZadar,
  },
  // Može se dodati još postova
];

export default function Blog() {
  const sliderRef = useRef(null); // 4. Kreiramo referencu

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false, // 5. Gasimo defaultne strelice
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 600, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <section className="bg-white py-20">
      <div className="container mx-auto px-6">
        {/* 6. AŽURIRANI BLOK: Naslov lijevo, strelice desno */}
        <div className="flex justify-between items-end mb-8">
          <div className="text-left">
            <h2 className="text-4xl font-light text-gray-800 relative inline-block pb-2">
              Our Blog
              <span className="absolute bottom-0 left-0 w-3/4 h-0.5 bg-orange-500"></span>
            </h2>
            <p className="text-gray-500 mt-4">An insight into the incredible experience around Croatia.</p>
          </div>
          <div className="flex space-x-3">
            <PrevArrow onClick={() => sliderRef.current.slickPrev()} />
            <NextArrow onClick={() => sliderRef.current.slickNext()} />
          </div>
        </div>

        {/* 7. Grid u Slider */}
        <Slider ref={sliderRef} {...settings}>
          {blogPosts.map((post) => (
            <div key={post.id} className="p-2">
              <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col h-full">
                <img src={post.image} alt={post.title} className="w-full h-56 object-cover" />
                <div className="p-6 flex flex-col flex-grow">
                  <p className="text-orange-500 font-semibold text-sm mb-2">{post.category}</p>
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">{post.title}</h3>
                  <p className="text-gray-600 text-sm mb-4 flex-grow">{post.excerpt}</p>
                  <a href="#" className="flex items-center text-orange-500 font-bold hover:text-orange-600 transition-colors mt-auto">
                    Read More
                    <FaArrowRight className="ml-2" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}