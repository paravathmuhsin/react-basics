import { Component } from "react";

export class LifeCycle extends Component {
  constructor() {
    super();
    console.log("constructor");
  }
  state = {
    name: "John",
  };
  componentDidMount() {
    console.log("componentDidMount");
  }
  componentDidUpdate() {
    console.log("componentDidUpdate");
  }
  componentWillUnmount(){
    console.log("componentWillUnmount");
  }
  clickHandler = () => {
    this.setState({ name: "John" });
  };
  render() {
    console.log("render");
    return <div onClick={this.clickHandler}>LifeCycle - {this.state.name}</div>;
  }
}

export default LifeCycle;
