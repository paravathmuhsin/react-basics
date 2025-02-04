import { Component } from "react";

export default class LifeCycle extends Component {
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

  shouldComponentUpdate(pros,state) {
    // this.props , this.state
    console.log("shouldComponentUpdate");
    return false;
  }

  componentDidUpdate() {
    console.log("componentDidUpdate");
  }

//   componentDidCatch(){

//   }

  componentWillUnmount() {
    console.log("componentWillUnmount");
  }

  clickHandler = () => {
    // async
    this.setState({ name: "John" });
  };

  render() {
    console.log("render");
    return (
      <div>
        LifeCycle - {this.state.name}
        <button onClick={this.clickHandler}>update name</button>
      </div>
    );
  }
}
