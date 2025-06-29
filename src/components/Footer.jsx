// src/components/Footer.jsx
import React from 'react';
import { Link } from 'react-router-dom'; // 1. Importiramo 'Link' komponentu
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-[#1D2C38] text-white py-12 px-16">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-5 gap-10">
        
        <div className="md:col-span-1">
          <div className="flex items-center space-x-3 mb-4">
            <span className="text-xl font-semibold uppercase tracking-wider">Travel Agency</span>
          </div>
          <p className="text-gray-400 text-xs">
            Copyright &copy; 2025 TRAVEL AGENCY <br /> All rights reserved
          </p>
        </div>

        {/* 2. AŽURIRANI LINKOVI U MENIJU */}
        <div>
          <h3 className="font-semibold mb-4">Menu</h3>
          <ul className="space-y-2 text-gray-300 font-light">
            <li><Link to="/" className="hover:text-white">Home</Link></li>
            <li><Link to="/day-tours" className="hover:text-white">Day Tours</Link></li>
            <li><Link to="/transfers" className="hover:text-white">Transfers</Link></li>
            <li><Link to="/about-us" className="hover:text-white">About Us</Link></li>
            <li><Link to="/contact-us" className="hover:text-white">Contact Us</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold mb-4">Information</h3>
          <ul className="space-y-2 text-gray-300 font-light">
            <li><a href="#" className="hover:text-white">Supports</a></li>
            <li><a href="#" className="hover:text-white">Terms & Conditions</a></li>
            <li><a href="#" className="hover:text-white">Privacy</a></li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold mb-4">Contact Info</h3>
          <ul className="space-y-2 text-gray-300 font-light">
            <li>+385 95 456 789</li>
            <li>info@travelagency.com</li>
            <li>Splitska ulica 5, <br/> Split, Croatia</li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold mb-4">Follow us on</h3>
          <div className="flex space-x-4">
            <a href="#" className="bg-white bg-opacity-10 hover:bg-opacity-20 p-2 rounded-full"><FaFacebookF /></a>
            <a href="#" className="bg-white bg-opacity-10 hover:bg-opacity-20 p-2 rounded-full"><FaInstagram /></a>
            <a href="#" className="bg-white bg-opacity-10 hover:bg-opacity-20 p-2 rounded-full"><FaTwitter /></a>
          </div>
        </div>

      </div>
    </footer>
  );
}