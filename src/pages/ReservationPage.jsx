// src/pages/ReservationPage.jsx
import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

export default function ReservationPage() {
  const location = useLocation();
  const navigate = useNavigate();
  
  // Dohvaćamo podatke poslane s prethodne stranice
  const { vehicle, price, from, to, pax, date } = location.state || {};

  // Ako nema podataka (npr. direktan pristup stranici), preusmjeri nazad
  if (!vehicle) {
    return (
      <div className="pt-32 text-center h-screen">
        <h1 className="text-2xl">No transfer selected.</h1>
        <button onClick={() => navigate('/transfers')} className="text-orange-500 mt-4 inline-block">
          &larr; Back to search
        </button>
      </div>
    );
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    // U pravoj aplikaciji, ovdje bi se slali podaci na server
    // ovjde samo preusmjeriti na stranicu o uspjehu slanja zahtjeva
    navigate('/booking-success');
  };

  return (
    <div className="bg-gray-50 pt-28">
      <div className="container mx-auto px-6 py-12">
        <h1 className="text-4xl font-light text-gray-800 mb-8">Confirm your Reservation</h1>
        <div className="grid md:grid-cols-3 gap-8">
          
          {/* Lijeva kolona - Forma */}
          <form onSubmit={handleSubmit} className="md:col-span-2 bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-6">Your Information</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">First Name</label>
                <input type="text" id="firstName" required className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500"/>
              </div>
              <div>
                <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">Last Name</label>
                <input type="text" id="lastName" required className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500"/>
              </div>
              <div className="md:col-span-2">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>
                <input type="email" id="email" required className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500"/>
              </div>
              <div className="md:col-span-2">
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone Number (with country code)</label>
                <input type="tel" id="phone" required className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500"/>
              </div>
              <div className="md:col-span-2">
                <label htmlFor="notes" className="block text-sm font-medium text-gray-700">Special requests (e.g. flight number, child seat)</label>
                <textarea id="notes" rows="4" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500"></textarea>
              </div>
            </div>
            <div className="mt-8">
              <button type="submit" className="w-full bg-orange-500 text-white py-3 rounded-lg font-bold text-lg hover:bg-orange-600 transition-colors">
                CONFIRM RESERVATION
              </button>
            </div>
          </form>

          {/* Desna kolona - Sažetak */}
          <div className="md:col-span-1">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-800 border-b pb-4">Booking Summary</h3>
              <div className="space-y-4 my-6 text-gray-700">
                <p><strong>From:</strong> {from}</p>
                <p><strong>To:</strong> {to}</p>
                <p><strong>Date:</strong> {date || 'Not specified'}</p>
                <p><strong>Passengers:</strong> {pax}</p>
                <p><strong>Vehicle:</strong> <span className="font-bold">{vehicle}</span></p>
              </div>
              <div className="border-t-2 border-dashed pt-4 flex justify-between items-center">
                <span className="text-xl font-light">Total Price:</span>
                <span className="text-3xl font-bold text-orange-500">€{price}</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}