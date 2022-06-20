import React, { Component } from "react";

export class FormControl extends Component {
  state = {
    username: "",
    password: "",
  };
  changeHandler = (e) => {
    this.setState({ ...this.state, [e.target.name]: e.target.value });
  };
  handleSubmit = (event) => {
    event.preventDefault();
    console.log(this.state);
    // API
  };
  render() {
    return (
      <div>
        Form Control
        <form onSubmit={this.handleSubmit}>
          uername:
          <input
            onChange={this.changeHandler}
            value={this.state.username}
            name="username"
            type="text"
          />
          <br />
          password:
          <input
            onChange={this.changeHandler}
            value={this.state.password}
            name="password"
            type="password"
          />
          <br />
          <button type="submit">submit</button>
        </form>
      </div>
    );
  }
}

export default FormControl;
