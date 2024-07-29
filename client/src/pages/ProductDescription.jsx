import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const ProductDescription = () => {
  const [product, setProduct] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    console.log(id)
    fetch(`http://localhost:8000/api/product/${id}`)
      .then((response) => response.json())
      .then((postdata) => {
        setProduct(postdata);
        console.log(postdata);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  if (!product) {
    return <h1>Loading...</h1>;
  }

  return (
    <div className="container mx-auto md:px-48 py-4 min-h-[85vh]">
      <div className="bg-white rounded-lg overflow-hidden md:flex">
        <div className="md:w-1/2 p-4">
          <img
            className="w-96 h-auto shadow-md"
            src={"http://localhost:8000"+product.image}
            alt={product.productName}
          />
        </div>
        <div className="md:w-1/2 p-4">
          <h2 className="text-2xl font-bold mb-2">{product.productName}</h2>
          <p className="text-gray-600 mb-4">Product Category : {product.category}</p>
          <p className="text-gray-700 mb-4">Product Description: {product.description}</p>
          <p className="text-gray-900 font-semibold mb-4">
            Price: ₹{product.price}
          </p>
          <p className="text-gray-600 mb-4">
            Available Quantity: {product.quantity}
          </p>
          <div className="mt-4">
            <h3 className="text-lg font-semibold">Return Policy</h3>
            <p className="text-gray-600">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste
              culpa ut cupiditate temporibus fugit magnam eveniet praesentium
              deleniti! Repellat, dolores dolore unde illum sit amet, maiores,
              perspiciatis ullam ex fugit tempore illo delectus deserunt facilis
              ea nihil earum quis. Tempora.
            </p>
          </div>
          <button className="bg-orange-500 text-white py-2 my-3 px-4 w-1/2 rounded hover:bg-orange-600">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDescription;
