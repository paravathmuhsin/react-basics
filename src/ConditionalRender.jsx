const ConditionalRender = () => {
  const name = "John";
  const user =  {
    name: "David",
    age: 44,
  };
  return (
    <div>
      ConditionalRender{" "}
      {name === "David" ? <p>Hi.. {name}</p> : <p>Hello.. {name}</p>}
      {user && (
        <div>
          <p>Name: {user.name}</p>
          <p>Age: {user.age}</p>
        </div>
      )}
    </div>
  );
};

export default ConditionalRender;
