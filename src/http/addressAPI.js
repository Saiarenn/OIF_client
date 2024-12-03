import {$authHost} from "./index.js";

export const createAddress = async (address) => {
    const { data } = await $authHost.post('/api/v1/client/address', address)
    return data
}

export const deleteAddress = async (id) => {
    const { data } = await $authHost.delete(`/api/v1/client/address/${id}`)
    return data
}

export const fetchAllAddresses = async () => {
    const { data } = await $authHost.get('/api/v1/client/address')
    return data
}