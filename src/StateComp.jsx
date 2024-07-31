import { Component } from "react";

export class StateComp extends Component {
  constructor() {
    super();
    // this.state = {
    //   name: "David",
    // };
  }
  state = {
    name: "John",
    counter: 0,
  };
  district = "Wayanad";

  clickHandler = () => {
    this.district = "Malappuram";
    // console.log(this.district);
    this.setState({ name: "David" }); // async
    // console.log(this.state);

    // this.setState({ counter: this.state.counter + 1 });
    this.setState((state) => {
      return { counter: state.counter + 1 };
    });
  };
  render() {
    console.log("render");
    return (
      <div onClick={this.clickHandler}>
        StateComp - {this.state.name}, {this.district} - {this.state.counter}
      </div>
    );
  }
}

export default StateComp;
