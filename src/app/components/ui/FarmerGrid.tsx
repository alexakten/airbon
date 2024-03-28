import FarmerCard from "./FarmerCard";
import FarmerData from "../../FarmerData"; // Adjust this path as needed

interface FarmerGridProps {
  cards: number;
  currentFarmerID?: number; // This prop is optional to filter out the current farmer if needed
}

const FarmerGrid: React.FC<FarmerGridProps> = ({ cards, currentFarmerID }) => {
  const farmersToShow = FarmerData.filter(
    (farmer) => !currentFarmerID || farmer.id !== currentFarmerID,
  );

  return (
    <div
      className={`grid w-full grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4`}
    >
      {farmersToShow.slice(0, cards).map((farmer) => (
        <FarmerCard key={farmer.id} farmer={farmer} />
      ))}
    </div>
  );
};

export default FarmerGrid;
