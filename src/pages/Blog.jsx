import React, { useState } from "react";
import { Search } from "lucide-react";
import Footer from "../components/Footer";   // Footer import

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
      category: "Accessories",
      image:
        "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9",
      desc: "Discover latest trending accessories."
    },
    {
      id: 2,
      title: "Best Wireless Earbuds Under ₹1000",
      category: "Earbuds",
      image:
        "https://images.unsplash.com/photo-1583394838336-acd977736f90",
      desc: "Affordable earbuds for students."
    },
    {
      id: 3,
      title: "Best Fast Chargers",
      category: "Chargers",
      image:
        "https://images.unsplash.com/photo-1580910051074-3eb694886505",
      desc: "Top charging accessories."
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
      <div className="bg-gray-100 min-h-screen">

        {/* Hero Section */}
        <div className="bg-black text-white py-16 text-center">
          <h1 className="text-4xl font-bold">Our Blog</h1>
          <p className="mt-4 text-gray-300">
            Latest trends, offers & tips
          </p>
        </div>

        {/* Search */}
        <div className="max-w-6xl mx-auto px-4 mt-10">
          <div className="flex items-center bg-white shadow-md rounded-full px-4 py-3">
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
        <div className="max-w-6xl mx-auto px-4 mt-8 flex flex-wrap gap-3 justify-center">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className="px-5 py-2 rounded-full bg-white shadow"
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Blog Cards */}
        <div className="max-w-6xl mx-auto px-4 py-12">
          <h2 className="text-3xl font-bold text-center mb-8">
            Latest Blogs
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {filteredBlogs.map((blog) => (
              <div
                key={blog.id}
                className="bg-white rounded-xl shadow-md overflow-hidden"
              >
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-56 object-cover"
                />

                <div className="p-5">
                  <h3 className="text-xl font-bold mb-2">
                    {blog.title}
                  </h3>

                  <p className="text-gray-600 mb-4">
                    {blog.desc}
                  </p>

                  <button className="bg-black text-white px-4 py-2 rounded-lg">
                    Read More
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Other sections */}
        <div className="py-12 text-center">
          <h2 className="text-3xl font-bold">Special Offers</h2>
          <p className="mt-3">Get latest discounts</p>
        </div>

      </div>

      {/* Footer always at bottom */}
      <Footer />
    </>
  );
};

export default Blog;