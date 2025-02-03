import "./App.css";
import ClassComp from "./ClassComp";
import FragmentComp from "./FragmentComp";
import FuncComp from "./FuncComp";
import JSX from "./JSX";
import Props from "./Props";
import State from "./State";
function App() {
  const name = "David";
  return (
    <div>
      <h1>Welcome to my first React app</h1>
      <State />
      <Props name={name} age="55">
        Hii..
      </Props>
      <FragmentComp />
      <JSX />
      <ClassComp />
      <FuncComp />
    </div>
  );
}

export default App;
