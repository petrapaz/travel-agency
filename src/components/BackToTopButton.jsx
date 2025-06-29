// src/components/BackToTopButton.jsx
import React, { useState, useEffect } from 'react';
import { FaArrowUp } from 'react-icons/fa';

export default function BackToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  // Pokaži gumb kada korisnik skrola više od 300px
  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Funkcija za skrolanje na vrh
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // Glatka animacija skrolanja
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <div className="fixed bottom-8 right-8 z-20">
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="bg-orange-500 hover:bg-orange-600 text-white w-12 h-12 rounded-full flex items-center justify-center shadow-lg transition-opacity duration-300"
        >
          <FaArrowUp />
        </button>
      )}
    </div>
  );
}