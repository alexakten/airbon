import { Inter } from "next/font/google";
import Link from "next/link";
import Image from "next/image";

type Farmer = {
  id: number;
  name: string;
  image: string;
  location: string;
  size: number;
  latitude: number;
  longitude: number;
  slug: string;
};

interface FarmerCardProps {
  farmer: Farmer; // Add this prop to your component
}

export default function FarmerCard({ farmer }: FarmerCardProps) {
  return (
    <Link href={`/community/farmers/${farmer.slug}`}>
      <div className="group text-left">
        <div className="relative w-full  overflow-hidden rounded-xl bg-gray-200 pt-[100%]">
          <Image
            src={farmer.image}
            alt={farmer.name}
            layout="fill"
            objectFit="cover"
            className="absolute left-0 top-0 h-full w-full rounded-t-lg"
          />
        </div>
        <div className="pt-4">
          <p className="font-semibold">{farmer.name}</p>
          <p className="text-sm opacity-50">{farmer.location}</p>
          <p className="text-sm opacity-50">{farmer.size} hectares </p>
        </div>
      </div>
    </Link>
  );
}
