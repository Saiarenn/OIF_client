import {$authHost, $host} from "./index";

export const createCategory = async (name, categoryPathId) => {
    const { data } = await $authHost.post('/api/v1/category/admin', {name, categoryPathId})
    return data
}

export const fetchCategoryByPath = async (path) => {
    const { data } = await $host.get('/api/v1/category/search', {params: {path}})
    return data
}

export const fetchAllCategories = async () => {
    const { data } = await $host.get('/api/v1/category')
    return data
}