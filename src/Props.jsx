const Props = ({ name, age, children }) => {
  console.log(children);
  return (
    <div>
      Props {children} {name}@{age}
    </div>
  );
};

export default Props;
