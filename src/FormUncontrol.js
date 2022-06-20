import React, { Component, createRef } from "react";

export class FormUncontrol extends Component {
  usrRef = createRef();
  pswRef = createRef();
  handleSubmit = (event) => {
    event.preventDefault();
    console.log(this.usrRef.current.value);
    console.log(this.pswRef.current.value);
    // API
  };
  render() {
    return (
      <div>
        Form Uncontrol
        <form onSubmit={this.handleSubmit}>
          uername: <input ref={this.usrRef} type="text" />
          <br />
          password: <input ref={this.pswRef} type="password" />
          <br />
          <button type="submit">submit</button>
        </form>
      </div>
    );
  }
}

export default FormUncontrol;
