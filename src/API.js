import React, { useEffect, useState } from "react";
import axiosInstance from "./axios";

const API = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    axiosInstance
      .get("/posts")
      .then(function (response) {
        // handle success
        setPosts(response.data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
    // fetch("https://jsonplaceholder.typicode.com/posts")
    //   .then((response) => response.json())
    //   .then((json) => {
    //     setPosts(json);
    //   });
    // const xhttp = new XMLHttpRequest();
    // xhttp.onload = function() {
    //   console.log(this.responseText)
    // }
    // xhttp.open("GET", "https://jsonplaceholder.typicode.com/posts");
    // xhttp.send();
  }, []);

  return (
    <div>
      API- posts
      {posts.map((item) => (
        <div key={item.id} style={{ padding: "10px" }}>
          <p>{item.title}</p>
          <p>{item.body}</p>
        </div>
      ))}
    </div>
  );
};

export default API;
