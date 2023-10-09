import { useDispatch, useSelector } from "react-redux";
import { setProducts } from "./redux/dashboardAction";
import { useEffect, useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import "./App.css";
import ProductListing from "./components/ProductListing";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProductDetail from "./components/ProductDetail";
function App() {
  return (
    <div className="box-border p-0 m-0">
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/" exact Component={ProductListing} />
          <Route path="/product/:productId" exact Component={ProductDetail} />
          <Route>404 found!</Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
