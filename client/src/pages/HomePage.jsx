import React from "react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

import { lazy, Suspense } from "react";

import BannerSection from "../components/BannerSection";

const AddedProduct = lazy(() => import("../components/AddedProduct"));

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-gray-50 text-black ">
        <div className="container mx-auto px-4 sm:px-6 md:px-4 lg:px-36 py-16">
          <div className="flex md:flex-row flex-col items-center justify-evenly">
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 2 }}
              className="md:w-1/2"
            >
              <img
                src="https://via.placeholder.com/980x850"
                alt="Product Image"
                className="w-full h-auto"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 2 }}
              className="md:w-1/2 mt-8 md:mt-0 md:ml-8"
            >
              <h1 className=" text-2xl xl:text-4xl font-bold mb-4">
                Welcome to Our Store
              </h1>
              <p className="text-lg xl:text-xl mb-4">
                Discover our amazing products and shop the latest trends. We
                offer a wide variety of items to suit all your needs.
              </p>
              <button className="bg-orange-400 max-w-96 text-white px-6 py-3 rounded-full hover:bg-orange-300 transition duration-300">
                Shop Now
              </button>
            </motion.div>
          </div>
        </div>
      </div>

      <Suspense fallback={<p className="p-40">Loading...</p>}>
        <AddedProduct />
      </Suspense>

      <BannerSection />
    </>
  );
};

export default HomePage;
