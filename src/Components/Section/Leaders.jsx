import React from "react";
import Surface from "../../assets/Surface.jpg";

export default function Leaders() {
  return (
    <div className="relative w-full h-[120vh]">
      {/* Background image */}
      <img src={Surface} alt="Surface" className="w-full h-full object-cover" />

      {/* White overlay */}
      <div className="absolute inset-0 bg-white/20 z-10" />
      <div className="">
        {/* Overlayed tag */}
        <div className="absolute top-1/3 left-10 z-20 bg-[#C68313]/40 text-[#C68313] text-2xl font-semibold h-[8vh] w-[14vw] px-4 rounded shadow-lg flex items-center">
          <span>High Growth</span>
        </div>

        {/* Title section */}
        <div className="absolute bottom-10 mb-80 left-10 z-20 text-black text-5xl font-semibold">
          Clients <span className="text-[#C68313]">Testimonials</span>
        </div>
      </div>
      <div className="border-black h-[40vh] w-[50vw]">

      </div>
    </div>
  );
}
