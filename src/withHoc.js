import { Component } from "react";

const withHoc = (Comp) => {
  //   return class extends Component {
  //     render() {
  //       return (
  //         <div>
  //           Hii
  //           <Comp {...this.props} name="Muhsin" />
  //         </div>
  //       );
  //     }
  //   };
  return (props) => (
    <div>
      Hiiii <Comp {...props} name="Muhsin" />
    </div>
  );
};
export default withHoc;
