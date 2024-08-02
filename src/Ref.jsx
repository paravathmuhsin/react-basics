import { Component, createRef } from "react";
// import ClassComp from "./ClassComp";
// import FuncComp from "./FuncComp";

export class Ref extends Component {
  paraRef = createRef();
  componentDidMount() {
    console.log(this.paraRef);
  }
  render() {
    return (
      <div>
        Ref
        <p ref={this.paraRef}>This is ref added element</p>
        {/* <ClassComp ref={this.paraRef} /> */}
        {/* <FuncComp ref={this.paraRef}/> */}
      </div>
    );
  }
}

export default Ref;
