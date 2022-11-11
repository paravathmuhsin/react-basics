import React, { Component } from "react";

class PropClass extends Component {
  render() {
    console.log(this.props);
    const { country, children } = this.props;
    return (
      <>
        <h3>I am from {country} </h3>
        {children}
      </>
    );
  }
}

export default PropClass;
