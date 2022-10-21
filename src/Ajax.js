import React, { useEffect } from "react";

const Ajax = () => {
  useEffect(() => {
    // const xhttp = new XMLHttpRequest();
    // xhttp.onload = function () {
    //   console.log(this.responseText);
    // };
    // xhttp.open("GET", "https://jsonplaceholder.typicode.com/posts", true);
    // xhttp.send();
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((json) => console.log(json));
  }, []);

  return <div>Ajax</div>;
};

export default Ajax;
