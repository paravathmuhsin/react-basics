import React, { Component } from "react";

export default class FormControl extends Component {
  state = {
    username: "",
    password: "",
  };
  changeHandler = (e) => {
    this.setState({ ...this.state, [e.target.name]: e.target.value });
  };
  submitHandler = (e) => {
    // 1. prevent the default action redirection
    e.preventDefault();

    // 2. fetch the user inputed values
    const { username, password } = this.state;

    // 3. use the input(call API or ....)
    console.log(username, password)
    // url
    // GET/POST/PUT/PATCH/DELETE
    // format of data to pass
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
              name="username"
              type="text"
              value={this.state.username}
            />
          </label>
          <br />
          <label>
            Password :
            <input
              type="password"
              name="password"
              onChange={this.changeHandler}
              value={this.state.password}
            />
          </label>
          <br />
          <button type="submit">Login</button>
        </form>
      </div>
    );
  }
}
