import { Farmer } from "../../../../types"; // Adjust the import path as necessary
import Image from "next/image";

interface FarmerProfileProps {
  farmer: Farmer;
  onDeselectFarmer: () => void; // Callback to deselect the farmer
}

const FarmerProfile: React.FC<FarmerProfileProps> = ({ farmer, onDeselectFarmer }) => {
  if (!farmer) return null;

  return (
    <div>
      <button onClick={onDeselectFarmer} className="font-medium"> &lt;- Back</button>

      <Image
        src={farmer.image}
        alt={farmer.name}
        width={500}
        height={300}
        layout="responsive"
        className="mt-8 rounded-xl"
      />
      <h1 className="mt-4 tracking-tight font-medium">{farmer.name}</h1>
      <p>{farmer.location}</p>
      <p>{farmer.size} hectares</p>
      {/* Add more details as needed */}
    </div>
  );
};

export default FarmerProfile;
