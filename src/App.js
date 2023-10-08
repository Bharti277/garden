import { useDispatch, useSelector } from "react-redux";
import { setProducts } from "./redux/dashboardAction";
import { useEffect, useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import "./App.css";
import ProductListing from "./components/ProductListing";
function App() {
  return (
    <div className="box-border p-0 m-0">
      <Navbar />
      <div className="">
        <ProductListing />
      </div>
    </div>
  );
}

export default App;
