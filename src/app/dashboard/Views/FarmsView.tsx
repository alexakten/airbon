import React, { useState } from 'react';
import FarmerGrid from '@/app/components/ui/FarmerGrid';

import FarmerProfile from '../components/FarmerProfile';
import FarmerData from '../../FarmerData'; // Adjust the import path as necessary
import { Farmer } from '../../../../types';
import dynamic from 'next/dynamic';

const FarmerMap = dynamic(() => import('../../components/ui/FarmerMap'), {
  ssr: false, // Disable server-side rendering if necessary
  loading: () => <p>Loading map...</p>, // Optional loading component
});

const FarmerView = () => {
  const [selectedFarmer, setSelectedFarmer] = useState<Farmer | null>(null);

  const handleSelectFarmer = (farmer: Farmer) => {
    setSelectedFarmer(farmer);
  };

  const handleDeselectFarmer = () => {
    setSelectedFarmer(null);
  };

  return (
    <div>
      {selectedFarmer ? (
        <FarmerProfile farmer={selectedFarmer} onDeselectFarmer={handleDeselectFarmer} />
      ) : (
        <>
          <div className='mb-8'>
            <h1 className="text-3xl tracking-tight font-medium">Farms</h1>

          </div>
          <FarmerGrid cards={8} onSelectFarmer={handleSelectFarmer} />
          <div className="mt-16">
            <FarmerMap farmers={FarmerData} />
          </div>
        </>
      )}
    </div>
  );
};

export default FarmerView;
