// // import React, { useState, useEffect } from "react";
// // import { FaQuoteLeft, FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

// // const testimonials = [
// //   {
// //     product: "Wireless Earbuds - Bass Boost Pro",
// //     review:
// //       "These earbuds have exceeded my expectations! The sound quality is amazing, and the battery life lasts all day. Highly recommended!",
// //     name: "Aman K.",
// //     avatar: "/Bavatar.png",
// //     rating: 5,
// //   },
// //   {
// //     product: "Fast Charging Adapter - 30W PD",
// //     review:
// //       "Super fast charging! It charges my phone in no time, and I don’t have to worry about overheating. Great buy!",
// //     name: "Priya S.",
// //     avatar: "/Gavatar.png",
// //     rating: 4.5,
// //   },
// //   {
// //     product: "Magnetic Phone Holder",
// //     review:
// //       "Very sturdy and holds my phone securely even on bumpy roads. A must-have accessory for every car owner.",
// //     name: "Rajat M.",
// //     avatar: "/Bavatar.png",
// //     rating: 4,
// //   },
// //   {
// //     product: "Premium Leather Phone Case",
// //     review:
// //       "Excellent quality case with a premium feel. It provides great protection and looks stylish!",
// //     name: "Neha R.",
// //     avatar: "/Gavatar.png",
// //     rating: 5,
// //   },
// //   {
// //     product: "Wireless Charging Pad - 15W",
// //     review:
// //       "A sleek and efficient charging pad that works flawlessly with my phone. No more messy cables!",
// //     name: "Vikram T.",
// //     avatar: "/Bavatar.png",
// //     rating: 4.5,
// //   },
// // ];

// // const StarRating = ({ rating }) => {
// //   const fullStars = Math.floor(rating);
// //   const halfStar = rating % 1 !== 0;
// //   const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

// //   return (
// //     <div className="flex text-yellow-500">
// //       {[...Array(fullStars)].map((_, index) => (
// //         <FaStar key={index} />
// //       ))}
// //       {halfStar && <FaStarHalfAlt />}
// //       {[...Array(emptyStars)].map((_, index) => (
// //         <FaRegStar key={index} />
// //       ))}
// //     </div>
// //   );
// // };

// // const Testimonials = () => {
// //   const [currentIndex, setCurrentIndex] = useState(0);

// //   useEffect(() => {
// //     const interval = setInterval(() => {
// //       setCurrentIndex((prevIndex) =>
// //         prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
// //       );
// //     }, 4000);

// //     return () => clearInterval(interval);
// //   }, []);

// //   return (
// //     <div className="py-12 px-6">
// //       <h2 className="text-center text-3xl font-bold mb-8">Customer Testimonials</h2>
// //       <div className="max-w-6xl mx-auto overflow-hidden relative">
// //         <div
// //           className="flex transition-transform duration-700 ease-in-out"
// //           style={{ transform: `translateX(-${currentIndex * 100}%)` }}
// //         >
// //           {testimonials.map((testimonial, index) => (
// //             <div key={index} className="min-w-full p-6 bg-white shadow-lg rounded-lg">
// //               <FaQuoteLeft className="text-3xl text-gray-400 mb-4" />
// //               <p className="font-semibold">
// //                 <strong>Product: {testimonial.product}</strong>
// //               </p>
// //               <StarRating rating={testimonial.rating} />
// //               <p className="text-gray-700 mt-2">{testimonial.review}</p>
// //               <div className="flex items-center mt-6">
// //                 <img
// //                   src={testimonial.avatar}
// //                   alt={testimonial.name}
// //                   className="w-12 h-12 rounded-full border border-gray-300 shadow"
// //                 />
// //                 <h4 className="text-lg font-bold ml-4">{testimonial.name}</h4>
// //               </div>
// //             </div>
// //           ))}
// //         </div>
// //       </div>

// //       {/* Navigation Dots */}
// //       <div className="flex justify-center mt-6 space-x-2">
// //         {testimonials.map((_, index) => (
// //           <button
// //             key={index}
// //             onClick={() => setCurrentIndex(index)}
// //             className={`h-3 w-3 rounded-full ${
// //               index === currentIndex ? "bg-orange-500" : "bg-gray-400"
// //             }`}
// //           />
// //         ))}
// //       </div>
// //     </div>
// //   );
// // };

// // export default Testimonials;






// import React, { useState, useEffect, useRef } from "react";
// import { FaQuoteLeft, FaStar, FaStarHalfAlt, FaRegStar, FaChevronLeft, FaChevronRight } from "react-icons/fa";

// const testimonials = [
//   {
//     product: "Wireless Earbuds - Bass Boost Pro",
//     review:
//       "These earbuds have exceeded my expectations! The sound quality is amazing, and the battery life lasts all day.",
//     name: "Aman K.",
//     avatar: "/Bavatar.png",
//     rating: 5,
//   },
//   {
//     product: "Fast Charging Adapter - 30W PD",
//     review:
//       "Super fast charging! It charges my phone quickly and stays cool. Great value.",
//     name: "Priya S.",
//     avatar: "/Gavatar.png",
//     rating: 4.5,
//   },
//   {
//     product: "Magnetic Phone Holder",
//     review:
//       "Very sturdy and holds my phone securely even on bumpy roads.",
//     name: "Rajat M.",
//     avatar: "/Bavatar.png",
//     rating: 4,
//   },
//   {
//     product: "Premium Leather Phone Case",
//     review:
//       "Excellent quality with a premium feel and great protection.",
//     name: "Neha R.",
//     avatar: "/Gavatar.png",
//     rating: 5,
//   },
//   {
//     product: "Wireless Charging Pad - 15W",
//     review:
//       "Sleek and efficient charging pad. No more messy cables!",
//     name: "Vikram T.",
//     avatar: "/Bavatar.png",
//     rating: 4.5,
//   },
// ];

// const StarRating = ({ rating }) => {
//   const fullStars = Math.floor(rating);
//   const halfStar = rating % 1 !== 0;
//   const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

//   return (
//     <div className="flex items-center gap-1 text-yellow-500">
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
//   const [index, setIndex] = useState(0);
//   const intervalRef = useRef(null);

//   const next = () => setIndex((p) => (p + 1) % testimonials.length);
//   const prev = () => setIndex((p) => (p - 1 + testimonials.length) % testimonials.length);

//   useEffect(() => {
//     intervalRef.current = setInterval(next, 4000);
//     return () => clearInterval(intervalRef.current);
//   }, []);

//   const pause = () => clearInterval(intervalRef.current);
//   const resume = () => (intervalRef.current = setInterval(next, 4000));

//   // Show 3 cards on desktop, 1 on mobile
//   const getVisible = () => {
//     const res = [];
//     for (let i = 0; i < 3; i++) {
//       res.push(testimonials[(index + i) % testimonials.length]);
//     }
//     return res;
//   };

//   return (
//     <section className="py-16 px-6 bg-gradient-to-br from-slate-900 via-gray-900 to-black text-white">
//       <div className="max-w-6xl mx-auto">

//         {/* Header */}
//         <div className="text-center mb-12">
//           <h2 className="text-4xl font-extrabold">Customer Reviews</h2>
//           <p className="text-gray-400 mt-2">Real feedback from our happy customers</p>
//         </div>

//         {/* Slider */}
//         <div
//           className="relative"
//           onMouseEnter={pause}
//           onMouseLeave={resume}
//         >
//           <div className="grid md:grid-cols-3 gap-6">
//             {getVisible().map((t, i) => (
//               <div
//                 key={i}
//                 className="bg-white/10 backdrop-blur-md border border-gray-700 rounded-2xl p-6 shadow-xl hover:scale-105 transition"
//               >
//                 <FaQuoteLeft className="text-2xl text-gray-400 mb-3" />

//                 <p className="text-sm text-blue-400 font-semibold mb-1">
//                   {t.product}
//                 </p>

//                 <StarRating rating={t.rating} />

//                 <p className="text-gray-300 text-sm mt-3 leading-relaxed">
//                   "{t.review}"
//                 </p>

//                 <div className="flex items-center mt-5">
//                   <img
//                     src={t.avatar}
//                     alt={t.name}
//                     className="w-10 h-10 rounded-full border border-gray-600"
//                   />
//                   <div className="ml-3">
//                     <p className="font-semibold">{t.name}</p>
//                     <p className="text-xs text-gray-400">Verified Buyer</p>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>

//           {/* Arrows */}
//           <button
//             onClick={prev}
//             className="absolute left-0 top-1/2 -translate-y-1/2 bg-white/20 p-3 rounded-full hover:bg-white/30"
//           >
//             <FaChevronLeft />
//           </button>

//           <button
//             onClick={next}
//             className="absolute right-0 top-1/2 -translate-y-1/2 bg-white/20 p-3 rounded-full hover:bg-white/30"
//           >
//             <FaChevronRight />
//           </button>
//         </div>

//         {/* Dots */}
//         <div className="flex justify-center mt-8 gap-2">
//           {testimonials.map((_, i) => (
//             <button
//               key={i}
//               onClick={() => setIndex(i)}
//               className={`w-3 h-3 rounded-full ${i === index ? "bg-blue-500" : "bg-gray-500"}`}
//             />
//           ))}
//         </div>

//       </div>
//     </section>
//   );
// };

// export default Testimonials;






import React, { useState, useEffect, useRef } from "react";
import {
  FaQuoteLeft,
  FaStar,
  FaStarHalfAlt,
  FaRegStar,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";

const testimonials = [
  {
    product: "Wireless Earbuds - Bass Boost Pro",
    review:
      "These earbuds have exceeded my expectations! The sound quality is amazing, and the battery life lasts all day.",
    name: "Aman K.",
    avatar: "/Bavatar.png",
    rating: 5,
  },
  {
    product: "Fast Charging Adapter - 30W PD",
    review:
      "Super fast charging! It charges my phone quickly and stays cool.",
    name: "Priya S.",
    avatar: "/Gavatar.png",
    rating: 4.5,
  },
  {
    product: "Magnetic Phone Holder",
    review:
      "Very sturdy and holds my phone securely even on bumpy roads.",
    name: "Rajat M.",
    avatar: "/Bavatar.png",
    rating: 4,
  },
  {
    product: "Premium Leather Phone Case",
    review:
      "Excellent quality with a premium feel and great protection.",
    name: "Neha R.",
    avatar: "/Gavatar.png",
    rating: 5,
  },
  {
    product: "Wireless Charging Pad - 15W",
    review:
      "Sleek and efficient charging pad. No more messy cables!",
    name: "Vikram T.",
    avatar: "/Bavatar.png",
    rating: 4.5,
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
  const [index, setIndex] = useState(0);
  const intervalRef = useRef(null);

  const next = () => {
    setIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setIndex((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  useEffect(() => {
    intervalRef.current = setInterval(next, 3000);
    return () => clearInterval(intervalRef.current);
  }, []);

  const pause = () => clearInterval(intervalRef.current);
  const resume = () => {
    intervalRef.current = setInterval(next, 3000);
  };

  const getVisible = () => {
    const items = [];
    for (let i = 0; i < 3; i++) {
      items.push(testimonials[(index + i) % testimonials.length]);
    }
    return items;
  };

  return (
    <section className="py-16 px-6 bg-gradient-to-br from-black via-gray-900 to-gray-800 text-white">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold">Customer Reviews</h2>
          <p className="text-gray-400 mt-2">
            Real feedback from our happy customers
          </p>
        </div>

        {/* Slider */}
        <div
          className="relative"
          onMouseEnter={pause}
          onMouseLeave={resume}
        >
          <div className="grid md:grid-cols-3 gap-6">
            {getVisible().map((t, i) => (
              <div
                key={i}
                className="bg-white/10 backdrop-blur-md border border-gray-700 rounded-2xl p-6 shadow-lg hover:scale-105 transition"
              >
                <FaQuoteLeft className="text-gray-400 text-2xl mb-3" />

                <p className="text-blue-400 font-semibold text-sm mb-1">
                  {t.product}
                </p>

                <StarRating rating={t.rating} />

                <p className="text-gray-300 text-sm mt-3">
                  \"{t.review}\"
                </p>

                <div className="flex items-center mt-5">
                  <img
                    src={t.avatar}
                    alt={t.name}
                    className="w-10 h-10 rounded-full border"
                  />
                  <div className="ml-3">
                    <p className="font-semibold">{t.name}</p>
                    <p className="text-xs text-gray-400">
                      Verified Buyer
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Arrows */}
          <button
            onClick={prev}
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-white/20 p-3 rounded-full hover:bg-white/30"
          >
            <FaChevronLeft />
          </button>

          <button
            onClick={next}
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-white/20 p-3 rounded-full hover:bg-white/30"
          >
            <FaChevronRight />
          </button>
        </div>

        {/* Dots */}
        <div className="flex justify-center mt-8 gap-2">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`w-3 h-3 rounded-full ${
                i === index ? "bg-blue-500" : "bg-gray-500"
              }`}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default Testimonials;