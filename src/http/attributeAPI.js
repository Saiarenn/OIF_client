import {$host, $authHost} from "./index";

export const createAttribute = async (name, description, type, options) => {
    const { data } = await $authHost.post('/api/v1/attribute/admin', {name, description, type, options})
    return data
}

export const fetchAllAttributes = async () => {
    const { data } = await $host.get('/api/v1/attribute')
    return data
}

export const deleteAttribute = async (attributeId) => {
    const { data } = await $authHost.delete(`/api/v1/attribute/admin/${attributeId}`)
    return data
}