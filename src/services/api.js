import axios from "axios" // npm install axios (trabalha com requisições HTTP (get, post...))

export const api = axios.create({
    baseURL: "http://localhost:3333"
})

// quando vai usar , so usa api.get("/user") ai ja vai ter o localhost:3333