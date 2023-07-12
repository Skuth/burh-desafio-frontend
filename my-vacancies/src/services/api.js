import axios from "axios"

export const api = axios.create({
    baseURL: "https://crudcrud.com/api/8ba7c6f2a105478b9e33b40621baa11e",
    timout: 5000,
})