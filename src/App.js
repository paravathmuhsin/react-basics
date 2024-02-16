import "./App.css";
import ClassComp from "./ClassComp";
import Event from "./Event";
import First from "./First";
import FunComp from "./FunComp";
import Keys from "./Keys";
import Ref from "./Ref";

function App() {
  const name = "React app";
  // const name = [<p>test</p>, <p>content</p>];
  // const testFun = ()=>{
  //   alert()
  // }
  return (
    <div className="App">
      <h1>Welcome to my first {name}</h1>
      <Keys />
      <Ref />
      <Event />
      <FunComp name={name} age={44}>
        Hii
      </FunComp>
      <ClassComp name={name} age={44}>
        Hii
      </ClassComp>
      <First />
    </div>
  );
}

export default App;
