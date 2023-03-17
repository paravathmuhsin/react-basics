import React, { Component } from "react";

export default class FormControl extends Component {
  state = {
    username: "",
    password: "",
  };
  changeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  submitHandler = (e) => {
    e.preventDefault();
    console.log(this.state);
  };
  render() {
    return (
      <div>
        FormControl
        <form onSubmit={this.submitHandler}>
          username:{" "}
          <input
            type="text"
            value={this.state.username}
            onChange={this.changeHandler}
            name="username"
          />
          <br />
          password:{" "}
          <input
            type="password"
            onChange={this.changeHandler}
            value={this.state.password}
            name="password"
          />
          <br />
          <button type="submit">Login</button>
        </form>
      </div>
    );
  }
}
