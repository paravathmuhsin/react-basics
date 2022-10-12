import "./App.css";
import Event from "./Event";
import First from "./First";
import LifeCycle from "./LifeCycle";
import PropClass from "./PropClass";
import PropFun from "./PropFun";
import Ref from "./Ref";
import Second from "./Second";
import State from "./State";

function App() {
  const name = "Siva";
  return (
    <div className="App">
      <h1>Welcome to our first app</h1>
      <Ref />
      {/* <LifeCycle /> */}
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
