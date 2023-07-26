import axios from "axios";
import md5 from "md5";

const baseURL = 'http://gateway.marvel.com/v1/public/'
const publicKey = 'be230fcf0e904bcb9d803fdec48303fc'
const privateKey = '85178cbd4619277355f8e9d98948899001a3415f'
const ts = Number(new Date());
const hash = md5(ts + privateKey + publicKey);


const api = axios.create({
    baseURL: baseURL,
    params: {
        ts,
        apikey: publicKey,
        hash,
    },
})

export default api