// src/components/StarRating.jsx
import React from 'react';
import { FaStar } from 'react-icons/fa';

const StarRating = ({ rating }) => {
  const stars = [];
  for (let i = 0; i < 5; i++) {
    stars.push(
      <FaStar key={i} className={i < rating ? 'text-orange-400' : 'text-gray-300'} />
    );
  }
  return <div className="flex space-x-1 justify-center">{stars}</div>;
};

export default StarRating;