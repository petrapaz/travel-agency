// src/components/Blog.jsx
import React from 'react';
import Slider from 'react-slick';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';
import { NextArrow, PrevArrow } from './SliderArrows';
import { blogPosts } from '../data/blog';

export default function Blog() {
  const settings = {
    dots: true,
    infinite: blogPosts.length > 2,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    dotsClass: "slick-dots custom-dots",
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 768, settings: { slidesToShow: 1, arrows: false } },
    ]
  };

  return (
    <section className="bg-white py-20">
      <div className="container mx-auto px-6">
        <div className="text-left mb-8">
          <h2 className="text-4xl font-light text-gray-800 relative inline-block pb-2">Our Blog
            <span className="absolute bottom-0 left-0 w-3/4 h-0.5 bg-orange-500"></span>
          </h2>
          <p className="text-gray-500 mt-4">An insight into the incredible experience around Croatia.</p>
        </div>
        <div className="relative">
          <Slider {...settings}>
            {blogPosts.map((post) => (
              <div key={post.id} className="p-2 h-full">
                <Link to={`/blog/${post.id}`} className="block bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 h-full flex flex-col group">
                  <div className="overflow-hidden">
                    <img src={post.image} alt={post.title} className="w-full h-56 object-cover transform group-hover:scale-110 transition-transform duration-500" />
                  </div>
                  <div className="p-6 flex flex-col flex-grow">
                    <p className="text-orange-500 font-semibold text-sm mb-2">{post.category}</p>
                    <h3 className="text-xl font-semibold text-gray-800 mb-3 group-hover:text-orange-500 transition-colors">{post.title}</h3>
                    <p className="text-gray-600 text-sm mb-4 flex-grow">{post.excerpt}</p>
                    <div className="flex items-center text-orange-500 font-bold mt-auto">
                      Read More
                      <FaArrowRight className="ml-2" />
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
}