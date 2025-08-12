// src/pages/TourDetailPage.jsx
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { toursData } from '../data/tours';
import Slider from 'react-slick';

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import { NextArrow, PrevArrow } from '../components/SliderArrows';

export default function TourDetailPage() {
  const { tourId } = useParams();
  const tour = toursData.find(t => t.id === tourId);

  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: false,
    dotsClass: "slick-dots custom-dots"
  };

  if (!tour) {
    return (
      <div className="pt-32 text-center h-screen">
        <h1 className="text-4xl font-bold">Tour not found!</h1>
        <Link to="/day-tours/offers" className="text-orange-500 mt-4 inline-block hover:underline">
          &larr; Back to all tours
        </Link>
      </div>
    );
  }

  return (
    <>
      <section className="h-[50vh] relative">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${tour.image})` }}></div>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative h-full flex items-center justify-center text-white text-center px-6">
          {/*Smanjen font za mobilne uređaje */}
          <h1 className="font-playfair text-4xl md:text-6xl font-bold">{tour.title}</h1>
        </div>
      </section>

      <div className="bg-white">
        {/*Poboljšan kontejner i responzivni razmaci */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            
            <div className="md:col-span-2">
              <h2 className="text-3xl font-light text-gray-800 mb-4">Tour Description</h2>
              <p className="text-gray-600 text-lg whitespace-pre-line leading-relaxed">{tour.description}</p>
              
              {tour.gallery && tour.gallery.length > 0 && (
                <>
                  <h2 className="text-3xl font-light text-gray-800 mt-12 mb-6">Image Gallery</h2>
                  <div className="rounded-lg border relative">
                    <Slider {...settings}>
                      {tour.gallery.map((img, index) => (
                        <div key={index}>
                          <img src={img} alt={`${tour.title} gallery image ${index + 1}`} className="w-full h-80 md:h-96 object-cover"/>
                        </div>
                      ))}
                    </Slider>
                  </div>
                </>
              )}
            </div>

            <div className="md:col-span-1">
              <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
                <h3 className="text-2xl font-semibold text-gray-800 border-b pb-4">Tour Summary</h3>
                <ul className="space-y-4 my-6 text-gray-700">
                  <li className="flex justify-between"><strong>Duration:</strong> <span>{tour.duration}</span></li>
                  <li className="flex justify-between"><strong>Departure:</strong> <span>{tour.departure}</span></li>
                </ul>
                <div className="text-sm text-gray-700 space-y-2 mb-6">
                    <p><strong>Includes:</strong> {tour.includes.join(', ')}</p>
                </div>
                <div className="border-t pt-4">
                    <p className="text-gray-500">Price per person</p>
                    <p className="text-4xl font-bold text-orange-500">€{tour.price}</p>
                </div>
                <button className="mt-6 w-full bg-orange-500 text-white py-3 rounded-lg font-bold text-lg hover:bg-orange-600 transition-colors">BOOK NOW</button>
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  );
}
