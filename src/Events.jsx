const Events = () => {
  const clickHandler = (e, a) => {
    console.log(e, a);
  };
  const changeHandler = (e) => {
    console.log(e.target.value);
  };
  return (
    <div>
      Events
      {/* <button onClick={clickHandler}>Click me</button> */}
      <button
        onClick={(e) => {
          clickHandler(e, 5);
        }}
      >
        Click me
      </button>
      <input type="text" onChange={changeHandler} />
    </div>
  );
};

export default Events;
