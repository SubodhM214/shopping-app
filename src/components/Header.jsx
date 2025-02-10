import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

const Header = () => {
  const { cart } = useCart();
  return (
    <header className="bg-gray-900 text-white py-4 px-6 flex justify-between items-center">
      <h1 className="text-2xl font-bold">Shopping App</h1>

      {/* Cart Link */}
      <Link
        to="/cart"
        className="relative flex items-center gap-2 text-lg hover:text-blue-400"
      >
        Cart
        {cart.length > 0 && (
          <span className="ml-1 bg-red-500 text-white text-xs font-bold px-2 rounded-full">
            {cart.length}
          </span>
        )}
      </Link>
    </header>
  );
};

export default Header;
