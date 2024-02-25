import React from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      {/*  header or footer ko same rakhna or bich ki chije change karne ke liye */}
      {/* Outlet use karte he */}
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
