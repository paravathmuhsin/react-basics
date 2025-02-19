import { useState } from "react";

const ErrorCheck = () => {
  const [count, setCount] = useState(0);
  if (count > 5) {
    throw new Error("Count is greater than 5");
  }
  return (
    <div>
      ErrorCheck -
      <button onClick={() => setCount((state) => state + 1)}>
        count - {count}
      </button>
    </div>
  );
};

export default ErrorCheck;
