import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductComponent from "./components/ProductComponent";
import ProductDetails from "./components/ProductDetails";
import ProductList from "./components/ProductList";
import Header from "./components/Header/Header";

const App = () => {
  return (
    <div className="app">
      <h1 className="font-extrabold">Redux Project</h1>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/productcomponent" element={<ProductComponent />} />
          <Route path="/productdetails" element={<ProductDetails/>} />
          <Route path="/" element={<ProductList/>} />
        </Routes>
      </BrowserRouter>

    </div>
  );
};

export default App;
