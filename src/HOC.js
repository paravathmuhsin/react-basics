const withHOC = (OldComp) => {
  return (props) => (
    <>
      <h3>Hii , this is HOC</h3>
      <OldComp {...props} />
    </>
  );
};

export default withHOC;
