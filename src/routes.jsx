import { createBrowserRouter } from "react-router-dom";
import MainLayout from "./components/MainLayout.jsx";

import CategoryPage from "./pages/CategoryPage.jsx";
import Cart from "./pages/Cart.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { path: "category/:categoryId", element: <CategoryPage /> },
      { path: "cart", element: <Cart /> },
    ],
  },
]);

export default router;
