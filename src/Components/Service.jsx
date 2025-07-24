import React from 'react';
import image35 from '../assets/image35.png';
import Idea from '../assets/Idea.png';
import Search from '../assets/Search.png';
import Audience from '../assets/Audience.png';
import Brand from '../assets/Brand.png';

const services = [
  { icon: Idea, title: 'Idea', highlight: 'Creation' },
  { icon: Search, title: 'Market', highlight: 'Analysis' },
  { icon: Audience, title: 'Audience', highlight: 'Identify' },
  { icon: Brand, title: 'Brand', highlight: 'Identity' },
];

function Service() {
  return (
    <div className="flex flex-col lg:flex-row p-8 gap-10">
      {/* Left Image Section */}
      <div className="flex-shrink-0">
        <img src={image35} alt="Main" className="w-full h-auto max-w object-cover" />
      </div>

      {/* Right Content */}
      <div className="flex flex-col ml-18 justify-start gap-5">
        <div className="bg-[#f5e2c3] text-[#C68313] text-2xl font-semibold px-6 py-2 rounded w-fit">
          High Growth
        </div>

        <div className="text-4xl text-black font-normal">
          We extend our <span className="text-[#C68313]">services</span>
        </div>

        <div className="text-5xl font-semibold">
          to the <span className="text-[#C68313]">Wide</span> variety
        </div>

        <p className="text-lg text-gray-700 leading-relaxed">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit,<br />
          sed tempor incididunt ut labore et dolore magna aliqua.
        </p>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-6  font-semibold">
          {services.map((service, index) => (
            <div
              key={index}
              className="border-2 border-[#C68313] rounded-lg bg-white p-5 h-[27vh] flex flex-col items-center justify-center text-2xl shadow-sm"
            >
              <img src={service.icon} alt={service.title} className="h-16 mb-4" />
              <div className="text-center">
                {service.title} <span className="text-[#C68313]">{service.highlight}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Service;