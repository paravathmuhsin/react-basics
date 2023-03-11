import React, { Component } from "react";

export default class FormUnControlled extends Component {
  submitHandler = (e) => {
    e.preventDefault();
  };
  render() {
    return (
      <div>
        FormUnControlled
        <form onSubmit={this.submitHandler}>
          username: <input type="text" name="username" />
          <br />
          password: <input type="password" name="password" />
          <br />
          <button type="submit">Login</button>
        </form>
      </div>
    );
  }
}
