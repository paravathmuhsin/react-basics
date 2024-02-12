import "./App.css";
import First from "./First";

function App() {
  const name = "React app";
  // const name = [<p>test</p>, <p>content</p>];
  // const testFun = ()=>{
  //   alert()
  // }
  return (
    <div className="App">
      <h1>Welcome to my first {name}</h1>
      <First />
    </div>
  );
}

export default App;
