import React, { Component, createRef } from "react";

export default class FormUncontrolled extends Component {
  username = createRef(null);
  password = createRef(null);

  submitHandler = (e) => {
    // 1. prevent the default action redirection
    e.preventDefault();

    // 2. fetch the user inputed values
    const username= this.username.current.value;
    const password= this.password.current.value;
    // 3. use the input(call API or ....)
    console.log(username, password)
    // url
    // GET/POST/PUT/PATCH/DELETE
    // format of data to pass
  };
  render() {
    return (
      <div>
        Form Uncontrolled
        <form onSubmit={this.submitHandler}>
          <label>
            Username :
            <input name="username" ref={this.username} type="text" />
          </label>
          <br />
          <label>
            Password :
            <input type="password" ref={this.password} name="password" />
          </label>
          <br />
          <button type="submit">Login</button>
        </form>
      </div>
    );
  }
}
