import {$authHost, $host} from "./index";

export const fetchAllCategoryPaths = async () => {
    const { data } = await $host.get('/api/v1/path')
    return data
}

export const fetchNextCategoryPaths = async (path) => {
    const { data } = await $host.get('/api/v1/path/next', {params: {path}})
    return data
}

export const fetchCategoryPathByPath = async (path) => {
    const { data } = await $host.get('/api/v1/path/search', {params: {path}})
    return data
}

export const createCategoryPath = async (path) => {
    const { data } = await $authHost.post('/api/v1/path/admin', {path})
    return data
}

export const changeCategoryPathAttributes = async (pathId, attributeIds) => {
    const { data } = await $authHost.post(`/api/v1/path/admin/${pathId}?attributeIds=${attributeIds}`)
    return data
}

export const changeCategoryPathImage = async (id, formData) => {
    const { data } = await $authHost.put(`/api/v1/path/admin/${id}/image`, formData, {
        headers: {
            'Content-Type': 'multipart/form-data',
        },
    });
    return data;
};