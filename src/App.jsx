import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainLayouts from "./Layouts/MainLayouts";
import Home from "./Pages/Home/Index";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayouts />}>
            <Route index element={<Home />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
