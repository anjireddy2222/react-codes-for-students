import axios  from "axios";


let customAxios = axios.create({})

customAxios.interceptors.request.use( config => {
   
    config.data.token = localStorage.getItem("token")
    config.headers.Authorization =  localStorage.getItem("token")
    
    return config

})

export default customAxios

