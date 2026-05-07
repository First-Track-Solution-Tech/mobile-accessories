// import React from "react";
// import { Link } from "react-router-dom";

// const products = [
//   { id: 1, name: "Bluetooth Earphones", image: "/assets/bluetooth_earphones.jpg" },
//   { id: 2, name: "Chargers", image: "/assets/Chargers.jpg" },
//   { id: 3, name: "Covers", image: "/assets/Covers.jpg" },
//   { id: 4, name: "Tempered Glass", image: "/assets/Temperedglass.jpg" },
//   { id: 5, name: "Power Banks", image: "/assets/Powerbank.jpg" },
//   { id: 6, name: "Mobile Lens", image: "/assets/Mobilelens.jpg" },
//   { id: 7, name: "Memory Chips", image: "/assets/Memorychips.jpg" },
//   { id: 8, name: "USB Cords", image: "/assets/USBcords.jpg" },
// ];

// const Products = () => {
//   return (
//     <div className="py-12">
//       <div className="max-w-6xl mx-auto px-6">
//         <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">Our Products</h2>
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
//           {products.map((product) => (
//             <Link to={`/product/${product.id}`} key={product.id}>
//               <div className="bg-white  rounded-lg shadow-md  cursor-pointer">
//                 <img
//                   src={product.image}
//                   alt={product.name}
//                   className="w-full h-50 object-cover rounded-md"
//                 />
//                 <h3 className="text-lg font-bold text-gray-800 mt-5  text-center">{product.name}</h3>
//               </div>
//             </Link>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Products;







import React from "react";
import { Link, useParams } from "react-router-dom";

const products = [
  {
    id: 1,
    name: "Bluetooth Earphones",
    category: "earphone",
    image: "/assets/bluetooth_earphones.jpg",
  },
  {
    id: 2,
    name: "Fast Charger",
    category: "charger",
    image: "/assets/Chargers.jpg",
  },
  {
    id: 3,
    name: "Phone Cover",
    category: "cover",
    image: "/assets/Covers.jpg",
  },
  {
    id: 4,
    name: "Gaming Headphones",
    category: "headphones",
    image: "/assets/Temperedglass.jpg",
  },
  {
    id: 5,
    name: "Power Bank",
    category: "powerbank",
    image: "/assets/Powerbank.jpg",
  },
  {
    id: 6,
    name: "Mobile Lens",
    category: "lens",
    image: "/assets/Mobilelens.jpg",
  },
  {
    id: 7,
    name: "Memory Card",
    category: "memory",
    image: "/assets/Memorychips.jpg",
  },
  {
    id: 8,
    name: "USB Cable",
    category: "charger",
    image: "/assets/USBcords.jpg",
  },
];

const Products = () => {
  const { categoryName } = useParams();

  // Filter products based on category
  const filteredProducts = categoryName
    ? products.filter(
        (product) =>
          product.category.toLowerCase() ===
          categoryName.toLowerCase()
      )
    : products;

  return (
    <div className="py-12 bg-gray-100 min-h-screen">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Heading */}
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">
          {categoryName
            ? `${categoryName.toUpperCase()} Products`
            : "Our Products"}
        </h2>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <Link
                to={`/product/${product.id}`}
                key={product.id}
              >
                <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition duration-300 cursor-pointer p-3">
                  
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-52 object-cover rounded-lg"
                  />

                  <h3 className="text-lg font-bold text-gray-800 mt-4 text-center">
                    {product.name}
                  </h3>
                </div>
              </Link>
            ))
          ) : (
            <div className="col-span-full text-center text-gray-600 text-xl">
              No products found in this category
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Products;



