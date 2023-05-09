import { Component } from "react";

const withHOC = (OldComp) => {
  //   return class extends Component {
  //     render() {
  //       return (
  //         <>
  //           <h2>From HOC funtion</h2>
  //           <OldComp {...this.props} />
  //         </>
  //       );
  //     }
  //   };
  return (props) => {
    return (
      <>
        <h2>From HOC funtion</h2>
        <OldComp {...props} />
      </>
    );
  };
};

export default withHOC;
