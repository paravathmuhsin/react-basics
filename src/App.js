import React, { Component } from "react";
import First from "./First";
class App extends Component {
  render() {
    return (
      // fragment
      <>
        <h2 id="dd">Hiiiiii</h2>
        <First name="muhsin" age={88}>Helllo</First>
      </>
    );
  }
}

export default App;
