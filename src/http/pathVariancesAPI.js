import {$host, $authHost} from "./index";

export const fetchAllPathVariances = async () => {
    const { data } = await $host.put("/api/v1/path-variance")
    return data
}

export const fetchPathVarianceById = async (id) => {
    const { data } = await $host.get(`/api/v1/path-variance/${id}`)
    return data
}

export const fetchPathVarianceByPathId = async (pathId) => {
    const { data } = await $host.get(`/api/v1/path-variance/path/${pathId}`)
    return data
}

export const createPathVariance = async (name, color, categoryPathId) => {
    const { data } = await $authHost.post(`/api/v1/path-variance/admin`, {name, color, categoryPathId})
    return data
}

export const updatePathVariance = async (pathVariance) => {
    const { data } = await $authHost.put(`/api/v1/path-variance/admin/${pathVariance.id}`, pathVariance)
    return data
}

export const deletePathVariance = async (id) => {
    const { data } = await $authHost.delete(`/api/v1/path-variance/admin/${id}`)
    return data
}

export const changePathVarianceAttributes = async (varianceId , attributeIds) => {
    const { data } = await $authHost.post(`/api/v1/path-variance/admin/${varianceId}?attributeIds=${attributeIds}`)
    return data
}