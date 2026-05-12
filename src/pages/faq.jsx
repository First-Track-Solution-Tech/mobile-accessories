import React, { useState } from "react";
import Footer from "../components/Footer";
import {
  FaChevronDown,
  FaChevronUp,
  FaQuestionCircle,
  FaHeadset,
  FaSearch
} from "react-icons/fa";

const faqData = [
  {
    question: "How long does delivery take?",
    answer:
      "Delivery usually takes 3-5 business days depending on your location."
  },
  {
    question: "Can I return my product?",
    answer:
      "Yes, returns are available within 3 days of delivery."
  },
  {
    question: "Do you offer Cash on Delivery?",
    answer:
      "Yes, COD is available on selected products."
  },
  {
    question: "How can I track my order?",
    answer:
      "Visit My Orders section and track your order."
  },
  {
    question: "How can I contact support?",
    answer:
      "You can contact us through our contact page or live chat."
  }
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-purple-100 via-pink-50 to-yellow-50">

        {/* Background Blur Effects */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-300 opacity-30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-orange-300 opacity-30 rounded-full blur-3xl"></div>

        {/* Hero Section */}
        <div className="relative text-center py-20 px-6">
          <div className="flex justify-center mb-6">
            <div className="bg-yellow-400 text-black p-5 rounded-full shadow-xl">
              <FaQuestionCircle size={35} />
            </div>
          </div>

          <h1 className="text-5xl font-bold text-gray-800 mb-4">
            Frequently Asked Questions
          </h1>

          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Find answers to common questions about orders,
            shipping, returns, and support.
          </p>

          {/* Search Bar */}
          <div className="max-w-xl mx-auto mt-8 relative">
            <input
              type="text"
              placeholder="Search your question..."
              className="w-full py-4 px-6 pr-14 rounded-full bg-white shadow-lg border border-gray-200 text-gray-700 placeholder-gray-400 focus:outline-none"
            />
            <FaSearch className="absolute right-6 top-5 text-yellow-500" />
          </div>
        </div>

        {/* FAQ Section */}
        <div className="relative max-w-4xl mx-auto px-6 pb-16">
          <div className="bg-white/70 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-white">
            
            <div className="space-y-5">
              {faqData.map((faq, index) => (
                <div
                  key={index}
                  className="bg-white hover:shadow-lg transition duration-300 rounded-2xl p-5 border border-gray-100"
                >
                  <button
                    className="w-full flex justify-between items-center text-left text-lg font-semibold text-gray-800"
                    onClick={() => toggleFAQ(index)}
                  >
                    {faq.question}

                    {openIndex === index ? (
                      <FaChevronUp className="text-yellow-500" />
                    ) : (
                      <FaChevronDown className="text-gray-500" />
                    )}
                  </button>

                  {openIndex === index && (
                    <p className="text-gray-600 mt-4 leading-relaxed">
                      {faq.answer}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Support Section */}
        <div className="relative max-w-5xl mx-auto px-6 pb-20">
          <div className="bg-gradient-to-r from-yellow-400 to-orange-500 rounded-3xl p-10 text-black text-center shadow-2xl">
            
            <div className="flex justify-center mb-4">
              <FaHeadset size={40} />
            </div>

            <h2 className="text-3xl font-bold mb-4">
              Still Need Help?
            </h2>

            <p className="text-lg mb-6">
              Our support team is available 24/7 to assist you.
            </p>

            <button className="bg-black text-white px-8 py-3 rounded-full font-semibold hover:bg-gray-800 transition">
              Contact Support
            </button>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default FAQ;