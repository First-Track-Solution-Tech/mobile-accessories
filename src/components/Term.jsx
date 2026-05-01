// import React from "react";
// import { FaBookOpen, FaBox, FaShoppingCart, FaUserShield, FaCopyright, FaPenNib } from "react-icons/fa";

// const TermsConditions = () => {
//   return (
//     <div className="bg-gradient-to-r from-gray-100 to-blue-50 py-16 px-6 md:px-12">
//       <div className="max-w-4xl mx-auto bg-white shadow-2xl rounded-lg p-8">
        
//         <h1 className="text-3xl font-extrabold text-gray-800 text-center mb-6">Terms & Conditions</h1>

       
//         <section className="mb-6">
//           <div className="flex items-center mb-3">
//             <FaBookOpen className="text-blue-600 text-2xl mr-2" />
//             <h2 className="text-xl font-semibold text-gray-700">1. Introduction and Agreement</h2>
//           </div>
//           <p className="text-gray-600 ">
//             By accessing or using our website, you agree to comply with these terms. If you do not agree, please stop using the website.
//           </p>
//         </section>

//         <hr className="border-gray-300 my-6" />

       
//         <section className="mb-6">
//           <div className="flex items-center mb-3">
//             <FaBox className="text-green-600 text-2xl mr-2" />
//             <h2 className="text-xl font-semibold text-gray-700">2. Products and Services</h2>
//           </div>
//           <p className="text-gray-600 ">
//             We strive to ensure product descriptions and pricing accuracy. However, product appearance may vary, especially for customized items.
//           </p>
//         </section>

//         <hr className="border-gray-300 my-6" />

       
//         <section className="mb-6">
//           <div className="flex items-center mb-3">
//             <FaShoppingCart className="text-orange-600 text-2xl mr-2" />
//             <h2 className="text-xl font-semibold text-gray-700">3. Purchasing Terms</h2>
//           </div>
//           <p className="text-gray-600 ">
//             Orders are processed upon payment confirmation. Shipping and handling costs apply. Returns and refunds are subject to our 
//             <a href="/refund-policy" className="text-blue-800 font-medium hover:underline"> Refund Policy</a>.
//           </p>
//         </section>

//         <hr className="border-gray-300 my-6" />

       
//         <section className="mb-6">
//           <div className="flex items-center mb-3">
//             <FaUserShield className="text-red-600 text-2xl mr-2" />
//             <h2 className="text-xl font-semibold text-gray-700">4. User Conduct</h2>
//           </div>
//           <p className="text-gray-600 ">
//             Your information is protected as outlined in our 
//             <a href="/privacy-policy" className="text-blue-800 font-medium hover:underline"> Privacy Policy</a>. Users must not misuse the website, engage in illegal activities, or violate intellectual property rights.
//           </p>
//         </section>

//         <hr className="border-gray-300 my-6" />

       
//         <section className="mb-6">
//           <div className="flex items-center mb-3">
//             <FaCopyright className="text-purple-600 text-2xl mr-2" />
//             <h2 className="text-xl font-semibold text-gray-700">5. Intellectual Property Rights</h2>
//           </div>
//           <p className="text-gray-600 ">
//             All trademarks, designs, and website content are owned by MobileAccessories and protected by applicable laws.
//           </p>
//         </section>

//         <hr className="border-gray-300 my-6" />
 
//         <section className="mb-6">
//           <div className="flex items-center mb-3">
//             <FaPenNib className="text-indigo-600 text-2xl mr-2" />
//             <h2 className="text-xl font-semibold text-gray-700">6. Amendments</h2>
//           </div>
//           <p className="text-gray-600 ">
//             We reserve the right to update these terms at any time. Continued use of the website constitutes acceptance of the revised terms.
//           </p>
//         </section>
//       </div>
//     </div>
//   );
// };

// export default TermsConditions;







import React from "react";
import {
  FaBookOpen,
  FaBox,
  FaShoppingCart,
  FaUserShield,
  FaCopyright,
  FaPenNib,
  FaGavel,
  FaEnvelope
} from "react-icons/fa";

const TermsConditions = () => {
  return (
    <div className="bg-gradient-to-br from-gray-100 via-blue-50 to-white py-16 px-6 md:px-12">
      <div className="max-w-5xl mx-auto bg-white/90 backdrop-blur-lg shadow-2xl rounded-3xl p-10 border">

        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-4xl font-extrabold text-gray-800 mb-2">
            Terms & Conditions
          </h1>
          <p className="text-gray-500">
            Please read these terms carefully before using Mobile Shop services.
          </p>
        </div>

        {/* Sections */}
        <div className="grid md:grid-cols-2 gap-8">

          {/* Section 1 */}
          <div className="bg-blue-50 p-6 rounded-xl shadow hover:shadow-lg transition">
            <div className="flex items-center mb-3">
              <FaBookOpen className="text-blue-600 text-2xl mr-2" />
              <h2 className="text-lg font-semibold">Introduction</h2>
            </div>
            <p className="text-gray-600 text-sm">
              By using our website, you agree to follow all terms and conditions.
            </p>
          </div>

          {/* Section 2 */}
          <div className="bg-green-50 p-6 rounded-xl shadow hover:shadow-lg transition">
            <div className="flex items-center mb-3">
              <FaBox className="text-green-600 text-2xl mr-2" />
              <h2 className="text-lg font-semibold">Products</h2>
            </div>
            <p className="text-gray-600 text-sm">
              Product images and details may slightly vary from actual items.
            </p>
          </div>

          {/* Section 3 */}
          <div className="bg-orange-50 p-6 rounded-xl shadow hover:shadow-lg transition">
            <div className="flex items-center mb-3">
              <FaShoppingCart className="text-orange-600 text-2xl mr-2" />
              <h2 className="text-lg font-semibold">Orders & Payments</h2>
            </div>
            <p className="text-gray-600 text-sm">
              Orders are confirmed after payment. Shipping charges may apply.
            </p>
          </div>

          {/* Section 4 */}
          <div className="bg-red-50 p-6 rounded-xl shadow hover:shadow-lg transition">
            <div className="flex items-center mb-3">
              <FaUserShield className="text-red-600 text-2xl mr-2" />
              <h2 className="text-lg font-semibold">User Conduct</h2>
            </div>
            <p className="text-gray-600 text-sm">
              Users must not misuse the platform or engage in illegal activities.
            </p>
          </div>

          {/* Section 5 */}
          <div className="bg-purple-50 p-6 rounded-xl shadow hover:shadow-lg transition">
            <div className="flex items-center mb-3">
              <FaCopyright className="text-purple-600 text-2xl mr-2" />
              <h2 className="text-lg font-semibold">Copyright</h2>
            </div>
            <p className="text-gray-600 text-sm">
              All content belongs to Mobile Shop and is legally protected.
            </p>
          </div>

          {/* Section 6 */}
          <div className="bg-indigo-50 p-6 rounded-xl shadow hover:shadow-lg transition">
            <div className="flex items-center mb-3">
              <FaPenNib className="text-indigo-600 text-2xl mr-2" />
              <h2 className="text-lg font-semibold">Updates</h2>
            </div>
            <p className="text-gray-600 text-sm">
              Terms may change anytime. Continued use means acceptance.
            </p>
          </div>

          {/* Section 7 NEW */}
          <div className="bg-yellow-50 p-6 rounded-xl shadow hover:shadow-lg transition">
            <div className="flex items-center mb-3">
              <FaGavel className="text-yellow-600 text-2xl mr-2" />
              <h2 className="text-lg font-semibold">Legal Jurisdiction</h2>
            </div>
            <p className="text-gray-600 text-sm">
              All disputes are subject to local jurisdiction laws.
            </p>
          </div>

          {/* Section 8 NEW */}
          <div className="bg-gray-100 p-6 rounded-xl shadow hover:shadow-lg transition">
            <div className="flex items-center mb-3">
              <FaEnvelope className="text-gray-700 text-2xl mr-2" />
              <h2 className="text-lg font-semibold">Contact Us</h2>
            </div>
            <p className="text-gray-600 text-sm">
              For any queries, contact our support team anytime.
            </p>
          </div>

        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <button className="bg-gradient-to-r from-blue-600 to-black text-white px-8 py-3 rounded-full text-lg font-semibold shadow-lg hover:scale-105 transition">
            I Agree to Terms
          </button>
        </div>

      </div>
    </div>
  );
};

export default TermsConditions;