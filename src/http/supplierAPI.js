import {$authHost} from "./index";

export const supplierRegister = async (marketId, place, row) => {
    const { data } = await $authHost.post('/api/v1/supplier/register', {marketId, place, row})
    return data
}

export const changeSupplierCategory = async (categoryIds) => {
    const { data } = await $authHost.post(`/api/v1/supplier/change-categories?categoryIds=${categoryIds}`)
    return data
}

export const fetchSupplierCategory = async () => {
    const { data } = await $authHost.get(`/api/v1/supplier/category`)
    return data
}