import { Component } from "react";

class StateClass extends Component {
  name = "David";
  state = {
    state: "kerla",
    address: {},
    country: "IND",
    count: 0,
  };
  clickHandler = () => {
    this.name = "John";
    // async
    // this.setState({ ...this.state, count: this.state.count + 1 });
    this.setState((state, props) => {
      return { ...state, count: state.count + 1 };
    });
    // console.log("clicked", this.state);
  };
  render() {
    console.log(this.name, this.state);
    return (
      <h3 onClick={this.clickHandler}>
        State feature -{this.name} {this.state.country} - {this.state.count}
      </h3>
    );
  }
}

export default StateClass;
