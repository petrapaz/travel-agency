// src/components/SliderArrows.jsx
import React from 'react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

export function NextArrow({ className, style, onClick }) {
  return (
    <div
      //  'custom-slick-arrow' klasa
      className={`${className} custom-slick-arrow z-10 w-14 h-14 rounded-md bg-white bg-opacity-70 hover:bg-opacity-100 border border-gray-200 flex items-center justify-center text-gray-600 hover:text-orange-500 cursor-pointer shadow-md`}
      style={{ ...style, display: 'flex' }}
      onClick={onClick}
    >
      <FiChevronRight size={28} />
    </div>
  );
}

export function PrevArrow({ className, style, onClick }) {
  return (
    <div
      //  'custom-slick-arrow' klasa
      className={`${className} custom-slick-arrow z-10 w-14 h-14 rounded-md bg-white bg-opacity-70 hover:bg-opacity-100 border border-gray-200 flex items-center justify-center text-gray-600 hover:text-orange-500 cursor-pointer shadow-md`}
      style={{ ...style, display: 'flex' }}
      onClick={onClick}
    >
      <FiChevronLeft size={28} />
    </div>
  );
}