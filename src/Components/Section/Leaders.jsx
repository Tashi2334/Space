import React from "react";
import Surface from "../../assets/Surface.jpg";
import CEO from "../../assets/CEO.png";
import CMR from "../../assets/CMR.png";

export default function Leaders() {
  return (
    <div className="relative w-full h-[120vh]">
      {/* Background image */}
      <img src={Surface} alt="Surface" className="w-full h-full object-cover" />

      {/* White overlay */}
      <div className="absolute inset-0 bg-white/20 z-10" />

      {/* Content */}
      <div className="absolute top-1/3 left-10 z-20 w-[90%]">
        {/* Tag */}
        <div className="bg-[#C68313]/40 text-[#C68313] text-2xl font-semibold h-[8vh] w-[14vw] px-4 rounded shadow-lg flex items-center">
          High Growth
        </div>

        {/* Heading and Boxes */}
        <div className="flex items-start mt-6 space-x-10">
          {/* Heading */}
          <h2 className="text-black text-5xl font-semibold whitespace-nowrap">
            Clients <span className="text-[#C68313]">Testimonials</span>
          </h2>

          {/* Testimonial Boxes */}
          <div className="flex space-x-6">
            {/* Box 1 */}
            <div className="border-black border-2 h-[40vh] w-[25vw] rounded-lg bg-black flex flex-col items-center justify-center p-4 text-white">
              <img
                src={CEO}
                alt="CEO"
                className="h-24 w-24 rounded-full object-cover mb-4"
              />
              <p className="text-center text-lg font-medium">
                “Working with Growth Space has transformed our brand!”
              </p>
              <span className="text-[#C68313] mt-2 font-semibold">
                CEO, Orbit Inc.
              </span>
            </div>

            {/* Box 2 */}
            <div className="border-black border-2 h-[40vh] w-[25vw] rounded-lg bg-black flex flex-col items-center justify-center p-4 text-white">
              <img
                src={CMR}
                alt="CMR"
                className="h-24 w-24 rounded-full object-cover mb-4"
              />
              <p className="text-center text-lg font-medium">
                “Their strategies gave our content unmatched reach.”
              </p>
              <span className="text-[#C68313] mt-2 font-semibold">
                CMO, Stellar Co.
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
