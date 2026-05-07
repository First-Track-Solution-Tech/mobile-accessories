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
import ChatBox from "./components/ChatBox";




import CartPage from "./pages/CartPage";
import AddressPage from "./pages/AddressPage.jsx";
import Confirmation from "./pages/Confirmation";
import Blog from "./pages/Blog.jsx";
import FAQ from "./pages/faq.jsx";
import Payment from "./pages/PaymentPage";
import RegisterPage from "./pages/RegisterPage";
import ReturnExchange from "./pages/ReturnExchange.jsx";
import RefundCancellation from "./pages/RefundCancellation.jsx"
import Wishlist from "./pages/Wishlist";

const App = () => {
  return (
    <CartProvider>
    <Router>
      <Navbar />
      <div className="h-[calc(100vh-80px)] overflow-x-hidden overflow-y-auto flex flex-col bg-white">
        
        <div className="container mx-auto px-4">
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
                  {/* <ChatBox /> */}
                  
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
<Route path="/products/:categoryName" element={<Products />} />

<Route path="/product/:id" element={<ProductDetail />} />

<Route path="/cart" element={<CartPage />} />
<Route path="/wishlist" element={<Wishlist />} />
<Route path="/address" element={<AddressPage />} />
<Route path="/confirmation" element={<Confirmation />} />

            <Route path="/payment" element={<Payment />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/return-exchange" element={<ReturnExchange />} />
            <Route path="/refund-cancellation" element={<RefundCancellation />} />
          </Routes>
        </div>
        {/* BottomNav Router ke andar */}
    <BottomNav />
      </div>
    </Router>
    </CartProvider>
  
  );
};

export default App; // ✅ Ensure this is present