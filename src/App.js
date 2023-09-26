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
  const products = useSelector((state) => state.allProducts.products);
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
      {products?.map((prod) => {
        return (
          <div key={prod.id} className="flex p-4 mx-16 bg-green-800 ">
            <div className="flex-1 bg-green-500 rounded-lg">
              <div>
                <h2>{prod.title}</h2>
                <img src={prod.image} alt="" className="w-40 h-240" />
                <p>${prod.price}</p>
                <p>{prod.description}</p>
              </div>
            </div>
          </div>
        );
      })}
      <Blog />
    </div>
  );
}

export default App;
