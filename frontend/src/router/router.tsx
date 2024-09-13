import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import About from "../Pages/Aboutus/About";
import Allproducts from "../Pages/All Products/Allproducts";
import SingleProduct from "../Pages/SingleProduct/SingleProduct";
import Cart from "../Pages/Cart/Cart";
import Checkout from "../Pages/Checkout/Checkout";
import ManageProduct from "../Pages/ManageProduct/ManageProduct";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/allproduct",
    element: <Allproducts />,
  },
  {
    path: "/manageproduct",
    element: <ManageProduct />,
  },
  {
    path: "/singleproduct",
    element: <SingleProduct />,
  },
  {
    path: "/cart",
    element: <Cart />,
  },
  {
    path: "checkout",
    element: <Checkout />,
  },
]);
