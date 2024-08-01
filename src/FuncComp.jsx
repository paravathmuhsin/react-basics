const FuncComp = () => {
  const name = "function";
  const ar = [8, "frrr", <p>ddddd</p>, <p>ssss</p>];
  const testFunc = () => {
    return "Hiii";
  };
  return (
    <h3 className={name}>
      This is {name} component - {testFunc()} -{ar}
    </h3>
  );
};

export default FuncComp;
