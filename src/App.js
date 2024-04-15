import React from "react";
import FirstClass from "./FirstClass";
import Second from "./Second";
import StateClass from "./StateClass";
import LifeCycles from "./LifeCycles";
import Event from "./Event";
import Ref from "./Ref";
import Loop from "./Loop";
import UseStateComp from "./UseStateComp";
import UseEffectComp from "./UseEffectComp";
import UseRef from "./UseRef";

// class App extends React.Component {
//   render() {
//     return <h1>Hiii</h1>;
//   }
// }

function App() {
  const name = [3, 7, "dddd"];
  const test = "Test";
  const getName = () => {
    return name;
  };
  const link = "https://google.com";
  return (
    <div>
      <UseRef />
      <UseEffectComp />
      <UseStateComp />
      <Loop />
      <Ref />
      <Event />
      <LifeCycles />
      <h1>Hiii {getName()}</h1>
      <a href={link}>Link</a>
      <StateClass />
      <FirstClass propTest={test} />
      <Second propTest={test}>jfdhgfh </Second>
    </div>
  );
}

export default App;
