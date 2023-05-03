import React from "react";
import PropsClass from "./PropsClass";
import PropsFun from "./PropsFun";

const Props = () => {
  return (
    <div>
      <PropsFun country="India" state="Kerala">
        Hello
      </PropsFun>
      <PropsClass name="David" age={44}>
        Hiii
      </PropsClass>
    </div>
  );
};

export default Props;
