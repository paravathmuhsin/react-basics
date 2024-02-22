const withHOC = (Comp) => {
  //   return class extends Component {
  //     render() {
  //       return (
  //         <>
  //           <h4>From HOC</h4>
  //           <Comp />
  //         </>
  //       );
  //     }
  //   };
  return (props) => {
    return (
      <>
        <h4>From HOC</h4>
        <Comp {...props} />
      </>
    );
  };
};

export default withHOC;
