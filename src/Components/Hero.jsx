import React from 'react'
import logo from '../assets/Logo.png';
import Frame335 from '../assets/Frame335.png';
export default function Hero() {
  return (
    <div className='flex justify-between'>

        
  <div className='flex flex-row '> 
            <h2 className='text-[#C68313] text-4xl h-[12vh] w-[20vw]  ml-40 mb-60 flex mt-35 bg-[#f5e2c3] justify-center items-center font-semibold'>High Growth<img src={logo} alt="Logo" className="h-12 w-auto" />
</h2>
            <div>
                
            </div>      
        </div>  
            <div>
      <img src={""} alt="Description" className="w-[40vw]  h-[80vh]" />
      </div>

    </div>
    
  );
};
