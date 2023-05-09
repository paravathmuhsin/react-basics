import React, { Component } from "react";

export default class FormControlled extends Component {
  state = {
    username: "",
    password: "",
  };
  changeHandler = (e) => {
    // console.log(e.target.name);
    this.setState({ ...this.state, [e.target.name]: e.target.value });
  };
  submitHandler = (e) => {
    e.preventDefault();
    console.log(this.state);
  };
  render() {
    return (
      <div>
        FormControlled -
        <form onSubmit={this.submitHandler}>
          <input
            type="text"
            value={this.state.username}
            onChange={this.changeHandler}
            placeholder="username"
            name="username"
          />
          <input
            type="password"
            value={this.state.password}
            onChange={this.changeHandler}
            placeholder="password"
            name="password"
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}
