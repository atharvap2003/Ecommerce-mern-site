import React, { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { addToCart } from "../redux/cartSlice";
import "react-toastify/dist/ReactToastify.css";




const ProductDescription = () => {
  const [product, setProduct] = useState(null);
  const { id } = useParams();
  const { email } = useSelector((state) => state.user);
  const dispatch = useDispatch();


  useEffect(() => {
    fetch(`http://localhost:8000/api/product/${id}`)
      .then((response) => response.json())
      .then((postdata) => {
        setProduct(postdata);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, [id]);

  if (!product) {
    return <h1>Loading...</h1>;
  }

  const handleAddToCart = () => {
    if (!email) {
      toast.error("You are not logged in!", {
        position: "top-right",
        autoClose: 2500,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    } else {
      const cartItem = {
        id: product._id,
        name: product.category,
        price: product.price,
        quantity: 1, // Default to 1
      };

      dispatch(addToCart(cartItem)); // Add item to cart
      toast.success("Product added to Cart!", {
        position: "top-right",
        autoClose: 2500,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    }
  };

  return (
    <div className="container mx-auto md:px-48 py-4 min-h-[85vh]">
      <div className="bg-white rounded-lg overflow-hidden md:flex">
        <div className="md:w-1/2 p-4">
          <img
            className="w-96 h-auto shadow-md"
            src={`http://localhost:8000${product.image}`}
            alt={product.productName}
          />
        </div>
        <div className="md:w-1/2 p-4">
          <h2 className="text-2xl font-bold mb-2">{product.productName}</h2>
          <p className="text-gray-600 mb-4">
            Product Category: {product.category}
          </p>
          <p className="text-gray-700 mb-4">
            Product Description: {product.description}
          </p>
          <p className="text-gray-900 font-semibold mb-4">
            Price: ₹{product.price}
          </p>
          <p className="text-gray-600 mb-4">
            Available Quantity: {product.quantity}
          </p>
          <div className="mt-4">
            <h3 className="text-lg font-semibold">Return Policy</h3>
            <p className="text-gray-600">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum voluptates quisquam ab unde alias suscipit distinctio deleniti accusantium non impedit. Consequatur alias inventore, quaerat quia fugit, saepe assumenda placeat iste, quidem maiores magni quibusdam ratione ipsum non voluptates animi. Dolorem explicabo iure tempore maxime. Mollitia suscipit quia repudiandae beatae necessitatibus maxime ipsum aut adipisci quo. Dolorem harum odit obcaecati recusandae reprehenderit. Perferendis sequi, cumque accusantium voluptatibus vero porro voluptates voluptatum autem aut expedita? Maiores velit dolor sunt saepe repellat provident molestias ducimus? Magnam porro sed ut consequuntur, iure voluptas nihil doloribus animi minus consequatur, corporis facere blanditiis fugiat quibusdam ratione.
            </p>
          </div>
          <button
            onClick={handleAddToCart}
            className="bg-orange-400 text-white py-2 my-3 px-4 w-1/2 rounded hover:bg-orange-500"
          >
            Add to Cart
          </button>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default ProductDescription;
