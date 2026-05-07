import React, { useState } from "react";
import Footer from "../components/Footer";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const faqData = [
  {
    question: "How long does delivery take?",
    answer: "Delivery usually takes 3-5 business days."
  },
  {
    question: "Can I return my product?",
    answer: "Yes, returns are available within 3 days."
  },
  {
    question: "Do you offer Cash on Delivery?",
    answer: "Yes, COD is available on selected products."
  },
  {
    question: "How can I track my order?",
    answer: "Go to My Orders section and track your order."
  },
  {
    question: "How can I contact support?",
    answer: "You can contact us through our Contact page."
  }
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      <div className="bg-gray-100 min-h-screen py-16 px-6">
        <div className="max-w-4xl mx-auto bg-white shadow-xl rounded-2xl p-8">

          {/* Heading */}
          <div className="text-center mb-10">
            <h1 className="text-4xl font-bold text-gray-800">
              Frequently Asked Questions
            </h1>
            <p className="text-gray-500 mt-2">
              Find answers to common questions
            </p>
          </div>

          {/* FAQ Items */}
          <div className="space-y-4">
            {faqData.map((faq, index) => (
              <div
                key={index}
                className="border rounded-xl p-4 shadow-sm"
              >
                <button
                  className="w-full flex justify-between items-center text-left font-semibold text-lg"
                  onClick={() => toggleFAQ(index)}
                >
                  {faq.question}

                  {openIndex === index ? (
                    <FaChevronUp />
                  ) : (
                    <FaChevronDown />
                  )}
                </button>

                {openIndex === index && (
                  <p className="text-gray-600 mt-3">
                    {faq.answer}
                  </p>
                )}
              </div>
            ))}
          </div>

        </div>
      </div>

      {/* Footer */}
      <Footer />
    </>
  );
};

export default FAQ;