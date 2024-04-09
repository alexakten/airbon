import { Farmer } from "../../../../types"; // Adjust the import path as necessary
import Image from "next/image";
import dynamic from "next/dynamic";

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

  return (
    <div>
      <button onClick={onDeselectFarmer} className="font-medium">
        {" "}
        &lt;- Back
      </button>

      <Image
        src={farmer.image}
        alt={farmer.name}
        width={500}
        height={300}
        layout="responsive"
        className="mt-8 rounded-xl"
      />
      <h1 className="mt-4 text-2xl font-medium tracking-tight">
        {farmer.name}
      </h1>
      <p>{farmer.location}</p>
      <p>{farmer.size} hectares</p>

      <div className="mt-16">
        <FarmerMap farmers={[farmer]} />
      </div>

      <div className="mt-16">
        <h1 className="mt-4 text-2xl font-medium tracking-tight">
          {farmer.name}
        </h1>
      </div>
    </div>
  );
};

export default FarmerProfile;
