import axios from "axios" // npm install axios (trabalha com requisições HTTP (get, post...))

export const api = axios.create({
    baseURL: "https://rocketmotes-api.onrender.com"  //! prod
    //baseURL: "http://localhost:3333"  //* dev
})