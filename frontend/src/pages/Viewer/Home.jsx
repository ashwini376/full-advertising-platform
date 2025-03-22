import React from 'react';
import AdCard from '../../components/AdCard';

const Home = () => {
  const ads = [
    { id: 1, title: 'Ad 1', description: 'This is ad 1', image: '/assets/images/default-ad.png' },
    { id: 2, title: 'Ad 2', description: 'This is ad 2', image: '/assets/images/default-ad.png' },
  ];

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">Home</h1>
      <div className="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {ads.map((ad) => (
          <AdCard key={ad.id} ad={ad} />
        ))}
      </div>
    </div>
  );
};

export default Home;