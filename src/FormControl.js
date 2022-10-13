import React, { Component } from "react";

export default class FormControl extends Component {
  state = {
    username: "",
    password: "",
  };
  changeHandler = (e) => {
    this.setState({ ...this.state, username: e.target.value });
  };
  submitHandler = (e) => {
    // 1. prevent the default action redirection
    e.preventDefault();

    // 2. feth the user inputed values

    // 3. use the input(call API or ....)
  };
  render() {
    return (
      <div>
        Form Control
        <form onSubmit={this.submitHandler}>
          <label>
            Username :
            <input
              onChange={this.changeHandler}
              type="text"
              value={this.state.username}
            />
          </label>
          <br />
          <label>
            Password :<input type="password" value={this.state.password} />
          </label>
          <br />
          <button type="submit">Login</button>
        </form>
      </div>
    );
  }
}
