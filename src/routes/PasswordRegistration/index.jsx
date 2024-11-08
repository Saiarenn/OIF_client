import React, {useContext, useState} from 'react';
import {useLocation, useNavigate} from "react-router-dom";
import {Context} from "../../main.jsx";
import {login, registration} from "../../http/userAPI.js";
import {formatPhone} from "../../utils/formatPhone.js";
import AppButton from "../../components/AppButton/index.jsx";
import AppInput from "../../components/AppInput/index.jsx";
import {message} from "antd";

const PasswordRegistration = () => {
    const {userStore} = useContext(Context);

    const location = useLocation();
    const isLogin = location.pathname === "/login";
    const navigate = useNavigate();
    const {phone, isForget} = location.state || "";

    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    // const clickForget = async () => {
    //     await requestResetPassword(phone).then(() => {
    //         navigate(FORGET_PASSWORD_ROUTE,  {state: {phone}})
    //     })
    // }

    const submitPassword = async () => {
        if (isLogin) {
            try {
                await login(phone, password).then(() => {
                    userStore.setIsAuth(true);
                    navigate("/");
                })
            } catch (e) {
                message.error("Неверный пароль")
            }
        } else {
            if (password === confirmPassword) {
                try {
                    await registration(phone, password).then(() => {
                        navigate("/code-verification", {state: {phone}});
                    })
                } catch (e) {
                    message.error(e.response.data.errors[0]);
                }
            } else {
                message.error("Пароли не совпадают");
            }
        }
    };

    return (
        <>
            <h1 className='text-center text-[28px] font-semibold' style={styles.header}>
                {isLogin ? "Введите пароль" : "Придумайте пароль"}
            </h1>
            {isLogin ? <p className='text-center text-[18px]'>
                Введите пароль от своего аккаунта с <br/> номером
                <span className="text-[#5755FF]"> {formatPhone(phone)}</span>
            </p> : <p className='text-center text-[18px]'>
                Придумайте надежный пароль
            </p>}

            <div style={isLogin ? styles.passForm2 : styles.passForm1}>
                <AppInput
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    placeholder="Пароль"
                    isPassword
                />
            </div>

            {!isLogin && <AppInput
                value={confirmPassword}
                onChange={e => setConfirmPassword(e.target.value)}
                placeholder="Подтвердите пароль"
                isPassword
            />}

            <div style={styles.buttonContainer}>
                {isLogin && <p className='text-center text-[18px]' style={styles.optionText}>
                    Забыли пароль? <span
                    className="text-[#5755FF] cursor-pointer">Восстановить</span>
                </p>}
                <AppButton onClick={submitPassword}>{isLogin ? "Подтвердить" : "Завершить регистрацию"}</AppButton>
            </div>
        </>
    );
};

export default PasswordRegistration;

const styles = {
    header: {
        margin: "80px 0 16px"
    }, passForm1: {
        margin: "32px 0 10px"
    }, passForm2: {
        margin: "auto 0"
    }, optionText: {
        margin: "0 0 32px",
    }, buttonContainer: {
        marginTop: 'auto',
    }
};