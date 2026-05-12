// import React from "react";
// import Footer from "../components/Footer";
// import {
//   FaUndoAlt,
//   FaExchangeAlt,
//   FaMoneyBillWave,
//   FaTimesCircle,
//   FaClipboardList,
//   FaHeadset
// } from "react-icons/fa";

// const ReturnExchange = () => {
//   return (
//     <>
//       <div className="bg-gradient-to-br from-gray-100 via-blue-50 to-white py-16 px-6 md:px-12 min-h-screen">
//         <div className="max-w-6xl mx-auto bg-white shadow-2xl rounded-3xl p-10">

//           {/* Header */}
//           <div className="text-center mb-12">
//             <h1 className="text-4xl font-bold text-gray-800 mb-3">
//               Return & Exchange Policy
//             </h1>
//             <p className="text-gray-500 max-w-2xl mx-auto">
//               Easy returns and hassle-free exchanges for your shopping convenience.
//             </p>
//           </div>

//           {/* Policy Cards */}
//           <div className="grid md:grid-cols-2 gap-8">

//             {/* Return Eligibility */}
//             <div className="bg-blue-50 p-6 rounded-2xl shadow hover:shadow-lg transition">
//               <FaUndoAlt className="text-blue-600 text-3xl mb-4" />
//               <h2 className="text-xl font-semibold mb-2">
//                 Return Eligibility
//               </h2>
//               <ul className="text-gray-600 space-y-2 text-sm">
//                 <li>Return within 7 days of delivery</li>
//                 <li>Product must be unused</li>
//                 <li>Original packaging required</li>
//               </ul>
//             </div>

//             {/* Exchange Policy */}
//             <div className="bg-green-50 p-6 rounded-2xl shadow hover:shadow-lg transition">
//               <FaExchangeAlt className="text-green-600 text-3xl mb-4" />
//               <h2 className="text-xl font-semibold mb-2">
//                 Exchange Policy
//               </h2>
//               <ul className="text-gray-600 space-y-2 text-sm">
//                 <li>Exchange allowed for damaged products</li>
//                 <li>Wrong item delivered</li>
//                 <li>Size/model mismatch</li>
//               </ul>
//             </div>

//             {/* Refund */}
//             <div className="bg-yellow-50 p-6 rounded-2xl shadow hover:shadow-lg transition">
//               <FaMoneyBillWave className="text-yellow-600 text-3xl mb-4" />
//               <h2 className="text-xl font-semibold mb-2">
//                 Refund Process
//               </h2>
//               <ul className="text-gray-600 space-y-2 text-sm">
//                 <li>Refund initiated after inspection</li>
//                 <li>Processing time: 5-7 days</li>
//                 <li>Refund to original payment method</li>
//               </ul>
//             </div>

//             {/* Non Returnable */}
//             <div className="bg-red-50 p-6 rounded-2xl shadow hover:shadow-lg transition">
//               <FaTimesCircle className="text-red-600 text-3xl mb-4" />
//               <h2 className="text-xl font-semibold mb-2">
//                 Non-Returnable Items
//               </h2>
//               <ul className="text-gray-600 space-y-2 text-sm">
//                 <li>Customized products</li>
//                 <li>Used products</li>
//                 <li>Damaged by customer</li>
//               </ul>
//             </div>

//           </div>

//           {/* Return Steps */}
//           <div className="mt-12 bg-gray-50 p-8 rounded-2xl shadow">
//             <div className="flex items-center mb-4">
//               <FaClipboardList className="text-purple-600 text-3xl mr-3" />
//               <h2 className="text-2xl font-semibold">
//                 How to Request Return/Exchange?
//               </h2>
//             </div>

//             <ol className="list-decimal ml-6 text-gray-600 space-y-2">
//               <li>Login to your account</li>
//               <li>Go to My Orders</li>
//               <li>Select product</li>
//               <li>Click Return/Exchange Request</li>
//               <li>Wait for confirmation</li>
//             </ol>
//           </div>

//           {/* Support */}
//           <div className="mt-12 text-center bg-blue-50 p-8 rounded-2xl shadow">
//             <FaHeadset className="text-blue-600 text-4xl mx-auto mb-4" />

//             <h2 className="text-2xl font-semibold mb-3">
//               Need Help?
//             </h2>

//             <p className="text-gray-600 mb-5">
//               Our support team is available 24/7 for return and exchange assistance.
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

// export default ReturnExchange;






import React from "react";
import Footer from "../components/Footer";
import {
  FaUndoAlt,
  FaExchangeAlt,
  FaMoneyBillWave,
  FaTimesCircle,
  FaClipboardList,
  FaHeadset,
  FaCheckCircle
} from "react-icons/fa";

const ReturnExchange = () => {
  return (
    <>
      <div className="min-h-screen bg-gradient-to-b from-white via-blue-50 to-gray-100">
        
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-black via-gray-900 to-blue-900 text-white py-20 px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Return & Exchange Policy
          </h1>

          <p className="text-gray-300 max-w-2xl mx-auto">
            Easy returns, quick exchanges, and smooth refunds for a better shopping experience.
          </p>
        </div>

        {/* Return Eligibility */}
        <div className="max-w-6xl mx-auto px-6 py-14">
          <h2 className="text-3xl font-bold text-center mb-10 text-gray-800">
            Return Eligibility
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-2xl shadow-lg text-center">
              <FaUndoAlt className="text-blue-600 text-4xl mx-auto mb-4" />
              <h3 className="font-bold text-xl mb-2">7 Days Return</h3>
              <p className="text-gray-600">
                Return products within 7 days of delivery.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-lg text-center">
              <FaCheckCircle className="text-green-600 text-4xl mx-auto mb-4" />
              <h3 className="font-bold text-xl mb-2">Unused Product</h3>
              <p className="text-gray-600">
                Product should be unused and in original condition.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-lg text-center">
              <FaExchangeAlt className="text-purple-600 text-4xl mx-auto mb-4" />
              <h3 className="font-bold text-xl mb-2">Original Packaging</h3>
              <p className="text-gray-600">
                Product must include original packaging.
              </p>
            </div>
          </div>
        </div>

        {/* Exchange Policy */}
        <div className="max-w-5xl mx-auto px-6 py-10">
          <div className="bg-white shadow-xl rounded-3xl p-8">
            <div className="flex items-center mb-4">
              <FaExchangeAlt className="text-green-600 text-3xl mr-3" />
              <h2 className="text-2xl font-bold text-gray-800">
                Exchange Policy
              </h2>
            </div>

            <ul className="space-y-3 text-gray-600">
              <li>• Wrong product delivered</li>
              <li>• Damaged item received</li>
              <li>• Defective accessories</li>
              <li>• Incorrect size/model issue</li>
            </ul>
          </div>
        </div>

        

        {/* Non Returnable Items */}
        <div className="max-w-5xl mx-auto px-6 py-10">
          <div className="bg-red-50 border border-red-200 rounded-3xl p-8">
            <div className="flex items-center mb-4">
              <FaTimesCircle className="text-red-600 text-3xl mr-3" />
              <h2 className="text-2xl font-bold text-gray-800">
                Non-Returnable Items
              </h2>
            </div>

            <ul className="space-y-3 text-gray-600">
              <li>• Customized products</li>
              <li>• Used accessories</li>
              <li>• Products damaged by customer</li>
              <li>• Missing original packaging</li>
            </ul>
          </div>
        </div>

        {/* Support Section */}
        <div className="max-w-5xl mx-auto px-6 pb-16">
          <div className="bg-black text-white rounded-3xl p-10 text-center shadow-2xl">
            <FaHeadset className="text-yellow-400 text-5xl mx-auto mb-5" />

            <h2 className="text-3xl font-bold mb-4">
              Need Help?
            </h2>

            <p className="text-gray-300 mb-6">
              Our support team is available 24/7 for return, exchange, and refund queries.
            </p>

            <button className="bg-yellow-400 text-black px-8 py-3 rounded-full font-semibold hover:bg-yellow-500 transition">
              Contact Support
            </button>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default ReturnExchange;