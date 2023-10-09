import React, { useEffect } from "react";
import { setProducts } from "../redux/dashboardAction";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

const ProductListing = () => {
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
    <div className="absolute grid grid-cols-3 gap-4 text-center top-16">
      {products?.map((prod) => {
        return (
          <div key={prod.id} className="p-8 border-4">
            <Link to={`/product/${prod.id}`}>
              <div className="">
                <h2 className="h-12">{prod.title}</h2>
                <div className="inline-block border-2 border-gray-500 w-52">
                  <img src={prod.image} alt="" className="w-52 h-52" />
                </div>
                <p>${prod.price}</p>
                <p>{prod.description}</p>
              </div>
              <button className="px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700">
                Add to cart
              </button>
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default ProductListing;
