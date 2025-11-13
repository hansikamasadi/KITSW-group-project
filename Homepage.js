import React from 'react';

function Homepage({ setView }) {
  return (
    <div className="container mx-auto p-8">
      <section className="hero bg-blue-500 text-white p-12 rounded-lg mb-8">
        <h2 className="text-4xl font-bold mb-4">Welcome to KITSW Navigation App</h2>
        <p className="text-lg mb-6">Explore and navigate the Kakatiya Institute of Technology & Science, Warangal campus with ease. Find departments, hostels, and more!</p>
        <button onClick={() => setView('map')} className="bg-white text-blue-500 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100">Start Exploring</button>
      </section>
      
      <section className="quick-links grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
        <button onClick={() => setView('map')} className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow hover:shadow-lg">
          <div className="text-2xl mb-2">🏫</div>
          <h3 className="font-semibold">Departments</h3>
        </button>
        <button onClick={() => setView('map')} className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow hover:shadow-lg">
          <div className="text-2xl mb-2">🏠</div>
          <h3 className="font-semibold">Hostels</h3>
        </button>
        <button onClick={() => setView('map')} className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow hover:shadow-lg">
          <div className="text-2xl mb-2">🍽️</div>
          <h3 className="font-semibold">Canteens</h3>
        </button>
        <button onClick={() => setView('map')} className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow hover:shadow-lg">
          <div className="text-2xl mb-2">📚</div>
          <h3 className="font-semibold">Library</h3>
        </button>
        <button onClick={() => setView('map')} className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow hover:shadow-lg">
          <div className="text-2xl mb-2">🏢</div>
          <h3 className="font-semibold">Campus Offices</h3>
        </button>
      </section>
    </div>
  );
}

export default Homepage;