

import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import React from 'react';
import ChatBox from "./ChatBox";

const Footer = () => {
  return (
    <>
    <div className="relative">
    <footer className="bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 text-gray-300 pt-12 pb-24 md:pb-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">

        {/* Brand Section */}
        <div className="space-y-4">
          <div className="flex items-center gap-3">
          <img
                src="/Logo_Design.png"
                alt="logo"
                className="h-14 w-14 rounded-full object-cover"
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
            <li><Link to="/blog" className="hover:text-white">Blog</Link></li>
            <li><Link to="/contact" className="hover:text-white">Contact Us</Link></li>
          </ul>
        </div>

        {/* Customer Service */}
        <div>
          <h3 className="text-lg font-semibold mb-4 border-b border-gray-700 pb-2">
            Customer Service
          </h3>
          <ul className="space-y-2 text-gray-400">
            <li><Link to="/faq" className="hover:text-white">FAQ</Link></li>
            <li><Link to="/privacy" className="hover:text-white">Privacy Policy</Link></li>
            <li><Link to="/terms" className="hover:text-white">Terms & Conditions</Link></li>
            <li><Link to="/shipping" className="hover:text-white">Shipping Policy</Link></li>
            <li><Link to="/return-exchange" className="hover:text-white">Returns & Exchange</Link></li>
            <li><Link to="/return" className="hover:text-white">Returns & Refunds</Link></li>
            <li><Link to="/refund-cancellation" className="hover:text-white">Refund & Cancellation</Link></li>

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
          First Track Solution Technologies Pvt Ltd.
        </span>
      </div>
    </footer>
    <ChatBox />
    </div>
    </>
  );
};

export default Footer;

