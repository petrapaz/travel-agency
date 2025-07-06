// src/pages/TransfersPage.jsx
import React from 'react';
import TransferSearchForm from '../components/TransferSearchForm';

// Import slika
import heroBg from '../assets/images/car-window.jpg';
import imgJourney from '../assets/images/mercedes.jpg';
import imgFlexible from '../assets/images/departures.jpg';

export default function TransfersPage() {
  return (
    <>
      {/* Hero sekcija s formom za pretragu */}
      <section className="h-screen relative flex items-center justify-center">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${heroBg})` }}></div>
        <div className="absolute inset-0 bg-black opacity-60"></div>
        
        <div className="relative z-10 text-white text-center px-4">
          <h1 className="font-playfair text-5xl md:text-7xl font-normal">Private Transfers in Croatia</h1>
          <p className="mt-4 text-lg">Comfort, Convenience & Flexibility</p>
          <TransferSearchForm />
        </div>
      </section>

      {/* Informativne sekcije */}
      <div className="bg-white">
        <section className="container mx-auto px-6 py-20 text-center">
          <h2 className="text-4xl font-light text-gray-800 relative inline-block pb-2">
            Private Transfers
            <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-0.5 bg-orange-500"></span>
          </h2>
          <p className="text-gray-500 mt-4 max-w-2xl mx-auto">Enjoy a seamless journey across Croatia.</p>
        </section>

        <section className="container mx-auto px-6 py-16 grid md:grid-cols-2 gap-16 items-center">
          <div className="rounded-2xl overflow-hidden aspect-[4/3]">
            <img src={imgJourney} alt="Your Journey, Your Schedule" className="w-full h-full object-cover" />
          </div>
          <div className="text-left">
            <h3 className="text-3xl font-light text-gray-800 mb-4">Your Journey, Your Schedule</h3>
            {/* ISPRAVAK: Ažuriran i proširen tekst */}
            <div className="space-y-4 text-gray-600 text-lg leading-relaxed">
              <p>Traveling through Croatia has never been easier with private transfer services tailored to your schedule, group size, and destination. Whether you’re arriving at the airport, traveling between coastal towns, or planning day trips inland, a private transfer ensures a smooth, stress-free journey.</p>
              <p>With door-to-door pickup, comfortable air-conditioned vehicles, and English-speaking drivers, private transfers offer flexibility that public transport can’t match. You set the time, we handle the rest—no waiting, no crowds, and no hauling luggage through bus stations.</p>
              <p>Enjoy a seamless journey from start to finish. Book in advance for guaranteed availability, especially in peak season.</p>
            </div>
          </div>
        </section>

        <section className="container mx-auto px-6 py-16 grid md:grid-cols-2 gap-16 items-center">
           <div className="md:order-2 rounded-2xl overflow-hidden aspect-[4/3]">
            <img src={imgFlexible} alt="Fast, Flexible, and Stress-Free" className="w-full h-full object-cover" />
          </div>
          <div className="md:order-1 text-left">
            <h3 className="text-3xl font-light text-gray-800 mb-4">Fast, Flexible, and Stress-Free</h3>
            {/* ISPRAVAK: Ažuriran i proširen tekst */}
            <div className="space-y-4 text-gray-600 text-lg leading-relaxed">
              <p>When you choose a private transfer in Croatia, you’re choosing travel that’s fast, flexible, and completely stress-free. No waiting in long taxi lines or navigating public transport with luggage—your driver picks you up on time, wherever you are, and takes you directly to your destination.</p>
              <p>Whether you’re arriving late at night, traveling with children, or exploring multiple towns in one day, private transfers adapt to your needs. With fixed pricing, comfortable vehicles, and experienced local drivers, you can relax and enjoy the journey—your time in Croatia should be effortless from start to finish.</p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}