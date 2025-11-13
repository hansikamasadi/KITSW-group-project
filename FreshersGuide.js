import React from 'react';

function FreshersGuide() {
  return (
    <div className="container mx-auto p-8">
      <h2 className="text-3xl font-bold mb-6">Freshers Guide</h2>
      <div className="space-y-4">
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
          <h3 className="text-xl font-semibold mb-2">Tips for Newcomers</h3>
          <ul className="list-disc list-inside">
            <li>Reach departments via the main gate entrance.</li>
            <li>Office timings: 9 AM - 5 PM, Monday to Friday.</li>
            <li>Emergency contact: Security Office - 123-456-7890</li>
          </ul>
        </div>
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
          <h3 className="text-xl font-semibold mb-2">Important Links</h3>
          <ul className="list-disc list-inside">
            <li><a href="https://kitsw.ac.in" className="text-blue-500">College Website</a></li>
            <li><a href="#" className="text-blue-500">Academic Calendar</a></li>
            <li>Contact Info: admissions@kitsw.ac.in</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default FreshersGuide;