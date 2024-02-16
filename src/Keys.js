import React from "react";

const Keys = () => {
  const arr = [
    {
      brand: "Nike",
      price: 555,
    },
    {
      brand: "Adidas",
      price: 444,
    },
    {
      brand: "Puma",
      price: 333,
    },
  ];
  return (
    <>
      <h3>Loops and Keys</h3>
      <div>
        {arr.map((i) => {
          return (
            <div
              key={i.brand}
              style={{
                border: "solid 1px black",
                marginTop: "5px",
                width: "100px",
              }}
            >
              <h4>{i.brand}</h4>
              <span>{i.price}</span>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Keys;
