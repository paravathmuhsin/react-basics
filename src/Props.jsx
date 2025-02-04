const Props = ({ name, age, children }) => {
  console.log(children);
  return (
    <div>
      Props {name}@{age}
      {/* {children ? <p>{children}</p> : null} */}
      {children && <p>{children}</p>}
    </div>
  );
};

export default Props;
