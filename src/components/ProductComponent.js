import React from 'react';
import { useSelector } from 'react-redux';

function ProductComponent() {
  const products = useSelector((state) => state.allProducts.products);

  const cardList = products.map((product) => {
    const { id, title } = product;
    return(
        <div className="product_container">
          {id}{title}
        </div>
    )
  })



  return (
    <div>
      {cardList}
    </div>
  )
}

export default ProductComponent