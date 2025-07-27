import React from 'react';

function Footer() {
  return (
    <footer className="p-6 bg-white text-[#C68313]">
      <div className="flex flex-wrap justify-between gap-12">
        {/* Left Column */}
        <div className="space-y-6 max-w-sm text-black">
          <div>
            <h2 className="text-4xl font-bold">
              Growth <span className="text-[#C68313]">Space</span>
            </h2>
            <p className="text-xl font-medium mt-2">Where growth begins...</p>
          </div>

          <div>
            <h3 className="text-2xl font-semibold">Address</h3>
            <p className="text-lg font-medium mt-1">
              4665 Benson Park Drive<br />
              Oklahoma, USA
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-semibold">Contact Details</h3>
            <p className="text-lg font-medium mt-1">
              402-345-5637<br />
              403-435-5763<br />
              <span className="text-gray-500 font-normal">growthspace@support.com</span>
            </p>
          </div>
        </div>

        {/* Services, Products, Legal */}
        <div className="flex flex-wrap gap-16">
          {/* Services */}
          <div>
            <h3 className="text-2xl font-semibold mb-2">Services</h3>
            <ul className="space-y-2 text-lg font-medium">
              <li>SEO</li>
              <li>Content Marketing</li>
              <li>Email Marketing</li>
              <li>Brand Developing</li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-2xl font-semibold mb-2">Products</h3>
            <ul className="space-y-2 text-lg font-medium">
              <li>SEO Optimize</li>
              <li>Content Reach Check</li>
              <li>Brand Identity Builder</li>
              <li>Emails/Ads Marketing</li>
              <li>Contact with influencers</li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-2xl font-semibold mb-2">Legal</h3>
            <ul className="space-y-2 text-lg font-medium">
              <li>Contact</li>
              <li>Privacy Policy</li>
              <li>Terms and Conditions</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Social Icons and Terms */}
      <div className="flex flex-wrap justify-between items-center mt-12">
        {/* Social Icons */}
        <div className="flex gap-4">
          {/* Twitter */}
          <svg xmlns="http://www.w3.org/2000/svg" width={40} height={40} fill="#C68313" viewBox="0 0 24 24">
            <path d="M22.46 6c-.77.40-1.6.58-2.46.69c.88-.53 1.56-1.37 1.88-2.38c-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.40 0-4.27 1.92-4.27 4.29c0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15c0 1.49.75 2.81 1.91 3.56c-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.2 4.2 0 0 1-1.93.07a4.28 4.28 0 0 0 4 2.98a8.52 8.52 0 0 1-5.33 1.84q-.51 0-1.02-.06C3.44 20.29 5.7 21 8.12 21C16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56c.84-.6 1.56-1.36 2.14-2.23" />
          </svg>

          {/* Facebook */}
          <svg xmlns="http://www.w3.org/2000/svg" width={40} height={40} fill="#C68313" viewBox="0 0 24 24">
            <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95" />
          </svg>

          {/* Instagram */}
          <svg xmlns="http://www.w3.org/2000/svg" width={40} height={40} fill="#C68313" viewBox="0 0 24 24">
            <path d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4zm9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8A1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5a5 5 0 0 1-5 5a5 5 0 0 1-5-5a5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3" />
          </svg>

          {/* WhatsApp */}
          <svg xmlns="http://www.w3.org/2000/svg" width={40} height={40} fill="#C68313" viewBox="0 0 24 24">
            <path d="M19.05 4.91A9.82 9.82 0 0 0 12.04 2c-5.46 0-9.91 4.45-9.91 9.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21c5.46 0 9.91-4.45 9.91-9.91c0-2.65-1.03-5.14-2.9-7.01z" />
          </svg>

          {/* LinkedIn */}
          <svg xmlns="http://www.w3.org/2000/svg" width={40} height={40} fill="#C68313" viewBox="0 0 24 24">
            <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zm-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93zM6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37z" />
          </svg>
        </div>

        {/* Terms */}
        <div className="mt-6 mr-10 text-lg">Terms</div>
      </div>
    </footer>
  );
}

export default Footer;