import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart, clearCart } from "../redux/cartSlice";

const CartPage = () => {
    const { items, totalPrice, totalQuantity } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const handleRemoveItem = (id) => {
    dispatch(removeFromCart(id));
  };

  const handleClearCart = () => {
    dispatch(clearCart());
  };
  return (
    <>
      <div className="container mx-auto px-2 md:px-16  lg:px-38 xl:px-48 py-6 min-h-screen">
        <h1 className="text-xl font-bold text-left my-4 lgml-4">Shopping Cart</h1>

        {items.length === 0 ? (
          <div className="flex flex-col items-center justify-center min-h-[50vh]">
            <p className="text-gray-700 text-xl">
              No products are present in the cart.
            </p>
          </div>
        ) : (
          <div className="bg-white shadow-lg rounded-lg p-4">
            <div className="overflow-x-auto">
              <table className="table-auto w-full">
                <thead>
                  <tr className="bg-gray-200 text-gray-700">
                    <th className="px-4 py-2">Product</th>
                    <th className="px-4 py-2">Price</th>
                    <th className="px-4 py-2">Quantity</th>
                    <th className="px-4 py-2">Total Price</th>
                    <th className="px-4 py-2">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {items.map((item) => (
                    <tr key={item.id} className="border-t text-center">
                      <td className="px-4 py-2">{item.name}</td>
                      <td className="px-4 py-2">₹{item.price}</td>
                      <td className="px-4 py-2">{item.quantity}</td>
                      <td className="px-4 py-2">₹{item.totalPrice}</td>
                      <td className="px-4 py-2">
                        <button
                          onClick={() => handleRemoveItem(item.id)}
                          className="bg-red-500 text-white px-4 py-1 rounded hover:bg-red-600"
                        >
                          Remove
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="flex justify-between items-center mt-4">
              <button
                onClick={handleClearCart}
                className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
              >
                Clear Cart
              </button>
              <div className="text-right">
                <p className="text-base font-semibold">
                  Total Quantity: {totalQuantity}
                </p>
                <p className="text-base font-bold">Total Price: ₹{totalPrice}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default CartPage;
