import { useState } from "react";

const Await = () => {
  const [todo, setTodo] = useState(null);
  const clickHandler = async (a) => {
    let res = await fetch("https://jsonplaceholder.typicode.com/todos/1");
    res = await res.json();
    setTodo(res);
  };
  return (
    <div>
      Async/Await - {todo && todo.title}
      <button
        onClick={() => {
          clickHandler(4);
        }}
      >
        click me
      </button>
    </div>
  );
};

export default Await;
