import React from 'react';

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-4 mt-8">
      <div className="container mx-auto flex flex-col items-center text-center">
        <p className="mb-2 text-sm">© {year} User Management App. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;