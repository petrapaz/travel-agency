// src/pages/TransfersResultsPage.jsx
import React from 'react';
import { useLocation, Link, useNavigate } from 'react-router-dom'; // 1. Importiramo useNavigate hook

// Import slika vozila
import imgCar from '../assets/images/mercedes.jpg';
import imgVan from '../assets/images/sprinter.jpg';
import imgMinibus from '../assets/images/auto.jpg';

export default function TransfersResultsPage() {
  const location = useLocation();
  const navigate = useNavigate(); // 2. initialize hook
  const { results, from, to, pax, date } = location.state || {}; //dohvati podatke

  // 3. funkcija koja se poziva klikom na gumb
  const handleReserveClick = (vehicle, price) => {
    // Navigacija na stranicu za rezervaciju i slanje podataka..
    navigate('/transfers/reserve', {
      state: { vehicle, price, from, to, pax, date }
    });
  };

  // Ako nema rezultata, prikaži poruku
  if (!results) {
    return (
      <div className="pt-32 text-center h-screen">
        <h1 className="text-2xl">Could not get results. Please try your search again.</h1>
        <Link to="/transfers" className="text-orange-500 mt-4 inline-block">&larr; Back to search</Link>
      </div>
    );
  }

  return (
    <div className="bg-white pt-24">
      <div className="container mx-auto px-6 py-12">
        <h2 className="text-4xl font-light text-gray-800 relative inline-block pb-2">
          Chosen route offers: <span className="font-semibold">{from} &rarr; {to}</span>
          <span className="absolute bottom-0 left-0 w-1/4 h-0.5 bg-orange-500"></span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {/* CAR Card */}
          <div className="bg-gray-50 rounded-lg shadow-md overflow-hidden">
            <img src={imgCar} alt="Car" className="w-full h-56 object-cover" />
            <div className="p-6">
              <h3 className="text-2xl font-semibold">CAR</h3>
              <p className="text-gray-500">Maximum capacity: 3 person</p>
              <div className="flex justify-between items-end mt-6 pt-6 border-t">
                <div>
                  <span className="text-gray-500 text-sm">From</span>
                  <p className="text-4xl font-bold text-gray-800">€{results.carPrice}</p>
                </div>
                {/* 4. Povezivanje funkcije s gumbom putem onClick-a */}
                <button onClick={() => handleReserveClick('Car', results.carPrice)} className="bg-orange-500 text-white px-6 py-2 rounded-md hover:bg-orange-600 font-semibold">RESERVE</button>
              </div>
            </div>
          </div>

          {/* VAN Card */}
          <div className="bg-gray-50 rounded-lg shadow-md overflow-hidden">
            <img src={imgVan} alt="Van" className="w-full h-56 object-cover" />
            <div className="p-6">
              <h3 className="text-2xl font-semibold">VAN</h3>
              <p className="text-gray-500">Maximum capacity: 8 person</p>
               <div className="flex justify-between items-end mt-6 pt-6 border-t">
                <div>
                  <span className="text-gray-500 text-sm">From</span>
                  <p className="text-4xl font-bold text-gray-800">€{results.vanPrice}</p>
                </div>
                <button onClick={() => handleReserveClick('Van', results.vanPrice)} className="bg-orange-500 text-white px-6 py-2 rounded-md hover:bg-orange-600 font-semibold">RESERVE</button>
              </div>
            </div>
          </div>

          {/* MINIBUS Card */}
          <div className="bg-gray-50 rounded-lg shadow-md overflow-hidden">
            <img src={imgMinibus} alt="Minibus" className="w-full h-56 object-cover" />
            <div className="p-6">
              <h3 className="text-2xl font-semibold">MINIBUS</h3>
              <p className="text-gray-500">Maximum capacity: 19 person</p>
               <div className="flex justify-between items-end mt-6 pt-6 border-t">
                <div>
                  <span className="text-gray-500 text-sm">From</span>
                  <p className="text-4xl font-bold text-gray-800">€{results.minibusPrice}</p>
                </div>
                <button onClick={() => handleReserveClick('Minibus', results.minibusPrice)} className="bg-orange-500 text-white px-6 py-2 rounded-md hover:bg-orange-600 font-semibold">RESERVE</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}