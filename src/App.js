import "./App.css";
import Event from "./Event";
import First from "./First";
import FormControl from "./FormControl";
import FormUncontrolled from "./FormUncontrolled";
import HOC from "./HOC";
import KeyProp from "./KeyProp";
import LifeCycle from "./LifeCycle";
import PropClass from "./PropClass";
import PropFun from "./PropFun";
import Ref from "./Ref";
import Second from "./Second";
import State from "./State";
import UseEffet from "./UseEffet";
import UseState from "./UseState";

function App() {
  const name = "Siva";
  return (
    <div className="App">
      <h1>Welcome to our first app</h1>
      <UseEffet />
      <UseState />
      <FormUncontrolled />
      <FormControl />
      <HOC name="teenu" age={6} />
      <KeyProp />
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
