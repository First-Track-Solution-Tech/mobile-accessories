// import React from "react";

// const SpecialOffers = () => {
//   return (
//     <section className="p-6">
//       <h2 className="text-2xl font-bold text-center mb-6">Special Offers</h2>
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
//         <div className="bg-white p-4 rounded-lg shadow-md">
//           <h3 className="text-lg font-semibold mb-4">New Year Specials</h3>
//           <div className="space-y-4">
//             <div className="flex flex-col items-center">
//               <img src="/assets/PowerBanks.jpg" alt="PowerBanks" className="w-24 h-24 object-cover" />
//               <p className="mt-2 font-medium">PowerBanks</p>
//               <span className="text-red-500 font-bold">Min. 20% Off</span>
//             </div>
//             <div className="flex flex-col items-center">
//               <img src="/assets/EarBuds.jpg" alt="Earpods" className="w-24 h-24 object-cover" />
//               <p className="mt-2 font-medium">Earbuds</p>
//               <span className="text-red-500 font-bold">Min. 40% Off</span>
//             </div>
//           </div>
//         </div>
//         <div className="bg-white p-4 rounded-lg shadow-md">
//           <h3 className="text-lg font-semibold mb-4">Special Days Special Offers</h3>
//           <div className="space-y-4">
//             <div className="flex flex-col items-center">
//               <img src="/assets/Speakers.jpg" alt="Speakers" className="w-24 h-24 object-cover" />
//               <p className="mt-2 font-medium">Speakers</p>
//               <span className="text-red-500 font-bold">Special offer</span>
//             </div>
//             <div className="flex flex-col items-center">
//               <img src="/assets/Wireless Earphones.jpg" alt="Wireless Earphones" className="w-24 h-24 object-cover" />
//               <p className="mt-2 font-medium">Wireless Earphones</p>
//               <span className="text-red-500 font-bold">Min. 40% Off</span>
//             </div>
//           </div>
//         </div>
//         <div className="bg-white p-4 rounded-lg shadow-md">
//           <h3 className="text-lg font-semibold mb-4">Most Discounted Deals Here</h3>
//           <div className="space-y-4">
//             <div className="flex flex-col items-center">
//               <img src="/assets/Type C Charger.jpg" alt="Type C Charger" className="w-24 h-24 object-cover" />
//               <p className="mt-2 font-medium">Type C Charger</p>
//               <span className="text-red-500 font-bold">Special offer</span>
//             </div>
//             <div className="flex flex-col items-center">
//               <img src="/assets/Adaptor.jpg" alt="Adaptors" className="w-24 h-24 object-cover" />
//               <p className="mt-2 font-medium">Adaptors</p>
//               <span className="text-red-500 font-bold">Min. 20% Off</span>
//             </div>
//           </div>
//         </div>
      
//       </div>
//     </section>
//   );
// };

// export default SpecialOffers;







import React from "react";

const SpecialOffers = () => {
  const offers = [
    {
      title: "New Year Specials",
      items: [
        {
          name: "PowerBanks",
          img: "/assets/PowerBanks.jpg",
          offer: "Min. 20% Off",
        },
        {
          name: "Earbuds",
          img: "/assets/EarBuds.jpg",
          offer: "Min. 40% Off",
        },
      ],
    },
    {
      title: "Special Days Offers",
      items: [
        {
          name: "Speakers",
          img: "/assets/Speakers.jpg",
          offer: "Special Offer",
        },
        {
          name: "Wireless Earphones",
          img: "/assets/Wireless Earphones.jpg",
          offer: "Min. 40% Off",
        },
      ],
    },
    {
      title: "Best Discount Deals",
      items: [
        {
          name: "Type C Charger",
          img: "/assets/Type C Charger.jpg",
          offer: "Special Offer",
        },
        {
          name: "Adaptors",
          img: "/assets/Adaptor.jpg",
          offer: "Min. 20% Off",
        },
      ],
    },
  ];

  return (
    <section className="py-16 px-6 bg-gradient-to-br from-gray-100 via-white to-blue-50">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-gray-800">
            Special Offers
          </h2>
          <p className="text-gray-500 mt-2">
            Grab the best deals on your favorite accessories
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {offers.map((section, index) => (
            <div
              key={index}
              className="bg-white/70 backdrop-blur-md p-6 rounded-2xl shadow-lg hover:shadow-2xl transition"
            >
              <h3 className="text-xl font-bold text-gray-800 mb-6 text-center">
                {section.title}
              </h3>

              <div className="space-y-6">
                {section.items.map((item, i) => (
                  <div
                    key={i}
                    className="flex flex-col items-center bg-white rounded-xl p-4 shadow hover:scale-105 transition"
                  >
                    <img
                      src={item.img}
                      alt={item.name}
                      className="w-24 h-24 object-cover rounded-lg"
                    />

                    <p className="mt-3 font-semibold text-gray-700">
                      {item.name}
                    </p>

                    <span className="mt-1 px-3 py-1 text-sm font-bold text-white bg-gradient-to-r from-red-500 to-orange-500 rounded-full shadow">
                      {item.offer}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default SpecialOffers;