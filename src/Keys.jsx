import withHOC from "./withHOC";

const Keys = (props) => {
  console.log(props);
  const a = [
    {
      brand: "Nike",
      price: 555,
      color: "red",
    },
    {
      brand: "Adidas",
      price: 444,
      color: "blue",
    },
    {
      brand: "Puma",
      price: 333,
      color: "white",
    },
  ];
  return (
    <>
      <h2>Loop and Keys</h2>
      <div>
        {a.map((item) => (
          <div style={{ marginBottom: "50px" }} key={item.brand}>
            <h3>Brand: {item.brand}</h3>
            <p>Price: {item.price}</p>
            <p>Color: {item.color}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default withHOC(Keys);
