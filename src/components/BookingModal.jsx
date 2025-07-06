// src/components/BookingModal.jsx
import React, { useState, Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { FaTimes } from 'react-icons/fa';
import { locations } from '../data/locations';
import { useNavigate } from 'react-router-dom'; // 1. Importiramo useNavigate

// Pomoćna komponenta za odabir lokacije
function LocationSelect({ label, value, onChange }) {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700">{label}</label>
      <select 
        value={value} 
        onChange={(e) => onChange(e.target.value)} 
        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500"
      >
        {locations.map(loc => <option key={loc} value={loc}>{loc}</option>)}
      </select>
    </div>
  )
}

export default function BookingModal({ isOpen, onClose }) {
  const navigate = useNavigate(); // 2. Inicijaliziramo hook

  const [formData, setFormData] = useState({
    from: 'Split zračna luka',
    to: 'Makarska',
    persons: 1,
    date: '',
    time: '',
    shoppingStop: false,
    notes: ''
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleLocationChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };
  
  // 3. Ažurirana handleSubmit funkcija
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Booking data:", formData);
    
    // Prvo zatvaramo modal
    onClose(); 
    
    // Zatim preusmjeravamo korisnika na stranicu za uspjeh
    navigate('/booking-success'); 
  };

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={onClose}>
        <Transition.Child as={Fragment} enter="ease-out duration-300" enterFrom="opacity-0" enterTo="opacity-100" leave="ease-in duration-200" leaveFrom="opacity-100" leaveTo="opacity-0">
          <div className="fixed inset-0 bg-black bg-opacity-50" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child as={Fragment} enter="ease-out duration-300" enterFrom="opacity-0 scale-95" enterTo="opacity-100 scale-100" leave="ease-in duration-200" leaveFrom="opacity-100 scale-100" leaveTo="opacity-0 scale-95">
              <Dialog.Panel className="w-full max-w-2xl transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                <div className="flex justify-between items-center">
                  <Dialog.Title as="h3" className="text-xl font-semibold leading-6 text-gray-900">
                    Book Your Transfer
                  </Dialog.Title>
                  <button onClick={onClose} className="p-1 rounded-full hover:bg-gray-100">
                    <FaTimes className="text-gray-500"/>
                  </button>
                </div>
                
                <form onSubmit={handleSubmit} className="mt-4 space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <LocationSelect label="From" value={formData.from} onChange={(val) => handleLocationChange('from', val)} />
                    <LocationSelect label="To" value={formData.to} onChange={(val) => handleLocationChange('to', val)} />
                    <div>
                      <label htmlFor="date" className="block text-sm font-medium text-gray-700">Date</label>
                      <input type="date" name="date" id="date" value={formData.date} onChange={handleChange} required className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500"/>
                    </div>
                     <div>
                      <label htmlFor="time" className="block text-sm font-medium text-gray-700">Time</label>
                      <input type="time" name="time" id="time" value={formData.time} onChange={handleChange} required className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500"/>
                    </div>
                     <div>
                      <label htmlFor="persons" className="block text-sm font-medium text-gray-700">Persons</label>
                      <select name="persons" id="persons" value={formData.persons} onChange={handleChange} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500">
                        {[...Array(50).keys()].map(i => <option key={i+1}>{i+1}</option>)}
                      </select>
                    </div>
                  </div>
                   <div>
                    <label htmlFor="notes" className="block text-sm font-medium text-gray-700">Special Requests</label>
                    <textarea name="notes" id="notes" value={formData.notes} onChange={handleChange} rows="3" placeholder="e.g. Flight number, child seat..." className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500"></textarea>
                  </div>
                  <div className="flex items-center">
                    <input type="checkbox" id="shoppingStop" name="shoppingStop" checked={formData.shoppingStop} onChange={handleChange} className="h-4 w-4 rounded border-gray-300 text-orange-600 focus:ring-orange-500"/>
                    <label htmlFor="shoppingStop" className="ml-2 block text-sm text-gray-900">Add shopping stop (up to 45 min) - <span className="font-semibold">15€ extra</span></label>
                  </div>
                  <div className="pt-4">
                    <button type="submit" className="w-full bg-orange-500 text-white py-3 px-6 rounded-lg font-bold text-lg hover:bg-orange-600 transition-colors">
                      Send Inquiry
                    </button>
                  </div>
                </form>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}
