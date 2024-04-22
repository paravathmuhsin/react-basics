import axios from "axios";
import React, { useEffect, useState } from "react";

const HTTP = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // var xhttp = new XMLHttpRequest();
    // xhttp.onreadystatechange = function () {
    //   if (this.readyState == 4 && this.status == 200) {
    //     setPosts(JSON.parse(this.responseText));
    //   }
    // };
    // xhttp.open("GET", "https://jsonplaceholder.typicode.com/posts", true);
    // xhttp.send();

    // fetch("https://jsonplaceholder.typicode.com/posts")
    //   .then((response) => response.json())
    //   .then((json) => setPosts(json));

    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.data)
      .then((res) => {
        setPosts(res);
      });
  }, []);
  return (
    <div>
      HTTP
      {posts.map((item) => (
        <h3 key={item.id}>{item.title}</h3>
      ))}
    </div>
  );
};

export default HTTP;
