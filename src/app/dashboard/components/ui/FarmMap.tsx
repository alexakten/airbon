import React, { useEffect, useRef, useState } from 'react';
import L from 'leaflet';
import 'leaflet-draw';
import 'leaflet/dist/leaflet.css';
import 'leaflet-draw/dist/leaflet.draw.css';

type Position = [number, number];
type GeoJSONFeatureCollection = GeoJSON.FeatureCollection<GeoJSON.Geometry>;

const defaultPosition: Position = [51.505, -0.09]; // London's coordinates as fallback
const defaultZoom = 13;

const FarmMap: React.FC = () => {
  const mapContainerRef = useRef<HTMLDivElement | null>(null);
  const mapInstanceRef = useRef<L.Map | null>(null);
  const drawnItemsRef = useRef<L.FeatureGroup>(new L.FeatureGroup());
  const [mapCenter, setMapCenter] = useState<Position>(() => {
    const savedPosition = localStorage.getItem('mapCenter');
    return savedPosition ? JSON.parse(savedPosition) as Position : defaultPosition;
  });
  const [mapZoom, setMapZoom] = useState<number>(() => {
    const savedZoom = localStorage.getItem('mapZoom');
    return savedZoom ? Number(savedZoom) : defaultZoom;
  });

  // Load the drawn items from local storage
  useEffect(() => {
    const savedDrawnItems = localStorage.getItem('drawnItems');
    if (savedDrawnItems) {
      const geoJson: GeoJSONFeatureCollection = JSON.parse(savedDrawnItems);
      const layers = L.geoJSON(geoJson);
      layers.eachLayer(layer => {
        drawnItemsRef.current.addLayer(layer);
        // If you have specific interactions with each layer, set them up here
        layer.bindPopup('Information about this land').openPopup();
      });
    }
  }, []);

  useEffect(() => {
    if (mapContainerRef.current && !mapInstanceRef.current) {
      const map = L.map(mapContainerRef.current).setView(mapCenter, mapZoom);

      L.tileLayer('http://{s}.google.com/vt/lyrs=s&x={x}&y={y}&z={z}', {
        maxZoom: 20,
        subdomains: ['mt0', 'mt1', 'mt2', 'mt3'],
        attribution: '&copy; Google',
      }).addTo(map);

      map.addLayer(drawnItemsRef.current);

      const drawControl = new L.Control.Draw({
        edit: {
          featureGroup: drawnItemsRef.current,
        },
        draw: {
          polygon: {
            shapeOptions: {
              color: '#4285f4',
              weight: 4,
              fillColor: '#4285f4',
              fillOpacity: 0.5,
            },
          },
          polyline: false,
          marker: false,
          rectangle: false,
          circlemarker: false,
          circle: false,
        },
      });

      map.addControl(drawControl);

      map.on(L.Draw.Event.CREATED, (event) => {
        const layer = event.layer as L.Polygon;
        drawnItemsRef.current.addLayer(layer);
        layer.bindPopup('Information about this land').openPopup();

        // Save the new set of drawn items
        const geoJson = drawnItemsRef.current.toGeoJSON() as GeoJSONFeatureCollection;
        localStorage.setItem('drawnItems', JSON.stringify(geoJson));
      });

      map.on('moveend', () => {
        if (!mapInstanceRef.current) return;
        const center = mapInstanceRef.current.getCenter();
        const zoom = mapInstanceRef.current.getZoom();
        setMapCenter([center.lat, center.lng]);
        setMapZoom(zoom);

        localStorage.setItem('mapCenter', JSON.stringify([center.lat, center.lng]));
        localStorage.setItem('mapZoom', zoom.toString());
      });

      mapInstanceRef.current = map;
    }

    return () => {
      if (mapInstanceRef.current) {
        mapInstanceRef.current.off();
        mapInstanceRef.current.remove();
        mapInstanceRef.current = null;
      }
    };
  }, [mapCenter, mapZoom]);

  return <div ref={mapContainerRef} className="h-full w-full rounded-xl"></div>;
};

export default FarmMap;
