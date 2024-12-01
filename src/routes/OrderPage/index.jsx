import React, {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import {Swiper, SwiperSlide} from "swiper/react";

export const OrderPage = () => {
    const navigate = useNavigate();
    const [order, setOrder] = useState([]);

    return (
        <>
            <div className="bg-white px-6 py-4 flex border-b-[1px] border-[#EBECEE]">
                <button onClick={() => navigate("/orders")}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M13.9998 6L8.70696 11.2929C8.31643 11.6834 8.31643 12.3166 8.70696 12.7071L13.9998 18"
                              stroke="#0E0D35" strokeLinecap="round"/>
                    </svg>
                </button>

                <span className="uppercase w-full text-center">
                    страница заказа
                </span>

                <button>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M11.9999 13.43C13.723 13.43 15.1199 12.0331 15.1199 10.31C15.1199 8.58687 13.723 7.19 11.9999 7.19C10.2768 7.19 8.87988 8.58687 8.87988 10.31C8.87988 12.0331 10.2768 13.43 11.9999 13.43Z" stroke="#0E0D35"/>
                        <path d="M3.61971 8.49C5.58971 -0.169998 18.4197 -0.159997 20.3797 8.5C21.5297 13.58 18.3697 17.88 15.5997 20.54C13.5897 22.48 10.4097 22.48 8.38971 20.54C5.62971 17.88 2.46971 13.57 3.61971 8.49Z" stroke="#0E0D35"/>
                    </svg>
                </button>
            </div>

            <div className="flex flex-col">
                <div className="flex flex-col gap-4 p-6">
                    <div className="flex justify-between text-[19px]">
                        <span>Товары, <span className="font-bold">10</span> шт.</span>
                        <span className="text-[#5755FF] font-bold">2000 ₸</span>
                    </div>
                    <div className="">
                        <Swiper
                            spaceBetween={6}
                            slidesPerView="auto"
                            freeMode={true}
                            className="flex items-center"
                        >
                            {Array.from({length: 10}).map((_, index) => (
                                <SwiperSlide key={index} className="!w-[43px]">
                                    <img
                                        className={`w-[43px] h-[56px] cursor-pointer object-cover object-center`}
                                        src={"https://fastly.picsum.photos/id/16/200/300.jpg?hmac=k64O1qCMBhaU0Ep_qML5_xDxqLVR1MhNm8VMqgdAsxA"}
                                        alt={"v.images[0].url"}
                                    />
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>

                <div className="flex flex-col gap-[14px] px-6 py-4">
                    <div className="flex justify-between text-[19px]">
                        <span>Город</span>
                    </div>
                    <div className="flex justify-between">
                        <span>Алматы</span>
                        <span className="text-[#5755FF] cursor-pointer"
                        >Изменить</span>
                    </div>
                </div>

                <div className="flex flex-col gap-[14px] px-6 py-4">
                    <div className="flex justify-between text-[19px]">
                        <span>Индекс</span>
                    </div>
                    <div className="flex justify-between">
                        <span className="font-bold">050000</span>
                        <span className="text-[#5755FF] cursor-pointer"
                        >Изменить</span>
                    </div>
                </div>

                <div className="flex flex-col gap-[14px] px-6 py-4">
                    <div className="flex justify-between text-[19px]">
                        <span>Мои данные</span>
                    </div>
                    <div className="flex justify-between">
                        <span>Имя Фамилия</span>
                        <span className="text-[#5755FF] cursor-pointer"
                        >Изменить</span>
                    </div>
                </div>
            </div>

            <div style={{height: "88px"}}></div>

            <div className="bg-white fixed p-4 w-full bottom-[58px] rounded-t-xl shadow-[3px_0px_36px_0px_rgba(0,0,0,0.10)]">
                <button className="p-4 bg-[#5755FF] text-white w-full rounded-2xl"
                        onClick={() => navigate("payment")}>
                    Продолжить
                </button>
            </div>
        </>
    )
}