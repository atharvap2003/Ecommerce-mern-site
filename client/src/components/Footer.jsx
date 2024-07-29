import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-300 text-black py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-evenly items-center">
          <h2 className="text-2xl font-bold">Our Company</h2>
          <div className="mb-4 md:mb-0 ">
            <ul className="mt-2 flex flex-row gap-2">
              <li className="mb-2">
                <a href="/home" className="hover:text-gray-400">
                  Home
                </a>
              </li>
              <li className="mb-2">
                <a href="/products" className="hover:text-gray-400">
                  Products
                </a>
              </li>
              <li className="mb-2">
                <a href="/about" className="hover:text-gray-400">
                  About Us
                </a>
              </li>
              <li className="mb-2">
                <a href="/contact" className="hover:text-gray-400">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
          <div className="flex space-x-4">
            <a href="https://www.facebook.com" className="hover:text-gray-400">
              <FaFacebookF size={24} />
            </a>
            <a href="https://www.twitter.com" className="hover:text-gray-400">
              <FaTwitter size={24} />
            </a>
            <a href="https://www.instagram.com" className="hover:text-gray-400">
              <FaInstagram size={24} />
            </a>
            <a href="https://www.linkedin.com" className="hover:text-gray-400">
              <FaLinkedinIn size={24} />
            </a>
          </div>
        </div>
        <div className="mt-4 text-center">
          <p>
            &copy; {new Date().getFullYear()} Our Company. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
