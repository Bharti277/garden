import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useDispatch } from "react-redux";
import { selectedProducts } from "../redux/dashboardAction";

function ProductDetail() {
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

  return <div>ProductDetail</div>;
}

export default ProductDetail;
