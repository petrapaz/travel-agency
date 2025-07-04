// src/pages/ContactUsPage.jsx
import React from 'react';
import { FiMail, FiPhone, FiMapPin } from 'react-icons/fi';

// Import slika
import heroBg from '../assets/images/jedrilice.jpg';
import questionsImg from '../assets/images/car-window.jpg';
import planTripImg from '../assets/images/dalmatian-stone-street.jpg';

export default function ContactUsPage() {
  const handleSubmit = (event) => {
    event.preventDefault();
    alert('Thank you for your message. We will get back to you shortly!');
    event.target.reset();
  };

  return (
    <>
      {/* Hero sekcija */}
      <section className="h-screen relative overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${heroBg})` }}></div>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative h-full flex items-center px-12 text-white max-w-4xl">
          <div>
            <h1 className="font-playfair text-5xl md:text-7xl font-normal leading-tight">
              Let's get in touch!
            </h1>
          </div>
        </div>
      </section>

      <div className="bg-white">
        {/* Uvodni 'Contact Us' naslov */}
        <section className="container mx-auto px-6 pt-20 pb-10 text-left">
          <h2 className="text-4xl font-light text-gray-800 relative inline-block pb-2">
            Contact Us
            <span className="absolute bottom-0 left-0 w-1/4 h-0.5 bg-orange-500"></span>
          </h2>
          <p className="text-gray-500 mt-4 max-w-2xl text-lg">We look forward to hearing from you and helping you plan a trip you'll never forget!</p>
        </section>

        {/* 'Questions?' sekcija */}
        <section className="container mx-auto px-6 py-12 grid md:grid-cols-2 gap-12 items-center">
          <div className="rounded-2xl overflow-hidden aspect-[4/3]">
            <img src={questionsImg} alt="Questions?" className="w-full h-full object-cover" />
          </div>
          <div>
            <h3 className="text-4xl font-light text-gray-800 mb-4">Questions?</h3>
            <p className="text-gray-700 text-xl leading-relaxed">Have questions or ready to plan your Croatian adventure? We're here to help! Whether you need help choosing a tour, arranging a private transfer, or customizing your trip, don’t hesitate to reach out. You can contact us anytime via email, phone, or WhatsApp—we respond quickly and speak fluent English. Follow us on social media to see travel inspiration, tips, and real-time updates from around Croatia.</p>
          </div>
        </section>

        {/* 'Plan a Trip' sekcija */}
        <section className="container mx-auto px-6 pt-12 pb-20 grid md:grid-cols-2 gap-12 items-center">
          <div className="md:order-2 rounded-2xl overflow-hidden aspect-[4/3]">
             <img src={planTripImg} alt="Plan a Trip" className="w-full h-full object-cover" />
          </div>
          <div className="md:order-1">
            <h3 className="text-4xl font-light text-gray-800 mb-4">Plan a Trip – Your Ideas, Our Local Expertise</h3>
            <p className="text-gray-700 text-xl leading-relaxed">Have a special trip in mind? If you don’t see exactly what you’re looking for on our website, don’t worry—we’re here to help you create it! Share your travel ideas, interests, or dream destinations in Croatia, and we’ll work with you to build a personalized itinerary that fits your style, pace, and budget.</p>
          </div>
        </section>
      </div>

      {/*Forma i karta (lokacija)*/}
      <section className="bg-[#1D2C38] text-white py-20">
        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12">
          
          <div className="bg-white text-gray-800 p-8 rounded-lg shadow-2xl flex flex-col">
            <h2 className="text-3xl font-light relative inline-block self-start pb-2">Contact us<span className="absolute bottom-0 left-0 w-1/4 h-0.5 bg-orange-500"></span></h2>
            <form onSubmit={handleSubmit} className="mt-6 space-y-4 flex-grow flex flex-col">
              <div className="flex-grow space-y-4">
                  <div>
                    <label htmlFor="name-2" className="sr-only">Name</label>
                    <input type="text" id="name-2" required placeholder="Name" className="w-full bg-gray-100 p-3 rounded-md border-gray-300 focus:border-orange-500 focus:ring-orange-500"/>
                  </div>
                  <div>
                    <label htmlFor="email-2" className="sr-only">Email</label>
                    <input type="email" id="email-2" required placeholder="Email" className="w-full bg-gray-100 p-3 rounded-md border-gray-300 focus:border-orange-500 focus:ring-orange-500"/>
                  </div>
                  <div>
                    <label htmlFor="message-2" className="sr-only">Message</label>
                    <textarea id="message-2" rows="5" required placeholder="Message" className="w-full bg-gray-100 p-3 rounded-md border-gray-300 focus:border-orange-500 focus:ring-orange-500"></textarea>
                  </div>
              </div>
              <div className="mt-auto">
                  <div className="flex items-center mb-4">
                    <input id="newsletter" type="checkbox" className="h-4 w-4 rounded border-gray-300 text-orange-600 focus:ring-orange-500" />
                    <label htmlFor="newsletter" className="ml-2 block text-sm text-gray-600">I would like to receive the newsletter.</label>
                  </div>
                  <div>
                    <button type="submit" className="bg-orange-500 text-white px-8 py-3 rounded-md font-semibold hover:bg-orange-600 transition-colors">Submit</button>
                  </div>
              </div>
            </form>
          </div>

          <div className="text-left">
             <p className="text-lg text-gray-300">Visit us in our agency. We look forward to meet you!</p>
             <div className="aspect-video w-full rounded-lg overflow-hidden border border-gray-700 my-6">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2894.242749892555!2d16.44019481548608!3d43.50813297912684!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12b5d5e3c5b8ab7d%3A0x10f37c35fad5a100!2sSplitska%20ul.%205%2C%2021000%2C%20Split%2C%20Croatia!5e0!3m2!1sen!2sus!4v1627912345678!5m2!1sen!2sus" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen="" 
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade">
                </iframe>
              </div>
              <div className="space-y-3">
                <p className="flex items-center"><FiMapPin className="text-orange-500 mr-3" /> SPLIT, Croatia: Splitska ulica 5</p>
                <p className="flex items-center"><FiPhone className="text-orange-500 mr-3" /> +385 95 456 789</p>
                <p className="flex items-center"><FiMail className="text-orange-500 mr-3" /> info@travelagency.com</p>
              </div>
          </div>
        </div>
      </section>
    </>
  );
}