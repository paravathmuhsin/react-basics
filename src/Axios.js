import axios from "axios";
import React, { useEffect, useState } from "react";

const Axios = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then(function (response) {
        setPosts(response.data);
      });
  }, []);
  return (
    <div>
      Axios
      {posts.map((item) => (
        <h2 key={item.id}>{item.title}</h2>
      ))}
    </div>
  );
};

export default Axios;
