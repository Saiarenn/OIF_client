import {$host} from "./index";
import {jwtDecode} from "jwt-decode";

export const registration = async (login, password) => {
    const { data } = await $host.post('/api/v1/auth/signup', {login, password})
    localStorage.setItem('token', data.accessToken)
    return jwtDecode(data.accessToken)
}

export const login = async (login, password) => {
    const { data } = await $host.post('/api/v1/auth/signin', {login, password})
    localStorage.setItem('token', data.accessToken)
    return jwtDecode(data.accessToken)
}

export const verify = async (login, code) => {
    const { data } = await $host.post('/api/v1/auth/verify', {login, code})
    return data;
}

export const sendCode = async (phoneNumber) => {
    const { data } = await $host.post('/api/v1/auth/send-verification-code', {}, {
        params: {
            phoneNumber: phoneNumber
        }
    });
    return data;
};

export const checkPhone = async (number) => {
    const { data } = await $host.get('/api/v1/auth/check', {params: {number: number}})
    return data;
}

export const forgotPassword = async (password, code) => {
    const { data } = await $host.post('/api/v1/auth/forgot-password', {password, code})
    return data;
}

export const sendForgotCode = async (phoneNumber) => {
    const { data } = await $host.post('/api/v1/auth/send-forgot-password-code', {}, {
        params: {
            phoneNumber: phoneNumber
        }
    });
    return data;
};

export const verifyForgot = async (login, code) => {
    const { data } = await $host.post('/api/v1/auth/verify-forgot-password-code', {login, code})
    return data;
}