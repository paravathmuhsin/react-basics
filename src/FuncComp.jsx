import { useParams } from "react-router-dom";

const FuncComp = () => {
  const { slug } = useParams();
  const name = "function";
  const ar = [8, "frrr"];
  const testFunc = () => {
    return "Hiii";
  };
  return (
    <h3 className={name}>
      This is {name} component - {slug} - {testFunc()} -{ar}
    </h3>
  );
};

export default FuncComp;
