import {$host} from "./index";

export const fetchAllMarkets = async () => {
    const { data } = await $host.get('/api/v1/market')
    return data
}