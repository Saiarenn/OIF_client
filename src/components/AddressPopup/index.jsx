import React, {useEffect, useState} from "react";
import {Form, Input} from "antd";
import {createAddress, fetchAllAddresses} from "../../http/addressAPI.js";

export const AddressPopup = ({onClose, setSelectedAddress}) => {
    const [search, setSearch] = useState("");
    const [addresses, setAddresses] = useState([]);
    const [isCreate, setIsCreate] = useState(false);

    useEffect(() => {
        fetchAllAddresses().then(data => setAddresses(data))
    }, [])


    const filteredAddresses = addresses.filter(addresses =>
        addresses.city.toLowerCase().includes(search.toLowerCase())
    ).sort((a, b) => a.city.localeCompare(b.city));

    const [form] = Form.useForm();

    const closeModal = (e) => {
        if (e.target === e.currentTarget) {
            onClose();
        }
    };

    const addAddress = async (values) => {
        await createAddress(values).then(data => {
            setAddresses([...addresses, data]);
            setIsCreate(false);
            form.resetFields;
        })
    };

    const select = (address) => {
        setSelectedAddress(address);
        onClose();
    };

    const selectContent = <div
        className="bg-white h-[60vh] fixed flex flex-col gap-1 px-6 pt-[5px]
                    w-full bottom-[58px] overflow-y-auto custom-scrollbar
                    rounded-t-xl shadow-[3px_0px_36px_0px_rgba(0,0,0,0.10)]">
        <div className="w-12 h-1 bg-[#EBECEE] mx-auto rounded-[31px] text-transparent">
            {"\0"}
        </div>
        <div className="flex items-center gap-2 mt-5 mb-4 ">
            <Input
                prefix={<svg width="18" height="18" viewBox="0 0 18 18" fill="none"
                             xmlns="http://www.w3.org/2000/svg">
                    <g id="Search">
                        <path id="Icon"
                              d="M15.75 15.75L12.4875 12.4875M14.25 8.25C14.25 11.5637 11.5637 14.25 8.25 14.25C4.93629 14.25 2.25 11.5637 2.25 8.25C2.25 4.93629 4.93629 2.25 8.25 2.25C11.5637 2.25 14.25 4.93629 14.25 8.25Z"
                              stroke="black" strokeOpacity="0.54" strokeWidth="1.5" strokeLinecap="round"
                              strokeLinejoin="round"/>
                    </g>
                </svg>
                }
                value={search}
                onChange={e => setSearch(e.target.value)}
                placeholder={"Поиск"}
                className="rounded-[35px] border-0 bg-[#F8F8F9] px-4 py-[6px] hover:none"
            />
            <button className="p-2 bg-[#5755FF] text-white h-min rounded-lg w-[40px]"
                    onClick={() => setIsCreate(true)}
            >
                +
            </button>
        </div>
        {filteredAddresses.map((address, index) =>
            <div
                onClick={() => select(address)}
                className={`justify-between items-center flex py-2 px-[3px] cursor-pointer group ${index === addresses.length - 1 ? "mb-4" : "border-b-[1px] border-[#EBECEE]"}`}
                key={address.id}>
                <div
                    className={`group-hover:text-[#5755FF]`}>
                    {address.city}
                </div>

                <div
                    className={`text-sm text-[#999FA7]`}>
                    {address.postalCode}
                </div>
            </div>
        )}
    </div>

    const createContent = <div
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

        <div className="my-6">
            <h6 className="text-[19px] text-center mb-10">Введите адрес</h6>

            <Form
                form={form}
                layout="vertical"
                onFinish={addAddress}
                initialValues={{ city: "", postalCode: "" }}
            >
                <Form.Item className={"mb-2"}
                           name="city"
                           rules={[{ required: true, message: "Пожалуйста, введите название города" }]}
                >
                    <Input className={"p-3"} placeholder="Название города" size="large" />
                </Form.Item>

                <Form.Item
                    name="postalCode"
                    rules={[
                        {
                            required: true,
                            message: "Пожалуйста, введите почтовый индекс"
                        },
                        {
                            pattern: /^\d{6}$/,
                            message: "Почтовый индекс должен содержать только цифры и быть длиной 6 символов"
                        }
                    ]}
                >
                    <Input className={"p-3"} placeholder="Почтовый индекс" size="large" maxLength={6} />
                </Form.Item>

                <button type={"submit"} className="p-4 bg-[#5755FF] text-white w-full rounded-2xl mb-1">
                    Сохранить
                </button>

                <button className="p-4 bg-white border-[1px] text-[#5755FF] border-[#5755FF] w-full rounded-2xl"
                        onClick={onClose}
                >
                    Отменить
                </button>
            </Form>
        </div>
    </div>

    return (
        <div className="fixed inset-0 bg-black bg-opacity-35 z-50" onClick={closeModal}>
            {isCreate ? createContent : selectContent}
        </div>
    )
}