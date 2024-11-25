import { useState, useEffect } from "react";

const Fetch = () => {
  const [todo, setTodo] = useState(null);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos/1", {
      method: "GET",
    //   headers: { "Auth-token": "dsfgweg9few7f8" },
    //   body: JSON.stringify({
    //     name: "Test",
    //   }),
    })
      .then((response) => response.json())
      .then((json) => setTodo(json));
  }, []);
  return <div>Fetch - {todo && todo.title}</div>;
};

export default Fetch;
