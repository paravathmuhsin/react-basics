import { useAppContext } from "./App";

const UseContext = () => {
  // consume context value
  const context = useAppContext();
  return <div>{context.appTitle} UseContext</div>;
};

export default UseContext;
