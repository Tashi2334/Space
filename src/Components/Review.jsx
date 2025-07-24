import React, { useRef, useState } from "react";
import uppercase from "../assets/uppercase.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


export default function Review() {
  const scrollRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const cardsCount = 5;
  const cardWidth = 300 + 24; // card width + gap

  const scrollToIndex = (index) => {
    if (scrollRef.current) {
      scrollRef.current.scrollTo({
        left: index * cardWidth,
        behavior: "smooth",
      });
    }
  };

  const onScroll = () => {
    if (scrollRef.current) {
      const scrollLeft = scrollRef.current.scrollLeft;
      const index = Math.round(scrollLeft / cardWidth);
      setActiveIndex(index);
    }
  };

  return (
    <section className="relative px-4 py-16">
      {/* Badge */}
      <div className="flex justify-center mb-6">
        <div className="bg-[#f5e2c3] text-[#C68313] text-2xl font-semibold h-[8vh] min-w-[150px] flex items-center justify-center rounded px-6">
          Our Reach
        </div>
      </div>

      {/* Heading */}
      <h2 className="text-5xl sm:text-6xl lg:text-7xl font-semibold text-center leading-tight">
        What <span className="text-[#C68313]">people</span> say about us!
      </h2>

      {/* Subheading */}
      <div className="text-center mt-5 text-lg text-gray-700 max-w-4xl mx-auto">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut.
      </div>

      {/* Cards */}
      <div
        ref={scrollRef}
        onScroll={onScroll}
        className="flex overflow-x-auto gap-6 mt-10 px-4 snap-x scroll-smooth hide-scrollbar"
        style={{ scrollSnapType: "x mandatory" }}
      >
        {[...Array(cardsCount)].map((_, index) => (
          <div
            key={index}
            className="border-2 border-[#C68313] max-w-[300px] flex-shrink-0 h-[40vh] p-6 rounded-lg flex flex-col items-center text-center text-xl snap-start bg-white"
          >
            <img src={uppercase} alt="User" className="w-16 h-16 mb-4" />
            <p>
              Lorem ipsum dolor sit amet,
              <br />
              elit, sed do eiusmod tempor incididunt ut labore et dolore adipiscing aliqua.
            </p>
          </div>
        ))}
      </div>

      {/* Dots */}
      <div className="flex justify-center mt-6 space-x-3">
        {[...Array(cardsCount)].map((_, index) => (
          <button
            key={index}
            onClick={() => scrollToIndex(index)}
            className={`w-4 h-4 rounded-full transition-colors ${
              activeIndex === index
                ? "bg-[#C68313]"
                : "bg-gray-300 hover:bg-[#C68313]/70"
            }`}
            aria-label={`Scroll to review ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}