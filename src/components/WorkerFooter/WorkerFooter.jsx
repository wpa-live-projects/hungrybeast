// import React from 'react';
import { team } from '../../assets/assets.js';
import './workerfooter.css'


const MapSection = () => {
  return (
    <div
      className="w-full text-white relative " id='footer'
      style={{
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Main Content Container with Flex Layout */}
      <div className="max-w-7xl mx-auto p-4 flex flex-col md:flex-row items-center">
        {/* Left Side: Map with Ease-In-Out Effect */}
        <div className="w-full md:w-1/3  md:mb-0 map-container  transition-transform transform hover:scale-105 hover:duration-500 ease-in-out">
          <div className="relative w-full h-40 md:h-56 rounded-lg overflow-hidden"> {/* Further reduced map height */}
            <img
              src={team.location}
              alt="Location map"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Right Side: About Us, Opening Hours, Details in a single row */}
        <div className="w-full md:w-2/3 flex justify-between space-x-6 mt-8 md:mt-0">
          {/* About Us */}
          <div className="w-1/3 space-y-4 pl-8">
            <h2 className="text-yellow-400 text-sm sm:text-base md:text-lg font-bold mb-4">
              About Us
            </h2>
            <div className="flex items-start justify-start text-gray-300 text-[10px] sm:text-xs md:text-sm">
              {/* <FaPhoneAlt /> */}
              <p className="break-all">9581020600</p>
            </div>
            <div className="flex items-start justify-start text-gray-300 text-[10px] sm:text-xs md:text-sm">
              {/* <FaEnvelope /> */}
              <p className="break-all">dineshkumar08577@gmail.com</p>
            </div>
            <div className="flex items-start justify-start text-gray-300 text-[10px] sm:text-xs md:text-sm">
              <p className="pr-0 sm:pr-20">
                HungryBeast- Food & Beverages,
                Angallu,<br />
                Madanapalle, 517326.
              </p>
            </div>
          </div>



          {/* Opening Hours */}
          <div className="w-1/3 space-y-4 pl-6 ">
            <h2 className="text-yellow-400 text-base sm:text-lg font-bold mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
              Opening hours
            </h2>
            <p className="text-gray-300 text-xs sm:text-sm">Every day: 12pm-9pm</p>
            <p className="text-gray-300 text-xs sm:text-sm">Sunday: 4pm-9pm</p>
          </div>

          {/* Details Section */}
          <div className="w-1/3 space-y-4 pl-6 ">
            <h2 className="text-yellow-400 text-base sm:text-lg font-bold mb-4">
              Details
            </h2>
            <ul className="space-y-2 text-gray-300 text-xs sm:text-sm">
              <li>Home</li>
              <li>About Us</li>
              <li>Menu</li>
              <li>Contact</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Social Icons - Reduced size */}
      <div className="flex justify-center gap-5  space-x-2  "> {/* Reduced space between icons */}
        
        <a
          href="https://www.instagram.com/webplusacademy?igsh=ZGVtaXFrcjNjcGN0"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block transform transition-all duration-300 hover:scale-110"
        >
          <img
            src={team.insicon}
            alt="facebook-icon"
            className="w-6  sm:w-12 md:w-7 h-auto mt-3.5 hover:opacity-80 foot-img"

          />
        </a>
        <a
          href="https://www.linkedin.com/in/saran-velmurugan-357499238"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block transform transition-all duration-300 hover:scale-110"
        >
          <img
            src={team.linked}
            alt="facebook-icon"
            className="w-6  sm:w-12 md:w-7 h-auto mt-3.5 hover:opacity-80 foot-img"
          />
        </a>
        <a
          href="https://www.facebook.com/profile.php?id=61561544652969"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block transform transition-all duration-300 hover:scale-110"
        >
          <img
            src={team.face}
            alt="facebook-icon"
            className="w-6  sm:w-12 md:w-7 h-auto mt-3 hover:opacity-80 foot-img"
          />
        </a>
      </div>
      {/* Footer */}
      <div className="foot-info bg-black text-center mt-8 text-xs sm:text-sm text-white-400 py-6">
        <p>© 2024 Developed by Saredufy WebPlusAcademy</p>
        {/* <p className="text-sm sm:text-lg">Script Design & Development</p> */}
        <p className="text-sm sm:text-lg font-bold">SAREDUFY WebplusAcademy Pvt Ltd</p>
      </div>

      {/* Logo positioned at the bottom right corner */}
      <div className="absolute bottom-7 left-4">
  <img
    src={team.logo_saredufy}
    alt="Web Plus Academy Logo"
    className="  h-auto foot-logo" // Make the logo responsive
  />
</div>


    </div>
  );
};

export default MapSection;