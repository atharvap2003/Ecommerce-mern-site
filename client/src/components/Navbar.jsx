import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaShoppingCart, FaBars, FaTimes, FaUserCircle } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const { id, email, jwtoken } = useSelector((state) => state.user);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <nav className="bg-gray-300 p-5 px-6 lg:px-48 md:px-12">
        <div className="flex justify-between items-center">
          <div className="text-2xl font-bold">
            <Link to="/">ElectroShop</Link>
          </div>
          <div className="hidden md:flex space-x-6">
            <Link to="/" className="hover:text-gray-500">
              Home
            </Link>
            <Link to="/about" className="hover:text-gray-500">
              About
            </Link>
            <Link to="/products" className="hover:text-gray-500">
              Products
            </Link>
            {jwtoken ? (
              <Link
                to="api/user/userprofile"
                className="flex items-center space-x-2 hover:text-gray-500"
              >
                <FaUserCircle size={24} />
                <span>{email}</span>
              </Link>
            ) : (
              <Link to="/api/user/login" className="hover:text-gray-500">
                Login/Register
              </Link>
            )}

            <Link to="/cart" className="relative">
              <FaShoppingCart size={24} />
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
            <Link to="/" className="hover:text-gray-500">
              Home
            </Link>
            <Link to="/about" className="hover:text-gray-500">
              About
            </Link>
            <Link to="/products" className="hover:text-gray-500">
              Products
            </Link>

            {jwtoken ? (
              <Link
                to="/userprofile"
                className="flex items-center space-x-2 hover:text-gray-500"
              >
                <FaUserCircle size={24} />
                <span>{email}</span>
              </Link>
            ) : (
              <Link to="/api/user/login" className="hover:text-gray-500">
                Login/Register
              </Link>
            )}
            <Link to="/cart" className="relative flex items-center">
              <FaShoppingCart size={24} />
            </Link>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
