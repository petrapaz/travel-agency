// src/pages/BookingSuccessPage.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { FaCheckCircle } from 'react-icons/fa'; // Ikona za potvrdu primitka upita za rez

// Uklonjen 'import' za sliku, definiramo je kao string s .webp putanjom.
const successBg = '/images/adriatic-coast.webp';

export default function BookingSuccessPage() {
  return (
    <section className="h-screen relative flex items-center justify-center text-center text-white p-4">
      {/* Pozadinska slika */}
      <div 
        className="absolute inset-0 bg-cover bg-center" 
        style={{ backgroundImage: `url(${successBg})` }}
      ></div>
      
      {/* Tamni filter preko slike */}
      <div className="absolute inset-0 bg-black opacity-60"></div>

      {/* Sadržaj na sredini */}
      <div className="relative z-10 bg-black bg-opacity-30 backdrop-blur-sm p-8 md:p-12 rounded-xl shadow-2xl max-w-lg mx-auto">
        
        {/* Ikona za vizualnu potvrdu */}
        <FaCheckCircle className="text-green-400 text-6xl mx-auto mb-6" />

        {/* Naslov s Playfair Display fontom */}
        <h1 className="font-playfair text-4xl md:text-5xl font-bold mb-4">
          Thank You!
        </h1>
        
        <p className="text-lg text-gray-200">
          Your reservation has been successfully submitted.
        </p>
        <p className="text-gray-300 mt-2">
          We will contact you shortly with confirmation and payment details.
        </p>
        
        {/* Gumb za povratak na početnu stranicu */}
        <Link 
          to="/" 
          className="mt-8 inline-block bg-orange-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-orange-600 transition-colors"
        >
          &larr; Back to Homepage
        </Link>
      </div>
    </section>
  );
}