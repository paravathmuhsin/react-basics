import React, { Component, createRef } from "react";

export default class FormUncontrol extends Component {
  username = createRef(null);
  password = createRef(null);
  submitHandler = (e) => {
    e.preventDefault();
    const username = this.username.current.value;
    const password = this.password.current.value;
    console.log(username, password);
  };
  render() {
    return (
      <div>
        FormUncontrol
        <form onSubmit={this.submitHandler}>
          <input ref={this.username} placeholder="Username" type="text" />
          <input ref={this.password} placeholder="Password" type="password" />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}
