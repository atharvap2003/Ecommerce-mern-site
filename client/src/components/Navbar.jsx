import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaShoppingCart, FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <nav className="bg-gray-300 p-5 px-6 md:px-48">
        <div className="flex justify-between items-center">
          <div className="text-2xl font-bold">
            <Link to="/">MyShop</Link>
          </div>
          <div className="hidden md:flex space-x-6">
            <Link to="/" className="hover:text-gray-500">Home</Link>
            <Link to="/about" className="hover:text-gray-500">About</Link>
            <Link to="/products" className="hover:text-gray-500">Products</Link>
          </div>
          <div className="hidden md:flex items-center space-x-4">
            <Link to="/login" className="hover:text-gray-500">Login/Signup</Link>
            <Link to="/cart" className="relative">
              <FaShoppingCart size={24} />
              <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                45
              </span>
            </Link>
          </div>
          <div className="md:hidden">
            <button onClick={toggleMobileMenu}>
              {isMobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>
        {isMobileMenuOpen && (
          <div className="md:hidden flex flex-col space-y-4 mt-4">
            <Link to="/" className="hover:text-gray-500">Home</Link>
            <Link to="/about" className="hover:text-gray-500">About</Link>
            <Link to="/products" className="hover:text-gray-500">Products</Link>
            <Link to="/login" className="hover:text-gray-500">Login/Signup</Link>
            <Link to="/cart" className="relative flex items-center">
              <FaShoppingCart size={24} />
              <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                45
              </span>
            </Link>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
