import {$host, $authHost} from "./index";

export const updateProduct = async (id, product) => {
    const { data } = await $authHost.put(`/api/v1/product/supplier/${id}`, product)
    return data
}

export const createProduct = async (product) => {
    const { data } = await $authHost.post("/api/v1/product/supplier", product)
    return data
}

export const fetchAllModeratedProducts = async () => {
    const { data } = await $host.get(`/api/v1/product`)
    return data
}

export const fetchProductById = async (id) => {
    const { data } = await $host.get(`/api/v1/product/${id}`)
    return data
}

export const fetchProductVariances = async (id) => {
    const { data } = await $host.get(`/api/v1/product/${id}/variance`)
    return data
}

export const fetchProductVarianceById = async (productVarianceId) => {
    const { data } = await $host.get(`/api/v1/product/variance/${productVarianceId}`)
    return data
}

export const fetchProductsByStatus = async (status) => {
    const { data } = await $authHost.get(`/api/v1/product/admin`, {params: {status}})
    return data
}

export const fetchSupplierProductsByStatus = async (status) => {
    const { data } = await $authHost.get(`/api/v1/product/supplier`, {params: {status}})
    return data
}

export const uploadProductImage = async (formData) => {
    const { data } = await $authHost.post(`/api/v1/product/supplier/upload-image`, formData, {
        headers: {
            'Content-Type': 'multipart/form-data',
        },
    });
    return data;
};

export const deleteProductImage = async (url) => {
    const { data } = await $authHost.delete(`/api/v1/product/supplier/delete-image`, {params: {url}})
    return data
}

export const deleteProductImageById = async (id) => {
    const { data } = await $authHost.delete(`/api/v1/product/supplier/delete-image/${id}`)
    return data
}

export const moderateProduct = async (productModerationId, reason, productStatus) => {
    const { data } = await $authHost.post(`/api/v1/product/admin/moderation/${productModerationId}`, {reason, productStatus})
    return data
}

export const requestModerateRejectedProduct = async (productId) => {
    const { data } = await $authHost.post(`/api/v1/product/supplier/moderation/${productId}`)
    return data
}

export const fetchProductModerationRequests = async (productId) => {
    const { data } = await $authHost.get(`/api/v1/product/admin/moderation/requests/${productId}`)
    return data
}

export const fetchProductForClientById = async (id) => {
    const { data } = await $host.get(`/api/v1/product/client/${id}`)
    return data
}

export const fetchProductsForClientByPath = async (path ) => {
    const { data } = await $host.get(`/api/v1/product/client`, {params: {path}})
    return data
}