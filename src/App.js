import React from "react";
import FirstClass from "./FirstClass";
import Second from "./Second";

// class App extends React.Component {
//   render() {
//     return <h1>Hiii</h1>;
//   }
// }

function App() {
  const name = [3, 7, "dddd", <span>ssss</span>];
  const test = "Test";
  const getName = () => {
    return name;
  };
  const link = "https://google.com";
  return (
    <div>
      <h1>Hiii {getName()}</h1>
      <a href={link}>Link</a>
      <FirstClass propTest={test} />
      <Second propTest={test}>jfdhgfh </Second>
    </div>
  );
}

export default App;
