import { useAppContext } from "./App";

const Context = () => {
  const context = useAppContext();
  console.log(context);
  return <div>Context</div>;
};

export default Context;
