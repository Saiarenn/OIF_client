import React, { useState } from 'react';
import styles from './AppInput.module.css';

const AppInput = ({ type = 'text', placeholder, value, onChange, isPassword, readOnly, min, max, ...props }) => {
    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    return (
        <div className={styles.inputContainer} {...props}>
            <input
                className={styles.appInput}
                type={isPassword ? (showPassword ? 'text' : 'password') : type}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                readOnly={readOnly}
                min={min}
                max={max}
            />
            {isPassword && (
                <span
                    onClick={togglePasswordVisibility}
                    className={styles.passwordToggle}
                >
                    {showPassword ?
                        <svg width="24" height="25" viewBox="0 0 24 25" fill="none"
                             xmlns="http://www.w3.org/2000/svg">\n' +
                            '
                            <path
                                d="M2.9095 13.6718C2.56793 12.9286 2.56793 12.0714 2.9095 11.3282C4.4906 7.88843 7.96659 5.5 12.0004 5.5C16.0343 5.5 19.5102 7.88843 21.0913 11.3282C21.4329 12.0714 21.4329 12.9286 21.0913 13.6718C19.5102 17.1116 16.0343 19.5 12.0004 19.5C7.96659 19.5 4.4906 17.1116 2.9095 13.6718Z"
                                stroke="black"/>
                            \n' +
                            '
                            <path
                                d="M15.0004 12.5C15.0004 14.1569 13.6573 15.5 12.0004 15.5C10.3436 15.5 9.00042 14.1569 9.00042 12.5C9.00042 10.8431 10.3436 9.5 12.0004 9.5C13.6573 9.5 15.0004 10.8431 15.0004 12.5Z"
                                stroke="black"/>
                            \n' +
                            '</svg>
                        :
                        <svg width="24" height="25" viewBox="0 0 24 25" fill="none"
                             xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M14.5299 9.97L9.46992 15.03C8.81992 14.38 8.41992 13.49 8.41992 12.5C8.41992 10.52 10.0199 8.92 11.9999 8.92C12.9899 8.92 13.8799 9.32 14.5299 9.97Z"
                                stroke="#292D32" strokeLinecap="round" strokeLinejoin="round"/>
                            <path
                                d="M17.8201 6.27C16.0701 4.95 14.0701 4.23 12.0001 4.23C8.47009 4.23 5.18009 6.31 2.89009 9.91C1.99009 11.32 1.99009 13.69 2.89009 15.1C3.68009 16.34 4.60009 17.41 5.60009 18.27"
                                stroke="#292D32" strokeLinecap="round" strokeLinejoin="round"/>
                            <path
                                d="M8.41992 20.03C9.55992 20.51 10.7699 20.77 11.9999 20.77C15.5299 20.77 18.8199 18.69 21.1099 15.09C22.0099 13.68 22.0099 11.31 21.1099 9.89999C20.7799 9.37999 20.4199 8.88999 20.0499 8.42999"
                                stroke="#292D32" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M15.5099 13.2C15.2499 14.61 14.0999 15.76 12.6899 16.02" stroke="#292D32"
                                  strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M9.47 15.03L2 22.5" stroke="#292D32" strokeLinecap="round"
                                  strokeLinejoin="round"/>
                            <path d="M22 2.5L14.53 9.97" stroke="#292D32" strokeLinecap="round"
                                  strokeLinejoin="round"/>
                        </svg>
                    }
                </span>
            )}
        </div>
    );
};

export default AppInput;
