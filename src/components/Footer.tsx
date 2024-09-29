

// components/Footer.tsx
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-4">
      <div className="container mx-auto text-center">
        <p>© {new Date().getFullYear()} My Portfolio. All rights reserved.</p>
        <div>
          <p className="text-2xl">Thank You....</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
