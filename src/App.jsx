import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { CartProvider } from "./context/CartContext";
import Navbar from "./components/Navbar";
import SearchBar from "./components/Searchbar";
import Refer from "./components/Refer";
import Partner from "./components/Partner";
import Slideshow from "./components/Slideshow";
import Products from "./components/Products";
import ProductDetail from "./pages/ProductDetail.jsx";
import SpecialOffers from "./components/SpecialOffers";
import MobileAccessories from "./components/MobileAccessories";
import Testimonials from "./components/Testimonial";
import OverTeam from "./components/OurTeam";
import Newsletter from "./components/Newsletter";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import About from "./components/About";
import Shipping from "./components/Shipping";
import Returns from "./components/Return";
import Terms from "./components/Term";
import Privacy from "./components/Privacy";
import LoginPage from "./components/LoginPage";
import BottomNav from "./components/BottomNav";

import CartPage from "./pages/CartPage";
import AddressPage from "./pages/AddressPage.jsx";
import Confirmation from "./pages/Confirmation";
import Blog from "./pages/Blog.jsx";
import FAQ from "./pages/faq.jsx";
import Payment from "./pages/PaymentPage";
import RegisterPage from "./pages/RegisterPage";
import ReturnExchange from "./pages/ReturnExchange.jsx";
import ReturnsRefunds from "./pages/ReturnsRefunds.jsx";
import RefundCancellation from "./pages/RefundCancellation.jsx";
import Wishlist from "./pages/Wishlist";

const App = () => {
  return (
    <CartProvider>
      <Router>
        <div className="min-h-screen flex flex-col overflow-x-hidden">
          
          {/* Navbar */}
          <Navbar />

          {/* Main Content */}
          <div className="w-full">
            <Routes>
              <Route
                path="/"
                element={
                  <>
                    <SearchBar />
                    <Slideshow />
                    <Products />
                    <SpecialOffers />
                    <MobileAccessories />
                    <Testimonials />
                    <OverTeam />
                    <Newsletter />
                    <Footer />
                  </>
                }
              />

              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/shipping" element={<Shipping />} />
              <Route path="/return" element={<Returns />} />
              <Route path="/terms" element={<Terms />} />
              <Route path="/privacy" element={<Privacy />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/register" element={<RegisterPage />} />

              <Route path="/refer" element={<Refer />} />
              <Route path="/partner" element={<Partner />} />

              <Route path="/products" element={<Products />} />
              <Route
                path="/products/:categoryName"
                element={<Products />}
              />

              <Route path="/product/:id" element={<ProductDetail />} />

              <Route path="/cart" element={<CartPage />} />
              <Route path="/wishlist" element={<Wishlist />} />
              <Route path="/address" element={<AddressPage />} />
              <Route path="/confirmation" element={<Confirmation />} />

              <Route path="/payment" element={<Payment />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/faq" element={<FAQ />} />
              <Route
                path="/return-exchange"
                element={<ReturnExchange />}
              />
              <Route
                path="/returns-refunds"
                element={<ReturnsRefunds />}
              />
              <Route
                path="/refund-cancellation"
                element={<RefundCancellation />}
              />
            </Routes>
          </div>

          {/* Bottom Navigation */}
          <BottomNav />
        </div>
      </Router>
    </CartProvider>
  );
};

export default App;






// import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import { CartProvider } from "./context/CartContext";

// import Navbar from "./components/Navbar";
// import BottomNav from "./components/BottomNav";

// import SearchBar from "./components/Searchbar";
// import Slideshow from "./components/Slideshow";
// import Products from "./components/Products";
// import SpecialOffers from "./components/SpecialOffers";
// import MobileAccessories from "./components/MobileAccessories";
// import Testimonials from "./components/Testimonial";
// import OverTeam from "./components/OurTeam";
// import Newsletter from "./components/Newsletter";
// import Footer from "./components/Footer";

// import About from "./components/About";
// import Contact from "./components/Contact";
// import LoginPage from "./components/LoginPage";

// import CartPage from "./pages/CartPage";
// import Blog from "./pages/Blog.jsx";
// import FAQ from "./pages/faq.jsx";

// const App = () => {
//   return (
//     <CartProvider>
//       <Router>

//         {/* IMPORTANT FIX: bottom padding for mobile nav */}
//         <div className="min-h-screen flex flex-col overflow-x-hidden pb-20 md:pb-0">

//           <Navbar />

//           <div className="w-full">
//             <Routes>

//               <Route
//                 path="/"
//                 element={
//                   <>
//                     <SearchBar />
//                     <Slideshow />
//                     <Products />
//                     <SpecialOffers />
//                     <MobileAccessories />
//                     <Testimonials />
//                     <OverTeam />
//                     <Newsletter />
//                     <Footer />
//                   </>
//                 }
//               />

//               <Route path="/about" element={<About />} />
//               <Route path="/contact" element={<Contact />} />
//               <Route path="/login" element={<LoginPage />} />
//               <Route path="/cart" element={<CartPage />} />
//               <Route path="/blog" element={<Blog />} />
//               <Route path="/faq" element={<FAQ />} />

//             </Routes>
//           </div>

//           {/* Bottom Navigation */}
//           <BottomNav />

//         </div>
//       </Router>
//     </CartProvider>
//   );
// };

// export default App;