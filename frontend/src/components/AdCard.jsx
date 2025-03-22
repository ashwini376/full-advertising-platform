import React from 'react';

const AdCard = ({ ad }) => {
  return (
    <div className="border p-4 rounded-lg shadow-md">
      <img src={ad.image} alt={ad.title} className="w-full h-48 object-cover" />
      <h3 className="text-xl font-semibold mt-2">{ad.title}</h3>
      <p className="text-gray-600">{ad.description}</p>
      <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded">
        View Details
      </button>
    </div>
  );
};

export default AdCard;