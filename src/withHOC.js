import React from "react";
const withHOC = (Comp) => {
  //   return class extends React.Component {
  //     render() {
  //       return (
  //         <div>
  //           <h3>From HOC - Header</h3>
  //           <Comp {...this.props} />
  //         </div>
  //       );
  //     }
  //   };
  return (props) => (
    <div>
      <h3>From HOC - Header</h3>
      <Comp {...props} />
    </div>
  );
};
export default withHOC;
