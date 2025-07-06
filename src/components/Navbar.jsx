// src/components/Navbar.jsx
import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';

// Navbar sada prima 'onBookNowClick' prop iz App.jsx
export default function Navbar({ onBookNowClick }) {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navbarBg = scrolled 
    ? 'bg-[#1D2C38] bg-opacity-90 backdrop-blur-sm shadow-md'
    : 'bg-black bg-opacity-30';
  
  const textColor = 'text-white'; 

  const closeMenuAndBook = () => {
    setIsMenuOpen(false);
    onBookNowClick();
  };

  return (
    <>
      <nav className={`fixed top-0 left-0 w-full z-50 flex justify-between items-center px-6 md:px-12 py-5 transition-all duration-300 ${navbarBg} ${textColor}`}>
        
        <Link to="/" className="text-xl font-semibold uppercase tracking-wider">
          Travel Agency
        </Link>

        {/* Desktop Meni */}
        <ul className="hidden md:flex space-x-8 text-sm">
          <li>
            <NavLink to="/">
              {({ isActive }) => (
                <div className={`relative group pb-2 ${isActive ? 'font-semibold' : 'font-light'}`}>
                  <span>Home</span>
                  <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-orange-500 transform transition-transform duration-300 ${isActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`}></span>
                </div>
              )}
            </NavLink>
          </li>
          <li>
            <NavLink to="/day-tours">
              {({ isActive }) => (
                <div className={`relative group pb-2 ${isActive ? 'font-semibold' : 'font-light'}`}>
                  <span>Day Tours</span>
                  <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-orange-500 transform transition-transform duration-300 ${isActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`}></span>
                </div>
              )}
            </NavLink>
          </li>
          <li>
            <NavLink to="/transfers">
              {({ isActive }) => (
                <div className={`relative group pb-2 ${isActive ? 'font-semibold' : 'font-light'}`}>
                  <span>Transfers</span>
                  <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-orange-500 transform transition-transform duration-300 ${isActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`}></span>
                </div>
              )}
            </NavLink>
          </li>
          <li>
            <NavLink to="/about-us">
              {({ isActive }) => (
                <div className={`relative group pb-2 ${isActive ? 'font-semibold' : 'font-light'}`}>
                  <span>About Us</span>
                  <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-orange-500 transform transition-transform duration-300 ${isActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`}></span>
                </div>
              )}
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact-us">
              {({ isActive }) => (
                <div className={`relative group pb-2 ${isActive ? 'font-semibold' : 'font-light'}`}>
                  <span>Contact Us</span>
                  <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-orange-500 transform transition-transform duration-300 ${isActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`}></span>
                </div>
              )}
            </NavLink>
          </li>
        </ul>

        <div className="hidden md:block">
            {/* Gumb sada poziva onBookNowClick funkciju */}
            <button onClick={onBookNowClick} className="bg-orange-500 hover:bg-orange-600 px-6 py-2 rounded-lg text-white text-sm font-medium transition-colors">
                Book Now
            </button>
        </div>

        {/* Burger Ikonica */}
        <div onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden cursor-pointer">
          {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </div>
      </nav>

      {/* Mobilni Meni */}
      <div className={
        isMenuOpen 
        ? 'md:hidden fixed inset-0 bg-[#1D2C38] z-40 flex flex-col justify-center items-center'
        : 'md:hidden fixed top-0 left-[-100%]'
      }>
        <ul className="text-white text-center">
          <li className="py-4 text-2xl"><Link to="/" onClick={() => setIsMenuOpen(false)}>Home</Link></li>
          <li className="py-4 text-2xl"><Link to="/day-tours" onClick={() => setIsMenuOpen(false)}>Day Tours</Link></li>
          <li className="py-4 text-2xl"><Link to="/transfers" onClick={() => setIsMenuOpen(false)}>Transfers</Link></li>
          <li className="py-4 text-2xl"><Link to="/about-us" onClick={() => setIsMenuOpen(false)}>About Us</Link></li>
          <li className="py-4 text-2xl"><Link to="/contact-us" onClick={() => setIsMenuOpen(false)}>Contact Us</Link></li>
        </ul>
        {/* Gumb u mobilnom meniju također poziva onBookNowClick i zatvara meni */}
        <button onClick={closeMenuAndBook} className="bg-orange-500 hover:bg-orange-600 px-8 py-3 rounded-lg text-white mt-8">
            Book Now
        </button>
      </div>
    </>
  );
}