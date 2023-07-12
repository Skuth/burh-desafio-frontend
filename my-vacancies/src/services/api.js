import axios from "axios"

export const api = axios.create({
    baseURL: "https://crudcrud.com/api/0bddfa3f8d674a5b807c1808d4f05973",
    timout: 5000,
})