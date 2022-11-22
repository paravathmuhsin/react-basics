import React, { useEffect, useState } from "react";
import Memo from "./Memo";

const Effect = () => {
  const [first, setfirst] = useState("hii");
  const [sec, setsec] = useState("hii");
  useEffect(() => {
    console.log("useEffect - first");
    return () => {};
  }, []);
  useEffect(() => {
    console.log("useEffect - sec");
  }, [sec]);
  return (
    <div>
      Effect
      <Memo ss={sec} />
      <button
        onClick={() => {
          setfirst("Hello");
        }}
      >
        {first}
      </button>
      <button
        onClick={() => {
          setsec("Hello");
        }}
      >
        {sec}
      </button>
    </div>
  );
};

export default Effect;
