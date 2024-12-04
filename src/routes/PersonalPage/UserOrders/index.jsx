import React, {useEffect, useState} from 'react';
import {useNavigate} from "react-router-dom";
import {fetchAllOrders} from "../../../http/orderAPI.js";

export const UserOrders = () => {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(true);
    const [orders, setOrders] = useState(null);

    useEffect(() => {
        fetchAllOrders()
            .then(data => setOrders(data))
            .finally(() => setLoading(false));
    }, [])

    const formatDate = (input) => {
        const date = new Date(input);

        const day = String(date.getDate()).padStart(2, '0');
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const year = date.getFullYear();
        const hours = String(date.getHours()).padStart(2, '0');
        const minutes = String(date.getMinutes()).padStart(2, '0');

        return `${day}.${month}.${year}, ${hours}:${minutes}`;
    }

    const getStatus = (status) => {
        switch (status) {
            case "CREATED":
                return (
                    <div className="text-[#FF5555]">Требуется оплата</div>
                )
            case "CHECKING":
                return (
                    <div className="text-[#FEB63D]">В ожидании</div>
                )
            case "PROCESSING":
                return (
                    <div className="text-[#FEB63D]">Передан сборщику</div>
                )
            case "DELIVERING":
                return (
                    <div className="text-[#5755FF]">Отправлен покупателю</div>
                )
            case "DELIVERED":
                return (
                    <div className="text-[#51CC56]">Доставлен</div>
                )
            case "CANCELLED":
                return (
                    <div className="text-[#FF5555]">Отменен</div>
                )
            case "DECLINED":
                return (
                    <div className="text-[#FF5555]">Неверная оплата</div>
                )
        }
    }

    if (loading) return <div>Loading...</div>

    return (
        <div className="bg-[#EBECEE] h-[calc(100vh-58px)]">
            <div className="bg-white px-6 py-4 flex border-b-[1px] border-[#EBECEE]">
                <button onClick={() => navigate("/personal")}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M13.9998 6L8.70696 11.2929C8.31643 11.6834 8.31643 12.3166 8.70696 12.7071L13.9998 18"
                              stroke="#0E0D35" strokeLinecap="round"/>
                    </svg>
                </button>

                <span className="uppercase w-full text-center">
                    Покупки
                </span>
            </div>

            <div className="flex bg-white border-b-[1px] border-[#EBECEE]">
                <div className="px-4 py-2 uppercase flex gap-2 items-center w-full justify-center">Сортировка
                    <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" fill="none">
                        <path
                            d="M13.7797 6.46667L9.43306 10.8133C8.91973 11.3267 8.07973 11.3267 7.56639 10.8133L3.21973 6.46667"
                            stroke="#292D32" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </div>

                <div className="px-4 py-2 uppercase w-full text-center relative">
                    Фильтр
                    <span
                        className="absolute top-1/2 left-0 transform -translate-x-1/2 -translate-y-1/2 h-[70%] border-l-[1px] border-[#EBECEE]"></span>
                </div>
            </div>

            <div className="flex flex-col mt-[6px] gap-[6px] bg-[]">
                {orders.map(item => (
                    <div key={item.id}
                         className="flex flex-col gap-3 bg-white jusitfy-between p-6 py-[10px] cursor-pointer hover:bg-[#EFEEFF]"
                         onClick={() => {
                             if (!item.check) navigate("/orders/payment/" + item.id)
                         }}
                    >
                        <div className="flex gap-3">
                            {item.products.map(product =>
                                <img
                                    className="w-[42px] h-[44px]"
                                    src={product.image} alt={product.productName}/>
                            )}
                        </div>

                        <div className="flex flex-col gap-1">
                            <div>Заказ №<span className="font-semibold">{item.id}</span></div>
                            <div className="text-[19px] text-[#5755FF] font-semibold">
                                {item.products.reduce((acc, curr) => acc + (curr.price * curr.amount), 0).toLocaleString()} ₸
                            </div>
                            <div className="flex justify-between text-xs">
                                <div className="flex gap-[10px]">
                                    {getStatus(item.orderStatus)}
                                    <div className="">{formatDate(item.updatedAt)}</div>
                                </div>
                                {item.check &&
                                    <div className="text-[#51CC56]">Оплачен клиентом</div>
                                }
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};