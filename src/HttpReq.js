import axios from "axios";
import React, { useEffect, useState } from "react";

const HttpReq = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    // fetch("https://jsonplaceholder.typicode.com/users")
    //   .then((response) => response.json())
    //   .then((json) => setUsers(json));
    axios.get("https://jsonplaceholder.typicode.com/users").then((res) => {
        setUsers(res.data);
    });
  }, []);
  return (
    <div>
      HttpReq
      {/* [<p>Leanne Graham</p>,<p>Ervin Howell</p>,<p>Clementine Bauch</p>] */}
      {users.map((item) => (
        <p key={item.id}>
          {item.name} - {item.email}
        </p>
      ))}
    </div>
  );
};

export default HttpReq;
