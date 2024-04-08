const Second = (props) => {
  console.log(props);
  const { propTest } = props; // {propTest: 'dd'}
  return <h3>Second component - {propTest}</h3>;
};
export default Second;
