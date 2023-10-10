import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { selectedProducts } from "../redux/dashboardAction";

function ProductDetail() {
  const selected_products = useSelector(
    (state) => state.allProducts.selectedProducts
  );
  const { id, title, price, description } = selected_products;
  console.log(selected_products);
  const { productId } = useParams();
  const dispatch = useDispatch();
  console.log(productId, "product id");
  const fetchProductDetail = async () => {
    const response = await axios
      .get(`https://fakestoreapi.com/products/${productId}`)
      .catch((err) => console.log(err));
    dispatch(selectedProducts(response.data));
  };

  useEffect(() => {
    if (productId && productId !== "") {
      fetchProductDetail();
    }
  }, [productId]);

  return (
    <div className="py-14">
      <div>{id}</div>
      <div>{title}</div>
    </div>
  );
}

export default ProductDetail;
