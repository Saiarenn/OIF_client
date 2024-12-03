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
                        Переведите на номер <div
                        className="inline-flex items-center gap-[3px] rounded-[7px] px-[11px] py-[2px] bg-[#51CC56] cursor-pointer"
                        onClick={() => {
                            navigator.clipboard.writeText("+7 777 777 77 77");
                            message.success("Номер скопирован");
                        }}
                    >
                            <span className="text-[13px] text-white"
                            >+7 777 777 77 77</span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="17" height="18" viewBox="0 0 17 18" fill="none">
                            <path
                                d="M11.9007 13.25C12.6941 13.25 13.0908 13.25 13.3938 13.0956C13.6604 12.9598 13.8771 12.7431 14.0129 12.4765C14.1673 12.1735 14.1673 11.7768 14.1673 10.9834V4.18335C14.1673 3.38995 14.1673 2.99324 14.0129 2.6902C13.8771 2.42364 13.6604 2.20692 13.3938 2.07109C13.0908 1.91669 12.6941 1.91669 11.9007 1.91669H7.93398C7.14058 1.91669 6.74387 1.91669 6.44083 2.07109C6.17427 2.20692 5.95755 2.42364 5.82173 2.6902C5.66732 2.99324 5.66732 3.38995 5.66732 4.18335M5.10065 16.0834H9.06732C9.86073 16.0834 10.2574 16.0834 10.5605 15.9289C10.827 15.7931 11.0438 15.5764 11.1796 15.3098C11.334 15.0068 11.334 14.6101 11.334 13.8167V7.01669C11.334 6.22328 11.334 5.82658 11.1796 5.52353C11.0438 5.25697 10.827 5.04025 10.5605 4.90443C10.2574 4.75002 9.86073 4.75002 9.06732 4.75002H5.10065C4.30724 4.75002 3.91054 4.75002 3.6075 4.90443C3.34093 5.04025 3.12421 5.25697 2.98839 5.52353C2.83398 5.82658 2.83398 6.22328 2.83398 7.01669V13.8167C2.83398 14.6101 2.83398 15.0068 2.98839 15.3098C3.12421 15.5764 3.34093 15.7931 3.6075 15.9289C3.91054 16.0834 4.30724 16.0834 5.10065 16.0834Z"
                                stroke="white" strokeWidth="0.85"/>
                        </svg>
                    </div>
                        <div
                            className="inline-flex items-center gap-[3px] rounded-[7px] px-[11px] py-[2px] bg-[#FF5555] cursor-pointer"
                            onClick={() => {
                                navigator.clipboard.writeText("2000");
                                message.success("Цена скопирована");
                            }}
                        >
                            <span className="text-[13px] text-white">2000 ₸</span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="17" height="18" viewBox="0 0 17 18"
                                 fill="none">
                                <path
                                    d="M11.9007 13.25C12.6941 13.25 13.0908 13.25 13.3938 13.0956C13.6604 12.9598 13.8771 12.7431 14.0129 12.4765C14.1673 12.1735 14.1673 11.7768 14.1673 10.9834V4.18335C14.1673 3.38995 14.1673 2.99324 14.0129 2.6902C13.8771 2.42364 13.6604 2.20692 13.3938 2.07109C13.0908 1.91669 12.6941 1.91669 11.9007 1.91669H7.93398C7.14058 1.91669 6.74387 1.91669 6.44083 2.07109C6.17427 2.20692 5.95755 2.42364 5.82173 2.6902C5.66732 2.99324 5.66732 3.38995 5.66732 4.18335M5.10065 16.0834H9.06732C9.86073 16.0834 10.2574 16.0834 10.5605 15.9289C10.827 15.7931 11.0438 15.5764 11.1796 15.3098C11.334 15.0068 11.334 14.6101 11.334 13.8167V7.01669C11.334 6.22328 11.334 5.82658 11.1796 5.52353C11.0438 5.25697 10.827 5.04025 10.5605 4.90443C10.2574 4.75002 9.86073 4.75002 9.06732 4.75002H5.10065C4.30724 4.75002 3.91054 4.75002 3.6075 4.90443C3.34093 5.04025 3.12421 5.25697 2.98839 5.52353C2.83398 5.82658 2.83398 6.22328 2.83398 7.01669V13.8167C2.83398 14.6101 2.83398 15.0068 2.98839 15.3098C3.12421 15.5764 3.34093 15.7931 3.6075 15.9289C3.91054 16.0834 4.30724 16.0834 5.10065 16.0834Z"
                                    stroke="white" strokeWidth="0.85"/>
                            </svg>
                        </div>
                        Ожидайте
                        подтверждение заказа с уведомлением в
                        сообщениях
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
                className="bg-white fixed p-4 w-full bottom-[58px] rounded-t-xl shadow-[3px_0px_36px_0px_rgba(0,0,0,0.10)]">
                <div className="pb-4 flex justify-between items-center">
                    <span className="text-sm">{order.products.length} товаров</span>
                    <span
                        className="text-[19px] text-[#5755FF] font-semibold">
                        2000 ₸
                    </span>
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