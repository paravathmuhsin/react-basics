import React from "react";

class FirstClass extends React.Component {
  render() {
    console.log(this.props)
    return <h3>First component - {this.props.propTest}</h3>;
  }
}

export default FirstClass;
