import React from "react";
import Footer from "../components/Footer";

const AboutUs = () => {
  return (
    <>
      <div className="relative bg-gray-50 py-16 px-6 md:px-12 min-h-screen">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          
          {/* Image Section */}
          <div className="relative">
            <img
              src="/assets/about-us.jpg"
              alt="About Us"
              className="w-full h-auto rounded-2xl shadow-lg"
            />
          </div>

          {/* Content Section */}
          <div className="text-center md:text-left">
            <h2 className="text-4xl font-extrabold text-gray-800 mb-6">
              About Us
            </h2>

            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Mobile Accessories is a mobile cover platform that strives
              to carve a niche in case cover design and manufacturing.
              With a wide array of exclusive designs catering to all age groups.
            </p>

            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Keeping pace with changing trends, we are revamping to stand out
              among an evolving crowd with exciting future plans.
            </p>

            {/* Button */}
            <a
              href="/shop"
              className="inline-block px-6 py-3 bg-black text-white text-lg font-semibold rounded-lg shadow-md hover:bg-gray-800 transition duration-300"
            >
              Explore Now
            </a>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </>
  );
};

export default AboutUs;