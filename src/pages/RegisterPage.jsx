import React from "react";
import { Link } from "react-router-dom";
import {
  FaUser,
  FaEnvelope,
  FaLock,
  FaMobileAlt,
  FaGoogle,
} from "react-icons/fa";

const RegisterPage = () => {
  return (
    <div className="min-h-screen flex justify-center items-center bg-gradient-to-r from-blue-100 via-white to-purple-100 px-4 py-10">
      
      <div className="bg-white w-full max-w-md p-8 rounded-2xl shadow-2xl">
        
        {/* Heading */}
        <div className="text-center mb-6">
          <h2 className="text-3xl font-bold text-gray-800">
            Create Account
          </h2>
          <p className="text-gray-500 mt-2">
            Join Mobile Shop and start shopping today
          </p>
        </div>

        <form className="space-y-4">
          
          {/* Full Name */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Full Name
            </label>
            <div className="flex items-center border rounded-xl p-3 bg-gray-50 focus-within:border-blue-500">
              <FaUser className="text-gray-500 mr-3" />
              <input
                type="text"
                placeholder="Enter your full name"
                className="w-full bg-transparent outline-none"
              />
            </div>
          </div>

          {/* Email */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Email Address
            </label>
            <div className="flex items-center border rounded-xl p-3 bg-gray-50 focus-within:border-blue-500">
              <FaEnvelope className="text-gray-500 mr-3" />
              <input
                type="email"
                placeholder="you@example.com"
                className="w-full bg-transparent outline-none"
              />
            </div>
          </div>

          {/* Mobile Number */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Mobile Number
            </label>
            <div className="flex items-center border rounded-xl p-3 bg-gray-50 focus-within:border-blue-500">
              <FaMobileAlt className="text-gray-500 mr-3" />
              <input
                type="tel"
                placeholder="Enter mobile number"
                className="w-full bg-transparent outline-none"
              />
            </div>
          </div>

          {/* Password */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Password
            </label>
            <div className="flex items-center border rounded-xl p-3 bg-gray-50 focus-within:border-blue-500">
              <FaLock className="text-gray-500 mr-3" />
              <input
                type="password"
                placeholder="Create password"
                className="w-full bg-transparent outline-none"
              />
            </div>
          </div>

          {/* Confirm Password */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Confirm Password
            </label>
            <div className="flex items-center border rounded-xl p-3 bg-gray-50 focus-within:border-blue-500">
              <FaLock className="text-gray-500 mr-3" />
              <input
                type="password"
                placeholder="Confirm password"
                className="w-full bg-transparent outline-none"
              />
            </div>
          </div>

          {/* Terms Checkbox */}
          <div className="flex items-start gap-2 text-sm text-gray-600">
            <input type="checkbox" className="mt-1" />
            <p>
              I agree to the{" "}
              <Link
                to="/terms"
                className="text-blue-600 font-medium hover:underline"
              >
                Terms & Conditions
              </Link>{" "}
              and{" "}
              <Link
                to="/privacy"
                className="text-blue-600 font-medium hover:underline"
              >
                Privacy Policy
              </Link>
            </p>
          </div>

          {/* Register Button */}
          <button
            type="submit"
            className="w-full bg-black text-white py-3 rounded-xl font-semibold hover:bg-blue-600 transition duration-300"
          >
            Create Account
          </button>
        </form>

        {/* Divider */}
        <div className="flex items-center my-5">
          <hr className="flex-grow border-gray-300" />
          <span className="px-3 text-gray-400 text-sm">OR</span>
          <hr className="flex-grow border-gray-300" />
        </div>

        {/* Google Signup */}
        <button className="w-full border border-gray-300 py-3 rounded-xl flex items-center justify-center gap-2 hover:bg-gray-100 transition">
          <FaGoogle className="text-red-500" />
          Continue with Google
        </button>

        {/* Login Link */}
        <p className="text-center text-gray-600 mt-5">
          Already have an account?{" "}
          <Link
            to="/login"
            className="text-blue-600 font-semibold hover:underline"
          >
            Sign In
          </Link>
        </p>
      </div>
    </div>
  );
};

export default RegisterPage;