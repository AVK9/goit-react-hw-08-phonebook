import { api } from "./api"


export const signUpApi = async (body) => {
       console.log('body :>> ', body);
    const { data } = await api.post('/users/signup', body)
     console.log('datasss :>> ', data);
    return data
}

export const loginApi = async (body) => {
 console.log('body :>> ', body);
    const { data } = await api.post('/users/login', body)
    console.log('datasss :>> ', data);
    return data
}
export const refreshApi = async (token) => {
    const { data } = await api('/users/current', {
        headers: {
        Authorization: `Bearer ${token}`,
    }})
    return data
}

export const loginOutApi = async (token) => {
    await api.post('/users/logout', {
        headers: {
        Authorization: `Bearer ${token}`,
    }})
}
