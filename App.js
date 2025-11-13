import React, { useState } from 'react';
import Homepage from './components/Homepage';
import CampusMap from './components/CampusMap';
import SearchDirections from './components/SearchDirections';
import FreshersGuide from './components/FreshersGuide';
import Footer from './components/Footer';

function App() {
  const [currentView, setCurrentView] = useState('home');
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => setDarkMode(!darkMode);

  return (
    <div className={darkMode ? 'dark' : ''}>
      <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
        <nav className="bg-blue-600 dark:bg-blue-800 p-4">
          <div className="container mx-auto flex justify-between items-center">
            <h1 className="text-white text-xl font-bold">KITSW Navigation</h1>
            <div className="flex items-center space-x-4">
              <button onClick={() => setCurrentView('home')} className="text-white hover:underline">Home</button>
              <button onClick={() => setCurrentView('map')} className="text-white hover:underline">Map</button>
              <button onClick={() => setCurrentView('search')} className="text-white hover:underline">Search</button>
              <button onClick={() => setCurrentView('guide')} className="text-white hover:underline">Guide</button>
              <button onClick={toggleDarkMode} className="text-white">
                {darkMode ? 'Light' : 'Dark'} Mode
              </button>
            </div>
          </div>
        </nav>
        
        {currentView === 'home' && <Homepage setView={setCurrentView} />}
        {currentView === 'map' && <CampusMap />}
        {currentView === 'search' && <SearchDirections />}
        {currentView === 'guide' && <FreshersGuide />}
        
        <Footer />
      </div>
    </div>
  );
}

export default App;