import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import axios from "axios";
import { useEffect } from 'react';
import ProductComponent from "./ProductComponent";
import { setProducts } from "../redux/actions/index"

function ProductList() {

  const products = useSelector((state) => state.allProducts.products);

  const dispatch = useDispatch();

  const fetchProducts = async () => {
    const response = await axios.get("https://fakestoreapi.com/products")
    .catch((err) => console.log("Error", err));
    dispatch(setProducts(response.data));
  }

  useEffect(() => {
    fetchProducts();
  }, [])

  return (
    <div>
      <ProductComponent />
    </div>
  )
}

export default ProductList