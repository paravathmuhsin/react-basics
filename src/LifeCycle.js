import React, { Component, PureComponent } from "react";

export class LifeCycle extends PureComponent {
  constructor() {
    super();
    console.log("constructor");
  }

  state = {
    name: "Muhsin",
  };

  componentDidMount() {
    console.log("componentDidMount");
  }

  componentDidUpdate() {
    console.log("componentDidUpdate");
  }

//   shouldComponentUpdate(newProps, newState) {
//     console.log("shouldComponentUpdate", newState, this.state );
//     if(newState.name !== this.state.name){
//         return true;
//     } else {
//         return false;
//     }
//   }

  componentWillUnmount() {
    console.log("componentWillUnmount");
  }

  render() {
    console.log("render");
    return (
      <div>
        LifeCycle - {this.state.name} <br />
        <button
          onClick={() => {
            this.setState({ name: "Aswin" });
          }}
        >
          Click
        </button>
      </div>
    );
  }
}

export default LifeCycle;
