import "./App.css";
import ClassComp from "./ClassComp";
import Event from "./Event";
import FuncComp from "./FuncComp";
import Props from "./Props";
import StateComp from "./StateComp";

function App() {
  const name = "John";
  return (
    <div>
      <h1>Welcome to my first react app</h1>
      <Event />
      <StateComp />
      <Props name={name} age={55}>
        Test
      </Props>
      <ClassComp name="David" />
      <FuncComp />
    </div>
  );
}

export default App;
