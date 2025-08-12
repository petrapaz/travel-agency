// src/pages/DayToursList.jsx
import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { FiChevronDown } from 'react-icons/fi';
import { toursData } from '../data/tours';

//Uklonjen 'import' za sliku.
const heroBg = '/images/dubrovnik.webp';

const categories = [
  { key: 'all', name: 'All trips' },
  { key: 'historic', name: 'Historic' },
  { key: 'nature', name: 'Nature' },
  { key: 'family', name: 'Family' },
  { key: 'food', name: 'Food & Wine' },
];

const sortOptions = [
  { key: 'recommended', name: 'Recommended' },
  { key: 'price-asc', name: 'Price: Low to High' },
  { key: 'price-desc', name: 'Price: High to Low' },
];

export default function DayToursList() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortOrder, setSortOrder] = useState('recommended');
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);
  const [isSortOpen, setIsSortOpen] = useState(false);

  const filteredAndSortedTours = useMemo(() => {
    let tours = [...toursData];
    if (selectedCategory !== 'all') {
      tours = tours.filter(tour => tour.category === selectedCategory);
    }
    switch (sortOrder) {
      case 'price-asc':
        tours.sort((a, b) => a.price - b.price);
        break;
      case 'price-desc':
        tours.sort((a, b) => b.price - a.price);
        break;
      case 'recommended':
        tours.sort((a, b) => (b.recommended ? 1 : -1) - (a.recommended ? 1 : -1) || a.price - b.price);
        break;
      default:
        break;
    }
    return tours;
  }, [selectedCategory, sortOrder]);
  
  return (
    <>
      <section className="h-[50vh] relative overflow-hidden pt-20">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${heroBg})` }}></div>
        <div className="absolute inset-0 bg-black opacity-50 z-10" />
        <div className="relative z-20 h-full flex items-center px-12 text-white max-w-4xl">
          <div>
            <h1 className="font-playfair text-5xl md:text-7xl font-normal leading-tight">
              Day Tours
            </h1>
            <p className="text-lg mt-2">Use our one day tours to explore multiple locations.</p>
          </div>
        </div>
      </section>

      <div className="bg-white">
        <div className="container mx-auto px-6 py-12">
          <div className="flex flex-col md:flex-row justify-between items-center mb-12">
            <div className="text-left mb-6 md:mb-0">
                <h2 className="text-4xl font-light text-gray-800">Lets explore our Day Tours offer</h2>
                <p className="text-gray-500 mt-2">Most popular destinations in Croatia and near-by.</p>
            </div>
            <div className="flex space-x-4">
              <div className="relative w-48">
                <button onClick={() => setIsCategoryOpen(!isCategoryOpen)} className="w-full bg-white border border-gray-300 rounded-md px-4 py-2 flex justify-between items-center">
                  <span>{categories.find(c => c.key === selectedCategory)?.name || 'All trips'}</span>
                  <FiChevronDown />
                </button>
                {isCategoryOpen && (
                  <ul className="absolute top-full left-0 w-full bg-white border border-gray-300 rounded-md mt-1 shadow-lg z-10">
                    {categories.map(cat => (
                      <li key={cat.key} onClick={() => { setSelectedCategory(cat.key); setIsCategoryOpen(false); }} className="px-4 py-2 hover:bg-gray-100 cursor-pointer">{cat.name}</li>
                    ))}
                  </ul>
                )}
              </div>
              <div className="relative w-48">
                <button onClick={() => setIsSortOpen(!isSortOpen)} className="w-full bg-white border border-gray-300 rounded-md px-4 py-2 flex justify-between items-center">
                   <span>{sortOptions.find(s => s.key === sortOrder)?.name || 'Recommended'}</span>
                  <FiChevronDown />
                </button>
                {isSortOpen && (
                  <ul className="absolute top-full left-0 w-full bg-white border border-gray-300 rounded-md mt-1 shadow-lg z-10">
                     {sortOptions.map(opt => (
                      <li key={opt.key} onClick={() => { setSortOrder(opt.key); setIsSortOpen(false); }} className="px-4 py-2 hover:bg-gray-100 cursor-pointer">{opt.name}</li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-10">
            {filteredAndSortedTours.map((tour) => (
              <Link key={tour.id} to={`/day-tours/tour/${tour.id}`} className="flex flex-col md:flex-row bg-gray-50 rounded-lg shadow-sm overflow-hidden hover:shadow-lg transition-shadow duration-300 group">
                <div className="md:w-1/3">
                  {/*'loading="lazy"' */}
                  <img src={tour.image} alt={tour.title} className="w-full h-64 md:h-full object-cover" loading="lazy" />
                </div>
                <div className="md:w-2/3 p-8 flex flex-col">
                  <h2 className="text-2xl font-semibold text-gray-800 mb-4 h-16 leading-tight group-hover:text-orange-500 transition-colors">{tour.title}</h2>
                  <p className="text-gray-600 mb-6 h-24 overflow-hidden">{tour.description}</p>
                  <div className="text-sm text-gray-700 space-y-2 mb-6">
                    <p><strong>Includes:</strong> {tour.includes.join(', ')}</p>
                    <p><strong>Duration:</strong> {tour.duration}</p>
                    <p><strong>Departure point:</strong> {tour.departure}</p>
                  </div>
                  <div className="flex justify-between items-center mt-auto border-t pt-6">
                    <div>
                      <span className="text-gray-500 text-sm">From</span>
                      <p className="text-3xl font-bold text-orange-500">€{tour.price}</p>
                    </div>
                    <div className="bg-orange-500 text-white px-8 py-3 rounded-md font-semibold">DETAILS</div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}