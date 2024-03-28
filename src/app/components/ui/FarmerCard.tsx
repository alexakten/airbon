import { Inter } from "next/font/google";
import Link from "next/link";
import Image from "next/image";

const inter = Inter({ subsets: ["latin"] });

// Define the Practice type
type Farmer = {
  FarmerID: string;
  FarmerName: string;
  FarmerImage: string;
  FarmerLocation: string;
  FarmerSize: number;

  slug: string;
};

interface FarmerCardProps {
  farmer: Farmer; // Add this prop to your component
}

export default function FarmerCard({ farmer }: FarmerCardProps) {
  return (
    <Link href={`/farmers/${farmer.slug}`}>
      <div className="group text-left">
        <div className="relative w-full  overflow-hidden rounded-xl bg-gray-200 pt-[100%]">
          <Image
            src={farmer.FarmerImage}
            alt={farmer.FarmerName}
            layout="fill"
            objectFit="cover"
            className="absolute left-0 top-0 h-full w-full rounded-t-lg"
          />
        </div>
        <div className="pt-4">
          <p className="font-semibold">{farmer.FarmerName}</p>
          <p className="text-sm opacity-50">{farmer.FarmerLocation}</p>
          <p className="text-sm opacity-50">{farmer.FarmerSize} hectares </p>
        </div>
      </div>
    </Link>
  );
}
