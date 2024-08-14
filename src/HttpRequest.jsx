import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";

const HttpRequest = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    // fetch("https://jsonplaceholder.typicode.com/posts")
    //   .then((response) => response.json())
    //   .then((json) => setPosts(json));
    // fetch("https://jsonplaceholder.typicode.com/posts", {
    //   method: "POST",
    //   body: JSON.stringify({ title: "Test", body: "test body" }),
    // })
    //   .then((response) => response.json())
    //   .then((json) => console.log(json));

    axios.get("https://jsonplaceholder.typicode.com/posts").then((res) => {
      setPosts(res.data);
    });

    // axios.post("https://jsonplaceholder.typicode.com/posts", {
    //   title: "Test",
    //   body: "test body",
    // });
  }, []);
  return (
    <div>
      HttpRequest
      {posts.map((item) => (
        <h3 key={item.id}>{item.title}</h3>
      ))}
    </div>
  );
};

export default HttpRequest;
