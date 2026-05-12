// import React from "react";
// import Footer from "../components/Footer";
// import {
//   FaTimesCircle,
//   FaMoneyCheckAlt,
//   FaClock,
//   FaCreditCard,
//   FaExclamationTriangle,
//   FaHeadset
// } from "react-icons/fa";

// const RefundCancellation = () => {
//   return (
//     <>
//       <div className="bg-gradient-to-br from-gray-100 via-green-50 to-white py-16 px-6 md:px-12 min-h-screen">
//         <div className="max-w-6xl mx-auto bg-white shadow-2xl rounded-3xl p-10">

//           {/* Header */}
//           <div className="text-center mb-12">
//             <h1 className="text-4xl font-bold text-gray-800 mb-3">
//               Refund & Cancellation Policy
//             </h1>
//             <p className="text-gray-500 max-w-2xl mx-auto">
//               Learn how cancellations and refunds work for your orders.
//             </p>
//           </div>

//           {/* Policy Cards */}
//           <div className="grid md:grid-cols-2 gap-8">

//             {/* Order Cancellation */}
//             <div className="bg-red-50 p-6 rounded-2xl shadow hover:shadow-lg transition">
//               <FaTimesCircle className="text-red-600 text-3xl mb-4" />
//               <h2 className="text-xl font-semibold mb-2">
//                 Order Cancellation
//               </h2>
//               <ul className="text-gray-600 text-sm space-y-2">
//                 <li>Cancel within 24 hours of placing order</li>
//                 <li>Cannot cancel after shipping</li>
//                 <li>Cancellation available in My Orders section</li>
//               </ul>
//             </div>

//             {/* Refund Eligibility */}
//             <div className="bg-green-50 p-6 rounded-2xl shadow hover:shadow-lg transition">
//               <FaMoneyCheckAlt className="text-green-600 text-3xl mb-4" />
//               <h2 className="text-xl font-semibold mb-2">
//                 Refund Eligibility
//               </h2>
//               <ul className="text-gray-600 text-sm space-y-2">
//                 <li>Damaged product received</li>
//                 <li>Wrong product delivered</li>
//                 <li>Order cancelled successfully</li>
//               </ul>
//             </div>

//             {/* Refund Timeline */}
//             <div className="bg-blue-50 p-6 rounded-2xl shadow hover:shadow-lg transition">
//               <FaClock className="text-blue-600 text-3xl mb-4" />
//               <h2 className="text-xl font-semibold mb-2">
//                 Refund Timeline
//               </h2>
//               <ul className="text-gray-600 text-sm space-y-2">
//                 <li>Refund initiated within 24 hours</li>
//                 <li>Amount credited in 5-7 business days</li>
//               </ul>
//             </div>

//             {/* Payment Method */}
//             <div className="bg-yellow-50 p-6 rounded-2xl shadow hover:shadow-lg transition">
//               <FaCreditCard className="text-yellow-600 text-3xl mb-4" />
//               <h2 className="text-xl font-semibold mb-2">
//                 Refund Method
//               </h2>
//               <ul className="text-gray-600 text-sm space-y-2">
//                 <li>Original payment method</li>
//                 <li>UPI / Bank transfer</li>
//                 <li>Wallet refund (if applicable)</li>
//               </ul>
//             </div>

//             {/* Non Refundable */}
//             <div className="bg-purple-50 p-6 rounded-2xl shadow hover:shadow-lg transition md:col-span-2">
//               <FaExclamationTriangle className="text-purple-600 text-3xl mb-4" />
//               <h2 className="text-xl font-semibold mb-2">
//                 Non-Refundable Cases
//               </h2>
//               <ul className="text-gray-600 text-sm space-y-2">
//                 <li>Customized products</li>
//                 <li>Used products</li>
//                 <li>Physical damage caused by customer</li>
//               </ul>
//             </div>
//           </div>

//           {/* Support Section */}
//           <div className="mt-12 text-center bg-gray-50 p-8 rounded-2xl shadow">
//             <FaHeadset className="text-black text-4xl mx-auto mb-4" />

//             <h2 className="text-2xl font-semibold mb-3">
//               Need Help?
//             </h2>

//             <p className="text-gray-600 mb-5">
//               Contact our support team for refund or cancellation queries.
//             </p>

//             <button className="bg-black text-white px-8 py-3 rounded-full hover:bg-gray-800 transition">
//               Contact Support
//             </button>
//           </div>

//         </div>
//       </div>

//       {/* Footer */}
//       <Footer />
//     </>
//   );
// };

// export default RefundCancellation;







import React from "react";
import Footer from "../components/Footer";
import {
  FaTimesCircle,
  FaMoneyCheckAlt,
  FaClock,
  FaCreditCard,
  FaExclamationTriangle,
  FaHeadset,
  FaShieldAlt
} from "react-icons/fa";

const RefundCancellation = () => {
  return (
    <>
      <div className="bg-gradient-to-br from-gray-100 via-green-50 to-white py-16 px-6 md:px-12 min-h-screen">
        <div className="max-w-6xl mx-auto bg-white shadow-2xl rounded-3xl p-10 border border-gray-100">

          {/* Header */}
          <div className="text-center mb-14">
            <div className="flex justify-center mb-4">
              <FaShieldAlt className="text-green-600 text-4xl" />
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-3">
              Refund & Cancellation Policy
            </h1>

            <p className="text-gray-500 max-w-2xl mx-auto">
              Transparent, simple and customer-friendly refund process designed to keep your experience smooth and stress-free.
            </p>
          </div>

          {/* Policy Cards */}
          <div className="grid md:grid-cols-2 gap-8">

            {/* Order Cancellation */}
            <div className="bg-gradient-to-br from-red-50 to-white p-6 rounded-2xl shadow-md hover:shadow-xl transition transform hover:-translate-y-1">
              <FaTimesCircle className="text-red-600 text-3xl mb-4" />
              <h2 className="text-xl font-semibold mb-3 text-gray-800">
                Order Cancellation
              </h2>
              <ul className="text-gray-600 text-sm space-y-2 list-disc pl-5">
                <li>Cancel within 24 hours of placing order</li>
                <li>Orders cannot be cancelled after shipping</li>
                <li>Use “My Orders” section for cancellation</li>
              </ul>
            </div>

            {/* Refund Eligibility */}
            <div className="bg-gradient-to-br from-green-50 to-white p-6 rounded-2xl shadow-md hover:shadow-xl transition transform hover:-translate-y-1">
              <FaMoneyCheckAlt className="text-green-600 text-3xl mb-4" />
              <h2 className="text-xl font-semibold mb-3 text-gray-800">
                Refund Eligibility
              </h2>
              <ul className="text-gray-600 text-sm space-y-2 list-disc pl-5">
                <li>Damaged product received</li>
                <li>Wrong item delivered</li>
                <li>Successful order cancellation</li>
              </ul>
            </div>

            {/* Refund Timeline */}
            <div className="bg-gradient-to-br from-blue-50 to-white p-6 rounded-2xl shadow-md hover:shadow-xl transition transform hover:-translate-y-1">
              <FaClock className="text-blue-600 text-3xl mb-4" />
              <h2 className="text-xl font-semibold mb-3 text-gray-800">
                Refund Timeline
              </h2>
              <ul className="text-gray-600 text-sm space-y-2 list-disc pl-5">
                <li>Refund initiated within 24 hours</li>
                <li>Credited within 5–7 business days</li>
              </ul>
            </div>

            {/* Refund Method */}
            <div className="bg-gradient-to-br from-yellow-50 to-white p-6 rounded-2xl shadow-md hover:shadow-xl transition transform hover:-translate-y-1">
              <FaCreditCard className="text-yellow-600 text-3xl mb-4" />
              <h2 className="text-xl font-semibold mb-3 text-gray-800">
                Refund Method
              </h2>
              <ul className="text-gray-600 text-sm space-y-2 list-disc pl-5">
                <li>Original payment method</li>
                <li>UPI / Bank transfer</li>
                <li>Wallet refunds (if applicable)</li>
              </ul>
            </div>

            {/* Non Refundable */}
            <div className="md:col-span-2 bg-gradient-to-br from-purple-50 to-white p-6 rounded-2xl shadow-md hover:shadow-xl transition transform hover:-translate-y-1">
              <FaExclamationTriangle className="text-purple-600 text-3xl mb-4" />
              <h2 className="text-xl font-semibold mb-3 text-gray-800">
                Non-Refundable Cases
              </h2>
              <ul className="text-gray-600 text-sm space-y-2 list-disc pl-5">
                <li>Customized or personalized products</li>
                <li>Used or damaged items by customer</li>
                <li>Products returned without original packaging</li>
              </ul>
            </div>
          </div>

          {/* Support Section */}
          <div className="mt-14 text-center bg-gradient-to-r from-gray-900 to-gray-800 text-white p-10 rounded-2xl shadow-xl">
            <FaHeadset className="text-white text-5xl mx-auto mb-4 animate-pulse" />

            <h2 className="text-2xl md:text-3xl font-semibold mb-3">
              Need Help With Refunds?
            </h2>

            <p className="text-gray-300 mb-6 max-w-xl mx-auto">
              Our support team is available 24/7 to help you with cancellations, refunds, or order issues.
            </p>

            <button className="bg-white text-black px-8 py-3 rounded-full font-semibold hover:bg-gray-200 transition">
              Contact Support
            </button>
          </div>

        </div>
      </div>

      <Footer />
    </>
  );
};

export default RefundCancellation;