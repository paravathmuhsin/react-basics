import React, { Component } from "react";

class ClassComp extends Component {
  constructor(){
    super();
    console.log('constructor');
  }
  // state managment
  state = {
    age: 44,
    counter: 0,
    country: "IN",
  };
  name = "David";
  clickHandler = () => {
    this.name = "John";
    // async
    this.setState({ ...this.state, age: 66, country: 'SL' });
  };
  buttonClickHander = () => {
    // this.setState({...this.state, counter: this.state.counter + 1})
    this.setState((state) => {
      return { ...state, counter: state.counter + 1 };
    });
  };

  componentDidMount(){
    console.log('componentDidMount')
  }
  componentDidUpdate(){
    console.log('componentDidUpdate')
  }
  shouldComponentUpdate(props, state){
    console.log('shouldComponentUpdate', state, this.state)
    return state.age !== this.state.age;
  }
  componentWillUnmount(){
    console.log('componentWillUnmount')
  }
  render() {
    console.log('render')
    return (
      <div>
        <div onClick={this.clickHandler}>
          ClassComp - {this.name}@{this.state.age} - {this.state.country}
        </div>
        <button onClick={this.buttonClickHander}>
          Click me - {this.state.counter}
        </button>
      </div>
    );
  }
}

export default ClassComp;
