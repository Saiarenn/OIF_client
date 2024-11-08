import React, {useEffect, useRef, useState} from 'react';
import AppButton from "../../components/AppButton";
import {useLocation, useNavigate} from "react-router-dom";
import {sendCode, verify} from "../../http/userAPI";
import {formatPhone} from "../../utils/formatPhone";

const CodeVerification = () => {
    const location = useLocation();
    const isForget = location.pathname === "/forget-password";
    const { phone } = location.state || "";

    const [isResendDisabled, setIsResendDisabled] = useState(true);
    const [timer, setTimer] = useState(59)

    const [code, setCode] = useState(new Array(4).fill(""));
    const inputRefs = useRef([]);
    const navigate = useNavigate();

    useEffect(() => {
        let countdown;
        if (isResendDisabled && timer > 0) {
            countdown = setInterval(() => {
                setTimer(prev => prev - 1);
            }, 1000);
        } else if (timer === 0) {
            setIsResendDisabled(false);
        }

        return () => clearInterval(countdown);
    }, [isResendDisabled, timer]);

    useEffect(() => {
        sendCode(phone)
    }, [phone])

    const handleChange = (e, index) => {
        const value = e.target.value;
        if (value.length > 1) return;

        const newCode = [...code];
        newCode[index] = value;
        setCode(newCode);

        if (value !== "" && index < 3) {
            inputRefs.current[index + 1].focus();
        }
    };

    const handleKeyDown = (e, index) => {
        if (e.key === "Backspace" && code[index] === "" && index > 0) {
            inputRefs.current[index - 1].focus();
        }
    };

    const handleSubmit = async () => {
        await verify(phone, code.join("")).then(() => {
            navigate('/registration/business',  { state: { phone, isForget } })
        })
    };

    const resendCode = async () => {
        await sendCode(phone).then(() => {
            setTimer(59);
            setIsResendDisabled(true);
        })
    }

    return (
        <>
            <h1 className='text-center text-[28px] font-semibold' style={styles.header}>
                {isForget ? "Восстановление пароля" : "Код верификаций"}
            </h1>
            <p className='text-center text-[18px]'>
                Мы отправили код подтверждения <br /> на номер
                <span className="text-[#5755FF]"> {formatPhone(phone)}</span>
            </p>

            <div style={styles.codeInputContainer}>
                {code.map((digit, index) => (
                    <input
                        key={index}
                        ref={el => (inputRefs.current[index] = el)}
                        type="text"
                        maxLength="1"
                        value={digit}
                        onChange={e => handleChange(e, index)}
                        onKeyDown={e => handleKeyDown(e, index)}
                        style={styles.codeInput}
                    />
                ))}
            </div>

            <div style={styles.buttonContainer}>
                <p className='text-center text-[18px]' style={styles.optionText}>
                    Не получили код?
                    {isResendDisabled ? (
                        <span className="text-[#626C7A]"> Отправить код: 0:{timer < 10 ? `0${timer}` : timer}
                    </span>
                    ) : (
                        <span onClick={resendCode} className="text-[#5755FF]"> Переотправить</span>
                    )}
                </p>

                <AppButton onClick={handleSubmit}>Подтвердить</AppButton>
            </div>
        </>
    );
};

export default CodeVerification;

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
    codeInputContainer: {
        display: 'flex',
        justifyContent: 'center',
        margin: 'auto 0'
    },
    codeInput: {
        width: '50px',
        height: '50px',
        fontSize: '18px',
        fontWeight: "500",
        textAlign: 'center',
        borderRadius: '12px',
        border: '1px solid var(--light-gray)',
        margin: '0 8px'
    },
    optionText: {
        margin: "0 0 32px",
    },
    buttonContainer: {
        marginTop: 'auto',
    }
};