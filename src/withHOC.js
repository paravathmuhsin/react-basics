import { Component } from "react";

export default function withHOC(Compo) {
  // return class extends Component {
  //   user = {
  //     name: "Mushin",
  //   };
  //   render() {
  //     return (
  //       <>
  //         <h5>Blue header</h5>
  //         <Compo {...this.props} user={this.user} />
  //       </>
  //     );
  //   }
  // };
  return (props) => {
    return (
      <>
        <h3>Blue header</h3>
        <Compo {...props} />
      </>
    );
  };
}
