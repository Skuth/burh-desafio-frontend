import axios from "axios"

export const api = axios.create({
    baseURL: "https://crudcrud.com/api/54cd9f07e9e94f6485c3372d2cebe924",
    timout: 5000,
})