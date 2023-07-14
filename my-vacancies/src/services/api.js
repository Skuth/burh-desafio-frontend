import axios from "axios";

export const api = axios.create({
  baseURL: "https://crudcrud.com/api/b753be66255a4f988083ae6fd9506d64",
  timout: 5000,
});
