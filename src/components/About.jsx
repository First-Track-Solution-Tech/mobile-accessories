// import React from "react";
// import Footer from "../components/Footer";

// const AboutUs = () => {
//   return (
//     <>
//       <div className="relative bg-gray-50 py-16 px-6 md:px-12 min-h-screen">
//         <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          
//           {/* Image Section */}
//           <div className="relative">
//             <img
//               src="/assets/about-us.jpg"
//               alt="About Us"
//               className="w-full h-auto rounded-2xl shadow-lg"
//             />
//           </div>

//           {/* Content Section */}
//           <div className="text-center md:text-left">
//             <h2 className="text-4xl font-extrabold text-gray-800 mb-6">
//               About Us
//             </h2>

//             <p className="text-lg text-gray-700 leading-relaxed mb-6">
//               Mobile Accessories is a mobile cover platform that strives
//               to carve a niche in case cover design and manufacturing.
//               With a wide array of exclusive designs catering to all age groups.
//             </p>

//             <p className="text-lg text-gray-700 leading-relaxed mb-6">
//               Keeping pace with changing trends, we are revamping to stand out
//               among an evolving crowd with exciting future plans.
//             </p>

//             {/* Button */}
//             <a
//               href="/shop"
//               className="inline-block px-6 py-3 bg-black text-white text-lg font-semibold rounded-lg shadow-md hover:bg-gray-800 transition duration-300"
//             >
//               Explore Now
//             </a>
//           </div>
//         </div>
//       </div>

//       {/* Footer */}
//       <Footer />
//     </>
//   );
// };

// export default AboutUs;



import React from "react";
import Footer from "../components/Footer";
import {
  FaShippingFast,
  FaMobileAlt,
  FaHeadphonesAlt,
  FaLock,
  FaUsers,
  FaBoxOpen,
  FaAward,
} from "react-icons/fa";

const AboutUs = () => {
  return (
    <>
      <div className="bg-gradient-to-br from-orange-50 via-yellow-50 to-pink-100 text-black">
        {/* Hero Section */}
        <section className="py-20 px-6 md:px-12">
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">

            {/* Image */}
            <div className="relative">
              <img
                 src="/assets/about-us.jpg"
                alt="About Us"
                className="w-full h-[500px] object-cover rounded-3xl shadow-2xl hover:scale-105 transition duration-500"
              />

              <div className="absolute top-5 left-5 bg-yellow-400 text-black px-4 py-2 rounded-full font-semibold">
                Best Seller
              </div>

              <div className="absolute bottom-5 right-5 bg-white text-black px-4 py-2 rounded-full font-semibold">
                10K+ Orders
              </div>
            </div>

            {/* Content */}
            <div>
              <h1 className="text-5xl font-bold mb-6">
                About Our Mobiee Shop
              </h1>

              <p className="text-orange-700 text-lg leading-relaxed mb-6">
                We provide premium quality mobiee accessories including
                covers, chargers, earphones, power banks, and many
                more products at affordable prices.
              </p>

              <p className="text-orange-700 text-lg leading-relaxed mb-8">
                Our mission is to deliver stylish and durable accessories
                that improve your mobiee experience.
              </p>

              <a
                href="/products"
                className="inline-block bg-yellow-400 text-black px-8 py-4 rounded-full font-bold hover:bg-white transition"
              >
                Explore Products
              </a>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-16 px-6 md:px-12 bg-white text-black">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-12">
              Why Choose Us
            </h2>

            <div className="grid md:grid-cols-4 gap-6">
              <div className="bg-gray-100 p-6 rounded-2xl shadow-lg">
                <FaShippingFast className="text-4xl text-blue-600 mx-auto mb-4" />
                <h3 className="font-bold">Fast Delivery</h3>
              </div>

              <div className="bg-gray-100 p-6 rounded-2xl shadow-lg">
                <FaMobileAlt className="text-4xl text-green-600 mx-auto mb-4" />
                <h3 className="font-bold">Premium Products</h3>
              </div>

              <div className="bg-gray-100 p-6 rounded-2xl shadow-lg">
                <FaHeadphonesAlt className="text-4xl text-purple-600 mx-auto mb-4" />
                <h3 className="font-bold">24/7 Support</h3>
              </div>

              <div className="bg-gray-100 p-6 rounded-2xl shadow-lg">
                <FaLock className="text-4xl text-red-600 mx-auto mb-4" />
                <h3 className="font-bold">Secure Payment</h3>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 px-6 md:px-12">
          <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-6 text-center">

            <div className="bg-white/10 p-8 rounded-2xl">
              <FaUsers className="text-4xl text-yellow-400 mx-auto mb-4" />
              <h2 className="text-3xl font-bold">10K+</h2>
              <p>Happy Customers</p>
            </div>

            <div className="bg-white/10 p-8 rounded-2xl">
              <FaBoxOpen className="text-4xl text-yellow-400 mx-auto mb-4" />
              <h2 className="text-3xl font-bold">500+</h2>
              <p>Products</p>
            </div>

            <div className="bg-white/10 p-8 rounded-2xl">
              <FaAward className="text-4xl text-yellow-400 mx-auto mb-4" />
              <h2 className="text-3xl font-bold">5 Years</h2>
              <p>Experience</p>
            </div>

            <div className="bg-white/10 p-8 rounded-2xl">
              <FaShippingFast className="text-4xl text-yellow-400 mx-auto mb-4" />
              <h2 className="text-3xl font-bold">24H</h2>
              <p>Fast Delivery</p>
            </div>
          </div>
        </section>

        {/* Our Journey */}
        <section className="py-16 px-6 md:px-12 bg-white text-black">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-12">
              Our Journey
            </h2>

            <div className="grid md:grid-cols-4 gap-6">
              <div className="bg-gray-100 p-6 rounded-2xl">
                <h3 className="text-2xl font-bold text-blue-600">
                  2022
                </h3>
                <p>Started Our Store</p>
              </div>

              <div className="bg-gray-100 p-6 rounded-2xl">
                <h3 className="text-2xl font-bold text-blue-600">
                  2023
                </h3>
                <p>Reached 5K Customers</p>
              </div>

              <div className="bg-gray-100 p-6 rounded-2xl">
                <h3 className="text-2xl font-bold text-blue-600">
                  2024
                </h3>
                <p>Expanded Product Range</p>
              </div>

              <div className="bg-gray-100 p-6 rounded-2xl">
                <h3 className="text-2xl font-bold text-blue-600">
                  2025
                </h3>
                <p>Nationwide Delivery</p>
              </div>
            </div>
          </div>
        </section>

        {/* Newsletter */}
        <section className="py-16 px-6 md:px-12">
          <div className="max-w-4xl mx-auto bg-white text-black rounded-3xl p-10 text-center shadow-2xl">
            <h2 className="text-4xl font-bold mb-4">
              Subscribe For Updates
            </h2>

            <p className="text-gray-600 mb-6">
              Get latest offers, discounts and product launches.
            </p>

            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-5 py-3 border rounded-full w-full md:w-96"
              />

              <button className="bg-yellow-400 px-8 py-3 rounded-full font-bold hover:bg-black hover:text-white transition">
                Subscribe
              </button>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </>
  );
};

export default AboutUs;