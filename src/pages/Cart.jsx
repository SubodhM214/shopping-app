// import { useCart } from "../context/CartContext";

// const Cart = () => {
//   const { cart, removeFromCart } = useCart();

//   return (
//     <div className="container mx-auto px-40 py-6">
//       <h2 className="text-2xl font-bold text-center mb-6">Shopping Cart</h2>

//       {cart.length === 0 ? (
//         <p className="text-center text-gray-500">Your cart is empty.</p>
//       ) : (
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//           {cart.map((item) => (
//             <div
//               key={item.id}
//               className="bg-white shadow-lg rounded-lg overflow-hidden p-4 border border-gray-200"
//             >
//               <img
//                 src={item.images[0]}
//                 alt={item.title}
//                 className="w-full h-48 object-cover rounded-md"
//               />
//               <h3 className="text-lg font-semibold mt-2">{item.title}</h3>
//               <p className="text-xl font-bold text-blue-600 mt-2">
//                 ${item.price}
//               </p>

//               {/* Remove from Cart Button */}
//               <button
//                 onClick={() => removeFromCart(item.id)}
//                 className="mt-3 bg-red-500 text-white py-2 px-4 rounded-lg w-full hover:bg-red-600 transition"
//               >
//                 Remove
//               </button>
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default Cart;

import { useCart } from "../context/CartContext";

const Cart = () => {
  const {
    cart,
    removeFromCart,
    incrementQuantity,
    decrementQuantity,
    getTotalPrice,
  } = useCart();

  return (
    <div className="container mx-auto px-40 py-6">
      <h2 className="text-2xl font-bold text-center mb-6">Shopping Cart</h2>

      {cart.length === 0 ? (
        <p className="text-center text-gray-500">Your cart is empty.</p>
      ) : (
        <div className="bg-white shadow-lg rounded-lg p-6 border border-gray-200">
          <table className="w-full">
            <thead>
              <tr className="bg-gray-200">
                <th className="p-2 text-left">Product</th>
                <th className="p-2 text-center">Quantity</th>
                <th className="p-2 text-right">Price</th>
                <th className="p-2 text-right">Total</th>
                <th className="p-2 text-right">Remove</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((item) => (
                <tr key={item.id} className="border-t">
                  <td className="p-2 flex items-center">
                    <img
                      src={item.images[0]}
                      alt={item.title}
                      className="w-12 h-12 rounded-md mr-2"
                    />
                    {item.title}
                  </td>
                  <td className="p-2 text-center">
                    <button
                      onClick={() => decrementQuantity(item.id)}
                      className="px-2 bg-gray-300 rounded-l"
                    >
                      -
                    </button>
                    <span className="mx-2">{item.quantity}</span>
                    <button
                      onClick={() => incrementQuantity(item.id)}
                      className="px-2 bg-gray-300 rounded-r"
                    >
                      +
                    </button>
                  </td>
                  <td className="p-2 text-right">${item.price}</td>
                  <td className="p-2 text-right">
                    ${(item.price * item.quantity).toFixed(2)}
                  </td>
                  <td className="p-2 text-right">
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="bg-red-500 text-white px-3 py-1 rounded-lg hover:bg-red-600"
                    >
                      X
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="mt-4 text-right font-bold text-xl">
            Total: ${getTotalPrice().toFixed(2)}
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
