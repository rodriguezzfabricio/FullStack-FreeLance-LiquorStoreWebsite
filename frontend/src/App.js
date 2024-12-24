import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Categories from "./components/Categories";
import PopularProducts from "./components/PopularProducts";
import Products from "./components/Products";
import Contact from "./components/Contact";
import Checkout from "./components/Checkout";
import NotFound from "./components/NotFound";
import Payment from "./components/Payment"; // Import the Payment component

function App() {
  return (
    <Router>
      <div>
        {/* Navbar */}
        <Navbar />

        {/* Routes */}
        <Routes>
          <Route
            path="/"
            element={
              <div>
                <Hero />
                <Categories />
                <PopularProducts />
              </div>
            }
          />
          <Route path="/products" element={<Products />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/payment" element={<Payment />} /> {/* Add this route */}
          <Route path="*" element={<NotFound />} />
        </Routes>

        {/* Footer */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
