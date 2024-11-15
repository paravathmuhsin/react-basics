import { useState, useEffect } from "react";

const UseEffect = () => {
  const [name, setName] = useState("David");
  const [age, setAge] = useState(44);

  useEffect(() => {
    console.log("useEffect 1");
  }, [name]);

  useEffect(() => {
    console.log("useEffect 2");
    // componentDidMount
  }, []);

  useEffect(() => {
    console.log("useEffect 3");
    return ()=>{
      console.log('willUnmount')
    }
  });

  console.log("render");

  const clickHandler = () => {
    setName("John");
  };
  const ageClickHandler = () => {
    setAge(55);
  };
  return (
    <>
      <div onClick={clickHandler}>UseEffect - {name}</div>
      <p onClick={ageClickHandler}>Age: {age}</p>
    </>
  );
};

export default UseEffect;
