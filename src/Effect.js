import React, { useCallback, useEffect, useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import Memo from "./Memo";

function add(a, b) {
  return a + b;
}

const Effect = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  console.log( searchParams.get("name"))
  const [first, setfirst] = useState(2);
  const [sec, setsec] = useState("hii");
  //ijfhe9gh89ehg89e
  const ss = useCallback(() => {
    console.log("ss", first);
  }, [first]);
  const dd = useMemo(() => add(3, first), [first]);

  useEffect(() => {
    console.log("useEffect - first");
    return () => {};
  }, []);
  useEffect(() => {
    console.log("useEffect - sec");
  }, [sec]);
  return (
    <div>
      Effect - {dd}
      <Memo ff={dd} />
      <button
        onClick={() => {
          setfirst(5);
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
