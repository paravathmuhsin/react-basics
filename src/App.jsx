import "./App.css";
import AppBrowserRouter from "./AppBrowserRouter";
import AppRouter from "./AppRouter";
import AppContext from "./AppContext";
// import Style from "./Style";
// import ClassComp from "./ClassComp";
// import Events from "./Events";
// import FormControlled from "./FormControlled";
// import FormGeneral from "./FormGeneral";
// import FormUncontrolled from "./FormUncontrolled";
// import FragmentComp from "./FragmentComp";
// import FuncComp from "./FuncComp";
// import JSX from "./JSX";
// import LifeCycle from "./LifeCycle";
// import Loop from "./Loop";
// import Props from "./Props";
// import State from "./State";
// import UseEffect from "./UseEffect";
// import UseRef from "./UseRef";
// import UseState from "./UseState";
// import AppRouter from "./AppRouter";

function App() {
  return (
    <AppContext>
      <AppBrowserRouter />
    </AppContext>
  );
  // return <AppRouter />
  // const name = "David";
  // return (
  //   <div>
  //     <h1>Welcome to my first React app</h1>
  //     <Style />
  //     {/* <Loop />
  //     <FormGeneral />
  //     <FormUncontrolled />
  //     <FormControlled /> */}
  //     {/* <Events /> */}
  //     {/* <UseRef /> */}
  //     {/* <UseEffect />
  //     <UseState />
  //     <LifeCycle />
  //     <State />
  //     <Props name={name} age="55">
  //       Hii..
  //     </Props>
  //     <FragmentComp />
  //     <JSX />
  //     <ClassComp />
  //     <FuncComp /> */}
  //   </div>
  // );
}

export default App;
