import axios from "axios";

const axiosInstane = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
  headers: { Authorization: "nfwfw98hf9832hr89h3298rh8394",
 },
});
export default axiosInstane;
