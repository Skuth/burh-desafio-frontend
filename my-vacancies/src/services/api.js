import axios from "axios"

export const api = axios.create({
    baseURL: "https://crudcrud.com/api/b6bf3af37d4c48bd8d12d4b9728c18e0",
    timout: 5000,
})