import React, { useEffect, useState } from "react";

function FetchProducts() {
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    const res = await fetch("https://dummyjson.com/products");
    const data = await res.json();
    if (data && data.products) {
      setProducts(data.products);
    }
  };
  console.log(products, "data");

  useEffect(() => {
    fetchProducts();
  }, []);
  return <div>FetchProducts</div>;
}

export default FetchProducts;
