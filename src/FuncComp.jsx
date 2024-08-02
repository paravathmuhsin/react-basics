const FuncComp = () => {
  const name = "function";
  const ar = [8, "frrr"];
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
