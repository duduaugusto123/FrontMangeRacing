import axios, {type AxiosResponse} from "axios";

export const BaseUrl = `http://localhost:3000/`
export const getAxios = ()=> {
    const createdAxios = axios.create({
        baseURL: `http://localhost:3000/`, //"/proxy-api/api", //`${BASE_URL}/api`,
        timeout: 40000, //40 segundos
    });

    //createdAxios.interceptors.request.use()
    createdAxios.interceptors.response.use(getAxiosResponse);
    
    return createdAxios;
}

export const getAxiosResponse = (response: AxiosResponse) =>{
    return response.data;
}