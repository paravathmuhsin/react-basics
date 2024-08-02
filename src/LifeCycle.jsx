import { Component } from "react";

export class LifeCycle extends Component {
  constructor() {
    super();
    console.log("constructor");
  }
  state = {
    name: "David",
  };
  componentDidMount() {
    console.log("componentDidMount");
  }
  componentDidUpdate() {
    console.log("componentDidUpdate");
  }
  shouldComponentUpdate(newProp, newState) {
    console.log(
      "shouldComponentUpdate",
      newProp,
      newState,
      this.props,
      this.state
    );
    return newState.name !== this.state.name;
  }
  componentWillUnmount() {
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
