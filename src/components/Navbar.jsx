// src/components/Navbar.jsx
import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';

export default function Navbar() {
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

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <>
      <nav className={`fixed top-0 left-0 w-full z-30 flex justify-between items-center px-6 md:px-12 py-5 transition-all duration-300 ${navbarBg} ${textColor}`}>
        
        <Link to="/" className="text-xl font-semibold uppercase tracking-wider">
          Travel Agency
        </Link>

        {/* DESKTOP MENI */}
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
            <button className="bg-orange-500 hover:bg-orange-600 px-6 py-2 rounded-lg text-white text-sm font-medium transition-colors">
                Book Now
            </button>
        </div>

        <div onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden z-40 cursor-pointer">
          {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </div>
      </nav>

      {/* Mobilni meni */}
      <div className={
        isMenuOpen 
        ? 'md:hidden fixed top-0 left-0 w-full h-screen bg-[#1D2C38] z-20 flex flex-col justify-center items-center transition-all duration-300 ease-in-out'
        : 'md:hidden fixed top-0 left-[-100%] w-full h-screen bg-[#1D2C38] z-20 flex flex-col justify-center items-center transition-all duration-300 ease-in-out'
      }>
        <ul className="text-white text-center">
          <li className="py-4 text-2xl"><Link to="/" onClick={closeMenu}>Home</Link></li>
          <li className="py-4 text-2xl"><Link to="/day-tours" onClick={closeMenu}>Day Tours</Link></li>
          <li className="py-4 text-2xl"><Link to="/transfers" onClick={closeMenu}>Transfers</Link></li>
          <li className="py-4 text-2xl"><Link to="/about-us" onClick={closeMenu}>About Us</Link></li>
          <li className="py-4 text-2xl"><Link to="/contact-us" onClick={closeMenu}>Contact Us</Link></li>
        </ul>
        <button className="bg-orange-500 hover:bg-orange-600 px-8 py-3 rounded-lg text-white mt-8">
            Book Now
        </button>
      </div>
    </>
  );
}