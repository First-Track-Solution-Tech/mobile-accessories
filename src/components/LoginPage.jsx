import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaEnvelope, FaLock, FaMobileAlt } from "react-icons/fa";

const LoginPage = () => {
  const navigate = useNavigate();

  const [emailOrPhone, setEmailOrPhone] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    // Dummy Login
    if (
      (emailOrPhone === "admin@example.com" ||
        emailOrPhone === "9876543210") &&
      password === "password"
    ) {
      navigate("/dashboard");
    } else {
      alert("Invalid Email/Phone or Password");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-100 via-white to-purple-100 px-4">
      
      <div className="w-full max-w-md bg-white shadow-2xl rounded-2xl p-8">
        
        {/* Heading */}
        <div className="text-center mb-6">
          <h1 className="text-3xl font-bold text-gray-800">
            Welcome Back
          </h1>
          <p className="text-gray-500 mt-2">
            Login to your Mobile Shop account
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleLogin}>
          
          {/* Email / Phone */}
          <div className="mb-5 text-left">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Email Address / Phone Number
            </label>

            <div className="flex items-center border rounded-xl p-3 bg-gray-50 focus-within:border-blue-500">
              <FaMobileAlt className="text-gray-500 mr-2" />
              <input
                type="text"
                placeholder="Enter email or phone number"
                className="w-full bg-transparent outline-none"
                value={emailOrPhone}
                onChange={(e) => setEmailOrPhone(e.target.value)}
                required
              />
            </div>
          </div>

          {/* Password */}
          <div className="mb-3 text-left">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Password
            </label>

            <div className="flex items-center border rounded-xl p-3 bg-gray-50 focus-within:border-blue-500">
              <FaLock className="text-gray-500 mr-2" />
              <input
                type="password"
                placeholder="Enter password"
                className="w-full bg-transparent outline-none"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
          </div>

          {/* Forgot Password */}
          <div className="text-right mb-5">
            <Link
              to="/forgot-password"
              className="text-sm text-blue-600 hover:underline"
            >
              Forgot Password?
            </Link>
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full bg-black text-white py-3 rounded-xl text-lg font-semibold hover:bg-blue-600 transition duration-300"
          >
            Sign In
          </button>
        </form>

        {/* Register */}
        <p className="text-sm text-gray-600 mt-6 text-center">
          New User?{" "}
          <Link
            to="/register"
            className="text-blue-600 font-semibold hover:underline"
          >
            Create a new account
          </Link>
        </p>

        {/* Divider */}
        <div className="flex items-center my-6">
          <hr className="flex-grow border-gray-300" />
          <span className="px-3 text-gray-400 text-sm">OR</span>
          <hr className="flex-grow border-gray-300" />
        </div>

        {/* Social Login */}
        <button className="w-full border border-gray-300 py-3 rounded-xl hover:bg-gray-100 transition">
          Continue with Google
        </button>
      </div>
    </div>
  );
};

export default LoginPage;