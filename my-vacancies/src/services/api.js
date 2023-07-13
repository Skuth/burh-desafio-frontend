import axios from "axios"

export const api = axios.create({
    baseURL: "https://crudcrud.com/api/7130f90480d04b2c83c37f24717f4ded",
    timout: 5000,
})