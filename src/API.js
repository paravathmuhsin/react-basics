import axios from "axios";
import React, { useEffect } from "react";

const API = () => {
  useEffect(() => {
    // const xhttp = new XMLHttpRequest();
    // xhttp.onload = function () {
    //   console.log(this.responseText);
    // };
    // xhttp.open("GET", "https://dummyjson.com/products", true);
    // xhttp.send();

    // fetch("https://dummyjson.com/products", {
    //   method: "GET",
    //   headers: {
    //     authentication: "sdsd",
    //   },
    // })
    //   .then((res) => res.json())
    //   .then((res) => {
    //     console.log(res);
    //   });

    axios
      .get("https://dummyjson.com/products", {
        headers: {
          aaaa: "ddd",
        },
      })
      .then((res) => res.data)
      .then((res) => {
        console.log(res);
      });
  }, []);
  return <div>API</div>;
};

export default API;
