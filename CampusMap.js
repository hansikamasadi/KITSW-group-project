import React, { useEffect, useRef } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import locations from '../data/locations.json';

function CampusMap() {
  const mapRef = useRef(null);
  const mapInstance = useRef(null);

  useEffect(() => {
    if (!mapInstance.current) {
      mapInstance.current = L.map(mapRef.current).setView([17.9784, 79.5941], 16); // Approximate KITSW coordinates

      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors'
      }).addTo(mapInstance.current);

      locations.forEach(location => {
        const marker = L.marker([location.lat, location.lng]).addTo(mapInstance.current);
        marker.bindPopup(`
          <div>
            <h3>${location.name}</h3>
            <p>${location.description}</p>
            ${location.photo ? `<img src="${location.photo}" alt="${location.name}" class="w-full h-32 object-cover mb-2">` : ''}
            <button class="bg-blue-500 text-white px-4 py-2 rounded" onclick="getDirections(${location.lat}, ${location.lng})">Get Directions</button>
          </div>
        `);
      });
    }

    return () => {
      if (mapInstance.current) {
        mapInstance.current.remove();
        mapInstance.current = null;
      }
    };
  }, []);

  const getDirections = (lat, lng) => {
    // Implement routing logic here using Leaflet Routing Machine
    alert(`Directions to ${lat}, ${lng}`);
  };

  return (
    <div className="container mx-auto p-8">
      <h2 className="text-3xl font-bold mb-6">Interactive Campus Map</h2>
      <div ref={mapRef} className="w-full h-96 rounded-lg shadow-lg"></div>
      <button className="fixed bottom-4 right-4 bg-blue-500 text-white p-4 rounded-full shadow-lg hover:bg-blue-600">
        📍 Locate Me
      </button>
    </div>
  );
}

export default CampusMap;