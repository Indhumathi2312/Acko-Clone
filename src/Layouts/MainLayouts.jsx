import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar/Index";
import Footer from "../Components/Footer/Index";

const MainLayouts = () => {
  return (
    <>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="flex-1">
          <Outlet />
        </div>
        <Footer />
      </div>
    </>
  );
};

export default MainLayouts;
