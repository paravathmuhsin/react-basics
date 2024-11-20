import ClassComp from "./ClassComp";
import ConditionalRender from "./ConditionalRender";
import Event from "./Event";
import { FormControlled } from "./FormControlled";
import { FormUnControlled } from "./FormUnControlled";
import Fragment from "./Fragment";
import FuncComp from "./FuncComp";
import JSX from "./JSX";
import LifeCycle from "./LifeCycle";
import List from "./List";
import Props from "./Props";
import State from "./State";
import Styling from "./Styling";
import UseEffect from "./UseEffect";
import UseRef from "./UseRef";
import UseState from "./UseState";

function App() {
  return (
    <div>
      <h1>Welcome to React</h1>
      <Styling />
      <List />
      {/* <ConditionalRender /> */}
      {/* <FormUnControlled /> */}
      {/* <FormControlled /> */}
      {/* <UseRef /> */}
      {/* <Event /> */}
      {/* <UseEffect /> */}
      {/* <UseState /> */}
      {/* <LifeCycle /> */}
      {/* <State /> */}
      {/* <Props name="David" age={44}>Hi,</Props> */}
      {/* <Fragment /> */}
      {/* <JSX /> */}
      {/* <FuncComp />
      <ClassComp /> */}
    </div>
  );
}

export default App;
