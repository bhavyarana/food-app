import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Body from "./components/Body";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import About from "./components/About";
import RestaurantPage from "./components/RestaurantPage";
import Cart from "./components/Cart";
import "react-toastify/dist/ReactToastify.css";
import Layout from "./components/Layout";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <Body /> },
      { path: "/About", element: <About /> },
      { path: "/Restaurant/:resId", element: <RestaurantPage /> },
      { path: "/Cart", element: <Cart /> },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
