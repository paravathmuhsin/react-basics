const Props = ({ name, age, children }) => {
  return (
    <div>
      Props -{children} {name}@{age}
    </div>
  );
};

export default Props;
