import axios from "axios";

export const api = axios.create({
    baseURL: 'https://connections-api.herokuapp.com',
})
