import React from 'react';

function Footer() {
  return (
    <footer className="bg-gray-800 text-white p-8 mt-8">
      <div className="container mx-auto text-center">
        <p>&copy; 2023 KITSW Navigation App. Built with ❤️ for freshers.</p>
        <div className="mt-4 space-x-4">
          <a href="#" className="hover:underline">Contact Us</a>
          <a href="#" className="hover:underline">Facebook</a>
          <a href="#" className="hover:underline">Twitter</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;