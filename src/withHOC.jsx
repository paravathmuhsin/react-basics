const withHOC = (OldComp) => {
  // eslint-disable-next-line react/display-name
  // return class extends Component {
  //   render() {
  //     return <OldComp {...this.props} user="Test" />;
  //   }
  // };
  // eslint-disable-next-line react/display-name
  return (props) => <OldComp {...props} user="Test" />;
};

export default withHOC;
