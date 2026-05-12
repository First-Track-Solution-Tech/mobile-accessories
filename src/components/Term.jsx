





import React from "react";
import Footer from "../components/Footer";
import {
  FaBookOpen,
  FaBox,
  FaShoppingCart,
  FaUserShield,
  FaCopyright,
  FaPenNib,
  FaGavel,
  FaEnvelope,
  FaCheckCircle
} from "react-icons/fa";

const termsData = [
  {
    icon: <FaBookOpen />,
    title: "Introduction",
    desc: "By using Mobiee Shop website, you agree to all terms and policies mentioned here.",
    color: "from-blue-500 to-cyan-500"
  },
  {
    icon: <FaBox />,
    title: "Products Information",
    desc: "Product images, colors and descriptions may vary slightly from actual products.",
    color: "from-pink-500 to-red-500"
  },
  {
    icon: <FaShoppingCart />,
    title: "Orders & Payments",
    desc: "Orders are confirmed after successful payment verification.",
    color: "from-yellow-500 to-orange-500"
  },
  {
    icon: <FaUserShield />,
    title: "User Responsibility",
    desc: "Users should not misuse the platform or perform illegal activities.",
    color: "from-green-500 to-emerald-500"
  },
  {
    icon: <FaCopyright />,
    title: "Copyright Policy",
    desc: "All content, images and branding belong to Mobiee Shop.",
    color: "from-purple-500 to-indigo-500"
  },
  {
    icon: <FaPenNib />,
    title: "Policy Updates",
    desc: "We may update terms anytime without prior notice.",
    color: "from-indigo-500 to-blue-500"
  }
];

const TermsConditions = () => {
  return (
    <>
      <div className="bg-gradient-to-b from-white via-gray-50 to-blue-50 min-h-screen">
        
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-black via-gray-900 to-blue-900 text-white py-20 px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Terms & Conditions
          </h1>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Please read our terms carefully before using Mobiee Shop services.
          </p>
        </div>

        {/* Terms Cards */}
        <div className="max-w-6xl mx-auto px-6 py-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {termsData.map((item, index) => (
              <div
                key={index}
                className="bg-white/80 backdrop-blur-lg border border-gray-200 rounded-2xl p-6 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition duration-300"
              >
                <div
                  className={`w-14 h-14 rounded-full bg-gradient-to-r ${item.color} flex items-center justify-center text-white text-2xl mb-4`}
                >
                  {item.icon}
                </div>

                <h2 className="text-xl font-bold text-gray-800 mb-3">
                  {item.title}
                </h2>

                <p className="text-gray-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Important Notice Section */}
        <div className="max-w-5xl mx-auto px-6 pb-12">
          <div className="bg-gradient-to-r from-yellow-400 to-orange-500 rounded-3xl p-8 text-white shadow-xl">
            <div className="flex items-center gap-3 mb-4">
              <FaGavel className="text-3xl" />
              <h2 className="text-2xl font-bold">
                Legal Notice
              </h2>
            </div>

            <p className="text-lg leading-relaxed">
              Any disputes related to purchases, refunds, or platform misuse
              will be handled according to local legal jurisdiction laws.
            </p>
          </div>
        </div>

        {/* Why Terms Matter */}
        <div className="max-w-6xl mx-auto px-6 py-10">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">
            Why These Terms Matter?
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-2xl shadow-md p-6 text-center">
              <FaCheckCircle className="text-green-500 text-4xl mx-auto mb-4" />
              <h3 className="font-bold text-lg mb-2">Safe Shopping</h3>
              <p className="text-gray-600">
                Protects customers during shopping experience.
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-md p-6 text-center">
              <FaCheckCircle className="text-blue-500 text-4xl mx-auto mb-4" />
              <h3 className="font-bold text-lg mb-2">Transparency</h3>
              <p className="text-gray-600">
                Clear policies avoid confusion for customers.
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-md p-6 text-center">
              <FaCheckCircle className="text-purple-500 text-4xl mx-auto mb-4" />
              <h3 className="font-bold text-lg mb-2">Trust Building</h3>
              <p className="text-gray-600">
                Builds trust between users and Mobiee Shop.
              </p>
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div className="max-w-5xl mx-auto px-6 pb-16">
          <div className="bg-black text-white rounded-3xl p-10 text-center shadow-2xl">
            <FaEnvelope className="text-4xl mx-auto mb-4 text-yellow-400" />

            <h2 className="text-2xl font-bold mb-3">
              Need Help?
            </h2>

            <p className="text-gray-300 mb-5">
              If you have any questions regarding our terms & conditions,
              contact our support team anytime.
            </p>

            <button className="bg-yellow-400 text-black px-8 py-3 rounded-full font-bold hover:bg-yellow-500 transition">
              Contact Support
            </button>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default TermsConditions;






