// import React from "react";
// import { FaShippingFast, FaMoneyBillWave, FaBoxOpen, FaHeadset } from "react-icons/fa";

// const ShippingPolicy = () => {
//   return (
//     <div className="bg-gradient-to-br from-gray-100 to-gray-200 py-16 px-6 md:px-12">
//       <div className="max-w-5xl mx-auto">

//         {/* Header */}
//         <div className="text-center mb-10">
//           <h2 className="text-4xl font-extrabold text-gray-800 mb-2">
//             Shipping & Delivery Policy
//           </h2>
//           <p className="text-gray-500 max-w-xl mx-auto">
//             Fast, reliable, and secure delivery across India. Know everything about our shipping process.
//           </p>
//         </div>

//         {/* Card Container */}
//         <div className="grid md:grid-cols-2 gap-8">

//           {/* Delivery Time */}
//           <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition">
//             <div className="flex items-center mb-4">
//               <FaShippingFast className="text-blue-600 text-3xl mr-3" />
//               <h3 className="text-xl font-semibold">Delivery Time</h3>
//             </div>
//             <p className="text-gray-600">
//               Standard delivery takes <strong>3-5 working days</strong> depending on your location.
//             </p>
//             <p className="text-gray-600 mt-2">
//               Speedpost delivery may take <strong>7-10 working days</strong>.
//             </p>
//           </div>

//           {/* Shipping Charges */}
//           <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition">
//             <div className="flex items-center mb-4">
//               <FaMoneyBillWave className="text-green-600 text-3xl mr-3" />
//               <h3 className="text-xl font-semibold">Shipping Charges</h3>
//             </div>
//             <p className="text-gray-600">
//               Free shipping on prepaid orders above <strong>₹400</strong>.
//             </p>
//             <p className="text-gray-600 mt-2">
//               Below ₹400: <strong>₹69</strong> | COD: <strong>₹99</strong>
//             </p>
//           </div>

//           {/* Failed Delivery */}
//           <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition">
//             <div className="flex items-center mb-4">
//               <FaBoxOpen className="text-red-600 text-3xl mr-3" />
//               <h3 className="text-xl font-semibold">Failed Delivery</h3>
//             </div>
//             <p className="text-gray-600">
//               Our courier will attempt delivery <strong>3 times</strong>.
//             </p>
//             <p className="text-gray-600 mt-2">
//               If unsuccessful, refund will be added to your wallet.
//             </p>
//           </div>

//           {/* Support Section */}
//           <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition">
//             <div className="flex items-center mb-4">
//               <FaHeadset className="text-purple-600 text-3xl mr-3" />
//               <h3 className="text-xl font-semibold">Need Help?</h3>
//             </div>
//             <p className="text-gray-600">
//               Our support team is available 24/7 to assist you with your orders.
//             </p>
//             <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
//               Contact Support
//             </button>
//           </div>

//         </div>

//         {/* Bottom Note */}
//         <div className="text-center mt-12 text-gray-500 text-sm">
//           *Delivery timelines may vary during festivals or high demand periods.
//         </div>

//       </div>
//       {/* Footer always at bottom */}
//       <Footer />
//     </div>
     
//   );
// };

// export default ShippingPolicy;




import React from "react";
import {
  FaShippingFast,
  FaMoneyBillWave,
  FaBoxOpen,
  FaHeadset
} from "react-icons/fa";

import Footer from "../components/Footer"; // Footer import karo

const ShippingPolicy = () => {
  return (
    <>
      <div className="bg-gradient-to-br from-gray-100 to-gray-200 py-16 px-6 md:px-12">
        <div className="max-w-5xl mx-auto">

          {/* Header */}
          <div className="text-center mb-10">
            <h2 className="text-4xl font-extrabold text-gray-800 mb-2">
              Shipping & Delivery Policy
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto">
              Fast, reliable, and secure delivery across India.
              Know everything about our shipping process.
            </p>
          </div>

          {/* Card Container */}
          <div className="grid md:grid-cols-2 gap-8">

            {/* Delivery Time */}
            <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition">
              <div className="flex items-center mb-4">
                <FaShippingFast className="text-blue-600 text-3xl mr-3" />
                <h3 className="text-xl font-semibold">Delivery Time</h3>
              </div>
              <p className="text-gray-600">
                Standard delivery takes <strong>3-5 working days</strong>
                depending on your location.
              </p>
              <p className="text-gray-600 mt-2">
                Speedpost delivery may take <strong>7-10 working days</strong>.
              </p>
            </div>

            {/* Shipping Charges */}
            <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition">
              <div className="flex items-center mb-4">
                <FaMoneyBillWave className="text-green-600 text-3xl mr-3" />
                <h3 className="text-xl font-semibold">Shipping Charges</h3>
              </div>
              <p className="text-gray-600">
                Free shipping on prepaid orders above <strong>₹400</strong>.
              </p>
              <p className="text-gray-600 mt-2">
                Below ₹400: <strong>₹69</strong> | COD: <strong>₹99</strong>
              </p>
            </div>

            {/* Failed Delivery */}
            <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition">
              <div className="flex items-center mb-4">
                <FaBoxOpen className="text-red-600 text-3xl mr-3" />
                <h3 className="text-xl font-semibold">Failed Delivery</h3>
              </div>
              <p className="text-gray-600">
                Our courier will attempt delivery <strong>3 times</strong>.
              </p>
              <p className="text-gray-600 mt-2">
                If unsuccessful, refund will be added to your wallet.
              </p>
            </div>

            {/* Support Section */}
            <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition">
              <div className="flex items-center mb-4">
                <FaHeadset className="text-purple-600 text-3xl mr-3" />
                <h3 className="text-xl font-semibold">Need Help?</h3>
              </div>
              <p className="text-gray-600">
                Our support team is available 24/7 to assist you.
              </p>
              <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
                Contact Support
              </button>
            </div>
          </div>

          {/* Bottom Note */}
          <div className="text-center mt-12 text-gray-500 text-sm">
            *Delivery timelines may vary during festivals or high demand periods.
          </div>

        </div>
      </div>

      {/* Footer at bottom */}
      <Footer />
    </>
  );
};

export default ShippingPolicy;