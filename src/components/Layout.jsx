import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import { Provider } from "react-redux";
import appStore from "../store/appStore";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Mobile from "./Mobile";

const Layout = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const userAgent = navigator.userAgent;
    const isMobileDevice = /Mobi|Android|iPhone|iPad/i.test(userAgent);
    setIsMobile(isMobileDevice);
  }, []);

  return isMobile ? (
    <Mobile />
  ) : (
    <Provider store={appStore}>
      <ToastContainer />
      <Header />
      <Outlet />
    </Provider>
  );
};
export default Layout;
