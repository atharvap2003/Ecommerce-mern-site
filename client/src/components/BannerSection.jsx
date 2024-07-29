// BannerSection.js
import React from "react";
import { FaTruck, FaHeadset, FaLock, FaUndo } from "react-icons/fa";
import { motion } from "framer-motion";

const features = [
  {
    id: 1,
    icon: <FaTruck size={50} className="text-orange-500" />,
    text: "Free Delivery",
  },
  {
    id: 2,
    icon: <FaHeadset size={50} className="text-orange-500" />,
    text: "24/7 Support",
  },
  {
    id: 3,
    icon: <FaLock size={50} className="text-orange-500" />,
    text: "Secure Payment",
  },
  {
    id: 4,
    icon: <FaUndo size={50} className="text-orange-500" />,
    text: "Easy Returns",
  },
];

const BannerSection = () => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="max-w-screen-xl mx-auto sm:px-2 sm:py-4 px-4 py-8 50vh my-10"
      >
        <h2 className="text-3xl font-bold text-orange-500 mb-6 underline underline-offset-8">
          Our Features
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {features.map((feature) => (
            <div
              key={feature.id}
              className="flex justify-evenly items-center bg-white shadow-lg p-10"
            >
              {feature.icon}
              <p className="mt-4 text-xl font-semibold text-gray-800">
                {feature.text}
              </p>
            </div>
          ))}
        </div>
      </motion.div>
    </>
  );
};

export default BannerSection;
