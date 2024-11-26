import axios from "axios";
import { useState, useEffect } from "react";

const Fetch = () => {
  const [todo, setTodo] = useState(null);
  useEffect(() => {
    // fetch("https://jsonplaceholder.typicode.com/todos/1", {
    //   method: "GET",
    // //   headers: { "Auth-token": "dsfgweg9few7f8" },
    // //   body: JSON.stringify({
    // //     name: "Test",
    // //   }),
    // })
    //   .then((response) => response.json())
    //   .then((json) => setTodo(json));
    axios
      .get("https://jsonplaceholder.typicode.com/todos/1", {
        headers: { "Auth-token": "dsfgweg9few7f8" },
      })
      // .post(
      //   "https://jsonplaceholder.typicode.com/todos/1",
      //   {
      //     name: "David",
      //     age: 44,
      //   },
      //   {
      //     headers: { "Auth-token": "dsfgweg9few7f8" },
      //   }
      // )
      .then((res) => res.data)
      .then((res) => {
        setTodo(res);
      });
  }, []);
  return <div>Fetch - {todo && todo.title}</div>;
};

export default Fetch;
