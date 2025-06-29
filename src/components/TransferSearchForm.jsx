// src/components/TransferSearchForm.jsx
import React, { useState } from 'react';
import { Combobox } from '@headlessui/react';
import { FiChevronDown, FiArrowRight } from 'react-icons/fi';
import { locations } from '../data/locations'; // Importiramo našu listu lokacija

// Reusable Combobox komponenta za odabir lokacije
function LocationCombobox({ label, locations, value, onChange }) {
  const [query, setQuery] = useState('');

  const filteredLocations =
    query === ''
      ? locations
      : locations.filter((location) => location.toLowerCase().includes(query.toLowerCase()));

  return (
    <Combobox value={value} onChange={onChange}>
      <div className="relative">
        <label className="block text-xs font-bold text-gray-500 uppercase">{label}</label>
        <Combobox.Input
          onChange={(event) => setQuery(event.target.value)}
          displayValue={(location) => location}
          className="w-full mt-1 p-2 border-b-2 border-gray-200 focus:outline-none focus:border-orange-500 bg-transparent"
        />
        <Combobox.Button className="absolute inset-y-0 right-0 flex items-center pr-2 top-5">
          <FiChevronDown className="h-5 w-5 text-gray-400" aria-hidden="true" />
        </Combobox.Button>
        {filteredLocations.length > 0 && (
          <Combobox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg z-20">
            {filteredLocations.map((location) => (
              <Combobox.Option
                key={location}
                value={location}
                className={({ active }) => `relative cursor-pointer select-none py-2 pl-4 pr-4 ${active ? 'bg-orange-500 text-white' : 'text-gray-900'}`}
              >
                {location}
              </Combobox.Option>
            ))}
          </Combobox.Options>
        )}
      </div>
    </Combobox>
  );
}


export default function TransferSearchForm() {
  const [fromLocation, setFromLocation] = useState('Split');
  const [toLocation, setToLocation] = useState('Zagreb');

  const handleSubmit = (event) => {
    event.preventDefault();
    // logika za pretragu i izračun cijene:
    //console.log("Searching for transfer from:", fromLocation, "to:", toLocation);
  };
  
  return (
    <form onSubmit={handleSubmit} className="mt-8 bg-white p-4 rounded-lg shadow-2xl max-w-4xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-5 gap-4 text-left text-gray-600">
        
        <div className="md:col-span-1">
          <LocationCombobox label="From" locations={locations} value={fromLocation} onChange={setFromLocation} />
        </div>

        <div className="md:col-span-1">
          <LocationCombobox label="To" locations={locations} value={toLocation} onChange={setToLocation} />
        </div>

        {/* Person */}
        <div className="relative">
           <label htmlFor="person" className="block text-xs font-bold text-gray-500 uppercase">Person</label>
           <select id="person" defaultValue="2" className="w-full appearance-none mt-1 p-2 bg-transparent border-b-2 border-gray-200 focus:outline-none focus:border-orange-500">
            {[...Array(20).keys()].map(i => <option key={i+1} value={i+1}>{i+1}</option>)}
           </select>
           <FiChevronDown className="absolute right-2 top-8 text-gray-400 pointer-events-none"/>
        </div>

        {/* Date */}
        <div className="relative">
           <label htmlFor="date" className="block text-xs font-bold text-gray-500 uppercase">Date</label>
           <input type="date" id="date" className="w-full mt-1 p-2 border-b-2 border-gray-200 focus:outline-none focus:border-orange-500"/>
           {/* Ikona ovdje nije nužna za date input */}
        </div>

        {/* Search Button */}
        <div className="md:col-span-1">
          <button type="submit" className="w-full h-full bg-orange-500 text-white rounded-lg flex items-center justify-center text-lg hover:bg-orange-600 transition-colors mt-5 md:mt-0">
            Search Now <FiArrowRight className="ml-2" />
          </button>
        </div>
      </div>
    </form>
  );
}