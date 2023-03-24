import React, { useEffect, useState } from "react";
import axios from "axios";

const Axios = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    axios.get("/posts").then((response) => {
      // handle success
      setPosts(response.data);
    });
  }, []);
  return (
    <div>
      Axios
      {posts.map((item) => (
        <div key={item.id} style={{ padding: "10px 0" }}>
          <h3>{item.title}</h3>
          <p>{item.body}</p>
        </div>
      ))}
    </div>
  );
};

export default Axios;
