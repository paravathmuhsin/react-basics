import axios from "axios";
import React, { useEffect, useState } from "react";

const ApiRequest = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    // const xhttp = new XMLHttpRequest();
    // xhttp.onload = function () {
    //   if (this.responseText) {
    //     setPosts(JSON.parse(this.responseText));
    //   }
    // };
    // xhttp.open("GET", "https://jsonplaceholder.typicode.com/posts");
    // xhttp.send();

    // fetch("https://jsonplaceholder.typicode.com/posts")
    //   .then((response) => response.json())
    //   .then((res) => setPosts(res));

    axios
      .get("https://jsonplaceholder.typicode.com/posts", {
        headers: {
          Authorization: "huchiewf98wy9eyw98r798w7er98",
        },
      })
      .then((res) => setPosts(res.data));
  }, []);
  return (
    <div>
      ApiRequest
      {posts.map((i) => (
        <div
          style={{ margin: "10px 5px", padding: "5px", border: "solid black" }}
          key={i.id}
        >
          <h3>{i.title}</h3>
          <p>{i.body}</p>
        </div>
      ))}
    </div>
  );
};

export default ApiRequest;
