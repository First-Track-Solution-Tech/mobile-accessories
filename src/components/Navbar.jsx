import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
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
import { useSelector } from "react-redux";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [wishlistCount, setWishlistCount] = useState(0);

  const location = useLocation();
  const numberOfItems = useSelector(
    (state) => state.cart.totalItems
  );
  // ADD THIS useEffect HERE
  useEffect(() => {

    const updateWishlistCount = () => {

      const wishlist =
        JSON.parse(localStorage.getItem("wishlist")) || [];

      setWishlistCount(wishlist.length);
    };

    // First Load
    updateWishlistCount();

    // Auto Update
    window.addEventListener(
      "wishlistUpdated",
      updateWishlistCount
    );

    return () => {
      window.removeEventListener(
        "wishlistUpdated",
        updateWishlistCount
      );
    };

  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

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
      <nav className="w-full bg-[#0b1220] backdrop-blur-md border-b border-white/10 text-white shadow-lg sticky top-0 z-50">
      <div className="flex items-center justify-between px-6 py-2">
          {/* Logo */}
          <Link to="/">
              <img
                src="/Logo1_Design.png"
                alt="logo"
                className="h-14 w-14 rounded-full object-cover"
              />
            </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-6">
          <Link
              to="/"
              onClick={toggleMenu}
              className="hover:text-yellow-400 border-b-2 border-transparent hover:border-yellow-400 pb-1 transition-all duration-300"
            >
              HOME
          </Link>
            {/* Desktop Category Dropdown */}
            <div className="relative">
              <button
                onClick={() => toggleDropdown("desktopCategory")}
                className="flex items-center justify-between w-full hover:text-yellow-400 border-b-2 border-transparent hover:border-yellow-400 pb-1 transition-all duration-300"
              >
                CATEGORY
                {activeDropdown === "desktopCategory" ? (
                  <FaChevronUp size={12} />
                ) : (
                  <FaChevronDown size={12} />
                )}
              </button>
              {activeDropdown === "desktopCategory" && (
  <div className="absolute top-10 left-0 w-52 bg-gradient-to-b from-[#111827] via-[#0f172a] to-black
  backdrop-blur-xl
  border-l border-white/10 rounded-lg shadow-lg p-4 space-y-3 z-50">

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
              onClick={toggleMenu}
              className="hover:text-yellow-400 border-b-2 border-transparent hover:border-yellow-400 pb-1 transition-all duration-300"
            >
              MY ORDERS
            </Link>

            <Link
              to="/refer"
              onClick={toggleMenu}
              className="hover:text-yellow-400 border-b-2 border-transparent hover:border-yellow-400 pb-1 transition-all duration-300"
            >
              REFER & EARN
            </Link>

            <Link
              to="/about"
              onClick={toggleMenu}
              className="hover:text-yellow-400 border-b-2 border-transparent hover:border-yellow-400 pb-1 transition-all duration-300"
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

              {wishlistCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-1 rounded-full">
                  {wishlistCount}
                </span>
              )}

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
          <div className="flex lg:hidden items-center gap-5 pr-2">

          {/* Notification */}
          <Link to="/notifications" className="relative">
            <FaBell className="text-xl" />
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-1 rounded-full">
              2
            </span>
          </Link>

          {/* Wishlist */}
          <Link to="/wishlist" className="relative">

            <FaHeart className="text-xl" />

            {wishlistCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-1 rounded-full">
                {wishlistCount}
              </span>
            )}

            </Link>

          {/* Cart */}
          {/* <Link to="/cart" className="relative">
            <FaShoppingCart className="text-xl" />

            {numberOfItems > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-xs px-1 rounded-full">
                {numberOfItems}
              </span>
            )}
          </Link> */}

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
          className={`fixed top-0 right-0 w-72 h-screen
          bg-gradient-to-b from-[#111827] via-[#0f172a] to-black
          backdrop-blur-xl
          border-l border-white/10
          text-white z-50 rounded-bl-2xl shadow-2xl
          transform transition-transform duration-300 ${
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
  className={`transition ${
    location.pathname === "/"
      ? "text-yellow-400 font-semibold"
      : "text-white hover:text-yellow-400"
  }`}
>
  HOME
</Link>

{/* Mobile Category Dropdown */}
<div>
  <button
    onClick={() => toggleDropdown("mobileCategory")}
    className={`flex items-center justify-between w-full transition ${
      location.pathname.includes("/products")
        ? "text-yellow-400 font-semibold"
        : "text-white hover:text-yellow-400"
    }`}
  >
    CATEGORY

    {activeDropdown === "mobileCategory" ? (
      <FaChevronUp />
    ) : (
      <FaChevronDown />
    )}
  </button>

  {activeDropdown === "mobileCategory" && (
    <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-4 mt-3 space-y-3">
      <Link
        to="/products"
        onClick={toggleMenu}
        className="block hover:text-yellow-400"
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
  className={`transition ${
    location.pathname === "/order"
      ? "text-yellow-400 font-semibold"
      : "text-white hover:text-yellow-400"
  }`}
>
  MY ORDERS
</Link>

<Link
  to="/refer"
  onClick={toggleMenu}
  className={`transition ${
    location.pathname === "/refer"
      ? "text-yellow-400 font-semibold"
      : "text-white hover:text-yellow-400"
  }`}
>
  REFER & EARN
</Link>

<Link
  to="/about"
  onClick={toggleMenu}
  className={`transition ${
    location.pathname === "/about"
      ? "text-yellow-400 font-semibold"
      : "text-white hover:text-yellow-400"
  }`}
>
  ABOUT US
</Link>

</div>
          {/* Login Button */}
<Link
  to="/login"
  onClick={toggleMenu}
  className="block w-full text-center bg-yellow-400 text-black py-3 rounded-xl font-semibold hover:bg-yellow-500 transition mt-2"
>
  Login
</Link>
        </div>
      </div>
    </>
  );
}

export default Navbar;