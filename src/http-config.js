import axios from 'axios';

export const Http = axios.create({
    baseURL: `//localhost:8000`,
    headers: {}
})
