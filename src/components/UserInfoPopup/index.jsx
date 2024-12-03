import React, {useState} from "react";
import {Input} from "antd";

export const UserInfoPopup = ({onClose}) => {
    const [name, setName] = useState("");
    const [surname, setSurname] = useState("");
    const closeModal = (e) => {
        if (e.target === e.currentTarget) {
            onClose();
        }
    };

    return (
        <div className="fixed inset-0 bg-black bg-opacity-35 z-50" onClick={closeModal}>
            <div
                className="bg-white fixed flex flex-col gap-1 px-6 py-4
                    w-full bottom-[58px] overflow-y-auto custom-scrollbar
                    rounded-t-xl shadow-[3px_0px_36px_0px_rgba(0,0,0,0.10)]">

                <div className="flex justify-end items-center">
                    <svg onClick={closeModal}
                         className="cursor-pointer"
                         xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M18 6L6 18M18 18L6 6.00001" stroke="#87869A" strokeLinecap="round"/>
                    </svg>
                </div>

                <div className="text-center my-6">
                    <h6 className="text-[19px] mb-10">Введите свои данные</h6>

                    <Input
                        value={name}
                        onChange={e => setName(e.target.value)}
                        placeholder={"Имя"}
                        size="large"
                        className="mb-4"
                    />
                    <Input
                        value={surname}
                        onChange={e => setSurname(e.target.value)}
                        placeholder={"Фамилия"}
                        size="large"
                    />
                </div>

                <button className="p-4 bg-[#5755FF] text-white w-full rounded-2xl mb-1">
                    Сохранить
                </button>

                <button className="p-4 bg-white border-[1px] text-[#5755FF] border-[#5755FF] w-full rounded-2xl"
                        onClick={onClose}
                >
                    Отменить
                </button>
            </div>
        </div>
    )
}