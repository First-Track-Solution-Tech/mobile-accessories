import React from "react";
import Footer from "../components/Footer";
import {
  FaUndoAlt,
  FaMoneyBillWave,
  FaCreditCard,
  FaTimesCircle,
  FaHeadset,
  FaCheckCircle
} from "react-icons/fa";

const ReturnsRefunds = () => {
  return (
    <>
      <div className="min-h-screen bg-gradient-to-b from-white via-blue-50 to-gray-100">
        
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-black via-gray-900 to-blue-900 text-white py-20 px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Returns & Refunds
          </h1>

          <p className="text-gray-300 max-w-2xl mx-auto">
            Easy returns and fast refunds for a smooth shopping experience at Mobiee Shop.
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
                Return your product within 7 days after delivery.
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
              <FaCreditCard className="text-purple-600 text-4xl mx-auto mb-4" />
              <h3 className="font-bold text-xl mb-2">Original Packaging</h3>
              <p className="text-gray-600">
                Product must be returned with original packaging.
              </p>
            </div>
          </div>
        </div>

        {/* Refund Process */}
        <div className="max-w-5xl mx-auto px-6 py-10">
          <h2 className="text-3xl font-bold text-center mb-10 text-gray-800">
            Refund Process
          </h2>

          <div className="relative border-l-4 border-blue-500 ml-6">
            {[
              "Submit return request",
              "Product pickup scheduled",
              "Product inspection",
              "Refund approved",
              "Amount credited within 5-7 business days"
            ].map((step, index) => (
              <div key={index} className="mb-8 ml-8 relative">
                <div className="absolute -left-12 w-8 h-8 bg-blue-600 rounded-full"></div>

                <h3 className="text-lg font-semibold text-gray-800">
                  {step}
                </h3>
              </div>
            ))}
          </div>
        </div>

        {/* Refund Methods */}
        <div className="max-w-5xl mx-auto px-6 py-10">
          <div className="bg-white rounded-3xl shadow-xl p-8">
            <div className="flex items-center mb-4">
              <FaMoneyBillWave className="text-green-600 text-3xl mr-3" />
              <h2 className="text-2xl font-bold text-gray-800">
                Refund Methods
              </h2>
            </div>

            <ul className="space-y-3 text-gray-600">
              <li>• Refund to original payment method</li>
              <li>• UPI refund available</li>
              <li>• Bank transfer option</li>
              <li>• Wallet refund (if applicable)</li>
            </ul>
          </div>
        </div>

        {/* Non Refundable Items */}
        <div className="max-w-5xl mx-auto px-6 py-10">
          <div className="bg-red-50 border border-red-200 rounded-3xl p-8">
            <div className="flex items-center mb-4">
              <FaTimesCircle className="text-red-600 text-3xl mr-3" />
              <h2 className="text-2xl font-bold text-gray-800">
                Non-Refundable Items
              </h2>
            </div>

            <ul className="space-y-3 text-gray-600">
              <li>• Customized products</li>
              <li>• Used accessories</li>
              <li>• Damaged by customer</li>
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
              Contact our support team for return and refund related issues.
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

export default ReturnsRefunds;