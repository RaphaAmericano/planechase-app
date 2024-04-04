import axios, { AxiosResponse } from "axios"

const httpService = axios.create({
    timeout: 5000
})

function parseResponse(response: AxiosResponse){ 
    return response.data
}

function handleResponseError(error: any){
    console.error(error)
    return error
}

httpService.interceptors.response.use(parseResponse, handleResponseError)

export default httpService;