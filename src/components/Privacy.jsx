





// import React from "react";
// import Footer from "../components/Footer"; // Footer import
// import {
//   FaUserShield,
//   FaLock,
//   FaCookieBite,
//   FaShareAlt,
//   FaUserCheck,
//   FaExternalLinkAlt,
//   FaChild,
//   FaSyncAlt,
//   FaEnvelope
// } from "react-icons/fa";

// const PrivacyPolicy = () => {
//   return (
//     <>
//     <div className="bg-gradient-to-br from-gray-100 via-blue-50 to-white py-16 px-6 md:px-12">
//       <div className="max-w-5xl mx-auto bg-white shadow-2xl rounded-2xl p-10">

//         {/* Header */}
//         <div className="text-center mb-10">
//           <h1 className="text-4xl font-extrabold text-gray-800 mb-2">
//             Privacy Policy
//           </h1>
//           <p className="text-gray-500">
//             Your privacy is important to us at Mobile Shop
//           </p>
//           <p className="text-sm text-gray-400 mt-1">
//             Effective Date: 1 January 2026
//           </p>
//         </div>

//         {/* Sections */}
//         <div className="grid md:grid-cols-2 gap-8">

//           {/* Info Collection */}
//           <div className="bg-blue-50 p-6 rounded-xl shadow hover:shadow-lg transition">
//             <div className="flex items-center mb-3">
//               <FaUserShield className="text-blue-600 text-2xl mr-2" />
//               <h2 className="text-lg font-semibold">Information We Collect</h2>
//             </div>
//             <p className="text-gray-600 text-sm">
//               Name, email, phone number, address, and technical data like IP and browser info.
//             </p>
//           </div>

//           {/* Data Usage */}
//           <div className="bg-green-50 p-6 rounded-xl shadow hover:shadow-lg transition">
//             <div className="flex items-center mb-3">
//               <FaUserCheck className="text-green-600 text-2xl mr-2" />
//               <h2 className="text-lg font-semibold">How We Use Data</h2>
//             </div>
//             <p className="text-gray-600 text-sm">
//               To process orders, improve services, provide support, and send updates.
//             </p>
//           </div>

//           {/* Cookies */}
//           <div className="bg-yellow-50 p-6 rounded-xl shadow hover:shadow-lg transition">
//             <div className="flex items-center mb-3">
//               <FaCookieBite className="text-yellow-600 text-2xl mr-2" />
//               <h2 className="text-lg font-semibold">Cookies</h2>
//             </div>
//             <p className="text-gray-600 text-sm">
//               We use cookies to enhance experience and analyze traffic.
//             </p>
//           </div>

//           {/* Sharing */}
//           <div className="bg-orange-50 p-6 rounded-xl shadow hover:shadow-lg transition">
//             <div className="flex items-center mb-3">
//               <FaShareAlt className="text-orange-600 text-2xl mr-2" />
//               <h2 className="text-lg font-semibold">Data Sharing</h2>
//             </div>
//             <p className="text-gray-600 text-sm">
//               Shared only with delivery partners, payment gateways, or legal authorities.
//             </p>
//           </div>

//           {/* Security */}
//           <div className="bg-purple-50 p-6 rounded-xl shadow hover:shadow-lg transition">
//             <div className="flex items-center mb-3">
//               <FaLock className="text-purple-600 text-2xl mr-2" />
//               <h2 className="text-lg font-semibold">Data Security</h2>
//             </div>
//             <p className="text-gray-600 text-sm">
//               We use secure systems to protect your data, but no method is 100% secure.
//             </p>
//           </div>

//           {/* Third Party */}
//           <div className="bg-gray-100 p-6 rounded-xl shadow hover:shadow-lg transition">
//             <div className="flex items-center mb-3">
//               <FaExternalLinkAlt className="text-gray-700 text-2xl mr-2" />
//               <h2 className="text-lg font-semibold">Third-Party Links</h2>
//             </div>
//             <p className="text-gray-600 text-sm">
//               We are not responsible for external websites linked on our platform.
//             </p>
//           </div>

//           {/* Children */}
//           <div className="bg-red-50 p-6 rounded-xl shadow hover:shadow-lg transition">
//             <div className="flex items-center mb-3">
//               <FaChild className="text-red-600 text-2xl mr-2" />
//               <h2 className="text-lg font-semibold">Children’s Privacy</h2>
//             </div>
//             <p className="text-gray-600 text-sm">
//               Our services are not intended for users under 18 years.
//             </p>
//           </div>

//           {/* Updates */}
//           <div className="bg-indigo-50 p-6 rounded-xl shadow hover:shadow-lg transition">
//             <div className="flex items-center mb-3">
//               <FaSyncAlt className="text-indigo-600 text-2xl mr-2" />
//               <h2 className="text-lg font-semibold">Policy Updates</h2>
//             </div>
//             <p className="text-gray-600 text-sm">
//               We may update this policy anytime. Continued use means acceptance.
//             </p>
//           </div>

//         </div>

//         {/* Contact */}
//         <div className="mt-12 bg-black text-white p-6 rounded-xl text-center">
//           <div className="flex justify-center mb-3">
//             <FaEnvelope className="text-xl" />
//           </div>
//           <h2 className="text-xl font-semibold mb-2">Contact Us</h2>
//           <p className="text-sm text-gray-300">
//             Email: support@mobileshop.com <br />
//             Phone: +91 XXXXX XXXXX
//           </p>
//         </div>

//       </div>
//     </div>
//     {/* Footer always at bottom */}
//     <Footer />
//   </>
//   );
// };

// export default PrivacyPolicy;




import React from "react";
import Footer from "../components/Footer";
import {
  FaUserShield,
  FaLock,
  FaCookieBite,
  FaShareAlt,
  FaUserCheck,
  FaExternalLinkAlt,
  FaChild,
  FaSyncAlt,
  FaEnvelope,
  FaCheckCircle
} from "react-icons/fa";

const PrivacyPolicy = () => {
  const policyData = [
    {
      icon: <FaUserShield className="text-blue-500 text-3xl" />,
      title: "Information We Collect",
      desc: "We collect your name, email, phone number, shipping address and technical information."
    },
    {
      icon: <FaUserCheck className="text-green-500 text-3xl" />,
      title: "How We Use Data",
      desc: "Your data helps us process orders, improve services and provide customer support."
    },
    {
      icon: <FaCookieBite className="text-yellow-500 text-3xl" />,
      title: "Cookies",
      desc: "Cookies help us improve your browsing experience and track website performance."
    },
    {
      icon: <FaShareAlt className="text-orange-500 text-3xl" />,
      title: "Data Sharing",
      desc: "We only share data with trusted delivery and payment partners."
    },
    {
      icon: <FaLock className="text-purple-500 text-3xl" />,
      title: "Data Security",
      desc: "We use secure systems to protect your personal information."
    },
    {
      icon: <FaExternalLinkAlt className="text-gray-500 text-3xl" />,
      title: "Third Party Links",
      desc: "External website links are not controlled by us."
    },
    {
      icon: <FaChild className="text-red-500 text-3xl" />,
      title: "Children Privacy",
      desc: "Our platform is not intended for users under 18."
    },
    {
      icon: <FaSyncAlt className="text-indigo-500 text-3xl" />,
      title: "Policy Updates",
      desc: "We may update our privacy policy anytime."
    }
  ];

  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-[#eef7ff] via-[#f8fbff] to-[#ffffff]">

        {/* Hero Section */}
        <div className="text-center py-16 px-6">
          <h1 className="text-5xl font-extrabold text-gray-800 mb-4">
            Privacy Policy
          </h1>

          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Your privacy matters to us. Learn how Mobiee Shop protects,
            stores and manages your personal information securely.
          </p>

          {/* <p className="text-sm text-gray-500 mt-3">
            Effective Date: 1 January 2026
          </p> */}
        </div>

        {/* Main Policy Cards */}
        <div className="max-w-6xl mx-auto px-6 pb-12">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {policyData.map((item, index) => (
              <div
                key={index}
                className="bg-white/80 backdrop-blur-lg border border-gray-200 rounded-2xl p-6 shadow-md hover:shadow-2xl hover:-translate-y-2 transition duration-300"
              >
                <div className="mb-4">{item.icon}</div>

                <h2 className="text-xl font-bold text-gray-800 mb-3">
                  {item.title}
                </h2>

                <p className="text-gray-600 text-sm leading-6">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Why Trust Us Section */}
        <div className="max-w-5xl mx-auto px-6 py-12">
          <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white rounded-3xl p-10 shadow-xl">
            <h2 className="text-3xl font-bold text-center mb-8">
              Why Customers Trust Us
            </h2>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <FaCheckCircle className="mx-auto text-3xl mb-3 text-yellow-300" />
                <h3 className="font-semibold text-lg">Secure Payments</h3>
                <p className="text-sm text-gray-200 mt-2">
                  Safe transactions with trusted payment gateways.
                </p>
              </div>

              <div className="text-center">
                <FaCheckCircle className="mx-auto text-3xl mb-3 text-yellow-300" />
                <h3 className="font-semibold text-lg">Data Protection</h3>
                <p className="text-sm text-gray-200 mt-2">
                  Your personal information stays protected.
                </p>
              </div>

              <div className="text-center">
                <FaCheckCircle className="mx-auto text-3xl mb-3 text-yellow-300" />
                <h3 className="font-semibold text-lg">Trusted Delivery</h3>
                <p className="text-sm text-gray-200 mt-2">
                  Reliable shipping partners for secure delivery.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div className="max-w-4xl mx-auto px-6 pb-16">
          <div className="bg-white shadow-xl rounded-3xl p-10 text-center border border-gray-200">
            <FaEnvelope className="text-4xl text-blue-600 mx-auto mb-4" />

            <h2 className="text-2xl font-bold text-gray-800 mb-3">
              Need Help?
            </h2>

            <p className="text-gray-600 mb-4">
              If you have any questions regarding our privacy policy,
              feel free to contact our support team.
            </p>

            <div className="text-gray-700 font-medium">
              support@mobieeshop.com
            </div>

            <div className="text-gray-700 mt-2">
              +91 XXXXX XXXXX
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default PrivacyPolicy;