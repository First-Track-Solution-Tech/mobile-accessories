// import React, { useState } from "react";
// import { Search } from "lucide-react";
// import Footer from "../components/Footer";   // Footer import

// const Blog = () => {
//   const [searchTerm, setSearchTerm] = useState("");
//   const [selectedCategory, setSelectedCategory] = useState("All");

//   const categories = [
//     "All",
//     "Earbuds",
//     "Chargers",
//     "Powerbanks",
//     "Phone Covers",
//     "Tips",
//   ];

//   const blogs = [
//     {
//       id: 1,
//       title: "Top 10 Mobile Accessories in 2025",
//       category: "Accessories",
//       image:
//         "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9",
//       desc: "Discover latest trending accessories."
//     },
//     {
//       id: 2,
//       title: "Best Wireless Earbuds Under ₹1000",
//       category: "Earbuds",
//       image:
//         "https://images.unsplash.com/photo-1583394838336-acd977736f90",
//       desc: "Affordable earbuds for students."
//     },
//     {
//       id: 3,
//       title: "Best Fast Chargers",
//       category: "Chargers",
//       image:
//         "https://images.unsplash.com/photo-1580910051074-3eb694886505",
//       desc: "Top charging accessories."
//     }
//   ];

//   const filteredBlogs = blogs.filter((blog) => {
//     const matchesSearch = blog.title
//       .toLowerCase()
//       .includes(searchTerm.toLowerCase());

//     const matchesCategory =
//       selectedCategory === "All" ||
//       blog.category === selectedCategory;

//     return matchesSearch && matchesCategory;
//   });

//   return (
//     <>
//       <div className="bg-gray-100 min-h-screen">

//         {/* Hero Section */}
//         <div className="bg-black text-white py-16 text-center">
//           <h1 className="text-4xl font-bold">Our Blog</h1>
//           <p className="mt-4 text-gray-300">
//             Latest trends, offers & tips
//           </p>
//         </div>

//         {/* Search */}
//         <div className="max-w-6xl mx-auto px-4 mt-10">
//           <div className="flex items-center bg-white shadow-md rounded-full px-4 py-3">
//             <Search className="text-gray-500 mr-2" />
//             <input
//               type="text"
//               placeholder="Search blogs..."
//               className="w-full outline-none"
//               value={searchTerm}
//               onChange={(e) => setSearchTerm(e.target.value)}
//             />
//           </div>
//         </div>

//         {/* Categories */}
//         <div className="max-w-6xl mx-auto px-4 mt-8 flex flex-wrap gap-3 justify-center">
//           {categories.map((cat) => (
//             <button
//               key={cat}
//               onClick={() => setSelectedCategory(cat)}
//               className="px-5 py-2 rounded-full bg-white shadow"
//             >
//               {cat}
//             </button>
//           ))}
//         </div>

//         {/* Blog Cards */}
//         <div className="max-w-6xl mx-auto px-4 py-12">
//           <h2 className="text-3xl font-bold text-center mb-8">
//             Latest Blogs
//           </h2>

//           <div className="grid md:grid-cols-3 gap-8">
//             {filteredBlogs.map((blog) => (
//               <div
//                 key={blog.id}
//                 className="bg-white rounded-xl shadow-md overflow-hidden"
//               >
//                 <img
//                   src={blog.image}
//                   alt={blog.title}
//                   className="w-full h-56 object-cover"
//                 />

//                 <div className="p-5">
//                   <h3 className="text-xl font-bold mb-2">
//                     {blog.title}
//                   </h3>

//                   <p className="text-gray-600 mb-4">
//                     {blog.desc}
//                   </p>

//                   <button className="bg-black text-white px-4 py-2 rounded-lg">
//                     Read More
//                   </button>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Other sections */}
//         <div className="py-12 text-center">
//           <h2 className="text-3xl font-bold">Special Offers</h2>
//           <p className="mt-3">Get latest discounts</p>
//         </div>

//       </div>

//       {/* Footer always at bottom */}
//       <Footer />
//     </>
//   );
// };

// export default Blog;




import React, { useState } from "react";
import { Search, Calendar, User } from "lucide-react";
import Footer from "../components/Footer";

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = [
    "All",
    "Earbuds",
    "Chargers",
    "Powerbanks",
    "Phone Covers",
    "Tips",
  ];

  const blogs = [
    {
      id: 1,
      title: "Top 10 Mobile Accessories in 2025",
      category: "Tips",
      image:
        "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9",
      desc: "Discover latest trending accessories for your smartphone."
    },
    {
      id: 2,
      title: "Best Wireless Earbuds Under ₹1000",
      category: "Earbuds",
      image:
        "https://images.unsplash.com/photo-1583394838336-acd977736f90",
      desc: "Affordable earbuds with premium sound quality."
    },
    {
      id: 3,
      title: "Best Fast Chargers for Android & iPhone",
      category: "Chargers",
      image:
        "https://images.unsplash.com/photo-1580910051074-3eb694886505",
      desc: "Top charging accessories for faster charging."
    },
    {
      id: 4,
      title: "Top Powerbanks for Travelers",
      category: "Powerbanks",
      image:
        "https://images.unsplash.com/photo-1609592806596-b43db9c5b9cf",
      desc: "Never run out of battery during travel."
    },
    {
      id: 5,
      title: "Best Stylish Phone Covers",
      category: "Phone Covers",
      image:
        "https://images.unsplash.com/photo-1603899122634-f086ca5f5ddd",
      desc: "Protect your phone with stylish covers."
    }
  ];

  const filteredBlogs = blogs.filter((blog) => {
    const matchesSearch = blog.title
      .toLowerCase()
      .includes(searchTerm.toLowerCase());

    const matchesCategory =
      selectedCategory === "All" ||
      blog.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  return (
    <>
      <div className="bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50 min-h-screen">

        {/* Hero Section */}
        <div className="bg-gradient-to-r from-black via-gray-900 to-blue-900 text-white py-20 text-center">
          <h1 className="text-5xl font-bold mb-4">
            Our Blog
          </h1>
          <p className="text-gray-300 text-lg">
            Latest trends, offers, buying guides & mobile tips
          </p>
        </div>

        {/* Search */}
        <div className="max-w-6xl mx-auto px-4 mt-10">
          <div className="flex items-center bg-white shadow-lg rounded-full px-5 py-4">
            <Search className="text-gray-500 mr-2" />
            <input
              type="text"
              placeholder="Search blogs..."
              className="w-full outline-none"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        {/* Categories */}
        <div className="max-w-6xl mx-auto px-4 mt-8 flex flex-wrap gap-4 justify-center">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-6 py-2 rounded-full font-medium transition ${
                selectedCategory === cat
                  ? "bg-blue-600 text-white shadow-lg"
                  : "bg-white text-gray-700 hover:bg-black hover:text-white"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Featured Blog Section */}
        <div className="max-w-6xl mx-auto px-4 mt-16">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-8 text-white shadow-xl">
            <h2 className="text-3xl font-bold mb-4">
              Featured Article
            </h2>
            <p className="text-lg mb-4">
              Learn how to choose the best accessories for your mobile in 2025.
            </p>
            <button className="bg-white text-black px-6 py-3 rounded-full font-semibold hover:bg-gray-200 transition">
              Explore Now
            </button>
          </div>
        </div>

        {/* Blog Cards */}
        <div className="max-w-6xl mx-auto px-4 py-16">
          <h2 className="text-3xl font-bold text-center mb-10">
            Latest Blogs
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {filteredBlogs.map((blog) => (
              <div
                key={blog.id}
                className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-2xl hover:-translate-y-2 transition duration-300"
              >
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-56 object-cover"
                />

                <div className="p-5">
                  
                  <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                    <div className="flex items-center gap-1">
                      <Calendar size={16} />
                      <span>2025</span>
                    </div>

                    <div className="flex items-center gap-1">
                      <User size={16} />
                      <span>Admin</span>
                    </div>
                  </div>

                  <h3 className="text-xl font-bold mb-2">
                    {blog.title}
                  </h3>

                  <p className="text-gray-600 mb-4">
                    {blog.desc}
                  </p>

                  <button className="bg-black text-white px-5 py-2 rounded-lg hover:bg-blue-600 transition">
                    Read More
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="max-w-5xl mx-auto px-4 pb-16">
          <div className="bg-gradient-to-r from-yellow-400 to-orange-500 rounded-3xl p-10 text-center shadow-xl">
            <h2 className="text-3xl font-bold mb-4 text-black">
              Subscribe Our Blog Updates
            </h2>

            <p className="text-black mb-6">
              Get latest mobile accessory news directly in your inbox
            </p>

            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-5 py-3 rounded-full w-full md:w-96 outline-none"
              />

              <button className="bg-black text-white px-6 py-3 rounded-full hover:bg-gray-800">
                Subscribe
              </button>
            </div>
          </div>
        </div>

      </div>

      <Footer />
    </>
  );
};

export default Blog;