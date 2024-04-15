import { Farmer } from "../../../../types"; // Adjust the import path as necessary
import Image from "next/image";
import dynamic from "next/dynamic";
import StatsCard from "./StatsCard";
import BarChart from "./ui/BarChart";
import CircleDiagram from "./ui/CircleDiagram";

const FarmMap = dynamic(() => import('./ui/FarmMap'), {
  ssr: false, // Disable server-side rendering if necessary
  loading: () => <p>Loading map...</p>, // Optional loading component
});


const FarmerMap = dynamic(() => import("../../components/ui/FarmerMap"), {
  ssr: false, // Disable server-side rendering if necessary
  loading: () => <p>Loading map...</p>, // Optional loading component
});

interface FarmerProfileProps {
  farmer: Farmer;
  onDeselectFarmer: () => void; // Callback to deselect the farmer
}

const FarmerProfile: React.FC<FarmerProfileProps> = ({
  farmer,
  onDeselectFarmer,
}) => {
  if (!farmer) return null;

  const regenerativePercentage = parseFloat(((farmer.regenerative / farmer.size) * 100).toFixed(2));


  return (
    <div>
      <button onClick={onDeselectFarmer} className="font-medium">
        {" "}
        &lt;- Back
      </button>
      <div className="grid mt-8 gap-4 grid-cols-2">
        <Image
          src={farmer.image}
          alt={farmer.name}
          width={500}
          height={300}
          layout="responsive"
          className="rounded-xl"
        />
        <FarmerMap farmers={[farmer]} />
      </div>
      <h1 className="mt-4 text-2xl font-medium tracking-tight">
        {farmer.name}
      </h1>
      <p>{farmer.location}</p>
      <p>{farmer.size} hectares</p>

      <div className="mt-16 grid gap-4 grid-cols-2">
        <StatsCard
          tagText="Land Distribution"
          title={`Total Land: ${farmer.size} Ha`}>
          <BarChart totalHectares={farmer.size} regenerativeHectares={farmer.regenerative} />
        </StatsCard>
        <StatsCard tagText="Regenerative Land Percentage" title={`${regenerativePercentage}% regenerative`}>
          <CircleDiagram percentage={regenerativePercentage} />
        </StatsCard>
      </div>

      <div className="h-[600px] w-full mt-16">
        <FarmMap />

      </div>
    </div>
  );
};

export default FarmerProfile;
