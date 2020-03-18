import axios from 'axios'
const $http = axios.create({
    timeout: 10000,
    headers: {
        'Accept': 'application/json, text/plain, */*; charset=utf-8',
        'Content-Type': 'application/json; charset=utf-8',
        'Pragma': 'no-cache',
        'Cache-Control': 'no-cache'
    }
})
$http.interceptors.request.use(config=>{
    config.url = `/api${config.url}`;
},error => {
    return Promise.reject(error)
})

export default $http;