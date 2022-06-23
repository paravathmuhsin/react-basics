import React, { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

const Effect = () => {
  const [state, setState] = useState({ name: "Muhsin" });
  const [address, setAddress] = useState({ state: "kerala" });
  let [searchParams, setSearchParams] = useSearchParams();
  let navigate = useNavigate();

  console.log(searchParams.get("name"));
  const clickHandler = () => {
    setSearchParams({ name: "Sourav", age: 55 });
    setState({ name: "Aruna" });
  };

  const clickHandler2 = () => {
    setAddress({ state: "TN" });
    navigate('/form')
  };

  useEffect(() => {
    console.log("useEffect comonent did mont");
  }, []);

  useEffect(() => {
    console.log("useEffect");
    return () => {
      console.log("effect return");
    };
  }, [state]);

  useEffect(() => {
    console.log("useEffect 2");
  }, [address]);

  return (
    <div>
      Effect - {state.name} - {address.state}-
      <button onClick={clickHandler}>update</button>
      <button onClick={clickHandler2}>update2</button>
    </div>
  );
};

export default Effect;
