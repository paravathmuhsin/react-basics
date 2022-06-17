import { Component } from "react";

const withHoc = (OldComp) => {
  //   return class extends Component {
  //     render() {
  //       return (
  //         <>
  //           <h2>From hoc function</h2>
  //           <OldComp {...this.props} />
  //         </>
  //       );
  //     }
  //   };
  return (props) => {
    return (
      <>
        <h2>From hoc function</h2>
        <OldComp {...props} />
      </>
    );
  };
};

export default withHoc;
