// import React, { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import {
//   FaEnvelope,
//   FaLock,
//   FaMobileAlt,
//   FaGoogle,
//   FaFacebookF,
// } from "react-icons/fa";

// const LoginPage = () => {
//   const navigate = useNavigate();

//   const [emailOrPhone, setEmailOrPhone] = useState("");
//   const [password, setPassword] = useState("");

//   const handleLogin = (e) => {
//     e.preventDefault();

//     if (
//       (emailOrPhone === "admin@example.com" ||
//         emailOrPhone === "9876543210") &&
//       password === "password"
//     ) {
//       navigate("/");
//     } else {
//       alert("Invalid Email/Phone or Password");
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-blue-900 via-indigo-800 to-black flex items-center justify-center px-4 py-10">
      
//       <div className="w-full max-w-5xl grid md:grid-cols-2 bg-white/10 backdrop-blur-lg rounded-3xl overflow-hidden shadow-2xl border border-white/20">
        
//         {/* Left Side Branding */}
//         <div className="hidden md:flex flex-col justify-center items-center bg-gradient-to-br from-blue-600 to-indigo-700 text-white p-10">
          
//           <img
//             src="/Logo_Design.png"
//             alt="logo"
//             className="w-28 h-28 rounded-full mb-6 shadow-lg"
//           />

//           <h1 className="text-4xl font-bold mb-4">
//             Mobile Shop
//           </h1>

//           <p className="text-center text-lg text-gray-200 leading-relaxed">
//             Buy the latest mobile accessories at the best price.
//             Fast delivery, easy returns & secure payments.
//           </p>

//           <div className="mt-8 flex gap-4">
//             <div className="bg-white/20 px-4 py-2 rounded-full">
//               Fast Delivery 🚚
//             </div>
//             <div className="bg-white/20 px-4 py-2 rounded-full">
//               Secure Payment 🔒
//             </div>
//           </div>
//         </div>

//         {/* Right Side Login Form */}
//         <div className="bg-white p-8 md:p-10">
          
//           <div className="text-center mb-8">
//             <h2 className="text-3xl font-bold text-gray-800">
//               Welcome Back 👋
//             </h2>
//             <p className="text-gray-500 mt-2">
//               Login to continue shopping
//             </p>
//           </div>

//           <form onSubmit={handleLogin}>
            
//             {/* Email/Phone */}
//             <div className="mb-5">
//               <label className="block text-sm font-semibold mb-2 text-gray-700">
//                 Email / Phone
//               </label>

//               <div className="flex items-center bg-gray-100 rounded-xl px-4 py-3 focus-within:ring-2 focus-within:ring-blue-500">
//                 <FaMobileAlt className="text-gray-500 mr-3" />

//                 <input
//                   type="text"
//                   placeholder="Enter email or phone"
//                   className="w-full bg-transparent outline-none"
//                   value={emailOrPhone}
//                   onChange={(e) =>
//                     setEmailOrPhone(e.target.value)
//                   }
//                   required
//                 />
//               </div>
//             </div>

//             {/* Password */}
//             <div className="mb-4">
//               <label className="block text-sm font-semibold mb-2 text-gray-700">
//                 Password
//               </label>

//               <div className="flex items-center bg-gray-100 rounded-xl px-4 py-3 focus-within:ring-2 focus-within:ring-blue-500">
//                 <FaLock className="text-gray-500 mr-3" />

//                 <input
//                   type="password"
//                   placeholder="Enter password"
//                   className="w-full bg-transparent outline-none"
//                   value={password}
//                   onChange={(e) =>
//                     setPassword(e.target.value)
//                   }
//                   required
//                 />
//               </div>
//             </div>

//             {/* Forgot Password */}
//             <div className="text-right mb-6">
//               <Link
//                 to="/forgot-password"
//                 className="text-sm text-blue-600 hover:underline"
//               >
//                 Forgot Password?
//               </Link>
//             </div>

//             {/* Login Button */}
//             <button
//               type="submit"
//               className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-3 rounded-xl font-semibold text-lg hover:scale-105 transition duration-300 shadow-lg"
//             >
//               Login Now
//             </button>
//           </form>

//           {/* Divider */}
//           <div className="flex items-center my-6">
//             <hr className="flex-grow border-gray-300" />
//             <span className="px-3 text-gray-400 text-sm">
//               OR
//             </span>
//             <hr className="flex-grow border-gray-300" />
//           </div>

//           {/* Social Login */}
//           <div className="grid grid-cols-2 gap-4">
//             <button className="flex items-center justify-center gap-2 border py-3 rounded-xl hover:bg-gray-100 transition">
//               <FaGoogle className="text-red-500" />
//               Google
//             </button>

//             <button className="flex items-center justify-center gap-2 border py-3 rounded-xl hover:bg-gray-100 transition">
//               <FaFacebookF className="text-blue-600" />
//               Facebook
//             </button>
//           </div>

//           {/* Register */}
//           <p className="text-center text-gray-600 mt-6">
//             Don't have an account?{" "}
//             <Link
//               to="/register"
//               className="text-blue-600 font-semibold hover:underline"
//             >
//               Register Now
//             </Link>
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default LoginPage;




import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  FaLock,
  FaMobileAlt,
  FaGoogle,
  FaFacebookF,
} from "react-icons/fa";

const LoginPage = () => {
  const navigate = useNavigate();

  const [emailOrPhone, setEmailOrPhone] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    if (
      (emailOrPhone === "admin@example.com" ||
        emailOrPhone === "9876543210") &&
      password === "password"
    ) {
      navigate("/");
    } else {
      alert("Invalid Email/Phone or Password");
    }
  };

  return (
    <div className="bg-gradient-to-br from-blue-900 via-indigo-800 to-black min-h-screen overflow-y-auto px-4 py-6 md:py-10">
      
      <div className="w-full max-w-5xl mx-auto my-6 grid grid-cols-1 md:grid-cols-2 bg-white/10 backdrop-blur-lg rounded-3xl overflow-hidden shadow-2xl border border-white/20">

        {/* Branding Section */}
        <div className="flex flex-col justify-center items-center bg-gradient-to-br from-blue-600 to-indigo-700 text-white p-6 md:p-10">
          
          <img
            src="/Logo_Design.png"
            alt="logo"
            className="w-20 h-20 md:w-28 md:h-28 rounded-full mb-4 md:mb-6 shadow-lg"
          />

          <h1 className="text-2xl md:text-4xl font-bold mb-3 text-center">
            Mobiee Shop
          </h1>

          <p className="text-center text-sm md:text-lg text-gray-200 leading-relaxed">
            Buy the latest mobile accessories at the best price.
            Fast delivery, easy returns & secure payments.
          </p>

          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <div className="bg-white/20 px-4 py-2 rounded-full text-sm">
              Fast Delivery 🚚
            </div>

            <div className="bg-white/20 px-4 py-2 rounded-full text-sm">
              Secure Payment 🔒
            </div>
          </div>
        </div>

        {/* Login Form Section */}
        <div className="bg-white p-5 md:p-10">

          <div className="text-center mb-6">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
              Welcome Back 👋
            </h2>

            <p className="text-sm md:text-base text-gray-500 mt-2">
              Login to continue shopping
            </p>
          </div>

          <form onSubmit={handleLogin}>
            
            {/* Email/Phone */}
            <div className="mb-5">
              <label className="block text-sm font-semibold mb-2 text-gray-700">
                Email / Phone
              </label>

              <div className="flex items-center bg-gray-100 rounded-xl px-4 py-3 focus-within:ring-2 focus-within:ring-blue-500">
                <FaMobileAlt className="text-gray-500 mr-3" />

                <input
                  type="text"
                  placeholder="Enter email or phone"
                  className="w-full bg-transparent outline-none text-sm md:text-base"
                  value={emailOrPhone}
                  onChange={(e) =>
                    setEmailOrPhone(e.target.value)
                  }
                  required
                />
              </div>
            </div>

            {/* Password */}
            <div className="mb-4">
              <label className="block text-sm font-semibold mb-2 text-gray-700">
                Password
              </label>

              <div className="flex items-center bg-gray-100 rounded-xl px-4 py-3 focus-within:ring-2 focus-within:ring-blue-500">
                <FaLock className="text-gray-500 mr-3" />

                <input
                  type="password"
                  placeholder="Enter password"
                  className="w-full bg-transparent outline-none text-sm md:text-base"
                  value={password}
                  onChange={(e) =>
                    setPassword(e.target.value)
                  }
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
              className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-3 rounded-xl font-semibold text-lg hover:scale-105 transition duration-300 shadow-lg"
            >
              Login Now
            </button>
          </form>

          {/* Divider */}
          <div className="flex items-center my-5">
            <hr className="flex-grow border-gray-300" />
            <span className="px-3 text-gray-400 text-sm">
              OR
            </span>
            <hr className="flex-grow border-gray-300" />
          </div>

          {/* Social Login */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <button className="flex items-center justify-center gap-2 border py-3 rounded-xl hover:bg-gray-100 transition">
              <FaGoogle className="text-red-500" />
              Google
            </button>

            <button className="flex items-center justify-center gap-2 border py-3 rounded-xl hover:bg-gray-100 transition">
              <FaFacebookF className="text-blue-600" />
              Facebook
            </button>
          </div>

          {/* Register Section */}
          <div className="mt-6 text-center pb-2">
            <p className="text-gray-600 text-sm md:text-base">
              Don't have an account?
            </p>

            <Link
              to="/register"
              className="inline-block mt-2 text-blue-600 font-semibold hover:underline"
            >
              Register Now
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;