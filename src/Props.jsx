const Props = ({ name, age, children }) => {
  return (
    <div>
      Hi {name}@{age} - {children}
    </div>
  );
};

export default Props;
