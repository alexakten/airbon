// FarmerGrid.tsx
import FarmerCard from "./FarmerCard";
import FarmerData from "../../FarmerData"; // Adjust this path as needed

interface FarmerGridProps {
  cards: number;
  onSelectFarmer: (farmer: any) => void; // Add the callback function prop
  currentFarmerID?: number;
}

const FarmerGrid: React.FC<FarmerGridProps> = ({ cards, onSelectFarmer, currentFarmerID }) => {
  const farmersToShow = FarmerData.filter(
    (farmer) => !currentFarmerID || farmer.id !== currentFarmerID,
  );

  return (
    <div className={`grid w-full grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4`}>
      {farmersToShow.slice(0, cards).map((farmer) => (
        <FarmerCard key={farmer.id} farmer={farmer} onSelectFarmer={onSelectFarmer} />
      ))}
    </div>
  );
};

export default FarmerGrid;
