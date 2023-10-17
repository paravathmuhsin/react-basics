import "./App.css";
import Event from "./Event";
import First from "./First";
import JSX from "./JSX";
import Keys from "./Keys";
import LifeCycle from "./LifeCycle";
import PropClass from "./PropClass";
import PropsFun from "./PropsFun";
import Ref from "./Ref";
import Second from "./Second";
import StateClass from "./StateClass";

function App() {
  const name = "David";
  return (
    <div>
      <h1 className="App">Hiiii</h1>
      <Keys />
      <Ref />
      <Event />
      <LifeCycle />
      <JSX />
      <StateClass />
      <PropsFun name={name} age={44}>
        Hiiiiiii
      </PropsFun>
      <PropClass name={name} age={44} />
      <First />
      <Second />
    </div>
  );
}

export default App;
