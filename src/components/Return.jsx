// import React from "react";
// import { FaUndo, FaMoneyBillWave } from "react-icons/fa";

// const ReturnPolicy = () => {
//   return (
//     <div className="bg-gradient-to-r from-blue-50 to-gray-100 py-16 px-6 md:px-12">
//       <div className="max-w-4xl mx-auto bg-white shadow-2xl rounded-lg p-8">
      
//         <h1 className="text-3xl font-extrabold text-gray-800 text-center mb-6">
//           Return & Refunds
//         </h1>

//        <section className="mb-6">
//           <div className="flex items-center mb-3">
//             <FaUndo className="text-blue-600 text-2xl mr-2" />
//             <h2 className="text-xl font-semibold text-gray-700">Returns</h2>
//           </div>
//           <ul className="list-disc ml-6 text-gray-600 mt-2 space-y-2">
//             <li>
//               You have <strong>3 calendar days</strong> to return an item from the date you received it.
//             </li>
//             <li>Refunds are only applicable in case of a manufacturing defect.</li>
//             <li>Returned items must be <strong>unused</strong>, in their original condition and packaging.</li>
//             <li>A receipt or proof of purchase is required for returns.</li>
//             <li>Orders placed for the wrong model, design, color, or product cannot be returned or replaced.</li>
//             <li>Once the return request form is submitted, we will respond within <strong>2-5 working days</strong>.</li>
//           </ul>
//         </section>

//         <hr className="border-gray-300 my-6" />

       
//         <section className="mb-6">
//           <div className="flex items-center mb-3">
//             <FaMoneyBillWave className="text-green-600 text-2xl mr-2" />
//             <h2 className="text-xl font-semibold text-gray-700">Refunds</h2>
//           </div>
//           <ul className="list-disc ml-6 text-gray-600 mt-2 space-y-2">
//             <li>Once we receive your item, we will inspect it and notify you of its status.</li>
//             <li>
//               If approved, the refund will be processed to your original payment method within 
//               <strong> 24 working hours</strong>.
//             </li>
//           </ul>
//         </section>

//         <hr className="border-gray-300 my-6" />

       
//         <div className="text-center mt-8">
//           <button className="bg-black text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition duration-300 transform hover:scale-105 shadow-md">
//             Initiate Return/Refunds
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ReturnPolicy;




import React from "react";
import {
  FaUndo,
  FaMoneyBillWave,
  FaExclamationCircle,
  FaHeadset,
  FaCheckCircle
} from "react-icons/fa";

const ReturnPolicy = () => {
  return (
    <div className="bg-gradient-to-br from-blue-50 via-white to-gray-100 py-16 px-6 md:px-12">
      <div className="max-w-6xl mx-auto bg-white/80 backdrop-blur-lg shadow-2xl rounded-3xl p-10 border border-gray-200">

        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-3">
            Return & Refund Policy
          </h1>
          <p className="text-gray-500 max-w-xl mx-auto">
            Hassle-free returns with quick processing and transparent policies.
          </p>
        </div>

        {/* Progress Steps */}
        <div className="flex flex-wrap justify-between items-center mb-12 text-sm text-gray-600">
          {[
            "Request",
            "Approval",
            "Pickup",
            "Refund"
          ].map((step, index) => (
            <div key={index} className="flex flex-col items-center flex-1">
              <div className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-600 text-white mb-2">
                <FaCheckCircle />
              </div>
              <span>{step}</span>
            </div>
          ))}
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-8">

          {/* Returns */}
          <div className="bg-gradient-to-r from-blue-50 to-white p-6 rounded-2xl shadow hover:scale-105 transition">
            <div className="flex items-center mb-3">
              <FaUndo className="text-blue-600 text-2xl mr-2" />
              <h2 className="text-xl font-semibold">Returns</h2>
            </div>
            <ul className="list-disc ml-6 text-gray-600 space-y-2 text-sm">
              <li>Return within <strong>3 days</strong></li>
              <li>Only for manufacturing defects</li>
              <li>Original packaging required</li>
              <li>No return for wrong selection</li>
            </ul>
          </div>

          {/* Refunds */}
          <div className="bg-gradient-to-r from-green-50 to-white p-6 rounded-2xl shadow hover:scale-105 transition">
            <div className="flex items-center mb-3">
              <FaMoneyBillWave className="text-green-600 text-2xl mr-2" />
              <h2 className="text-xl font-semibold">Refunds</h2>
            </div>
            <ul className="list-disc ml-6 text-gray-600 space-y-2 text-sm">
              <li>Inspection after return</li>
              <li>Refund within <strong>24 hours</strong></li>
              <li>Original payment method</li>
            </ul>
          </div>

          {/* Important */}
          <div className="bg-gradient-to-r from-yellow-50 to-white p-6 rounded-2xl shadow hover:scale-105 transition">
            <div className="flex items-center mb-3">
              <FaExclamationCircle className="text-yellow-600 text-2xl mr-2" />
              <h2 className="text-xl font-semibold">Important</h2>
            </div>
            <ul className="list-disc ml-6 text-gray-600 space-y-2 text-sm">
              <li>Unboxing video required</li>
              <li>Shipping charges non-refundable</li>
              <li>Delays during peak time</li>
            </ul>
          </div>

          {/* Support */}
          <div className="bg-gradient-to-r from-purple-50 to-white p-6 rounded-2xl shadow hover:scale-105 transition">
            <div className="flex items-center mb-3">
              <FaHeadset className="text-purple-600 text-2xl mr-2" />
              <h2 className="text-xl font-semibold">Support</h2>
            </div>
            <p className="text-gray-600 text-sm">
              Need help with your return? Contact our support team anytime.
            </p>
            <button className="mt-4 bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition">
              Contact Us
            </button>
          </div>

        </div>

        {/* CTA */}
        <div className="text-center mt-14">
          <button className="bg-gradient-to-r from-black to-blue-700 text-white px-10 py-3 rounded-full text-lg font-semibold shadow-lg hover:scale-110 transition">
            Start Return Process
          </button>
        </div>

      </div>
    </div>
  );
};

export default ReturnPolicy;
