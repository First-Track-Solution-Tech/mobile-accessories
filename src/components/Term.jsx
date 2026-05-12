// import React from "react";
// import Footer from "../components/Footer"; // Footer import
// import {
//   FaBookOpen,
//   FaBox,
//   FaShoppingCart,
//   FaUserShield,
//   FaCopyright,
//   FaPenNib,
//   FaGavel,
//   FaEnvelope
// } from "react-icons/fa";

// const TermsConditions = () => {
//   return (
//     <>
//     <div className="bg-gradient-to-br from-gray-100 via-blue-50 to-white py-16 px-6 md:px-12">
//       <div className="max-w-5xl mx-auto bg-white/90 backdrop-blur-lg shadow-2xl rounded-3xl p-10 border">

//         {/* Header */}
//         <div className="text-center mb-10">
//           <h1 className="text-4xl font-extrabold text-gray-800 mb-2">
//             Terms & Conditions
//           </h1>
//           <p className="text-gray-500">
//             Please read these terms carefully before using Mobile Shop services.
//           </p>
//         </div>

//         {/* Sections */}
//         <div className="grid md:grid-cols-2 gap-8">

//           {/* Section 1 */}
//           <div className="bg-blue-50 p-6 rounded-xl shadow hover:shadow-lg transition">
//             <div className="flex items-center mb-3">
//               <FaBookOpen className="text-blue-600 text-2xl mr-2" />
//               <h2 className="text-lg font-semibold">Introduction</h2>
//             </div>
//             <p className="text-gray-600 text-sm">
//               By using our website, you agree to follow all terms and conditions.
//             </p>
//           </div>

//           {/* Section 2 */}
//           <div className="bg-green-50 p-6 rounded-xl shadow hover:shadow-lg transition">
//             <div className="flex items-center mb-3">
//               <FaBox className="text-green-600 text-2xl mr-2" />
//               <h2 className="text-lg font-semibold">Products</h2>
//             </div>
//             <p className="text-gray-600 text-sm">
//               Product images and details may slightly vary from actual items.
//             </p>
//           </div>

//           {/* Section 3 */}
//           <div className="bg-orange-50 p-6 rounded-xl shadow hover:shadow-lg transition">
//             <div className="flex items-center mb-3">
//               <FaShoppingCart className="text-orange-600 text-2xl mr-2" />
//               <h2 className="text-lg font-semibold">Orders & Payments</h2>
//             </div>
//             <p className="text-gray-600 text-sm">
//               Orders are confirmed after payment. Shipping charges may apply.
//             </p>
//           </div>

//           {/* Section 4 */}
//           <div className="bg-red-50 p-6 rounded-xl shadow hover:shadow-lg transition">
//             <div className="flex items-center mb-3">
//               <FaUserShield className="text-red-600 text-2xl mr-2" />
//               <h2 className="text-lg font-semibold">User Conduct</h2>
//             </div>
//             <p className="text-gray-600 text-sm">
//               Users must not misuse the platform or engage in illegal activities.
//             </p>
//           </div>

//           {/* Section 5 */}
//           <div className="bg-purple-50 p-6 rounded-xl shadow hover:shadow-lg transition">
//             <div className="flex items-center mb-3">
//               <FaCopyright className="text-purple-600 text-2xl mr-2" />
//               <h2 className="text-lg font-semibold">Copyright</h2>
//             </div>
//             <p className="text-gray-600 text-sm">
//               All content belongs to Mobile Shop and is legally protected.
//             </p>
//           </div>

//           {/* Section 6 */}
//           <div className="bg-indigo-50 p-6 rounded-xl shadow hover:shadow-lg transition">
//             <div className="flex items-center mb-3">
//               <FaPenNib className="text-indigo-600 text-2xl mr-2" />
//               <h2 className="text-lg font-semibold">Updates</h2>
//             </div>
//             <p className="text-gray-600 text-sm">
//               Terms may change anytime. Continued use means acceptance.
//             </p>
//           </div>

//           {/* Section 7 NEW */}
//           <div className="bg-yellow-50 p-6 rounded-xl shadow hover:shadow-lg transition">
//             <div className="flex items-center mb-3">
//               <FaGavel className="text-yellow-600 text-2xl mr-2" />
//               <h2 className="text-lg font-semibold">Legal Jurisdiction</h2>
//             </div>
//             <p className="text-gray-600 text-sm">
//               All disputes are subject to local jurisdiction laws.
//             </p>
//           </div>

//           {/* Section 8 NEW */}
//           <div className="bg-gray-100 p-6 rounded-xl shadow hover:shadow-lg transition">
//             <div className="flex items-center mb-3">
//               <FaEnvelope className="text-gray-700 text-2xl mr-2" />
//               <h2 className="text-lg font-semibold">Contact Us</h2>
//             </div>
//             <p className="text-gray-600 text-sm">
//               For any queries, contact our support team anytime.
//             </p>
//           </div>

//         </div>

//         {/* Bottom CTA */}
//         <div className="text-center mt-12">
//           <button className="bg-gradient-to-r from-blue-600 to-black text-white px-8 py-3 rounded-full text-lg font-semibold shadow-lg hover:scale-105 transition">
//             I Agree to Terms
//           </button>
//         </div>

//       </div>
//     </div>
//     {/* Footer always at bottom */}
//     <Footer />
//   </>
//   );
// };

// export default TermsConditions;





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







// import React from "react";
// import Footer from "../components/Footer";
// import {
//   FaBookOpen,
//   FaBox,
//   FaShoppingCart,
//   FaUserShield,
//   FaCopyright,
//   FaPenNib,
//   FaGavel,
//   FaEnvelope,
// } from "react-icons/fa";

// const termsData = [
//   {
//     icon: <FaBookOpen />,
//     title: "Introduction",
//     desc: "By using Mobiee Shop website, you agree to all terms and policies mentioned here."
//   },
//   {
//     icon: <FaBox />,
//     title: "Products Information",
//     desc: "Product images, specifications, and colors may vary slightly from actual products."
//   },
//   {
//     icon: <FaShoppingCart />,
//     title: "Orders & Payments",
//     desc: "Orders are confirmed only after successful payment verification."
//   },
//   {
//     icon: <FaUserShield />,
//     title: "User Responsibility",
//     desc: "Users should not misuse the platform or perform illegal activities."
//   },
//   {
//     icon: <FaCopyright />,
//     title: "Copyright Policy",
//     desc: "All content, logos, and designs belong to Mobiee Shop."
//   },
//   {
//     icon: <FaPenNib />,
//     title: "Policy Updates",
//     desc: "We may update these terms anytime without prior notice."
//   },
// ];

// const TermsConditions = () => {
//   return (
//     <>
//       <div className="min-h-screen bg-gradient-to-b from-slate-50 via-blue-50 to-white">
        
//         {/* Hero Section */}
//         <div className="bg-gradient-to-r from-black via-gray-900 to-blue-900 text-white py-20 text-center px-6">
//           <h1 className="text-4xl md:text-5xl font-bold mb-4">
//             Terms & Conditions
//           </h1>

//           <p className="text-gray-300 max-w-2xl mx-auto text-lg">
//             Please read our terms carefully before using Mobiee Shop services.
//           </p>
//         </div>

//         {/* Timeline Section */}
//         <div className="max-w-5xl mx-auto px-6 py-16">
//           <div className="relative border-l-4 border-blue-500 ml-4">
//             {termsData.map((item, index) => (
//               <div
//                 key={index}
//                 className="mb-12 ml-8 relative"
//               >
//                 {/* Icon Circle */}
//                 <div className="absolute -left-14 top-0 w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center shadow-lg">
//                   {item.icon}
//                 </div>

//                 <h2 className="text-2xl font-bold text-gray-800 mb-3">
//                   {item.title}
//                 </h2>

//                 <p className="text-gray-600 leading-relaxed text-lg">
//                   {item.desc}
//                 </p>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Legal Notice */}
//         <div className="max-w-5xl mx-auto px-6 pb-12">
//           <div className="bg-gradient-to-r from-yellow-400 to-orange-500 rounded-2xl p-8 shadow-xl">
//             <div className="flex items-center gap-3 mb-4">
//               <FaGavel className="text-3xl text-white" />
//               <h2 className="text-2xl font-bold text-white">
//                 Legal Jurisdiction
//               </h2>
//             </div>

//             <p className="text-white text-lg">
//               Any disputes related to purchases, refunds, or platform usage
//               will be handled according to local legal jurisdiction laws.
//             </p>
//           </div>
//         </div>

//         {/* Contact Section */}
//         <div className="max-w-5xl mx-auto px-6 pb-16">
//           <div className="bg-white shadow-xl rounded-2xl p-10 text-center border">
//             <FaEnvelope className="text-4xl text-blue-600 mx-auto mb-4" />

//             <h2 className="text-2xl font-bold text-gray-800 mb-3">
//               Need Help?
//             </h2>

//             <p className="text-gray-600 mb-4">
//               Have questions about our terms? Contact our support team.
//             </p>

//             <p className="font-semibold text-gray-800">
//               support@mobieeshop.com
//             </p>
//           </div>
//         </div>
//       </div>

//       <Footer />
//     </>
//   );
// };

// export default TermsConditions;