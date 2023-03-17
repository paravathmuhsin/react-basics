import React, { Component, createRef } from "react";

export default class FormUnControlled extends Component {
  userRef = createRef();
  passRef = createRef();
  submitHandler = (e) => {
    e.preventDefault();
    console.log(this.userRef.current.value);
    console.log(this.passRef.current.value);
  };
  render() {
    return (
      <div>
        FormUnControlled
        <form onSubmit={this.submitHandler}>
          username: <input ref={this.userRef} type="text" name="username" />
          <br />
          password: <input ref={this.passRef} type="password" name="password" />
          <br />
          <button type="submit">Login</button>
        </form>
      </div>
    );
  }
}
