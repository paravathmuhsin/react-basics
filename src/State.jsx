import { Component } from "react";

export class State extends Component {
  state = {
    name: "David",
    count: 0,
  };
  age = 55;

  clickHandler = () => {
    this.age = 44;
    console.log(this.age);
    // async
    // this.setState({ name: "John", count: this.state.count + 1 });
    this.setState((localState)=>{
        return { name: "John", count: localState.count + 1 }
    })
    // console.log(this.state);
  };
  render() {
    return (
      <div>
        State - {this.state.name} @{this.age} - {this.state.count}
        <button onClick={this.clickHandler}>update name</button>
      </div>
    );
  }
}

export default State;
