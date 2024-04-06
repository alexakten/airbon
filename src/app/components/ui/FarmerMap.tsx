"use client";
import React, { useState, useEffect } from "react";
import dynamic from 'next/dynamic';

import Link from "next/link";
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
  slug: string;
}

interface FarmerMapProps {
  farmers: Farmer[];
}

const FarmerMap: React.FC<FarmerMapProps> = ({ farmers }) => {
  return (
    <MapContainer
      center={[51.505, -0.09]}
      zoom={3}
      minZoom={2}
      scrollWheelZoom={false}
      style={{ height: "40rem", width: "100%", borderRadius: "0.75rem" }}
    >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      {farmers.map((farmer) => (
        <Marker key={farmer.id} position={[farmer.latitude, farmer.longitude]}>
          <Popup>
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
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default FarmerMap;
