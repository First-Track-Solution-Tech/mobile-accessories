// import React from "react";
// import { FaUserShield, FaLock, FaBullhorn, FaExclamationTriangle, FaEnvelope } from "react-icons/fa";

// const PrivacyPolicy = () => {
//   return (
//     <div className="bg-gradient-to-r from-blue-50 to-gray-100 py-16 px-6 md:px-12">
//       <div className="max-w-4xl mx-auto bg-white shadow-2xl rounded-lg p-8">
//         {/* Header */}
//         <h1 className="text-3xl font-extrabold text-gray-800 text-center mb-6">Privacy & Policy</h1>

//         {/* Section 1 - Personal Information */}
//         <section className="mb-6">
//           <div className="flex items-center mb-3">
//             <FaUserShield className="text-blue-600 text-2xl mr-2" />
//             <h2 className="text-xl font-semibold text-gray-700">Personal Information</h2>
//           </div>
//           <p className="text-gray-600 leading-relaxed">
//             Mobile Accessories does not trade or sell your personal information in any manner, except as specified here or if you express your consent towards the same.
//           </p>
          
//           <h3 className="text-lg font-semibold mt-4">Personal Information provided by you is used only:</h3>
//           <ul className="list-disc list-inside text-gray-600 mt-2 space-y-2">
//             <li>To facilitate your use of the website,</li>
//             <li>To respond to your concerns, inquiries, or address your requests,</li>
//             <li>To provide you with information about our services/products and send offers,</li>
//             <li>To send you important updates regarding the website, terms, and policies,</li>
//             <li>To conduct internal reviews and data analysis for improving services,</li>
//           </ul>
//         </section>

//         <hr className="border-gray-300 my-6" />

//         {/* Section 2 - Security */}
//         <section className="mb-6">
//           <div className="flex items-center mb-3">
//             <FaLock className="text-green-600 text-2xl mr-2" />
//             <h2 className="text-xl font-semibold text-gray-700">Security</h2>
//           </div>
//           <p className="text-gray-600 leading-relaxed">
//             We prioritize the security of your personal information with administrative, technical, and physical safeguards to prevent unauthorized access. If a data breach occurs, we will notify you promptly.
//           </p>
//         </section>

//         <hr className="border-gray-300 my-6" />

//         {/* Section 3 - Advertising */}
//         <section className="mb-6">
//           <div className="flex items-center mb-3">
//             <FaBullhorn className="text-orange-600 text-2xl mr-2" />
//             <h2 className="text-xl font-semibold text-gray-700">Advertising</h2>
//           </div>
//           <p className="text-gray-600 leading-relaxed">
//             Some third-party advertisers may display limited advertisements. No personal information is shared, but aggregate profile data may be used to enhance ad relevance.
//           </p>
//         </section>

//         <hr className="border-gray-300 my-6" />

//         {/* Section 4 - Disclaimer */}
//         <section className="mb-6">
//           <div className="flex items-center mb-3">
//             <FaExclamationTriangle className="text-red-600 text-2xl mr-2" />
//             <h2 className="text-xl font-semibold text-gray-700">Important Disclaimer</h2>
//           </div>
//           <p className="text-gray-600 leading-relaxed">
//             While we ensure security, please avoid sharing sensitive information with unauthorized third parties. The Company disclaims any liabilities arising from negligence in handling your personal data.
//           </p>
//         </section>

//         <hr className="border-gray-300 my-6" />

//         {/* Contact Info */}
//         <p className="text-gray-600 text-center mt-4 flex items-center justify-center">
//           <FaEnvelope className="text-blue-600 text-xl mr-2" />
//           For concerns, contact us at  
//           <a href="mailto:support@mobileaccessories.com" className="text-blue-800 font-medium hover:underline ml-1">support@mobileaccessories.com</a>
//         </p>
//       </div>
//     </div>
//   );
// };

// export default PrivacyPolicy;





import React from "react";
import Footer from "../components/Footer"; // Footer import
import {
  FaUserShield,
  FaLock,
  FaCookieBite,
  FaShareAlt,
  FaUserCheck,
  FaExternalLinkAlt,
  FaChild,
  FaSyncAlt,
  FaEnvelope
} from "react-icons/fa";

const PrivacyPolicy = () => {
  return (
    <>
    <div className="bg-gradient-to-br from-gray-100 via-blue-50 to-white py-16 px-6 md:px-12">
      <div className="max-w-5xl mx-auto bg-white shadow-2xl rounded-2xl p-10">

        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-4xl font-extrabold text-gray-800 mb-2">
            Privacy Policy
          </h1>
          <p className="text-gray-500">
            Your privacy is important to us at Mobile Shop
          </p>
          <p className="text-sm text-gray-400 mt-1">
            Effective Date: 1 January 2026
          </p>
        </div>

        {/* Sections */}
        <div className="grid md:grid-cols-2 gap-8">

          {/* Info Collection */}
          <div className="bg-blue-50 p-6 rounded-xl shadow hover:shadow-lg transition">
            <div className="flex items-center mb-3">
              <FaUserShield className="text-blue-600 text-2xl mr-2" />
              <h2 className="text-lg font-semibold">Information We Collect</h2>
            </div>
            <p className="text-gray-600 text-sm">
              Name, email, phone number, address, and technical data like IP and browser info.
            </p>
          </div>

          {/* Data Usage */}
          <div className="bg-green-50 p-6 rounded-xl shadow hover:shadow-lg transition">
            <div className="flex items-center mb-3">
              <FaUserCheck className="text-green-600 text-2xl mr-2" />
              <h2 className="text-lg font-semibold">How We Use Data</h2>
            </div>
            <p className="text-gray-600 text-sm">
              To process orders, improve services, provide support, and send updates.
            </p>
          </div>

          {/* Cookies */}
          <div className="bg-yellow-50 p-6 rounded-xl shadow hover:shadow-lg transition">
            <div className="flex items-center mb-3">
              <FaCookieBite className="text-yellow-600 text-2xl mr-2" />
              <h2 className="text-lg font-semibold">Cookies</h2>
            </div>
            <p className="text-gray-600 text-sm">
              We use cookies to enhance experience and analyze traffic.
            </p>
          </div>

          {/* Sharing */}
          <div className="bg-orange-50 p-6 rounded-xl shadow hover:shadow-lg transition">
            <div className="flex items-center mb-3">
              <FaShareAlt className="text-orange-600 text-2xl mr-2" />
              <h2 className="text-lg font-semibold">Data Sharing</h2>
            </div>
            <p className="text-gray-600 text-sm">
              Shared only with delivery partners, payment gateways, or legal authorities.
            </p>
          </div>

          {/* Security */}
          <div className="bg-purple-50 p-6 rounded-xl shadow hover:shadow-lg transition">
            <div className="flex items-center mb-3">
              <FaLock className="text-purple-600 text-2xl mr-2" />
              <h2 className="text-lg font-semibold">Data Security</h2>
            </div>
            <p className="text-gray-600 text-sm">
              We use secure systems to protect your data, but no method is 100% secure.
            </p>
          </div>

          {/* Third Party */}
          <div className="bg-gray-100 p-6 rounded-xl shadow hover:shadow-lg transition">
            <div className="flex items-center mb-3">
              <FaExternalLinkAlt className="text-gray-700 text-2xl mr-2" />
              <h2 className="text-lg font-semibold">Third-Party Links</h2>
            </div>
            <p className="text-gray-600 text-sm">
              We are not responsible for external websites linked on our platform.
            </p>
          </div>

          {/* Children */}
          <div className="bg-red-50 p-6 rounded-xl shadow hover:shadow-lg transition">
            <div className="flex items-center mb-3">
              <FaChild className="text-red-600 text-2xl mr-2" />
              <h2 className="text-lg font-semibold">Children’s Privacy</h2>
            </div>
            <p className="text-gray-600 text-sm">
              Our services are not intended for users under 18 years.
            </p>
          </div>

          {/* Updates */}
          <div className="bg-indigo-50 p-6 rounded-xl shadow hover:shadow-lg transition">
            <div className="flex items-center mb-3">
              <FaSyncAlt className="text-indigo-600 text-2xl mr-2" />
              <h2 className="text-lg font-semibold">Policy Updates</h2>
            </div>
            <p className="text-gray-600 text-sm">
              We may update this policy anytime. Continued use means acceptance.
            </p>
          </div>

        </div>

        {/* Contact */}
        <div className="mt-12 bg-black text-white p-6 rounded-xl text-center">
          <div className="flex justify-center mb-3">
            <FaEnvelope className="text-xl" />
          </div>
          <h2 className="text-xl font-semibold mb-2">Contact Us</h2>
          <p className="text-sm text-gray-300">
            Email: support@mobileshop.com <br />
            Phone: +91 XXXXX XXXXX
          </p>
        </div>

      </div>
    </div>
    {/* Footer always at bottom */}
    <Footer />
  </>
  );
};

export default PrivacyPolicy;