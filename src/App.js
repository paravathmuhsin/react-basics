import "./App.css";
import Event from "./Event";
import First from "./First";
import PropClass from "./PropClass";
import PropFun from "./PropFun";
import Second from "./Second";
import State from "./State";

function App() {
  const name = "Siva";
  return (
    <div className="App">
      <h1>Welcome to our first app</h1>
      <Event />
      <State />
      <PropFun country="india" state="bihar" />
      <PropClass name={name} age={55} />
      <First />
      <Second />
    </div>
  );
}

export default App;
