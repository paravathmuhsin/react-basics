import { Component } from "react";

class FormControlled extends Component {
  state = {
    username: "",
    password: "",
  };
  submitHandler = (e) => {
    e.preventDefault();
    console.log(this.state);
  };
  changeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  render() {
    return (
      <div>
        <h3>FormControlled</h3>
        <form onSubmit={this.submitHandler}>
          <div>
            <label>Username</label>
            <input
              name="username"
              onChange={this.changeHandler}
              value={this.state.username}
            />
          </div>
          <div>
            <label>Password</label>
            <input
              type="password"
              name="password"
              onChange={this.changeHandler}
              value={this.state.password}
            />
          </div>
          <button>Submit</button>
        </form>
      </div>
    );
  }
}

export default FormControlled;
