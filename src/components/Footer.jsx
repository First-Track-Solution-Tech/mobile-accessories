// import { Link } from 'react-router-dom';
// import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
// import React from 'react';

// const Footer = () => {
//   return (
//     <>
//       <div className='w-full px-6 py-12 bg-zinc-800 text-white flex flex-col items-center'>
//         {/* Logo & Branding */}
//         <div className='flex flex-col items-center text-center'>
//           <img
//             src="src/assets/logo.jpg"
//             alt="Company Logo"
//             className='w-[100px] mb-2'
//           />
//           <div className='text-3xl font-bold italic text-white'>
//             MOBILE ACCESSORIES
//           </div>
//           <div className='text-2xl font-bold text-blue-400 italic'>WORLD</div>
//           <p className='mt-2 text-gray-400 max-w-md text-center'>
//             Fastest platform with all courier service features. Helping you start, run, and grow your courier service.
//           </p>
//         </div>

       
//         <div className='grid grid-cols-1 md:grid-cols-3 gap-10 mt-8 w-full max-w-5xl text-center md:text-left'>
          
        
//           <div>
//             <h3 className='text-lg font-semibold text-white mb-3'>Quick Links</h3>
//             <div className='space-y-2 text-gray-400'>
//               <Link to='/'>Home</Link>
//               <br />
//               <Link to='/about'>About</Link>
//               <br />
//               <Link to='/contact'>Contact</Link>
//             </div>
//           </div>

  
//           <div>
//             <h3 className='text-lg font-semibold text-white mb-3'>Customer Service</h3>
//             <div className='space-y-2 text-gray-400'>
//               <Link to='/shipping'>Shipping and Delivery Policy</Link>
//               <br />
//               <Link to='/return'>Returns and Refunds</Link>
//               <br />
//               <Link to='/terms'>Terms and Conditions</Link>
//               <br />
//               <Link to='/privacy'>Privacy and Policy</Link>
//             </div>
//           </div>

//           <div className='flex flex-col items-center md:items-start'>
//             <h3 className='text-lg font-semibold text-white mb-3'>Follow Us</h3>
//             <div className='flex space-x-4 text-gray-400'>
//               <Link to="/facebook"><FaFacebook size={20} /></Link>
//               <Link to="/twitter"><FaTwitter size={20} /></Link>
//               <Link to="/instagram"><FaInstagram size={20} /></Link>
//               <Link to="/linkedin"><FaLinkedin size={20} /></Link>
//             </div>
//           </div>

//         </div>

//         <div className='mt-8 w-full text-center text-gray-500 border-t border-gray-700 pt-4'>
//           Copyright © 2025, Developed by 
//           <a href="https://firsttracksolution.tech" className='text-blue-400 hover:underline ml-1'>
//             First Track Solution Technologies
//           </a>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Footer;





import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-slate-900 via-gray-900 to-black text-white pt-14 pb-6 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">

        {/* Brand Section */}
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <img
              src="/src/assets/logo.jpg"
              alt="Logo"
              className="w-12 h-12 rounded-full border border-gray-600"
            />
            <div>
              <h1 className="text-xl font-bold">Mobile Shop</h1>
              <p className="text-sm text-blue-400">Accessories World</p>
            </div>
          </div>

          <p className="text-gray-400 text-sm leading-relaxed">
            Your one-stop destination for all mobile accessories. Fast delivery,
            best quality, and trusted service.
          </p>

          {/* Social Icons */}
          <div className="flex gap-4 mt-4">
            <a href="#" className="hover:text-blue-500 transition">
              <FaFacebook size={18} />
            </a>
            <a href="#" className="hover:text-sky-400 transition">
              <FaTwitter size={18} />
            </a>
            <a href="#" className="hover:text-pink-500 transition">
              <FaInstagram size={18} />
            </a>
            <a href="#" className="hover:text-blue-300 transition">
              <FaLinkedin size={18} />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4 border-b border-gray-700 pb-2">
            Quick Links
          </h3>
          <ul className="space-y-2 text-gray-400">
            <li><Link to="/" className="hover:text-white">Home</Link></li>
            <li><Link to="/about" className="hover:text-white">About</Link></li>
            <li><Link to="/contact" className="hover:text-white">Contact</Link></li>
          </ul>
        </div>

        {/* Customer Service */}
        <div>
          <h3 className="text-lg font-semibold mb-4 border-b border-gray-700 pb-2">
            Customer Service
          </h3>
          <ul className="space-y-2 text-gray-400">
            <li><Link to="/shipping" className="hover:text-white">Shipping Policy</Link></li>
            <li><Link to="/return" className="hover:text-white">Returns & Refunds</Link></li>
            <li><Link to="/terms" className="hover:text-white">Terms & Conditions</Link></li>
            <li><Link to="/privacy" className="hover:text-white">Privacy Policy</Link></li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-lg font-semibold mb-4 border-b border-gray-700 pb-2">
            Newsletter
          </h3>
          <p className="text-gray-400 text-sm mb-3">
            Subscribe to get latest offers and updates.
          </p>
          <div className="flex">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-3 py-2 rounded-l-lg bg-gray-800 text-white outline-none"
            />
            <button className="bg-blue-500 px-4 rounded-r-lg hover:bg-blue-600 transition">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-10 border-t border-gray-700 pt-4 text-center text-gray-500 text-sm">
        © 2025 Mobile Shop. All rights reserved | Developed by 
        <span className="text-blue-400 ml-1 hover:underline cursor-pointer">
          First Track Solution
        </span>
      </div>
    </footer>
  );
};

export default Footer;

