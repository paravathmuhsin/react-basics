const Event = () => {
  // 1. camelCase event prop name
  // 2. value should be a function definition
  // 3. onchange event behavour
  // 4. synthetic event in react

  const clickHandler = (e) => {
    console.log(e);
    e.preventDefault();
  };

  const changeHandler = (ev, a) => {
    console.log(ev, a);
  };
  return (
    <div>
      Event
      <button onClick={clickHandler}>click me</button>
      <input
        onChange={(e) => {
          changeHandler(e, "user");
        }}
      />
      <a href="https://google.com" onClick={clickHandler}>
        click me
      </a>
    </div>
  );
};

export default Event;
