import { useDispatch, useSelector } from "react-redux";
import {
  addNumberSuffix,
  capitalizeFirstLetter,
  decrementCounter,
  incrementCounter,
  setProducts,
} from "./redux/dashboardAction";
import Navbar from "./components/Navbar";
import { useEffect, useState } from "react";
import Blog from "./components/Blog";

function App() {
  const products = useSelector((state) => state);
  console.log(products);
  const dispatch = useDispatch();

  const fetchProducts = async () => {
    const API_DATA = "https://fakestoreapi.com/products";
    const data = await fetch(API_DATA);
    const res = await data.json();
    dispatch(setProducts(res));
  };

  useEffect(() => {
    fetchProducts();
  }, []);
  return (
    <div className="text-center">
      <Navbar />
      <Blog />
    </div>
  );
}

export default App;
