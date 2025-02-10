import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-gray-800 text-white p-4">
      <ul className="flex gap-6 justify-center">
        {[
          { id: 1, name: "Clothes" },
          { id: 2, name: "Electronics" },
          { id: 3, name: "Furniture" },
          { id: 4, name: "Shoes" },
        ].map((category) => (
          <li key={category.id}>
            <NavLink
              to={`/category/${category.id}`}
              className={({ isActive }) =>
                `text-lg font-semibold hover:text-blue-400 ${
                  isActive ? "underline underline-offset-4" : ""
                }`
              }
            >
              {category.name}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
