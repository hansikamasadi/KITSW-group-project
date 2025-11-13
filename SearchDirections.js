import React, { useState } from 'react';

function SearchDirections() {
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');
  const [route, setRoute] = useState(null);

  const handleSearch = () => {
    // Simulate route calculation
    setRoute({ distance: '0.5 km', time: '10 minutes' });
  };

  return (
    <div className="container mx-auto p-8">
      <h2 className="text-3xl font-bold mb-6">Search & Directions</h2>
      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
        <input
          type="text"
          placeholder="Search location..."
          className="w-full p-3 mb-4 border rounded"
        />
        <div className="flex space-x-4 mb-4">
          <input
            type="text"
            placeholder="From"
            value={from}
            onChange={(e) => setFrom(e.target.value)}
            className="flex-1 p-3 border rounded"
          />
          <input
            type="text"
            placeholder="To"
            value={to}
            onChange={(e) => setTo(e.target.value)}
            className="flex-1 p-3 border rounded"
          />
        </div>
        <button onClick={handleSearch} className="bg-blue-500 text-white px-6 py-3 rounded hover:bg-blue-600">
          Get Directions
        </button>
        {route && (
          <div className="mt-4 p-4 bg-gray-100 dark:bg-gray-700 rounded">
            <p>Distance: {route.distance}</p>
            <p>Estimated Time: {route.time}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default SearchDirections;