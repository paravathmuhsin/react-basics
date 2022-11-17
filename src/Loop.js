import React from "react";

function Loop() {
  //   const arr = ["Muhsin", "Aby", "Preetha"];
  const arr = [
    {
      id: 1,
      brand: "Nike",
      price: 333,
    },
    {
      id: 2,
      brand: "Adidas",
      price: 222,
    },
    {
      id: 3,
      brand: "Puma",
      price: 111,
    },
  ];
  return (
    <div>
      Loop
      {arr.map((item) => (
        <div key={item.id}>
          <h4>{item.brand}</h4>
          <p>{item.price}</p>
        </div>
      ))}
    </div>
  );
}

export default Loop;
