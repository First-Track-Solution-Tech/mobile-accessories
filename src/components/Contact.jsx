// import React from "react";
// import {
//   FaUser,
//   FaEnvelope,
//   FaCommentDots,
//   FaPaperPlane
// } from "react-icons/fa";

// import Footer from "../components/Footer";

// const Contact = () => {
//   return (
//     <>
//       <div className="bg-gradient-to-r from-blue-50 to-gray-100 min-h-screen flex items-center justify-center p-6">
//         <div className="max-w-lg w-full bg-white bg-opacity-90 backdrop-blur-lg shadow-2xl rounded-2xl p-8">

//           {/* Heading */}
//           <h2 className="text-3xl font-extrabold text-gray-800 text-center mb-6">
//             Contact Us
//           </h2>

//           {/* Form */}
//           <form className="space-y-5">

//             {/* Name */}
//             <div>
//               <label className="block text-gray-700 font-medium flex items-center">
//                 <FaUser className="mr-2 text-black" />
//                 Name
//               </label>

//               <input
//                 type="text"
//                 className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
//                 placeholder="Enter your name"
//               />
//             </div>

//             {/* Email */}
//             <div>
//               <label className="block text-gray-700 font-medium flex items-center">
//                 <FaEnvelope className="mr-2 text-black" />
//                 Email
//               </label>

//               <input
//                 type="email"
//                 className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
//                 placeholder="Enter your email"
//               />
//             </div>

//             {/* Message */}
//             <div>
//               <label className="block text-gray-700 font-medium flex items-center">
//                 <FaCommentDots className="mr-2 text-black" />
//                 Message
//               </label>

//               <textarea
//                 className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
//                 rows="4"
//                 placeholder="Your message"
//               ></textarea>
//             </div>

//             {/* Button */}
//             <button className="w-full flex items-center justify-center bg-black text-white px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-all shadow-md">
//               <FaPaperPlane className="mr-2" />
//               Send Message
//             </button>
//           </form>
//         </div>
//       </div>

//       {/* Footer */}
//       <Footer />
//     </>
//   );
// };

// export default Contact;




import React from "react";
import {
  FaUser,
  FaEnvelope,
  FaCommentDots,
  FaPaperPlane,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaLinkedin
} from "react-icons/fa";

import Footer from "../components/Footer";

const Contact = () => {
  return (
    <>
      <div className="bg-gradient-to-br from-slate-100 via-blue-50 to-purple-100 min-h-screen py-12 px-6">
        
        {/* Heading */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-900">
            Contact Us
          </h1>
          <p className="text-gray-600 mt-4 text-lg">
            We'd love to hear from you. Get in touch with us anytime.
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">
          
          {/* Left Side Contact Info */}
          <div className="bg-gradient-to-br from-black via-gray-900 to-blue-900 text-white rounded-3xl p-8 shadow-2xl">
            
            <h2 className="text-3xl font-bold mb-6">
              Get In Touch
            </h2>

            <p className="text-gray-300 mb-8 leading-7">
              Have questions about our products, orders, shipping, 
              or returns? Our support team is here to help you.
            </p>

            {/* Contact Info */}
            <div className="space-y-6">
              
              <div className="flex items-center gap-4">
                <div className="bg-yellow-400 text-black p-3 rounded-full">
                  <FaPhoneAlt />
                </div>
                <div>
                  <h3 className="font-semibold">Phone</h3>
                  <p className="text-gray-300">+91 9876543210</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="bg-yellow-400 text-black p-3 rounded-full">
                  <FaEnvelope />
                </div>
                <div>
                  <h3 className="font-semibold">Email</h3>
                  <p className="text-gray-300">support@mobieeshop.com</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="bg-yellow-400 text-black p-3 rounded-full">
                  <FaMapMarkerAlt />
                </div>
                <div>
                  <h3 className="font-semibold">Location</h3>
                  <p className="text-gray-300">Bhubaneswar, Odisha, India</p>
                </div>
              </div>
            </div>

            {/* Social Icons */}
            <div className="flex gap-4 mt-10">
              <div className="bg-white/10 p-3 rounded-full hover:bg-yellow-400 hover:text-black cursor-pointer transition">
                <FaFacebook />
              </div>

              <div className="bg-white/10 p-3 rounded-full hover:bg-yellow-400 hover:text-black cursor-pointer transition">
                <FaInstagram />
              </div>

              <div className="bg-white/10 p-3 rounded-full hover:bg-yellow-400 hover:text-black cursor-pointer transition">
                <FaTwitter />
              </div>

              <div className="bg-white/10 p-3 rounded-full hover:bg-yellow-400 hover:text-black cursor-pointer transition">
                <FaLinkedin />
              </div>
            </div>
          </div>

          {/* Right Side Form */}
          <div className="bg-white/80 backdrop-blur-lg shadow-2xl rounded-3xl p-8">
            
            <h2 className="text-3xl font-bold text-gray-800 text-center mb-6">
              Send Message
            </h2>

            <form className="space-y-5">

              {/* Name */}
              <div>
                <label className="block text-gray-700 font-medium flex items-center mb-2">
                  <FaUser className="mr-2 text-blue-600" />
                  Name
                </label>

                <input
                  type="text"
                  className="w-full p-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter your name"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-gray-700 font-medium flex items-center mb-2">
                  <FaEnvelope className="mr-2 text-blue-600" />
                  Email
                </label>

                <input
                  type="email"
                  className="w-full p-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter your email"
                />
              </div>

              {/* Message */}
              <div>
                <label className="block text-gray-700 font-medium flex items-center mb-2">
                  <FaCommentDots className="mr-2 text-blue-600" />
                  Message
                </label>

                <textarea
                  className="w-full p-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                  rows="5"
                  placeholder="Write your message..."
                ></textarea>
              </div>

              {/* Button */}
              <button className="w-full flex items-center justify-center bg-gradient-to-r from-black to-blue-700 text-white px-6 py-3 rounded-xl font-semibold hover:scale-105 transition-all shadow-md">
                <FaPaperPlane className="mr-2" />
                Send Message
              </button>
            </form>
          </div>
        </div>

        {/* Extra Support Section */}
        <div className="max-w-5xl mx-auto mt-16 bg-white rounded-3xl shadow-lg p-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Need Quick Help?
          </h2>
          <p className="text-gray-600 mb-6">
            Visit our FAQ section for instant answers related to orders, shipping, returns, and payments.
          </p>

          <button className="bg-yellow-400 text-black px-8 py-3 rounded-full font-semibold hover:bg-yellow-500 transition">
            Visit FAQ
          </button>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Contact;