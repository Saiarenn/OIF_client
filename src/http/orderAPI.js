import {$authHost} from "./index.js";

export const createOrder = async (order) => {
    const { data } = await $authHost.post('/api/v1/order/client', order)
    return data
}

export const attachReceipt = async (id, formData) => {
    const { data } = await $authHost.put(`/api/v1/order/client/${id}`, formData, {
        headers: {
            'Content-Type': 'multipart/form-data',
        },
    });
    return data
}

export const deleteOrder = async (id) => {
    const { data } = await $authHost.delete(`/api/v1/order/client/${id}`)
    return data
}

export const fetchAllOrders = async () => {
    const { data } = await $authHost.get('/api/v1/order/client')
    return data
}

export const fetchOrderById = async (id) => {
    const { data } = await $authHost.get(`/api/v1/order/client/${id}`)
    return data
}