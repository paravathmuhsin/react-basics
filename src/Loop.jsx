const Loop = () => {
  const shoes = [
    {
      id: 1,
      brand: "Nike",
      price: 555,
      color: "red",
    },
    {
      id: 2,
      brand: "Adidas",
      price: 444,
      color: "blue",
    },
    {
      id: 3,
      brand: "Puma",
      price: 333,
      color: "white",
    },
  ];
  return (
    <div>
      Loop
      {shoes.map((item) => {
        return (
          <div
            style={{
              padding: "10px",
              border: "solid 1px black",
              marginBottom: "5px",
            }}
            key={item.id}
          >
            <h3>{item.brand}</h3>
            <p>{item.color}</p>
            <p>{item.price}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Loop;
