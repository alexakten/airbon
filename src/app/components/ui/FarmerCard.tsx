"use client"

import Image from "next/image";
import { Farmer } from "../../../../types";

interface FarmerCardProps {
  farmer: Farmer;
  onSelectFarmer: (farmer: Farmer) => void; // Callback function to set the selected farmer
}

export default function FarmerCard({ farmer, onSelectFarmer }: FarmerCardProps) {
  return (
    <div className="group text-left cursor-pointer" onClick={() => onSelectFarmer(farmer)}>
      <div className="relative w-full overflow-hidden rounded-xl bg-gray-200 pt-[100%]">
        <Image
          src={farmer.image}
          alt={farmer.name}
          layout="fill"
          objectFit="cover"
          className="absolute left-0 top-0 h-full w-full rounded-t-lg"
        />
      </div>
      <div className="pt-2">
        <p className="font-medium">{farmer.name}</p>
        <p className="text-sm opacity-50">{farmer.location}</p>
        <p className="text-sm opacity-50">{farmer.size} hectares</p>
      </div>
    </div>
  );
}
