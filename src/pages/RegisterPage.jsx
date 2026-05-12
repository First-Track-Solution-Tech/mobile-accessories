// import React from "react";
// import { Link } from "react-router-dom";
// import {
//   FaUser,
//   FaEnvelope,
//   FaLock,
//   FaMobileAlt,
//   FaGoogle,
// } from "react-icons/fa";

// const RegisterPage = () => {
//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-900 via-indigo-900 to-black px-4 py-8">

//       <div className="w-full max-w-5xl bg-white rounded-3xl shadow-2xl overflow-hidden grid grid-cols-1 md:grid-cols-2">

//         {/* Left Side */}
//         <div className="hidden md:flex flex-col justify-center bg-gradient-to-br from-blue-600 via-indigo-700 to-purple-700 text-white p-10 relative">
          
//           <div className="absolute top-6 left-6">
//             <img
//               src="/Logo_Design.png"
//               alt="logo"
//               className="w-16 h-16 rounded-full"
//             />
//           </div>

//           <h1 className="text-4xl font-bold mb-4 mt-10">
//             Join Mobile Shop 🚀
//           </h1>

//           <p className="text-lg text-gray-200 leading-relaxed">
//             Create your account and get access to:
//           </p>

//           <ul className="mt-6 space-y-4 text-lg">
//             <li>✅ Exclusive Discounts</li>
//             <li>✅ Faster Checkout</li>
//             <li>✅ Order Tracking</li>
//             <li>✅ Wishlist Saving</li>
//             <li>✅ Special Member Offers</li>
//           </ul>

//           <div className="mt-10">
//             <img
//               src="/assets/register-banner.png"
//               alt="register"
//               className="w-full max-w-sm mx-auto"
//             />
//           </div>
//         </div>

//         {/* Right Side Form */}
//         <div className="p-8 md:p-10">

//           {/* Heading */}
//           <div className="text-center mb-6">
//             <h2 className="text-3xl font-bold text-gray-800">
//               Create Account
//             </h2>

//             <p className="text-gray-500 mt-2">
//               Register to start shopping
//             </p>
//           </div>

//           <form className="space-y-4">

//             {/* Full Name */}
//             <div>
//               <label className="text-sm font-medium text-gray-700">
//                 Full Name
//               </label>

//               <div className="flex items-center mt-2 border rounded-xl px-4 py-3 bg-gray-50 focus-within:border-blue-500">
//                 <FaUser className="text-gray-400 mr-3" />
//                 <input
//                   type="text"
//                   placeholder="Enter full name"
//                   className="w-full bg-transparent outline-none"
//                 />
//               </div>
//             </div>

//             {/* Email */}
//             <div>
//               <label className="text-sm font-medium text-gray-700">
//                 Email Address
//               </label>

//               <div className="flex items-center mt-2 border rounded-xl px-4 py-3 bg-gray-50 focus-within:border-blue-500">
//                 <FaEnvelope className="text-gray-400 mr-3" />
//                 <input
//                   type="email"
//                   placeholder="Enter email"
//                   className="w-full bg-transparent outline-none"
//                 />
//               </div>
//             </div>

//             {/* Mobile */}
//             <div>
//               <label className="text-sm font-medium text-gray-700">
//                 Mobile Number
//               </label>

//               <div className="flex items-center mt-2 border rounded-xl px-4 py-3 bg-gray-50 focus-within:border-blue-500">
//                 <FaMobileAlt className="text-gray-400 mr-3" />
//                 <input
//                   type="text"
//                   placeholder="Enter mobile number"
//                   className="w-full bg-transparent outline-none"
//                 />
//               </div>
//             </div>

//             {/* Password */}
//             <div>
//               <label className="text-sm font-medium text-gray-700">
//                 Password
//               </label>

//               <div className="flex items-center mt-2 border rounded-xl px-4 py-3 bg-gray-50 focus-within:border-blue-500">
//                 <FaLock className="text-gray-400 mr-3" />
//                 <input
//                   type="password"
//                   placeholder="Create password"
//                   className="w-full bg-transparent outline-none"
//                 />
//               </div>
//             </div>

//             {/* Confirm Password */}
//             <div>
//               <label className="text-sm font-medium text-gray-700">
//                 Confirm Password
//               </label>

//               <div className="flex items-center mt-2 border rounded-xl px-4 py-3 bg-gray-50 focus-within:border-blue-500">
//                 <FaLock className="text-gray-400 mr-3" />
//                 <input
//                   type="password"
//                   placeholder="Confirm password"
//                   className="w-full bg-transparent outline-none"
//                 />
//               </div>
//             </div>

//             {/* Terms */}
//             <div className="flex items-start gap-2 text-sm text-gray-600">
//               <input type="checkbox" className="mt-1" />

//               <p>
//                 I agree to the{" "}
//                 <Link
//                   to="/terms"
//                   className="text-blue-600 font-medium"
//                 >
//                   Terms
//                 </Link>{" "}
//                 &{" "}
//                 <Link
//                   to="/privacy"
//                   className="text-blue-600 font-medium"
//                 >
//                   Privacy Policy
//                 </Link>
//               </p>
//             </div>

//             {/* Register Button */}
//             <button
//               type="submit"
//               className="w-full bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-3 rounded-xl font-semibold hover:scale-105 transition duration-300 shadow-lg"
//             >
//               Create Account
//             </button>
//           </form>

//           {/* Divider */}
//           <div className="flex items-center my-6">
//             <hr className="flex-grow border-gray-300" />
//             <span className="px-3 text-gray-400 text-sm">OR</span>
//             <hr className="flex-grow border-gray-300" />
//           </div>

//           {/* Google Signup */}
//           <button className="w-full border border-gray-300 py-3 rounded-xl flex items-center justify-center gap-2 hover:bg-gray-100 transition">
//             <FaGoogle className="text-red-500" />
//             Continue with Google
//           </button>

//           {/* Login Link */}
//           <p className="text-center text-gray-600 mt-6">
//             Already have an account?{" "}
//             <Link
//               to="/login"
//               className="text-blue-600 font-semibold hover:underline"
//             >
//               Sign In
//             </Link>
//           </p>

//         </div>
//       </div>
//     </div>
//   );
// };

// export default RegisterPage;



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
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-indigo-900 to-black px-4 py-6 md:py-8 overflow-auto">

      <div className="w-full max-w-5xl mx-auto bg-white rounded-3xl shadow-2xl overflow-hidden grid grid-cols-1 md:grid-cols-2">

        {/* Left Side */}
        <div className="flex flex-col justify-center bg-gradient-to-br from-blue-600 via-indigo-700 to-purple-700 text-white p-5 md:p-10">

          {/* Logo */}
          <div className="flex justify-center md:justify-start">
            <img
              src="/Logo_Design.png"
              alt="logo"
              className="w-16 h-16 rounded-full"
            />
          </div>

          {/* Heading */}
          <h1 className="text-2xl md:text-4xl font-bold mt-5 mb-4 text-center md:text-left">
            Join Mobiee Shop 🚀
          </h1>

          <p className="text-sm md:text-lg text-gray-200 text-center md:text-left">
            Create your account and unlock amazing benefits:
          </p>

          {/* Benefits */}
          <ul className="mt-5 space-y-2 text-sm md:text-lg text-center md:text-left">
            <li>✅ Exclusive Discounts</li>
            <li>✅ Faster Checkout</li>
            <li>✅ Order Tracking</li>
            <li>✅ Wishlist Saving</li>
            <li>✅ Special Member Offers</li>
          </ul>

          {/* Register Image */}
          {/* <div className="mt-6 flex justify-center">
            <img
              src="/register-banner.png"
              alt="register"
              className="w-48 md:w-72 object-contain"
            />
          </div> */}
        </div>

        {/* Right Side Form */}
        <div className="p-5 md:p-8 bg-white">

          {/* Heading */}
          <div className="text-center mb-5">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
              Create Account
            </h2>

            <p className="text-gray-500 text-sm mt-2">
              Register to start shopping
            </p>
          </div>

          <form className="space-y-3">

            {/* Full Name */}
            <div>
              <label className="text-sm font-medium text-gray-700">
                Full Name
              </label>

              <div className="flex items-center mt-2 border rounded-xl px-4 py-3 bg-gray-50">
                <FaUser className="text-gray-400 mr-3" />
                <input
                  type="text"
                  placeholder="Enter full name"
                  className="w-full bg-transparent outline-none"
                />
              </div>
            </div>

            {/* Email */}
            <div>
              <label className="text-sm font-medium text-gray-700">
                Email Address
              </label>

              <div className="flex items-center mt-2 border rounded-xl px-4 py-3 bg-gray-50">
                <FaEnvelope className="text-gray-400 mr-3" />
                <input
                  type="email"
                  placeholder="Enter email"
                  className="w-full bg-transparent outline-none"
                />
              </div>
            </div>

            {/* Mobile */}
            <div>
              <label className="text-sm font-medium text-gray-700">
                Mobile Number
              </label>

              <div className="flex items-center mt-2 border rounded-xl px-4 py-3 bg-gray-50">
                <FaMobileAlt className="text-gray-400 mr-3" />
                <input
                  type="text"
                  placeholder="Enter mobile number"
                  className="w-full bg-transparent outline-none"
                />
              </div>
            </div>

            {/* Password */}
            <div>
              <label className="text-sm font-medium text-gray-700">
                Password
              </label>

              <div className="flex items-center mt-2 border rounded-xl px-4 py-3 bg-gray-50">
                <FaLock className="text-gray-400 mr-3" />
                <input
                  type="password"
                  placeholder="Create password"
                  className="w-full bg-transparent outline-none"
                />
              </div>
            </div>

            {/* Confirm Password */}
            <div>
              <label className="text-sm font-medium text-gray-700">
                Confirm Password
              </label>

              <div className="flex items-center mt-2 border rounded-xl px-4 py-3 bg-gray-50">
                <FaLock className="text-gray-400 mr-3" />
                <input
                  type="password"
                  placeholder="Confirm password"
                  className="w-full bg-transparent outline-none"
                />
              </div>
            </div>

            {/* Terms */}
            <div className="flex items-start gap-2 text-sm text-gray-600">
              <input type="checkbox" className="mt-1" />

              <p>
                I agree to the{" "}
                <Link
                  to="/terms"
                  className="text-blue-600 font-medium hover:underline"
                >
                  Terms
                </Link>{" "}
                &{" "}
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
              className="w-full bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-3 rounded-xl font-semibold hover:scale-105 transition duration-300 shadow-lg"
            >
              Create Account
            </button>
          </form>

          {/* Divider */}
          <div className="flex items-center my-4">
            <hr className="flex-grow border-gray-300" />
            <span className="px-3 text-gray-400 text-sm">
              OR
            </span>
            <hr className="flex-grow border-gray-300" />
          </div>

          {/* Google Signup */}
          <button className="w-full border border-gray-300 py-3 rounded-xl flex items-center justify-center gap-2 hover:bg-gray-100 transition">
            <FaGoogle className="text-red-500" />
            Continue with Google
          </button>

          {/* Sign In Button */}
          <div className="text-center mt-6 mb-6">
            <p className="text-gray-600 text-sm md:text-base">
              Already have an account?
            </p>

            <Link
              to="/login"
              className="inline-block mt-2 bg-blue-600 text-white px-6 py-2 rounded-full font-semibold hover:bg-blue-700 transition"
            >
              Sign In
            </Link>
          </div>

        </div>
      </div>
    </div>
  );
};

export default RegisterPage;