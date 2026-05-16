// export default function AuthPage() {
//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-white p-8 rounded-lg shadow-lg max-w-4xl w-full">
        
//         {/* Login Section */}
//         <div>
//           <h2 className="text-2xl font-bold mb-4">Login</h2>
//           <div>
//             <label className="block text-sm font-medium text-gray-700">Phone <span className="text-red-500">*</span></label>
//             <div className="flex gap-2 mt-1">
//               <select className="border border-gray-300 rounded p-2">
//                 <option>IN +91</option>
//               </select>
//               <input type="text" placeholder="Enter phone number" className="border border-gray-300 rounded p-2 w-full" />
//             </div>
//           </div>
//           <div className="mt-4 flex gap-2">
//             <button className="bg-black text-white py-2 px-4 rounded">LOGIN WITH OTP</button>
//             <button className="bg-black text-white py-2 px-4 rounded">LOGIN WITH EMAIL & PASSWORD</button>
//           </div>
//         </div>

//         {/* Register Section */}
//         <div className="bg-gray-50 p-6 rounded-lg">
//           <h2 className="text-2xl font-bold mb-4">Register</h2>
//           <div>
//             <label className="block text-sm font-medium text-gray-700">Phone <span className="text-red-500">*</span></label>
//             <div className="flex gap-2 mt-1">
//               <select className="border border-gray-300 rounded p-2">
//                 <option>IN +91</option>
//               </select>
//               <input type="text" placeholder="Enter phone number" className="border border-gray-300 rounded p-2 w-full" />
//               <button className="text-blue-500 text-sm">VERIFY</button>
//             </div>
//           </div>
//           <div className="mt-3">
//             <label className="block text-sm font-medium text-gray-700">Username <span className="text-red-500">*</span></label>
//             <input type="text" className="border border-gray-300 rounded p-2 w-full" placeholder="Enter username" />
//           </div>
//           <div className="mt-3">
//             <label className="block text-sm font-medium text-gray-700">Email address <span className="text-red-500">*</span></label>
//             <input type="email" className="border border-gray-300 rounded p-2 w-full" placeholder="Enter email" />
//           </div>
//           <div className="mt-3">
//             <label className="block text-sm font-medium text-gray-700">Password <span className="text-red-500">*</span></label>
//             <input type="password" className="border border-gray-300 rounded p-2 w-full" placeholder="Enter password" />
//           </div>
//           <p className="text-sm text-gray-600 mt-3">
//             Your personal data will be used to support your experience throughout this website, to manage access to your account, and for purposes described in our <a href="#" className="text-blue-600">privacy policy</a>.
//           </p>
//           <button className="bg-black text-white py-2 px-4 w-full mt-4 rounded">REGISTER</button>
//         </div>

//       </div>
//     </div>
//   );
// }





import React from "react";
import {
  FaPhoneAlt,
  FaUser,
  FaEnvelope,
  FaLock,
  FaCheckCircle
} from "react-icons/fa";

export default function AuthPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f172a] via-[#1e3a8a] to-black flex items-center justify-center px-4 py-10">

      <div className="w-full max-w-6xl bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl shadow-2xl overflow-hidden grid grid-cols-1 lg:grid-cols-2">

        {/* Left Branding Section */}
        <div className="hidden lg:flex flex-col justify-center items-center bg-gradient-to-br from-blue-600 via-indigo-700 to-purple-700 text-white p-10 relative">

          <img
            src="/Logo1_Design.png"
            alt="logo"
            className="w-24 h-24 rounded-full mb-6 shadow-lg"
          />

          <h1 className="text-4xl font-bold mb-4">
            Welcome to Mobiee Shop
          </h1>

          <p className="text-center text-lg text-gray-200 leading-relaxed max-w-md">
            Shop premium mobile accessories with secure login,
            fast checkout, exclusive deals and amazing offers.
          </p>

          <div className="mt-8 space-y-4">
            <div className="flex items-center gap-3">
              <FaCheckCircle />
              <span>Fast Delivery</span>
            </div>

            <div className="flex items-center gap-3">
              <FaCheckCircle />
              <span>Secure Payments</span>
            </div>

            <div className="flex items-center gap-3">
              <FaCheckCircle />
              <span>Easy Returns</span>
            </div>
          </div>

          {/* <img
            src="/register-banner.png"
            alt="banner"
            className="w-72 mt-8"
          /> */}
        </div>

        {/* Right Form Section */}
        <div className="bg-white p-6 md:p-10">

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

            {/* Login Section */}
            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-5">
                Login
              </h2>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Phone Number
                </label>

                <div className="flex gap-2">
                  <select className="border rounded-xl px-3 py-3 bg-gray-100">
                    <option>+91</option>
                  </select>

                  <div className="flex items-center bg-gray-100 rounded-xl px-4 w-full">
                    <FaPhoneAlt className="text-gray-500 mr-2" />
                    <input
                      type="text"
                      placeholder="Enter phone number"
                      className="w-full bg-transparent py-3 outline-none"
                    />
                  </div>
                </div>
              </div>

              <button className="w-full bg-black text-white py-3 rounded-xl mt-5 hover:bg-gray-800 transition">
                Login with OTP
              </button>

              <button className="w-full mt-3 border border-black text-black py-3 rounded-xl hover:bg-black hover:text-white transition">
                Login with Email & Password
              </button>
            </div>

            {/* Register Section */}
            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-5">
                Register
              </h2>

              {/* Phone */}
              <div className="mb-4">
                <label className="text-sm font-medium text-gray-700">
                  Phone Number
                </label>

                <div className="flex gap-2 mt-2">
                  <select className="border rounded-xl px-3 py-3 bg-gray-100">
                    <option>+91</option>
                  </select>

                  <input
                    type="text"
                    placeholder="Enter phone number"
                    className="w-full border rounded-xl px-4 py-3"
                  />

                  <button className="text-blue-600 font-semibold text-sm">
                    Verify
                  </button>
                </div>
              </div>

              {/* Username */}
              <div className="mb-4">
                <div className="flex items-center border rounded-xl px-4 py-3 bg-gray-100">
                  <FaUser className="text-gray-500 mr-2" />
                  <input
                    type="text"
                    placeholder="Username"
                    className="w-full bg-transparent outline-none"
                  />
                </div>
              </div>

              {/* Email */}
              <div className="mb-4">
                <div className="flex items-center border rounded-xl px-4 py-3 bg-gray-100">
                  <FaEnvelope className="text-gray-500 mr-2" />
                  <input
                    type="email"
                    placeholder="Email Address"
                    className="w-full bg-transparent outline-none"
                  />
                </div>
              </div>

              {/* Password */}
              <div className="mb-4">
                <div className="flex items-center border rounded-xl px-4 py-3 bg-gray-100">
                  <FaLock className="text-gray-500 mr-2" />
                  <input
                    type="password"
                    placeholder="Password"
                    className="w-full bg-transparent outline-none"
                  />
                </div>
              </div>

              <p className="text-sm text-gray-500 leading-relaxed">
                Your personal data will be used to support your
                experience throughout this website and as described
                in our privacy policy.
              </p>

              <button className="w-full bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-3 rounded-xl mt-5 hover:scale-105 transition duration-300 shadow-lg">
                Register Now
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}