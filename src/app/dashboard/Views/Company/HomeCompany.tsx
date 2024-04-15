import React, { useState } from "react";
import FarmerGrid from "@/app/components/ui/FarmerGrid";
import FarmerProfile from "../../components/FarmerProfile";
import FarmerData from "../../../FarmerData";
import { Farmer } from "../../../../../types";
import dynamic from "next/dynamic";
import StatsCard from "../../components/StatsCard";

const FarmerMap = dynamic(() => import("../../../components/ui/FarmerMap"), {
  ssr: false, // Disable server-side rendering if necessary
  loading: () => <p>Loading map...</p>, // Optional loading component
});

const HomeCompany = () => {
  const [selectedFarmer, setSelectedFarmer] = useState<Farmer | null>(null);

  const handleSelectFarmer = (farmer: Farmer) => {
    setSelectedFarmer(farmer);
  };

  const handleDeselectFarmer = () => {
    setSelectedFarmer(null);
  };

  const totalHectares = FarmerData.reduce(
    (acc, farmer) => acc + farmer.size,
    0,
  );
  const totalRegenerativeHectares = FarmerData.reduce(
    (acc, farmer) => acc + farmer.regenerative,
    0,
  );
  const regenerativePercentage = (totalRegenerativeHectares / totalHectares * 100).toFixed(2);

  const amountOfFarmers = FarmerData.length;
  const biggestFarmer = FarmerData.reduce((prev, current) =>
    prev.size > current.size ? prev : current,
  );

  return (
    <div>
      {selectedFarmer ? (
        <FarmerProfile
          farmer={selectedFarmer}
          onDeselectFarmer={handleDeselectFarmer}
        />
      ) : (
        <>
          <div>
            <h1 className="text-3xl tracking-tight font-medium">Overview</h1>

          </div>

          <div className="mt-8 grid grid-cols-3 gap-6">
            <StatsCard
              tagText="Total Hectares"
              title={`${totalHectares}`}
            />
            <StatsCard
              tagText="Regenerative Hectares"
              title={`${totalRegenerativeHectares}`}
            />
            <StatsCard
              tagText="Regenerative Percentage"
              title={`${regenerativePercentage}%`}
            />
            <StatsCard
              tagText="Total Farmers"
              title={`${amountOfFarmers}`}
            />
            <StatsCard tagText="Biggest Farm" title={biggestFarmer.name} />
          </div>

          <div className="mt-16">
            <FarmerGrid cards={8} onSelectFarmer={handleSelectFarmer} />
          </div>

          <div className="mt-16">
            <FarmerMap farmers={FarmerData} />
          </div>
        </>
      )}
    </div>
  );
};

export default HomeCompany;
