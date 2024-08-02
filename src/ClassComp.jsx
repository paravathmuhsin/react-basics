import React from "react";

class ClassComp extends React.Component {
  constructor() {
    super();
  }
  testMethod = () => {
    console.log("Test");
  };
  render() {
    // console.log(this.props);
    return <h3>This is my first class component</h3>;
  }
}

export default ClassComp;
