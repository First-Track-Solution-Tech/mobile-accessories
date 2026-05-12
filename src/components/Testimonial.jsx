// import React from "react";
// import {
//   FaQuoteLeft,
//   FaStar,
//   FaStarHalfAlt,
//   FaRegStar,
// } from "react-icons/fa";

// const testimonials = [
//   {
//     product: "Wireless Earbuds - Bass Boost Pro",
//     review:
//       "These earbuds have exceeded my expectations! The sound quality is amazing.",
//     name: "Aman K.",
//     avatar: "/Bavatar.png",
//     rating: 5,
//   },
//   {
//     product: "Fast Charging Adapter - 30W PD",
//     review:
//       "Super fast charging! It charges my phone quickly.",
//     name: "Priya S.",
//     avatar: "/Gavatar.png",
//     rating: 4.5,
//   },
//   {
//     product: "Magnetic Phone Holder",
//     review:
//       "Very sturdy and holds my phone securely.",
//     name: "Rajat M.",
//     avatar: "/Bavatar.png",
//     rating: 4,
//   },
//   {
//     product: "Premium Leather Phone Case",
//     review:
//       "Excellent quality with premium feel.",
//     name: "Neha R.",
//     avatar: "/Gavatar.png",
//     rating: 5,
//   },
// ];

// const StarRating = ({ rating }) => {
//   const fullStars = Math.floor(rating);
//   const halfStar = rating % 1 !== 0;
//   const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

//   return (
//     <div className="flex gap-1 text-yellow-400">
//       {[...Array(fullStars)].map((_, i) => (
//         <FaStar key={i} />
//       ))}
//       {halfStar && <FaStarHalfAlt />}
//       {[...Array(emptyStars)].map((_, i) => (
//         <FaRegStar key={i} />
//       ))}
//     </div>
//   );
// };

// const Testimonials = () => {
//   return (
//     <section className="py-16 bg-gradient-to-br from-black via-gray-900 to-gray-800 text-white overflow-hidden">
      
//       {/* Heading */}
//       <div className="text-center mb-10">
//         <h2 className="text-4xl font-bold">
//           Customer Reviews
//         </h2>
//         <p className="text-gray-400 mt-2">
//           Real feedback from happy customers
//         </p>
//       </div>

//       {/* Continuous Scroll */}
//       <div className="overflow-hidden relative">
//         <div className="flex animate-scroll gap-6 w-max">
          
//           {[...testimonials, ...testimonials].map((item, i) => (
//             <div
//               key={i}
//               className="min-w-[320px] bg-white/10 backdrop-blur-md border border-gray-700 rounded-2xl p-6 shadow-lg"
//             >
//               <FaQuoteLeft className="text-gray-400 text-2xl mb-3" />

//               <p className="text-blue-400 font-semibold text-sm mb-2">
//                 {item.product}
//               </p>

//               <StarRating rating={item.rating} />

//               <p className="text-gray-300 text-sm mt-4">
//                 "{item.review}"
//               </p>

//               <div className="flex items-center mt-5">
//                 <img
//                   src={item.avatar}
//                   alt={item.name}
//                   className="w-12 h-12 rounded-full"
//                 />

//                 <div className="ml-3">
//                   <p className="font-semibold">
//                     {item.name}
//                   </p>
//                   <p className="text-xs text-gray-400">
//                     Verified Buyer
//                   </p>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Testimonials;







import React from "react";
import {
  FaQuoteLeft,
  FaStar,
  FaStarHalfAlt,
  FaRegStar,
} from "react-icons/fa";

const testimonials = [
  {
    product: "Wireless Earbuds - Bass Boost Pro",
    review:
      "These earbuds have exceeded my expectations! The sound quality is amazing.",
    name: "Aman K.",
    avatar: "/Bavatar.png",
    rating: 5,
  },
  {
    product: "Fast Charging Adapter - 30W PD",
    review:
      "Super fast charging! It charges my phone quickly.",
    name: "Priya S.",
    avatar: "/Gavatar.png",
    rating: 4.5,
  },
  {
    product: "Magnetic Phone Holder",
    review:
      "Very sturdy and holds my phone securely.",
    name: "Rajat M.",
    avatar: "/Bavatar.png",
    rating: 4,
  },
  {
    product: "Premium Leather Phone Case",
    review:
      "Excellent quality with premium feel.",
    name: "Neha R.",
    avatar: "/Gavatar.png",
    rating: 5,
  },
];

const StarRating = ({ rating }) => {
  const fullStars = Math.floor(rating);
  const halfStar = rating % 1 !== 0;
  const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

  return (
    <div className="flex gap-1 text-yellow-400">
      {[...Array(fullStars)].map((_, i) => (
        <FaStar key={i} />
      ))}

      {halfStar && <FaStarHalfAlt />}

      {[...Array(emptyStars)].map((_, i) => (
        <FaRegStar key={i} />
      ))}
    </div>
  );
};

const Testimonials = () => {
  return (
    <section className="py-10 md:py-16 bg-gradient-to-br from-black via-gray-900 to-gray-800 text-white overflow-hidden">
      
      {/* Heading */}
      <div className="text-center mb-8 px-4">
        <h2 className="text-2xl md:text-4xl font-bold">
          Customer Reviews
        </h2>

        <p className="text-gray-400 mt-2 text-sm md:text-base">
          Real feedback from happy customers
        </p>
      </div>

      {/* Scroll Section */}
      <div className="overflow-hidden w-full">
        <div className="flex animate-scroll gap-4 md:gap-6 w-max px-4">
          
          {[...testimonials, ...testimonials].map((item, i) => (
            <div
              key={i}
              className="
                w-[260px]
                sm:w-[300px]
                md:w-[320px]
                flex-shrink-0
                bg-white/10
                backdrop-blur-md
                border border-gray-700
                rounded-2xl
                p-5
                shadow-lg
              "
            >
              <FaQuoteLeft className="text-gray-400 text-2xl mb-3" />

              <p className="text-blue-400 font-semibold text-sm mb-2">
                {item.product}
              </p>

              <StarRating rating={item.rating} />

              <p className="text-gray-300 text-sm mt-4 leading-relaxed">
                "{item.review}"
              </p>

              <div className="flex items-center mt-5">
                <img
                  src={item.avatar}
                  alt={item.name}
                  className="w-10 h-10 md:w-12 md:h-12 rounded-full object-cover"
                />

                <div className="ml-3">
                  <p className="font-semibold text-sm md:text-base">
                    {item.name}
                  </p>

                  <p className="text-xs text-gray-400">
                    Verified Buyer
                  </p>
                </div>
              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default Testimonials;