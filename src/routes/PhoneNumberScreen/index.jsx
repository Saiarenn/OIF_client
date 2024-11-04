import React, {useState} from 'react';
import PhoneInput from "react-phone-input-2";
import 'react-phone-input-2/lib/bootstrap.css'
import {useNavigate} from "react-router-dom";
import {checkPhone} from "../../http/userAPI.js";
import AppButton from "../../components/AppButton/index.jsx";
import {message} from "antd";

const PhoneNumberScreen = () => {
    const [phone, setPhone] = useState('');
    const navigate = useNavigate();

    const click = async () => {
        if (phone.length !== 11) {
            message.error("Введите корректный номер телефона!");
            return;
        }
        try {
            const data = await checkPhone("+" + phone);
            const phoneNumber = "+" + phone;

            switch (data) {
                case 0:
                    navigate("/registration/password", { state: { phone: phoneNumber } });
                    break;
                case 1:
                    navigate("/code-verification", { state: { phone: phoneNumber } });
                    break;
                case 2:
                    navigate("/login", { state: { phone: phoneNumber } });
                    break;
                default:
                    return;
            }
        } catch (error) {
            console.error("Error checking phone:", error);
        }
    };


    return (
        <>
            <h1 className='text-[28px] font-semibold text-center' style={styles.header}>Ваш номер телефона</h1>
            <p className='text-center text-[18px]'>Выберите код вашей страны и <br/> введите номер телефона</p>
            <PhoneInput
                country={'kz'}
                value={phone}
                onChange={setPhone}
                placeholder="+7 (xxx) xxx xx xx"
                containerStyle={styles.phoneContainer}
                inputStyle={styles.phoneInput}
            />
            <p style={styles.agreementText}>
                Нажимая на “Подтвердить” вы соглашаетесь с
                <a href={"/"} className="text-[#5755FF]"> Правилами пользования</a> и
                <a href={"/"} className="text-[#5755FF]"> политикой конфедициальности</a>
            </p>

            <div style={styles.buttonContainer}>
                <AppButton onClick={() => click()}>Подтвердить</AppButton>
            </div>
        </>
    );
};

export default PhoneNumberScreen;

const styles = {
    header: {
        margin: "80px 0 16px"
    },
    phoneContainer: {
        margin: "84px 0 22px"
    },
    phoneInput: {
        width: '100%',
        borderRadius: '12px',
        color: "var(--text-primary)"
    },
    agreementText: {
        margin: "0 4px",
        flexGrow: 1
    },
    buttonContainer: {
        paddingBottom: '16px'
    }
};