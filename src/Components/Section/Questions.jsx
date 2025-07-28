import React from "react";

export default function Questions() {
  return (
    <div className="bg-white px-10 py-16 text-black">
      {/* FAQ Title */}
      <div className="text-4xl font-bold text-[#C68313] font-sans mb-2">
        FAQ
      </div>
      <br></br>
      <div className="text-4xl font-semibold mb-4">
        Frequently<span className="text-[#C68313]">Asked</span> Questions
      </div>

      {/* Description */}
      <div className="text-lg text-black mb-6 leading-relaxed">
        Lorem ipsum dolor sit amet, adipiscing elit, sed do eiusmod Lorem ipsum
        <br></br>
        dolor sit amet, adipiscing elit, sed do eiusmod Lorem ipsum dolor sit
        <br></br>
        amet, adipiscing elit, sed do eiusmod
      </div>
      <br></br>

      {/* CTA Button */}
      <button className="flex items-center gap-2 bg-[#C68313] hover:bg-[#b3730f] text-white font-semibold px-6 py-3 rounded-lg transition duration-200">
        <span>Contact Us</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={20}
          height={20}
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M13.47 5.47a.75.75 0 0 1 1.06 0l6 6a.75.75 0 0 1 0 1.06l-6 6a.75.75 0 1 1-1.06-1.06l4.72-4.72H4a.75.75 0 0 1 0-1.5h14.19l-4.72-4.72a.75.75 0 0 1 0-1.06"
          />
        </svg>
      </button>
    </div>
  );
}
