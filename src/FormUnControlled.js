import React, { Component, createRef } from "react";

export default class FormUnControlled extends Component {
  username = createRef();
  password = createRef();
  submitHandler = (e) => {
    e.preventDefault();
    console.log(this.username.current.value);
    console.log(this.password.current.value);
  };
  render() {
    return (
      <div>
        FormUnControlled -
        <form onSubmit={this.submitHandler}>
          <input ref={this.username} type="text" placeholder="username" />
          <input ref={this.password} type="password" placeholder="password" />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}
