import React from "react";

const ProductItem = ({item}) => {
  return (
    <div>
      <h3>{item.name}</h3>
      <p>Brand: {item.brand}</p>
      <p>Price: {item.price}</p>
    </div>
  );
};

export default ProductItem;
