import "./App.css";
import ClassComp from "./ClassComp";
import Event from "./Event";
import First from "./First";
import FormRef from "./FormRef";
import FormState from "./FormState";
import FunComp from "./FunComp";
import HocComp from "./HocComp";
import Keys from "./Keys";
import Ref from "./Ref";
import UseCallbackComp from "./UseCallbackComp";
import UseEffectComp from "./UseEffectComp";
import UseMemoComp from "./UseMemoComp";
import UseStateComp from "./UseStateComp";

function App() {
  const name = "React app";
  // const name = [<p>test</p>, <p>content</p>];
  // const testFun = ()=>{
  //   alert()
  // }
  return (
    <div className="App">
      <h1>Welcome to my first {name}</h1>
      <FormRef />
      <FormState />
      <HocComp name="Test" age={33} />
      <Ref />
      <UseCallbackComp />
      <UseMemoComp />
      <UseStateComp />
      <UseEffectComp />
      <Keys />
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
