import {$authHost} from "./index.js";

export const addToCart = async (product) => {
    const { data } = await $authHost.post('/api/v1/cart', product)
    return data
}

export const updateAmount = async (id, amount) => {
    const { data } = await $authHost.put(`/api/v1/cart/${id}`, {}, {params: {amount}})
    return data
}

export const deleteCart = async (id) => {
    const { data } = await $authHost.delete(`/api/v1/cart/${id}`)
    return data
}

export const fetchAllCartProducts = async () => {
    const { data } = await $authHost.get('/api/v1/cart')
    return data
}