import React from "react";
import { useAppContext } from "./ContextComp";

const Loop = () => {
  const { theme } = useAppContext();
  const a = [
    {
      id: 1,
      brand: "Nike",
      price: 444,
    },
    {
      id: 2,
      brand: "Adidas",
      price: 333,
    },
    {
      id: 3,
      brand: "Puma",
      price: 222,
    },
  ];
  // [<p>"nike"</p>,<p>"adidas"</p>, <p>"Puma"</p>]
  return (
    <h2>
      Loop - {theme}
      {a.map((item, index) => {
        return (
          <div key={item.id}>
            <p>{item.brand}</p>
            <span>{item.price}</span>
          </div>
        );
      })}
    </h2>
  );
};

export default Loop;
