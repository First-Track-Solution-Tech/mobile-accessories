// import React from "react";
// import { Link, useLocation } from "react-router-dom";
// import {
//   FaFacebook,
//   FaInstagram,
//   FaLinkedin,
//   FaTwitter
// } from "react-icons/fa";
// import ChatBox from "./ChatBox";

// const Footer = () => {
//   const location = useLocation();

//   const customerLinks = [
//     { path: "/faq", name: "FAQ" },
//     { path: "/privacy", name: "Privacy Policy" },
//     { path: "/terms", name: "Terms & Conditions" },
//     { path: "/shipping", name: "Shipping Policy" },
//     { path: "/return-exchange", name: "Returns & Exchanges" },
//     { path: "/returns-refunds", name: "Returns & Refunds" },
//     { path: "/refund-cancellation", name: "Refund & Cancellation" }
//   ];

//   return (
//     <div className="relative w-full overflow-hidden">
      
//       <footer className="w-full bg-gradient-to-r from-slate-900 via-blue-900 to-black text-white pt-12 pb-8">

//         {/* Full width content */}
//         <div className="w-full px-6 md:px-12 lg:px-20">

//           <div className="grid grid-cols-1 md:grid-cols-4 gap-10">

//             {/* Logo Section */}
//             <div>
//               <div className="flex items-center gap-3 mb-4">
                
//                 {/* Clickable Logo */}
//                 <Link to="/">
//                   <img
//                     src="/Logo1_Design.png"
//                     alt="logo"
//                     className="h-14 w-14 rounded-full cursor-pointer"
//                   />
//                 </Link>

//                 <div>
//                   <h2 className="text-2xl font-bold">
//                     Mobile Shop
//                   </h2>
//                   <p className="text-blue-400 text-sm">
//                     Accessories World
//                   </p>
//                 </div>
//               </div>

//               <p className="text-gray-300 leading-7">
//                 Your one-stop destination for all mobile accessories.
//                 Fast delivery, best quality and trusted service.
//               </p>

//               {/* Social Icons */}
//               <div className="flex gap-4 mt-5">
//                 <FaFacebook
//                   size={20}
//                   className="cursor-pointer hover:text-blue-400 transition"
//                 />
//                 <FaTwitter
//                   size={20}
//                   className="cursor-pointer hover:text-blue-400 transition"
//                 />
//                 <FaInstagram
//                   size={20}
//                   className="cursor-pointer hover:text-pink-400 transition"
//                 />
//                 <FaLinkedin
//                   size={20}
//                   className="cursor-pointer hover:text-blue-500 transition"
//                 />
//               </div>
//             </div>

//             {/* Quick Links */}
//             <div>
//               <h3 className="text-xl font-semibold mb-4">
//                 Quick Links
//               </h3>

//               <div className="space-y-3 text-gray-300">
//                 <Link
//                   to="/"
//                   className={`block transition ${
//                     location.pathname === "/"
//                       ? "text-yellow-400 font-semibold"
//                       : "hover:text-blue-400"
//                   }`}
//                 >
//                   Home
//                 </Link>

//                 <Link
//                   to="/about"
//                   className={`block transition ${
//                     location.pathname === "/about"
//                       ? "text-yellow-400 font-semibold"
//                       : "hover:text-blue-400"
//                   }`}
//                 >
//                   About
//                 </Link>

//                 <Link
//                   to="/blog"
//                   className={`block transition ${
//                     location.pathname === "/blog"
//                       ? "text-yellow-400 font-semibold"
//                       : "hover:text-blue-400"
//                   }`}
//                 >
//                   Blog
//                 </Link>

//                 <Link
//                   to="/contact"
//                   className={`block transition ${
//                     location.pathname === "/contact"
//                       ? "text-yellow-400 font-semibold"
//                       : "hover:text-blue-400"
//                   }`}
//                 >
//                   Contact Us
//                 </Link>
//               </div>
//             </div>

//             {/* Customer Service */}
//             <div>
//               <h3 className="text-xl font-semibold mb-4">
//                 Customer Service
//               </h3>

//               <div className="space-y-3 text-gray-300">
//                 {customerLinks.map((item, index) => (
//                   <Link
//                     key={index}
//                     to={item.path}
//                     className={`block transition ${
//                       location.pathname === item.path
//                         ? "text-yellow-400 font-semibold"
//                         : "hover:text-blue-400"
//                     }`}
//                   >
//                     {item.name}
//                   </Link>
//                 ))}
//               </div>
//             </div>

//             {/* Newsletter */}
//             <div>
//               <h3 className="text-xl font-semibold mb-4">
//                 Newsletter
//               </h3>

//               <p className="text-gray-300 mb-4">
//                 Subscribe for latest updates
//               </p>

//               <div className="flex">
//                 <input
//                   type="email"
//                   placeholder="Enter email"
//                   className="w-full px-4 py-3 rounded-l-lg text-white placeholder:text-gray-400 bg-gray-800 border border-gray-600 focus:outline-none"
//                 />

//                 <button className="bg-blue-500 px-5 rounded-r-lg hover:bg-blue-600 transition">
//                   Subscribe
//                 </button>
//               </div>
//             </div>

//           </div>

//           {/* Bottom Footer */}
//           <div className="border-t border-gray-700 mt-10 pt-5 text-center text-gray-400">
//             © 2025 Mobiee Shop | All Rights Reserved First track Technologies Pvt. Ltd.
//           </div>
//         </div>
//       </footer>

//       <ChatBox />
//     </div>
//   );
// };

// export default Footer;





import React from "react";
import { Link, useLocation } from "react-router-dom";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTwitter
} from "react-icons/fa";
import ChatBox from "./ChatBox";

const Footer = () => {
  const location = useLocation();

  const customerLinks = [
    { path: "/faq", name: "FAQ" },
    { path: "/privacy", name: "Privacy Policy" },
    { path: "/terms", name: "Terms & Conditions" },
    { path: "/shipping", name: "Shipping Policy" },
    { path: "/return-exchange", name: "Returns & Exchanges" },
    { path: "/returns-refunds", name: "Returns & Refunds" },
    { path: "/refund-cancellation", name: "Refund & Cancellation" }
  ];

  return (
    <div className="relative w-full overflow-hidden">

      <footer className="w-full bg-gradient-to-r from-slate-900 via-blue-900 to-black text-white pt-10 pb-20 md:pb-8">

        <div className="w-full px-4 sm:px-6 lg:px-20">

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

            {/* Logo Section */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <Link to="/">
                  <img
                    src="/Logo1_Design.png"
                    alt="logo"
                    className="h-14 w-14 rounded-full"
                  />
                </Link>

                <div>
                  <h2 className="text-2xl font-bold">Mobiee Shop</h2>
                  <p className="text-blue-400 text-sm">Accessories World</p>
                </div>
              </div>

              <p className="text-gray-300 leading-6 text-sm">
                Your one-stop destination for mobiee shop. Fast delivery and trusted service.
              </p>

              <div className="flex gap-4 mt-5">
                <FaFacebook className="cursor-pointer hover:text-blue-400" />
                <FaTwitter className="cursor-pointer hover:text-blue-400" />
                <FaInstagram className="cursor-pointer hover:text-pink-400" />
                <FaLinkedin className="cursor-pointer hover:text-blue-500" />
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <div className="space-y-2 text-gray-300 text-sm">
                {["/", "/about", "/blog", "/contact"].map((path, i) => (
                  <Link
                    key={i}
                    to={path}
                    className={`block ${
                      location.pathname === path
                        ? "text-yellow-400 font-semibold"
                        : "hover:text-blue-400"
                    }`}
                  >
                    {path === "/" ? "Home" : path.replace("/", "").toUpperCase()}
                  </Link>
                ))}
              </div>
            </div>

            {/* Customer Service */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Customer Service</h3>
              <div className="space-y-2 text-gray-300 text-sm">
                {customerLinks.map((item, i) => (
                  <Link
                    key={i}
                    to={item.path}
                    className={`block ${
                      location.pathname === item.path
                        ? "text-yellow-400 font-semibold"
                        : "hover:text-blue-400"
                    }`}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>

            {/* Newsletter */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
              <p className="text-gray-300 text-sm mb-3">
                Subscribe for updates
              </p>

              <div className="flex flex-col sm:flex-row gap-2">
                <input
                  type="email"
                  placeholder="Enter email"
                  className="w-full px-4 py-3 rounded-lg sm:rounded-r-none text-white bg-gray-800 border border-gray-600 focus:outline-none"
                />

                <button className="bg-blue-500 px-5 py-3 rounded-lg sm:rounded-l-none hover:bg-blue-600 w-full sm:w-auto">
                  Subscribe
                </button>
              </div>
            </div>

          </div>
          {/* Bottom */}
<div className="border-t border-gray-700 mt-10 pt-5 text-center text-gray-400 text-sm">
  © 2025 Mobile Shop | All Rights Reserved{" "}

  <a
    href="https://www.firsttracktechnologies.com"
    target="_blank"
    rel="noopener noreferrer"
    className="text-blue-400 hover:text-blue-300 transition font-medium"
  >
    First Track Technologies Pvt. Ltd.
  </a>
</div>
        </div>
      </footer>

      <ChatBox />
    </div>
  );
};

export default Footer;