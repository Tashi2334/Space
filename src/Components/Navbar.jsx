 import React from 'react';
import logo from '../assets/Frame335.png'; // adjust path if needed

const Navbar = () => {
  return (
    <nav className="w-full bg-white shadow-md">
      <div className="max-w-7xl mx-auto justify-between px-6 flex flex-row py-4">
        
        {/* Left: Logo */}
        <div className="flex items-center">
          <img src={logo} alt="Logo" className="h-10 w-auto " />
        </div>

        {/* Center: Links */}
        <div className="hidden md:flex space-x-8">
         <a  href="#" className="text-[#C68313]  font-medium">Home</a>
          <a href="/Services" className="text-gray-700 hover:text-[#C68313] font-medium">Services</a>
          <a href="#" className="text-gray-700 hover:text-[#C68313] font-medium">About</a>
          <a href="#" className="text-gray-700 hover:text-[#C68313] font-medium">Contact</a>
        </div>

        {/* Right: Button */}
        <div>
          <button className="bg-[#C68313] hover:bg-[#c68413b2] flex justify-end items-end  text-white px-4 py-2 rounded-lg">
           Register
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;