import "./App.css";
import ClassComp from "./ClassComp";
import Event from "./Event";
import FormControlled from "./FormControlled";
import FormUncontrolled from "./FormUncontrolled";
import FuncComp from "./FuncComp";
import Keys from "./Keys";
import LifeCycle from "./LifeCycle";
import Props from "./Props";
import Ref from "./Ref";
import StateComp from "./StateComp";
import UseState from "./UseState";

function App() {
  const name = "John";
  return (
    <>
      <h1>Welcome to my first react app</h1>
      <UseState />
      <FormUncontrolled />
      <FormControlled />
      <Event test="dd" />
      <Keys />
      <Ref />
      <LifeCycle />
      <StateComp />
      <Props name={name} age={55}>
        Test
      </Props>
      <ClassComp name="David" />
      <FuncComp />
    </>
  );
}

export default App;
