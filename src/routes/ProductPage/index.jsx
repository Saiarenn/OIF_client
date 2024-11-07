import React, {useEffect, useMemo, useState} from 'react';
import {useNavigate, useParams} from "react-router-dom";
import {
    fetchProductById,
    fetchProductVariances,
} from "../../http/productAPI";
import {fetchPathVarianceById} from "../../http/pathVariancesAPI";
import {Swiper, SwiperSlide} from "swiper/react";
import {Pagination} from "swiper/modules";

import 'swiper/css';
import 'swiper/css/pagination';
import {message} from "antd";

export const ProductPage = () => {
    const navigate = useNavigate();
    const {id} = useParams();
    const [product, setProduct] = useState({});
    const [variances, setVariances] = useState([]);
    const [loading, setLoading] = useState(false);

    const [selectedVariance, setSelectedVariance] = useState(0);

    const handleSelectVariance = (index) => {
        setSelectedVariance(index);
    };

    const images = [
        {id: 1, url: "https://fastly.picsum.photos/id/16/200/300.jpg?hmac=k64O1qCMBhaU0Ep_qML5_xDxqLVR1MhNm8VMqgdAsxA"},
        {
            id: 2,
            url: "https://fastly.picsum.photos/id/866/200/300.jpg?hmac=rcadCENKh4rD6MAp6V_ma-AyWv641M4iiOpe1RyFHeI"
        },
        {
            id: 3,
            url: "https://fastly.picsum.photos/id/512/200/300.jpg?hmac=la5xkVbvHxjdyuCGyQl9H0Hhom_c8BN-5heSmUIPUzE"
        },
        {id: 4, url: "https://fastly.picsum.photos/id/16/200/300.jpg?hmac=k64O1qCMBhaU0Ep_qML5_xDxqLVR1MhNm8VMqgdAsxA"},
        {
            id: 5,
            url: "https://fastly.picsum.photos/id/866/200/300.jpg?hmac=rcadCENKh4rD6MAp6V_ma-AyWv641M4iiOpe1RyFHeI"
        },
    ];

    const fetchData = async () => {
        try {
            setLoading(true);
            await fetchProductVariances(id).then(data => {
                setVariances([]);
                data.map(variances =>
                    fetchPathVarianceById(variances.pathVarianceId).then(pathVariance => setVariances(prev => [...prev, {
                        ...variances,
                        name: pathVariance.name,
                        color: pathVariance.color
                    }]))
                )
            });
            await fetchProductById(id).then(data => setProduct(data));
        } catch (e) {
            message.error(e);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchData();
    }, [id])

    const [isExpanded, setIsExpanded] = useState(false);

    const toggleExpanded = () => setIsExpanded(!isExpanded);

    const [multipleAttributes, setMultipleAttributes] = useState([]);
    const [otherAttributes, setOtherAttributes] = useState([]);
    const [selectedValues, setSelectedValues] = useState({});

    const handleSelectValue = (propId, value) => {
        setSelectedValues((prev) => ({
            ...prev,
            [propId]: prev[propId] === value ? null : value,
        }));
    };

    useEffect(() => {
        if (variances[selectedVariance]?.attributes) {
            const newMultipleAttributes = variances[selectedVariance].attributes.filter(
                (attr) => attr.attribute.type === "MULTIPLE"
            );
            const newOtherAttributes = variances[selectedVariance].attributes.filter(
                (attr) => attr.attribute.type !== "MULTIPLE"
            );

            setMultipleAttributes(newMultipleAttributes);
            setOtherAttributes(newOtherAttributes);
        }
    }, [variances, selectedVariance]);

    if (loading) return <div>Loading...</div>

    return (
        <div className="text-[#0E0D35] bg-[#EBECEE]">
            <div className="bg-white px-6 py-4 flex border-b-[1px] border-[#EBECEE]">
                <button onClick={() => navigate(`/category`)} className="mr-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M13.9998 6L8.70696 11.2929C8.31643 11.6834 8.31643 12.3166 8.70696 12.7071L13.9998 18"
                              stroke="#0E0D35" strokeLinecap="round"/>
                    </svg>
                </button>
                <span className="uppercase w-full text-center">
                    {product.name || "Название товара"}
                </span>

                <button>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path
                            d="M3.5 16C3.5 15.7239 3.27614 15.5 3 15.5C2.72386 15.5 2.5 15.7239 2.5 16H3.5ZM21.5 16C21.5 15.7239 21.2761 15.5 21 15.5C20.7239 15.5 20.5 15.7239 20.5 16H21.5ZM19.362 20.673L19.135 20.2275L19.362 20.673ZM20.673 19.362L21.1185 19.589L20.673 19.362ZM3.32698 19.362L2.88148 19.589L3.32698 19.362ZM4.63803 20.673L4.41103 21.1185H4.41103L4.63803 20.673ZM11.5 16C11.5 16.2761 11.7239 16.5 12 16.5C12.2761 16.5 12.5 16.2761 12.5 16H11.5ZM20 8.5C20.2761 8.5 20.5 8.27614 20.5 8C20.5 7.72386 20.2761 7.5 20 7.5V8.5ZM17.3536 3.64645C17.1583 3.45118 16.8417 3.45118 16.6464 3.64645C16.4512 3.84171 16.4512 4.15829 16.6464 4.35355L17.3536 3.64645ZM20.2929 7.29289L19.9393 7.64645L20.2929 7.29289ZM20.2929 8.70711L19.9393 8.35355V8.35355L20.2929 8.70711ZM16.6464 11.6464C16.4512 11.8417 16.4512 12.1583 16.6464 12.3536C16.8417 12.5488 17.1583 12.5488 17.3536 12.3536L16.6464 11.6464ZM2.5 16V16.2H3.5V16H2.5ZM7.8 21.5H16.2V20.5H7.8V21.5ZM21.5 16.2V16H20.5V16.2H21.5ZM16.2 21.5C17.0318 21.5 17.6858 21.5004 18.2111 21.4575C18.7423 21.4141 19.1859 21.3239 19.589 21.1185L19.135 20.2275C18.8963 20.3491 18.599 20.4224 18.1297 20.4608C17.6545 20.4996 17.0483 20.5 16.2 20.5V21.5ZM20.5 16.2C20.5 17.0483 20.4996 17.6545 20.4608 18.1297C20.4224 18.599 20.3491 18.8963 20.2275 19.135L21.1185 19.589C21.3239 19.1859 21.4141 18.7423 21.4575 18.2111C21.5004 17.6858 21.5 17.0318 21.5 16.2H20.5ZM19.589 21.1185C20.2475 20.783 20.783 20.2475 21.1185 19.589L20.2275 19.135C19.9878 19.6054 19.6054 19.9878 19.135 20.2275L19.589 21.1185ZM2.5 16.2C2.5 17.0318 2.49961 17.6858 2.54253 18.2111C2.58593 18.7423 2.67609 19.1859 2.88148 19.589L3.77248 19.135C3.65089 18.8963 3.57756 18.599 3.53921 18.1297C3.50039 17.6545 3.5 17.0483 3.5 16.2H2.5ZM7.8 20.5C6.95167 20.5 6.34549 20.4996 5.87032 20.4608C5.40099 20.4224 5.10366 20.3491 4.86502 20.2275L4.41103 21.1185C4.81413 21.3239 5.25771 21.4141 5.78889 21.4575C6.31423 21.5004 6.96817 21.5 7.8 21.5V20.5ZM2.88148 19.589C3.21703 20.2475 3.75247 20.783 4.41103 21.1185L4.86502 20.2275C4.39462 19.9878 4.01217 19.6054 3.77248 19.135L2.88148 19.589ZM12.5 16V11H11.5V16H12.5ZM15 8.5H20V7.5H15V8.5ZM12.5 11C12.5 9.61929 13.6193 8.5 15 8.5V7.5C13.067 7.5 11.5 9.067 11.5 11H12.5ZM16.6464 4.35355L19.9393 7.64645L20.6464 6.93934L17.3536 3.64645L16.6464 4.35355ZM19.9393 8.35355L16.6464 11.6464L17.3536 12.3536L20.6464 9.06066L19.9393 8.35355ZM19.9393 7.64645C20.1346 7.84171 20.1346 8.15829 19.9393 8.35355L20.6464 9.06066C21.2322 8.47487 21.2322 7.52513 20.6464 6.93934L19.9393 7.64645Z"
                            fill="#0E0D35"/>
                    </svg>
                </button>
            </div>

            <div className="bg-white flex justify-center">
                <div className="relative w-full h-[430px]">
                    <Swiper
                        modules={[Pagination]}
                        pagination={{clickable: true,}}
                        spaceBetween={5}
                        slidesPerView={1}
                        className="w-full h-full"
                        style={{
                            "--swiper-pagination-color": "white",
                            "--swiper-pagination-bullet-inactive-color": "white",
                            "--swiper-pagination-bullet-inactive-opacity": "0.5",
                        }}
                    >
                        {/*{variances[selectedVariance]?.images?.map(image => (*/}
                        {images.map(image => (
                            <SwiperSlide key={image.id}>
                                <img src={image.url} alt={product.name} className="w-full h-[430px] object-cover"/>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>

            <div className="bg-white flex justify-around items-center px-6 py-4">
                <div className="flex flex-col gap-2 items-center cursor-pointer">
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
                        <path
                            d="M9.46173 18.9109L9.77127 18.5182L9.46173 18.9109ZM12.5 5.50063L12.1398 5.84737C12.234 5.9453 12.3641 6.00063 12.5 6.00063C12.6359 6.00063 12.766 5.9453 12.8602 5.84737L12.5 5.50063ZM15.5383 18.9109L15.8478 19.3035L15.5383 18.9109ZM9.77127 18.5182C8.27045 17.3351 6.58543 16.148 5.25136 14.6458C3.93443 13.1629 3 11.4125 3 9.1371H2C2 11.7246 3.07528 13.7014 4.50365 15.3098C5.91487 16.8989 7.71071 18.1672 9.15219 19.3035L9.77127 18.5182ZM3 9.1371C3 6.8927 4.26859 4.99759 6.02043 4.19682C7.74074 3.41046 10.0178 3.64273 12.1398 5.84737L12.8602 5.1539C10.4824 2.68336 7.75942 2.3024 5.6047 3.28733C3.48149 4.25786 2 6.51856 2 9.1371H3ZM9.15219 19.3035C9.66673 19.7092 10.2032 20.1286 10.743 20.4441C11.2826 20.7594 11.8731 21 12.5 21V20C12.1269 20 11.7174 19.8553 11.2475 19.5807C10.7777 19.3062 10.295 18.9311 9.77127 18.5182L9.15219 19.3035ZM15.8478 19.3035C17.2893 18.1672 19.0851 16.8989 20.4964 15.3098C21.9247 13.7014 23 11.7246 23 9.1371H22C22 11.4125 21.0656 13.1629 19.7486 14.6458C18.4146 16.148 16.7295 17.3351 15.2287 18.5182L15.8478 19.3035ZM23 9.1371C23 6.51856 21.5185 4.25786 19.3953 3.28733C17.2406 2.3024 14.5176 2.68336 12.1398 5.1539L12.8602 5.84737C14.9822 3.64273 17.2593 3.41046 18.9796 4.19682C20.7314 4.99759 22 6.8927 22 9.1371H23ZM15.2287 18.5182C14.705 18.9311 14.2223 19.3062 13.7525 19.5807C13.2826 19.8553 12.8731 20 12.5 20V21C13.1269 21 13.7174 20.7594 14.257 20.4441C14.7968 20.1286 15.3333 19.7092 15.8478 19.3035L15.2287 18.5182Z"
                            fill="#0E0D35"/>
                    </svg>
                    <div className="text-sm uppercase">Сохранить</div>
                </div>

                <div className="flex flex-col gap-2 items-center cursor-pointer">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path
                            d="M8.66639 7.21429C8.66639 5.43908 10.1588 4 11.9997 4C13.8407 4 15.3331 5.43908 15.3331 7.21429C15.3331 8.46241 14.5953 9.54439 13.5174 10.0769C12.7393 10.4612 11.9997 11.1321 11.9997 12M11.9997 12L20.7003 18.0904C21.1008 18.3707 20.9024 19 20.4135 19H3.5859C3.09705 19 2.89869 18.3707 3.29917 18.0904L11.9997 12Z"
                            stroke="#9F9EAE" strokeLinecap="round"/>
                    </svg>
                    <div className="text-sm uppercase text-[#9F9EAE]">Купить образ</div>
                </div>

                <div className="flex flex-col gap-2 items-center cursor-pointer">
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
                        <path
                            d="M7.5 17.9383V6.06179C7.5 4.40244 9.40418 3.46482 10.7194 4.47654L18.4392 10.4148C19.4799 11.2154 19.4799 12.7847 18.4392 13.5853L10.7194 19.5236C9.40418 20.5353 7.5 19.5977 7.5 17.9383Z"
                            stroke="#0E0D35" strokeLinecap="round"/>
                    </svg>
                    <div className="text-sm uppercase">видео</div>
                </div>
            </div>

            <div className="bg-white flex justify-between items-center border-[1px] border-[#EBECEE] px-6 py-4">
                <div className="text-[#6949FF] text-[23px] font-semibold">
                    {product.price} ₸
                </div>
                <div className="text-sm text-gray-500">Артикул: {product.id}</div>
            </div>

            <div className="bg-white mt-[6px] px-6 py-4 ">
                <div className="text-[19px]">
                    {variances[selectedVariance]?.name}
                </div>

                <div className="py-6 pb-4">
                    <Swiper
                        spaceBetween={10}
                        slidesPerView="auto"
                        freeMode={true}
                        className="flex items-center"
                    >
                        {variances.map((v, index) => (
                            <SwiperSlide key={v.id} className="!w-[108px]">
                                <img
                                    className={`rounded-[5px] w-[108px] h-[170px] cursor-pointer object-cover object-center
                        ${index === selectedVariance ? "border-[1px] border-[#5755FF]" : ""}`}
                                    onClick={() => handleSelectVariance(index)}
                                    src={v.images[0].url}
                                    alt={v.images[0].url}
                                />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>

            </div>

            {multipleAttributes?.map((prop) => (
                <div key={prop.id} className="bg-white mt-[6px] px-6 py-4 flex flex-col gap-[14px]">
                    <div className="text-[19px]">
                        {prop.attribute.name}
                    </div>

                    <div className="flex gap-4">
                        {JSON.parse(prop.value).sort().map((value) => (
                            <div
                                key={value}
                                onClick={() => handleSelectValue(prop.id, value)}
                                className={`w-8 h-8 p-[6px] flex items-center justify-center border-[1px] rounded cursor-pointer ${
                                    selectedValues[prop.id] === value ? "border-[#5755FF]" : "border-[#00000080]"
                                }`}
                            >
                                {value}
                            </div>
                        ))}
                    </div>
                </div>
            ))}

            <div className="bg-white mt-[6px] px-6 py-4">
                <div className="text-[19px]">
                    Описание
                </div>

                <div className={`mt-[14px] ${isExpanded ? "" : "line-clamp-1"}`}>
                    {product.description}
                </div>

                <div
                    className="mt-2 text-[#5B93FF] cursor-pointer"
                    onClick={toggleExpanded}
                >
                    {isExpanded ? "Скрыть" : "Показать полностью"}
                </div>
            </div>

            <div className="bg-white mt-[6px] px-6 py-4">
                <div className="text-[19px]">
                    Характеристики
                </div>

                <div className="text-gray-400">
                    {otherAttributes?.map(prop => (
                        <div key={prop.id} className="flex w-3/4 py-1 gap-2">
                            <div className="flex w-4/5 gap-2">
                                <span
                                    className="relative text-gray-700 whitespace-nowrap opacity-60">{prop.attribute.name}</span>
                                <div
                                    className="flex-grow h-full w-24 border-b border-dotted border-gray-400 translate-y-[-30%]"></div>
                            </div>
                            <div className="flex w-1/5 text-black">{prop.value}</div>
                        </div>
                    ))}
                </div>

                {/*<div className="mt-2 text-[#5B93FF] cursor-pointer">*/}
                {/*    Показать польностью*/}
                {/*</div>*/}
            </div>
        </div>
    );
};
