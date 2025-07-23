import React from 'react';
import logo from '../assets/Frame335.png';
import Logo from '../assets/Logo.png';
import image34 from '../assets/image34.png';

export default function Hero() {
  return (
    <div className="flex justify-between items-start px-16 py-10">
      
      {/* Left Content */}
      <div className="flex flex-col mt-30 space- max-w-xl">
        
        {/* "High Growth" with logo on right */}
        <div className="flex items-center justify-between bg-[#f5e2c3] text-[#C68313] text-2xl font-semibold h-[8vh] w-[17vw] px-4 rounded">
          <span>High Growth</span>
          <img src={logo} alt="Logo" className="h-10 w-10" />
        </div>

        <div className="text-4xl font-semibold ">
          we <span className="text-[#C68313]">simplify</span> growth
        </div>
        <div className="text-6xl font-semibold  leading-tight">
          in <span className="text-[#C68313]">Growth</span>Space
        </div>

        <div className="text-lg leading-relaxed text-gray-700 mt-10">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          
          tempor incididunt ut labore et dolore magna aliqua.
        </div>
       <div className='flex flex-row mt-15  gap-10 '>
        <div className="border bg-[#C68313] h-[8vh] w-[10vw] rounded-lg text-white text-xl flex justify-center items-center font-semibold cursor-pointer hover:bg-[rgb(241,185,94)] transition">
          Get Started
        </div>
        <div className="border border-[#C68313] bg-white h-[8vh] w-[10vw] rounded-lg text-[#C68313] text-xl flex justify-center items-center font-semibold cursor-pointer hover:bg-[#ffd283b4] transition">
          Services
        </div>
        
        </div>
      </div>

      {/* Right Image */}
      <div>
        <img src={image34} alt="Description" className="w-[60vw] h-[90vh] object-cover" />
      </div>
    </div>
  );
}