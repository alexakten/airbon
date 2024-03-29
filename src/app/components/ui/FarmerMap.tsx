"use client";
import React from "react";
import dynamic from "next/dynamic";
import Link from "next/link";
import Image from "next/image";

const MapContainerNoSSR = dynamic(
  () => import("react-leaflet").then((mod) => mod.MapContainer),
  { ssr: false },
);
const TileLayerNoSSR = dynamic(
  () => import("react-leaflet").then((mod) => mod.TileLayer),
  { ssr: false },
);
const MarkerNoSSR = dynamic(
  () => import("react-leaflet").then((mod) => mod.Marker),
  { ssr: false },
);
const PopupNoSSR = dynamic(
  () => import("react-leaflet").then((mod) => mod.Popup),
  { ssr: false },
);

// Since L is not used server-side, it's safe to call it outside a useEffect or dynamic import
import L from "leaflet";
import "leaflet/dist/leaflet.css";

const defaultIcon = new L.Icon({
  iconUrl: '/icons/MapIcon.svg',
  iconRetinaUrl: '/icons/MapIcon.svg',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
});

// Set the custom default icon as the default icon for all Leaflet markers
L.Marker.prototype.options.icon = defaultIcon;

interface Farmer {
  id: number;
  name: string;
  latitude: number;
  longitude: number;
  image: string;
  location: string;
  size: number;
  slug: string;
}

interface FarmerMapProps {
  farmers: Farmer[];
}

const FarmerMap: React.FC<FarmerMapProps> = ({ farmers }) => {
  return (
    <MapContainerNoSSR
      center={[51.505, -0.09]}
      zoom={3}
      minZoom={2}
      scrollWheelZoom={false}
      style={{ height: "40rem", width: "100%", borderRadius: "1rem" }}
    >
      <TileLayerNoSSR url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      {farmers.map((farmer) => (
        <MarkerNoSSR
          key={farmer.id}
          position={[farmer.latitude, farmer.longitude]}
        >
          <PopupNoSSR>
            <div className="flex flex-col p-0">
              <div className="relative mt-2 h-36 w-56 overflow-hidden rounded-md bg-gray-200">
                <Image
                  className="object-cover"
                  src={farmer.image}
                  alt={farmer.name}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className="mt-3 flex items-end justify-between">
                <div className="">
                  <h3 className="font-semibold">{farmer.name}</h3>
                  <h5 className="mt-0.5 opacity-50">{farmer.location}</h5>
                  <h5 className="mt-0.5 opacity-50">{farmer.size} hectares</h5>
                </div>
                <div>
                  <Link href={`/community/farmers/${farmer.slug}`}>
                    <button className="rounded-md bg-darkgreen px-2 py-2 text-white hover:bg-deepgreen">
                      See farm
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </PopupNoSSR>
        </MarkerNoSSR>
      ))}
    </MapContainerNoSSR>
  );
};

export default FarmerMap;
