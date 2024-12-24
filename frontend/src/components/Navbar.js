import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-white fixed top-0 w-full shadow-md z-10">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold text-gray-800">Liquor Store</div>
        <div className="space-x-6">
          <NavLink
            to="/"
            className="text-gray-600 hover:text-purple-600 transition duration-300"
          >
            Home
          </NavLink>
          <NavLink
            to="/products"
            className="text-gray-600 hover:text-purple-600 transition duration-300"
          >
            Products
          </NavLink>
          <NavLink
            to="/contact"
            className="text-gray-600 hover:text-purple-600 transition duration-300"
          >
            Contact
          </NavLink>
          <NavLink
            to="/payment"
            className="text-gray-600 hover:text-purple-600 transition duration-300"
          >
            Payment
          </NavLink> {/* Added Payment Link */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
