import React from "react";

const KeyProp = () => {
  const shoes = [
    {
      id: 1,
      name: "Puma",
      color: "red",
      price: 22,
    },
    {
      id: 2,
      name: "Adidas",
      color: "white",
      price: 33,
    },
    {
      id: 3,
      name: "Nike",
      color: "blue",
      price: 44,
    },
  ];
  return (
    <div>
      KeyProp -
      {shoes.map((item) => {
        return (
          <div key={item.id}>
            <h5>{item.name}</h5>
            <p>Color : {item.color}</p>
            <p>Price : {item.price}</p>
          </div>
        );
      })}
    </div>
  );
};

export default KeyProp;
