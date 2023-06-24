import React from "react";
import Header from "../header/Header";
import { Outlet } from "react-router-dom";
import Footer from "../pages/shared/footer/Footer";

const Layout = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
