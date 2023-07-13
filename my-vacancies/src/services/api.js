import axios from "axios";

export const api = axios.create({
  baseURL: "https://crudcrud.com/api/5e40cd34a7864abd97b44d61b698743d",
  timout: 5000,
});
