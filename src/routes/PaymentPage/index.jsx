import React, {useEffect, useState} from "react";
import {message} from "antd";
import {attachReceipt, fetchOrderById} from "../../http/orderAPI.js";
import {useNavigate, useParams} from "react-router-dom";

export const PaymentPage = () => {
    const [file, setFile] = useState(null);
    const [order, setOrder] = useState(null);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();
    const {id} = useParams();
    const handleFileUpload = (event) => {
        const uploadedFile = event.target.files[0];
        if (uploadedFile && uploadedFile.type === "application/pdf") {
            setFile(uploadedFile);
        } else {
            message.info("Загрузите чек в формате PDF.");
        }
    };

    useEffect(() => {
        fetchOrderById(id).then(data => setOrder(data))
            .finally(() => setLoading(false))
    }, [])

    const uploadReceipt = async () => {
        const formData = new FormData();
        formData.append("check", file);
        await attachReceipt(id, formData).then(() => navigate("success"))
    }

    const total = order.products.reduce((acc, curr) => acc + (curr.price * curr.amount), 0);

    if (loading) return <div>Loading...</div>

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
                    способы оплаты
                </span>
            </div>

            <div className="flex flex-col">
                <div className="flex flex-col px-6 py-4">
                    <div className="bg-[#51CC562B] px-6 py-[11px] rounded-[7px]"
                    >
                        Переведите на номер <span className="text-[#5755FF] font-semibold"
                            >{"+7 777 777 77 77 "}</span>
                            <span className="text-[#FF5555] font-semibold">{`${total} ₸ `}</span>
                        Ожидайте подтверждение заказа с уведомлением в сообщениях
                        <br/>
                        <br/>
                        После подтверждения ваш заказ будет отпрвален вам
                    </div>
                </div>

                {file ?
                    <div className="flex px-6 py-3">
                        <div className="flex w-full justify-between bg-[#EFEEFF] px-6 py-[11px] rounded-[7px]">
                            <div className="flex items-center gap-[10px] w-3/4">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 20 21"
                                     fill="none">
                                    <path
                                        d="M12.4997 7.16663L9.28315 10.4077C9.16111 10.5307 8.96324 10.5307 8.8412 10.4077L7.49967 9.05595M4.99967 2.16663H14.9997C15.9201 2.16663 16.6663 2.91282 16.6663 3.83329V16.1366C16.6663 17.3755 15.3625 18.1814 14.2543 17.6273L14.0784 17.5393C13.6092 17.3047 13.0569 17.3047 12.5877 17.5393L10.745 18.4606C10.2758 18.6952 9.72353 18.6952 9.25432 18.4606L7.4117 17.5393C6.94248 17.3047 6.3902 17.3047 5.92099 17.5393L5.74503 17.6273C4.63686 18.1814 3.33301 17.3755 3.33301 16.1366V3.83329C3.33301 2.91282 4.0792 2.16663 4.99967 2.16663Z"
                                        stroke="#6E6E86" strokeLinecap="round"/>
                                </svg>
                                <div
                                    className="overflow-hidden whitespace-nowrap text-ellipsis max-w-[100%]">{file.name}</div>
                            </div>
                            <label className="text-[#5755FF] cursor-pointer">
                                Изменить
                                <input
                                    type="file"
                                    accept="application/pdf"
                                    onChange={handleFileUpload}
                                    className="hidden"
                                />
                            </label>
                        </div>
                    </div>
                    :
                    <div className="flex px-6 py-3">
                        <div className="flex w-full justify-between bg-[#F4F6F9] px-6 py-[11px] rounded-[7px]">
                            <div className="flex items-center gap-[10px]">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 20 21"
                                     fill="none">
                                    <path
                                        d="M12.4997 7.16663L9.28315 10.4077C9.16111 10.5307 8.96324 10.5307 8.8412 10.4077L7.49967 9.05595M4.99967 2.16663H14.9997C15.9201 2.16663 16.6663 2.91282 16.6663 3.83329V16.1366C16.6663 17.3755 15.3625 18.1814 14.2543 17.6273L14.0784 17.5393C13.6092 17.3047 13.0569 17.3047 12.5877 17.5393L10.745 18.4606C10.2758 18.6952 9.72353 18.6952 9.25432 18.4606L7.4117 17.5393C6.94248 17.3047 6.3902 17.3047 5.92099 17.5393L5.74503 17.6273C4.63686 18.1814 3.33301 17.3755 3.33301 16.1366V3.83329C3.33301 2.91282 4.0792 2.16663 4.99967 2.16663Z"
                                        stroke="#6E6E86" strokeLinecap="round"/>
                                </svg>
                                <span>Загрузите чек</span>
                            </div>
                            <label className="text-[#5755FF] cursor-pointer">
                                Загрузить
                                <input
                                    type="file"
                                    accept="application/pdf"
                                    onChange={handleFileUpload}
                                    className="hidden"
                                />
                            </label>
                        </div>
                    </div>
                }
            </div>

            <div
                className="bg-white flex flex-col gap-4 fixed p-4 w-full bottom-[58px] rounded-t-xl shadow-[3px_0px_36px_0px_rgba(0,0,0,0.10)]">
                <div className="flex justify-between items-center">
                    <span className="text-sm">{order.products.length} товаров</span>
                    <span
                        className="text-[19px] text-[#5755FF] font-semibold">
                        {total} ₸
                    </span>
                </div>
                <div className="flex justify-between p-6 py-[11px] rounded-[7px] bg-[#F4F6F9]">
                    <div className="flex items-center gap-[10px]">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 20 21" fill="none">
                            <path
                                d="M1.66699 9.66663C1.66699 7.3096 1.66699 6.13109 2.39923 5.39886C3.13146 4.66663 4.30997 4.66663 6.66699 4.66663H10.8337C13.1907 4.66663 14.3692 4.66663 15.1014 5.39886C15.8337 6.13109 15.8337 7.3096 15.8337 9.66663C15.8337 12.0236 15.8337 13.2022 15.1014 13.9344C14.3692 14.6666 13.1907 14.6666 10.8337 14.6666H6.66699C4.30997 14.6666 3.13146 14.6666 2.39923 13.9344C1.66699 13.2022 1.66699 12.0236 1.66699 9.66663Z"
                                stroke="#1C274C"/>
                            <path
                                d="M15.8337 7.2301C16.6463 7.31003 17.1932 7.49066 17.6015 7.8989C18.3337 8.63114 18.3337 9.80965 18.3337 12.1667C18.3337 14.5237 18.3337 15.7022 17.6015 16.4344C16.8692 17.1667 15.6907 17.1667 13.3337 17.1667H9.16704C6.81002 17.1667 5.63151 17.1667 4.89927 16.4344C4.49103 16.0262 4.31039 15.4792 4.23047 14.6666"
                                stroke="#1C274C"/>
                            <path
                                d="M10.8337 9.66671C10.8337 10.8173 9.90092 11.75 8.75033 11.75C7.59973 11.75 6.66699 10.8173 6.66699 9.66671C6.66699 8.51611 7.59973 7.58337 8.75033 7.58337C9.90092 7.58337 10.8337 8.51611 10.8337 9.66671Z"
                                stroke="#1C274C"/>
                            <path d="M13.333 11.3334L13.333 8.00004" stroke="#1C274C" strokeLinecap="round"/>
                            <path d="M4.16699 11.3334L4.16699 8.00004" stroke="#1C274C" strokeLinecap="round"/>
                        </svg>
                        <span>{total} ₸</span>
                    </div>
                    <div className="flex items-center gap-1 cursor-pointer"
                         onClick={() => {
                             navigator.clipboard.writeText(total);
                             message.success("Цена скопирована");
                         }}
                    >
                        <span className="text-[#5755FF]">Скопировать</span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" fill="none">
                            <path
                                d="M11.9007 12.75C12.6941 12.75 13.0908 12.75 13.3938 12.5956C13.6604 12.4597 13.8771 12.243 14.0129 11.9764C14.1673 11.6734 14.1673 11.2767 14.1673 10.4833V3.68329C14.1673 2.88989 14.1673 2.49318 14.0129 2.19014C13.8771 1.92358 13.6604 1.70685 13.3938 1.57103C13.0908 1.41663 12.6941 1.41663 11.9007 1.41663H7.93398C7.14058 1.41663 6.74387 1.41663 6.44083 1.57103C6.17427 1.70685 5.95755 1.92358 5.82173 2.19014C5.66732 2.49318 5.66732 2.88988 5.66732 3.68329M5.10065 15.5833H9.06732C9.86073 15.5833 10.2574 15.5833 10.5605 15.4289C10.827 15.2931 11.0438 15.0763 11.1796 14.8098C11.334 14.5067 11.334 14.11 11.334 13.3166V6.51663C11.334 5.72322 11.334 5.32651 11.1796 5.02347C11.0438 4.75691 10.827 4.54019 10.5605 4.40437C10.2574 4.24996 9.86073 4.24996 9.06732 4.24996H5.10065C4.30724 4.24996 3.91054 4.24996 3.6075 4.40437C3.34093 4.54019 3.12421 4.75691 2.98839 5.02347C2.83398 5.32651 2.83398 5.72322 2.83398 6.51663V13.3166C2.83398 14.11 2.83398 14.5067 2.98839 14.8098C3.12421 15.0763 3.34093 15.2931 3.6075 15.4289C3.91054 15.5833 4.30724 15.5833 5.10065 15.5833Z"
                                stroke="#5755FF" strokeWidth="0.85"/>
                        </svg>
                    </div>
                </div>

                <div className="flex justify-between p-6 py-[11px] rounded-[7px] bg-[#F4F6F9]">
                    <div className="flex items-center gap-[10px]">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 20 21" fill="none">
                            <path
                                d="M18.3087 15.775C18.3087 16.075 18.242 16.3833 18.1003 16.6833C17.9587 16.9833 17.7753 17.2666 17.5337 17.5333C17.1253 17.9833 16.6753 18.3083 16.167 18.5166C15.667 18.725 15.1253 18.8333 14.542 18.8333C13.692 18.8333 12.7837 18.6333 11.8253 18.225C10.867 17.8166 9.90866 17.2666 8.95866 16.575C8.00033 15.875 7.09199 15.1 6.22533 14.2416C5.36699 13.375 4.59199 12.4666 3.90033 11.5166C3.21699 10.5666 2.66699 9.61663 2.26699 8.67496C1.86699 7.72496 1.66699 6.81663 1.66699 5.94996C1.66699 5.38329 1.76699 4.84163 1.96699 4.34163C2.16699 3.83329 2.48366 3.36663 2.92533 2.94996C3.45866 2.42496 4.04199 2.16663 4.65866 2.16663C4.89199 2.16663 5.12533 2.21663 5.33366 2.31663C5.55033 2.41663 5.74199 2.56663 5.89199 2.78329L7.82533 5.50829C7.97533 5.71663 8.08366 5.90829 8.15866 6.09163C8.23366 6.26663 8.27533 6.44163 8.27533 6.59996C8.27533 6.79996 8.21699 6.99996 8.10033 7.19163C7.99199 7.38329 7.83366 7.58329 7.63366 7.78329L7.00033 8.44163C6.90866 8.53329 6.86699 8.64163 6.86699 8.77496C6.86699 8.84163 6.87533 8.89996 6.89199 8.96663C6.91699 9.03329 6.94199 9.08329 6.95866 9.13329C7.10866 9.40829 7.36699 9.76663 7.73366 10.2C8.10866 10.6333 8.50866 11.075 8.94199 11.5166C9.39199 11.9583 9.82533 12.3666 10.267 12.7416C10.7003 13.1083 11.0587 13.3583 11.342 13.5083C11.3837 13.525 11.4337 13.55 11.492 13.575C11.5587 13.6 11.6253 13.6083 11.7003 13.6083C11.842 13.6083 11.9503 13.5583 12.042 13.4666L12.6753 12.8416C12.8837 12.6333 13.0837 12.475 13.2753 12.375C13.467 12.2583 13.6587 12.2 13.867 12.2C14.0253 12.2 14.192 12.2333 14.3753 12.3083C14.5587 12.3833 14.7503 12.4916 14.9587 12.6333L17.717 14.5916C17.9337 14.7416 18.0837 14.9166 18.1753 15.125C18.2587 15.3333 18.3087 15.5416 18.3087 15.775Z"
                                stroke="#292D32" strokeMiterlimit="10"/>
                        </svg>
                        <span>+7 777 777 77 77</span>
                    </div>
                    <div className="flex items-center gap-1 cursor-pointer"
                         onClick={() => {
                             navigator.clipboard.writeText("+7 777 777 77 77");
                             message.success("Номер скопирован");
                         }}
                    >
                        <span className="text-[#5755FF]">Скопировать</span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" fill="none">
                            <path
                                d="M11.9007 12.75C12.6941 12.75 13.0908 12.75 13.3938 12.5956C13.6604 12.4597 13.8771 12.243 14.0129 11.9764C14.1673 11.6734 14.1673 11.2767 14.1673 10.4833V3.68329C14.1673 2.88989 14.1673 2.49318 14.0129 2.19014C13.8771 1.92358 13.6604 1.70685 13.3938 1.57103C13.0908 1.41663 12.6941 1.41663 11.9007 1.41663H7.93398C7.14058 1.41663 6.74387 1.41663 6.44083 1.57103C6.17427 1.70685 5.95755 1.92358 5.82173 2.19014C5.66732 2.49318 5.66732 2.88988 5.66732 3.68329M5.10065 15.5833H9.06732C9.86073 15.5833 10.2574 15.5833 10.5605 15.4289C10.827 15.2931 11.0438 15.0763 11.1796 14.8098C11.334 14.5067 11.334 14.11 11.334 13.3166V6.51663C11.334 5.72322 11.334 5.32651 11.1796 5.02347C11.0438 4.75691 10.827 4.54019 10.5605 4.40437C10.2574 4.24996 9.86073 4.24996 9.06732 4.24996H5.10065C4.30724 4.24996 3.91054 4.24996 3.6075 4.40437C3.34093 4.54019 3.12421 4.75691 2.98839 5.02347C2.83398 5.32651 2.83398 5.72322 2.83398 6.51663V13.3166C2.83398 14.11 2.83398 14.5067 2.98839 14.8098C3.12421 15.0763 3.34093 15.2931 3.6075 15.4289C3.91054 15.5833 4.30724 15.5833 5.10065 15.5833Z"
                                stroke="#5755FF" strokeWidth="0.85"/>
                        </svg>
                    </div>
                </div>

                <button className={`p-4 text-white w-full rounded-2xl ${file ? "bg-[#5755FF]" : "bg-[#B3B7BD]"}`}
                        onClick={uploadReceipt}
                        disabled={file === null}>
                    Подтвердить
                </button>
            </div>
        </>
    )
}