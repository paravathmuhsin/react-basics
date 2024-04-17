const withHOC = (OldComp) => {
  return (props) => (
    <>
      <h3>From HOC function</h3>
      <OldComp {...props} />
    </>
  );
  //   return class extends Component {
  //     render() {
  //       return (
  //         <>
  //           <h3>From HOC function</h3>
  //           <OldComp {...this.props} />
  //         </>
  //       );
  //     }
  //   };
};

export default withHOC;
