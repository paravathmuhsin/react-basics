const List = () => {
  const shoes = [
    {
      id: 1,
      brand: "Nike",
      price: 555,
      color: "white",
    },
    {
      id: 2,
      brand: "Adidas",
      price: 444,
      color: "red",
    },
    {
      id: 3,
      brand: "Puma",
      price: 333,
      color: "Blue",
    },
  ];
  return (
    <div>
      List
      {shoes.map((item) => {
        return (
          <div
            key={item.id}
            style={{ border: "1px solid black", margin: "10px 0" }}
          >
            <p>Brand: {item.brand}</p>
            <p>Color: {item.color}</p>
            <p>Price: {item.price}</p>
          </div>
        );
      })}
    </div>
  );
};

export default List;
