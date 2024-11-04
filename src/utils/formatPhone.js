export const formatPhone = (phone) => {
    return `${phone.substring(0, 2)} (${phone.substring(2, 5)}) ${phone.substring(5, 8)} ${phone.substring(8, 10)} ${phone.substring(10, 12)}`
}