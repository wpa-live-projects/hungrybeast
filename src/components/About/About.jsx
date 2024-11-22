// import React from "react";
import { assets } from '../../assets/assets'
import './about.css'
import { Link } from "react-router-dom";
const AboutUs = () => {
  return (
    <>
    <div id='about' >

  
    <div className="pt-20 pb-5" id="aboutus">
      <h1 className=" text-yellow-400 text-center font-semibold about-title " >About Us</h1>
      <div className="about-left text-yellow-400 p-6 md:flex items-center space-y-6 md:space-y-0 md:space-x-10">
        {/* <br /> */}
        {/* Left Section */}
        <div className="md:w-1/2 space-y-4">
          <h1 className="md:text-4xl ml-[35px] font-bold about-head">
            We Deliver Best{" "} <br />
            <span className="inline-block text-yellow-500">&</span> Delicious
            Food For You
          </h1> <br />
          <p className="text-gray-300 text-center">
            Enjoy Our Food Experience <br />
            We don't just make food, we make people's choices.
          </p> 
          <h2 className="text-2xl font-bold text-center text-yellow-500 ">100+</h2>
          <p className="text-gray-300 text-center ">Delicious foods in our menu</p>
          <br />
          <Link to='/fullmenu'>
          
          <button className="about-button bg-yellow-500 ml-[65px] font-bold text-black px-6 py-2 rounded-lg hover:bg-yellow-600 
  md:ml-40 md:mr-auto md:block mx-auto">
            View Our Menu
          </button>
          </Link>

        </div>

        {/* Right Section */}
        <div>
          <img
            src={assets.about} // Replace this with your image URL
            alt="Delicious Food"
            className="image" // Adjust width for different screen sizes
          />
        </div>


      </div>
      </div>
      </div>
    </>
  );
};

export default AboutUs;
