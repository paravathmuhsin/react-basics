import React, { Component } from "react";

class State extends Component {
  constructor() {
    super();
    this.state = {
      name: "Muhsin",
      age: 66,
      count: 0,
    };
  }
  courseDetails = {
    name: "React",
  };
  render() {
    console.log("render");
    return (
      <div>
        State - {this.state.name}- {this.courseDetails.name}
        <button
          onClick={() => {
            this.courseDetails.name = "Javascript";
            // async
            // this.setState({ ...this.state, name: "Aby", count: this.state.count +1 });
            this.setState((state) => ({
              ...state,
              name: "Aby",
              count: state.count + 1,
            }));
            console.log("cliked", this.courseDetails);
          }}
        >
          Update - {this.state.count}
        </button>
      </div>
    );
  }
}
export default State;
