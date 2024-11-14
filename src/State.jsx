import { Component } from "react";

export class State extends Component {
  // react component rerender only when
  // props change
  // state change

  //   name = "David";
  state = {
    name: "David",
    count: 0,
  };
  clickHandler = () => {
    // this.name = "John";
    // async
    // this.setState({ ...this.state, count: this.state.count + 1 });
    this.setState((state) => {
      return { ...state, count: state.count + 1 };
    });
    console.log(this.state);
  };
  render() {
    return (
      <div onClick={this.clickHandler}>
        State - {this.state.name}- {this.state.count}
      </div>
    );
  }
}

export default State;
