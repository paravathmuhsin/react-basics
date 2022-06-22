import React from "react";
import { useParams } from "react-router-dom";
import ProductItem from "./ProductItem";

const Loop = () => {
  let params = useParams();
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
      Loop - {params.id}
      {getProducts()}
    </div>
  );
};

export default Loop;
