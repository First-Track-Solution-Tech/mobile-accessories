// import React from "react";

// const MobileAccessories = () => {
//     return (
//         <section className="p-6">
//             <h2 className="text-3xl font-bold text-center mb-4">What Can You Buy From Us?</h2>

//             <h3 className="text-xl font-bold mt-4">Mobile Phones</h3>
//             <p className="text-gray-800 mb-4">
//                 From budget phones to state-of-the-art smartphones, we have a mobile for 
//                 everybody out there. Whether you're looking for larger screens, power-packed 
//                 batteries, blazing-fast processors, or high-tech selfie cameras, we’ve got you 
//                 covered. Explore top brands like Samsung, Apple, Oppo, Xiaomi, and more.
//             </p>

//             <h3 className="text-xl font-bold mt-4">Electronic Devices and Accessories</h3>
//             <p className="text-gray-700 mb-4">
//                 Discover our extensive collection of laptops, cameras, and mobile accessories. 
//                 Looking for high-performance laptops? Our <a href="/" className="text-blue-500 underline">Back to College Store</a> 
//                 offers personalized recommendations for students and professionals alike. Turn your 
//                 home into a theater with our range of Sony home theaters, JBL soundbars, and Philips 
//                 tower speakers.
//             </p>
//             <ul className="list-disc pl-6 text-gray-700 font-semibold text-base">
//                 <li>Designer cases and covers for smartphones</li>
//                 <li>Wireless headphones with noise cancellation</li>
//                 <li>Power banks for charging on the go</li>
//                 <li>Tripods and selfie sticks for photography enthusiasts</li>
//             </ul>

//             <h3 className="text-xl font-bold mt-4">Protective Cases and Covers</h3>
//             <p className="text-gray-700 mb-4">
//                 Keep your mobile devices safe with our wide range of designer cases and covers. From rugged 
//                 armor cases to slim and stylish covers, we offer options for all popular brands like Samsung, 
//                 Apple, and Xiaomi.
//             </p>

//             <h3 className="text-xl font-bold mt-4">Wireless Headphones and Earbuds</h3>
//             <p className="text-gray-700 mb-4">
//                 Experience crystal-clear audio with our collection of wireless headphones and earbuds. 
//                 Featuring noise cancellation, long battery life, and sleek designs, these accessories are 
//                 perfect for music lovers and professionals on the go.
//             </p>

//             <h3 className="text-xl font-bold mt-4">Portable Power Banks</h3>
//             <p className="text-gray-700 mb-4">
//                 Stay powered up wherever you go with our high-capacity power banks. Whether you're traveling 
//                 or simply need extra backup, our range ensures your devices are always charged and ready to 
//                 use.
//             </p>

//             <h3 className="text-xl font-bold mt-4">Photography Accessories</h3>
//             <p className="text-gray-700 mb-4">
//                 Enhance your mobile photography skills with our collection of tripods, selfie sticks, and 
//                 clip-on lenses. Capture moments with precision and creativity, whether you're a beginner or a 
//                 seasoned photographer.
//             </p>
//         </section>
//     );
// };

// export default MobileAccessories;


import React from "react";
import { FaMobileAlt, FaHeadphones, FaBatteryFull, FaCamera } from "react-icons/fa";

const MobileAccessories = () => {
  const data = [
    {
      icon: <FaMobileAlt className="text-blue-600 text-3xl" />,
      title: "Mobile Phones",
      desc: "Latest smartphones with powerful performance, long battery life, and high-quality cameras.",
      bg: "bg-gradient-to-br from-blue-50 to-white",
      border: "border-blue-200",
    },
    {
      icon: <FaHeadphones className="text-pink-600 text-3xl" />,
      title: "Headphones & Earbuds",
      desc: "Noise cancellation, premium sound, and stylish wireless designs.",
      bg: "bg-gradient-to-br from-pink-50 to-white",
      border: "border-pink-200",
    },
    {
      icon: <FaBatteryFull className="text-green-600 text-3xl" />,
      title: "Power Banks",
      desc: "Stay charged anywhere with fast charging portable power solutions.",
      bg: "bg-gradient-to-br from-green-50 to-white",
      border: "border-green-200",
    },
    {
      icon: <FaCamera className="text-purple-600 text-3xl" />,
      title: "Photography Accessories",
      desc: "Tripods, selfie sticks, and lenses to level up your photography.",
      bg: "bg-gradient-to-br from-purple-50 to-white",
      border: "border-purple-200",
    },
  ];

  return (
    <section className="bg-gradient-to-br from-gray-100 via-white to-blue-50 py-16 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-4">
            What Can You Buy From Us?
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            Discover premium mobile accessories and gadgets designed for performance and style.
          </p>
        </div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8">
          {data.map((item, index) => (
            <div
              key={index}
              className={`${item.bg} border ${item.border} rounded-2xl p-6 text-center shadow-md hover:shadow-2xl hover:-translate-y-3 transition duration-300`}
            >
              <div className="mb-4 flex justify-center">{item.icon}</div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                {item.title}
              </h3>
              <p className="text-gray-600 text-sm">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <button className="bg-gradient-to-r from-blue-600 to-black text-white px-8 py-3 rounded-full text-lg font-semibold shadow-lg hover:scale-105 transition">
            Explore Products
          </button>
        </div>

      </div>
    </section>
  );
};

export default MobileAccessories;