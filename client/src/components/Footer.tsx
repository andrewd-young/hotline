import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white text-gray-800 py-6">
      <div className="max-w-[1400px] mx-auto px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h4 className="text-lg font-semibold">HOTLINE</h4>
            <p className="text-sm">The ultimate celebration of art and girlhood</p>
          </div>
          <div className="flex space-x-4">
            <a href="/about" className="text-sm hover:underline">About Us</a>
            <a href="/contact" className="text-sm hover:underline">Contact</a>
            <a href="/privacy" className="text-sm hover:underline">Privacy Policy</a>
            <a href="/terms" className="text-sm hover:underline">Terms of Service</a>
          </div>
        </div>
        <div className="text-center mt-4">
          <p className="text-sm">&copy; {new Date().getFullYear()} HOTLINE. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 