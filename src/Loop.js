import React from "react";
import ProductItem from "./ProductItem";

const Loop = () => {
  const shoes = [
    {
      id: 1,
      name: "Red shoes",
      brand: "Nike",
      price: "555",
    },
    { id: 2, name: "Blue shoes", brand: "Adidas", price: "444" },
    { id: 3, name: "Yellow shoes", brand: "Puma", price: "333" },
  ];

  const getProducts = () =>
    shoes.map((value) => <ProductItem item={value} key={value.id} />);
  return (
    <div>
      Loop
      {getProducts()}
    </div>
  );
};

export default Loop;
