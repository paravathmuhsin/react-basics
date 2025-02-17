import { useAppContext } from "./AppContext";

const UseContext = () => {
  const { theme } = useAppContext();
  return <div>UseContext - {theme}</div>;
};

export default UseContext;
