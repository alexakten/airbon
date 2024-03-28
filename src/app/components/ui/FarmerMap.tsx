"use client";
import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import Image from "next/image";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

const defaultIcon = L.icon({
  iconUrl: "/icons/MapIcon.svg",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  tooltipAnchor: [16, -28],
  shadowSize: [41, 41],
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
}

interface FarmerMapProps {
  farmers: Farmer[];
}

const FarmerMap: React.FC<FarmerMapProps> = ({ farmers }) => {
  return (
    <MapContainer
      center={[51.505, -0.09]}
      zoom={3}
      style={{ height: "40rem", width: "100%", borderRadius: "1rem" }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      {farmers.map((farmer) => (
        <Marker key={farmer.id} position={[farmer.latitude, farmer.longitude]}>
          <Popup>
            <div className="flex flex-col">
              <h3 className="font-medium">{farmer.name}</h3>
              <div className="relative mt-2 h-36 w-56 overflow-hidden rounded-md bg-gray-200">
                <Image
                  className="object-cover"
                  src={farmer.image}
                  alt={farmer.name}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <p>{farmer.location}</p>
              <p>{farmer.size} hectares</p>
            </div>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default FarmerMap;
