import React, { useState } from "react";
import logo from "../assets/logo.jpg";
import {
  FaShoppingCart,
  FaBars,
  FaChevronDown,
  FaChevronUp,
  FaHeart,
  FaBell
} from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const numberOfItems = useSelector(
    (state) => state.cart.totalItems
  );

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleDropdown = (menu) => {
    setActiveDropdown(
      activeDropdown === menu ? null : menu
    );
  };

  return (
    <>
      {/* Navbar */}
      <nav className="w-full bg-zinc-700 text-white shadow-lg sticky top-0 z-50">
        <div className="flex items-center justify-between px-6 py-4">

          {/* Logo */}
          <Link to="/">
              <img
                src="/Logo_Design.png"
                alt="logo"
                className="h-14 w-14 rounded-full object-cover"
              />
            </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-6">
            <Link
              to="/"
              className="hover:text-yellow-400 transition"
            >
              HOME
            </Link>

            {/* Desktop Category Dropdown */}
            <div className="relative">
              <button
                onClick={() => toggleDropdown("desktopCategory")}
                className="flex items-center gap-2 hover:text-yellow-400"
              >
                CATEGORY
                {activeDropdown === "desktopCategory" ? (
                  <FaChevronUp size={12} />
                ) : (
                  <FaChevronDown size={12} />
                )}
              </button>
              {activeDropdown === "desktopCategory" && (
  <div className="absolute top-10 left-0 w-52 bg-gray-900 rounded-lg shadow-lg p-4 space-y-3 z-50">

    <Link
      to="/products"
      className="block hover:text-yellow-400 font-semibold border-b border-gray-700 pb-2"
      onClick={() => setActiveDropdown(null)}
    >
      All Products
    </Link>

    <Link
      to="/products/headphones"
      className="block hover:text-yellow-400"
      onClick={() => setActiveDropdown(null)}
    >
      Headphones
    </Link>

    <Link
      to="/products/charger"
      className="block hover:text-yellow-400"
      onClick={() => setActiveDropdown(null)}
    >
      Charger
    </Link>

    <Link
      to="/products/cover"
      className="block hover:text-yellow-400"
      onClick={() => setActiveDropdown(null)}
    >
      Cover
    </Link>

    <Link
      to="/products/earphone"
      className="block hover:text-yellow-400"
      onClick={() => setActiveDropdown(null)}
    >
      Earphone
    </Link>

    <Link
      to="/products/powerbank"
      className="block hover:text-yellow-400"
      onClick={() => setActiveDropdown(null)}
    >
      Powerbank
    </Link>
  </div>
)}
            </div>

            <Link
              to="/order"
              className="hover:text-yellow-400"
            >
              MY ORDERS
            </Link>

            <Link
              to="/refer"
              className="hover:text-yellow-400"
            >
              REFER & EARN
            </Link>

            <Link
              to="/about"
              className="hover:text-yellow-400"
            >
              ABOUT US
            </Link>
          </div>

          {/* Desktop Right Section */}
          <div className="hidden lg:flex items-center gap-5">

            {/* Notification */}
            <Link to="/notifications" className="relative">
              <FaBell className="text-2xl hover:text-yellow-400 transition" />
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-1 rounded-full">
                2
              </span>
            </Link>

            {/* Wishlist */}
            <Link to="/wishlist" className="relative">
              <FaHeart className="text-2xl hover:text-yellow-400 transition" />
            </Link>

            {/* Cart */}
            <Link to="/cart" className="relative">
              <FaShoppingCart className="text-2xl hover:text-yellow-400" />

              {numberOfItems > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-xs px-1 rounded-full">
                  {numberOfItems}
                </span>
              )}
            </Link>

            {/* Login Button */}
            <Link
              to="/login"
              className="bg-yellow-400 text-black px-5 py-2 rounded-full font-semibold hover:bg-yellow-500 transition"
            >
              Login
            </Link>
          </div>

          {/* Mobile Menu + Cart */}
          <div className="flex lg:hidden items-center gap-4">

          {/* Notification */}
          <Link to="/notifications" className="relative">
            <FaBell className="text-xl" />
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-1 rounded-full">
              2
            </span>
          </Link>

          {/* Wishlist */}
          <Link to="/wishlist">
            <FaHeart className="text-xl" />
          </Link>

          {/* Cart */}
          <Link to="/cart" className="relative">
            <FaShoppingCart className="text-xl" />

            {numberOfItems > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-xs px-1 rounded-full">
                {numberOfItems}
              </span>
            )}
          </Link>

          {/* Menu */}
          <button
            onClick={toggleMenu}
            className="text-2xl"
          >
            <FaBars />
          </button>
          </div>
        </div>
      </nav>

      {/* Background Overlay */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40"
          onClick={toggleMenu}
        ></div>
      )}

      {/* Mobile Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-72 bg-gray-900 text-white z-50 transform transition-transform duration-300 ${
          isMenuOpen
            ? "translate-x-0"
            : "translate-x-full"
        }`}
      >
        <div className="p-6 flex flex-col h-full">

          {/* Close Button */}
          <button
            className="self-end text-3xl"
            onClick={toggleMenu}
          >
            <IoMdClose />
          </button>

          {/* Mobile Links */}
          <div className="mt-8 flex flex-col gap-5">

            <Link
              to="/"
              onClick={toggleMenu}
              className="hover:text-yellow-400"
            >
              HOME
            </Link>

            {/* Mobile Category Dropdown */}
            <div>
              <button
                onClick={() =>
                  toggleDropdown("mobileCategory")
                }
                className="flex items-center justify-between w-full hover:text-yellow-400"
              >
                CATEGORY

                {activeDropdown === "mobileCategory" ? (
                  <FaChevronUp />
                ) : (
                  <FaChevronDown />
                )}
              </button>

{activeDropdown === "mobileCategory" && (
  <div className="bg-gray-800 rounded-xl p-4 mt-3 space-y-3">

    <Link
      to="/products"
      onClick={toggleMenu}
      className="block hover:text-yellow-400 font-semibold border-b border-gray-600 pb-2"
    >
      All Products
    </Link>

    <Link
      to="/products/headphones"
      onClick={toggleMenu}
      className="block hover:text-yellow-400"
    >
      Headphones
    </Link>

    <Link
      to="/products/charger"
      onClick={toggleMenu}
      className="block hover:text-yellow-400"
    >
      Charger
    </Link>

    <Link
      to="/products/cover"
      onClick={toggleMenu}
      className="block hover:text-yellow-400"
    >
      Cover
    </Link>

    <Link
      to="/products/earphone"
      onClick={toggleMenu}
      className="block hover:text-yellow-400"
    >
      Earphone
    </Link>

    <Link
      to="/products/powerbank"
      onClick={toggleMenu}
      className="block hover:text-yellow-400"
    >
      Powerbank
    </Link>
  </div>
)}
            </div>

            <Link
              to="/order"
              onClick={toggleMenu}
              className="hover:text-yellow-400"
            >
              MY ORDERS
            </Link>

            <Link
              to="/refer"
              onClick={toggleMenu}
              className="hover:text-yellow-400"
            >
              REFER & EARN
            </Link>

            <Link
              to="/about"
              onClick={toggleMenu}
              className="hover:text-yellow-400"
            >
              ABOUT US
            </Link>
          </div>

          {/* Bottom Login Button */}
          <div className="mt-auto">
            <Link
              to="/login"
              onClick={toggleMenu}
              className="block w-full text-center bg-yellow-400 text-black py-3 rounded-xl font-semibold hover:bg-yellow-500 transition"
            >
              Login
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;