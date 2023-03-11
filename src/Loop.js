import React from "react";

const Loop = () => {
  const arr = [
    { brand: "Nike", price: 555 },
    { brand: "Adidas", price: 444 },
    { brand: "Puma", price: 333 },
  ];

  return (
    <div>
      Loop
      {arr.map((item, index) => (
        <div key={index}>
          <h3>{item.brand}</h3>
          <span>{item.price}</span>
        </div>
      ))}
    </div>
  );
};

export default Loop;
