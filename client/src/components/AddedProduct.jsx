import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const AddedProduct = () => {
  const [products, setProducts] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:8000/api/productdata`)
      .then(response => response.json())
      .then(postdata => {
        setProducts(postdata);
        console.log(postdata);
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  if (!products) {
    return <h1>Loading...</h1>;
  }

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="max-w-screen-xl mx-auto px-4 py-8 min-h-screen"
      >
        <h2 className="text-3xl font-bold text-orange-500 mb-6 underline underline-offset-8">
          New Arrivals
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div
              key={product._id}
              className="bg-white shadow-lg rounded-md overflow-hidden"
            >
              <Link to={`/product/${product._id}`}>
                <img
                  src={"http://localhost:8000"+ product.image}
                  alt={product.name}
                  className="w-full h-48 object-contain"
                />
                <div className="p-4 text-left">
                  <h3 className="text-lg font-bold text-gray-800">
                    {product.productname}
                  </h3>
                  <p className="text-orange-500 text-md font-semibold">
                    Price: {product.price}
                  </p>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </motion.div>
    </>
  );
};

export default AddedProduct;
