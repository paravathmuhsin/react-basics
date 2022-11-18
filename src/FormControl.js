import React, { Component } from "react";

export default class FormControl extends Component {
  state = {
    username: "",
    password: "",
  };
  onChangeHandler = (e) => {
    this.setState({ ...this.state, [e.target.name]: e.target.value });
  };
  submitHandler = (e) => {
    e.preventDefault();
    const { username, password } = this.state;
    console.log(username, password);
  };
  render() {
    return (
      <div>
        FormControl
        <form onSubmit={this.submitHandler}>
          <input
            placeholder="Username"
            value={this.state.username}
            name="username"
            onChange={this.onChangeHandler}
            type="text"
          />
          <input
            placeholder="Password"
            value={this.state.password}
            name="password"
            onChange={this.onChangeHandler}
            type="password"
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}
