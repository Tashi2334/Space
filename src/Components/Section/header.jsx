// src/Components/Header.tsx
import React from "react";
import MoonImage from "/src/assets/Moon.png"; 

const Header = () => {
  return (
    <div
      className="w-full h-[100vh] bg-cover bg-center flex flex-col justify-center items-center text-white"
      style={{
        backgroundImage: `url(${MoonImage})`,
      }}
    >
      <h2 className="text-4xl font-bold mt-10 mb-4">Services</h2>
      <p className="max-w-xl text-center  mt-5 text-sm md:text-base px-4 mb-6">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut enim ad minim veniam, quis nostrud exercitation.
      </p>
    </div>
  );
};

export default Header;
