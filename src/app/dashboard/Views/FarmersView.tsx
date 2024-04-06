import React, { useState } from 'react';
import FarmerGrid from '@/app/components/ui/FarmerGrid';
import FarmerMap from '@/app/components/ui/FarmerMap';
import FarmerProfile from '../components/FarmerProfile';
import FarmerData from '../../FarmerData'; // Adjust the import path as necessary
import { Farmer } from '../../../../types';

const HomeView = () => {
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
          <FarmerGrid cards={8} onSelectFarmer={handleSelectFarmer} />
          <div className="mt-16">
            <FarmerMap farmers={FarmerData} />
          </div>
        </>
      )}
    </div>
  );
};

export default HomeView;
