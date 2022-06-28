import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
  headers: { "Authorization": "asd6brrywtyfcefewar4w5456v5sdsasd" },
});

export default axiosInstance;
