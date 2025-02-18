import axios from "axios";
import { useEffect, useState } from "react";

const API = () => {
  const [todos, setTodos] = useState([]);

  //   useEffect(() => {
  //     fetch("https://jsonplaceholder.typicode.com/users", {
  //       method: "GET",
  //       body: JSON.stringify({ name: "david" }),
  //       headers: { Test: "ddd" },
  //     })
  //       .then((response) => response.json())
  //       .then((res) => {
  //         setTodos(res);
  //       })
  //       .catch((err) => {
  //         console.log(err);
  //       });
  //   }, []);
  useEffect(() => {
    // axios.get("/users").then((res) => {
    //     setTodos(res.data);
    // });
    const fetchTodos = async () => {
      const res = await axios.get("https://jsonplaceholder.typicode.com/users");
      setTodos(res.data);
    };
    fetchTodos();
  }, []);
  return (
    <div>
      API
      {todos.map((item) => (
        <div key={item.id}>
          <h3>{item.name}</h3>
        </div>
      ))}
    </div>
  );
};

export default API;
