
import React from 'react'
import Space from '../assets/Space.png';
export default function Info() {
  return (
    <div className='flex flex-row'>
      <div className="flex justify-between items-start px-16 py-10">
      
      {/* Left Content */}
      <div className="flex flex-col mt-30 space- max-w-xl">
        
        {/* "High Growth" with logo on right */}
        <div className="flex items-center justify-between bg-[#f5e2c3] text-[#C68313] text-2xl font-semibold h-[8vh] w-[11vw] px-4 rounded">
          <span>Our Reach</span>
          
        </div>

        <div className="text-4xl font-semibold ">
          We are <span className="text-[#C68313]">present</span> 
        </div>
        <div className="text-6xl font-semibold  leading-tight">
          all over the 
        </div>
         <div className="text-8xl font-semibold text-[#d38600] leading-tight">
        World
        </div>
        <div className="text-lg leading-relaxed text-gray-700 ">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua.
        </div>
      
      </div>
      </div>
            <div >
              <img src={Space} alt="Description" className="w-max h-max object-cover mt-20" />
            </div>
    </div>
  )
}




