import axios from "axios";
export default axios.create({
  baseURL: "https://rickandmortyapi.com/api/",
  responseType: "json",
  headers: {}
});
