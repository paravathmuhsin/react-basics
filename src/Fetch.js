import React, { useEffect, useState } from "react";

const Fetch = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((json) => setPosts(json));
  }, []);
  return (
    <div>
      Fetch
      {posts.map((item) => (
        <div key={item.id} style={{ padding: "10px 0" }}>
          <h3>{item.title}</h3>
          <p>{item.body}</p>
        </div>
      ))}
    </div>
  );
};

export default Fetch;
