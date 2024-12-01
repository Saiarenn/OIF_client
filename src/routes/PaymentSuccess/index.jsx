import React, {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";

export const PaymentSuccess = () => {
    const navigate = useNavigate();
    const [contentHeight, setContentHeight] = useState(window.innerHeight);

    useEffect(() => {
        const updateContentHeight = () => {
            const fixedHeight = 115 + 88;
            setContentHeight(window.innerHeight - fixedHeight);
        };

        updateContentHeight();
        window.addEventListener("resize", updateContentHeight);

        return () => window.removeEventListener("resize", updateContentHeight);
    }, []);

    return (
        <div style={{height: contentHeight + "px"}}>
            <div className="bg-white px-6 py-4 flex border-b-[1px] border-[#EBECEE]">
                <button onClick={() => navigate("/cart")}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M13.9998 6L8.70696 11.2929C8.31643 11.6834 8.31643 12.3166 8.70696 12.7071L13.9998 18"
                              stroke="#0E0D35" strokeLinecap="round"/>
                    </svg>
                </button>

                <span className="uppercase w-full text-center">
                    Оформление заказа
                </span>

                <button>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path
                            d="M11.9999 13.43C13.723 13.43 15.1199 12.0331 15.1199 10.31C15.1199 8.58687 13.723 7.19 11.9999 7.19C10.2768 7.19 8.87988 8.58687 8.87988 10.31C8.87988 12.0331 10.2768 13.43 11.9999 13.43Z"
                            stroke="#0E0D35"/>
                        <path
                            d="M3.61971 8.49C5.58971 -0.169998 18.4197 -0.159997 20.3797 8.5C21.5297 13.58 18.3697 17.88 15.5997 20.54C13.5897 22.48 10.4097 22.48 8.38971 20.54C5.62971 17.88 2.46971 13.57 3.61971 8.49Z"
                            stroke="#0E0D35"/>
                    </svg>
                </button>
            </div>

            <div className="flex flex-col gap-8 h-full items-center justify-center">
                {emptyOrdersIcon}
                <div className="text-center">
                    <div className="text-[23px]">Ваша заявка принята</div>
                    <div className="text-[#6E6E86]">Ожидайте подтверждение заказа с <br/> уведомлением в сообщениях</div>
                </div>
            </div>
            <div style={{height: "88px"}}></div>

            <div
                className="bg-white fixed p-4 w-full bottom-[58px] rounded-t-xl shadow-[3px_0px_36px_0px_rgba(0,0,0,0.10)]">
                <button className="p-4 bg-[#5755FF] text-white w-full rounded-2xl"
                        onClick={() => navigate("/")}>
                    К покупкам
                </button>
            </div>
        </div>
    )
}


const emptyOrdersIcon = <svg xmlns="http://www.w3.org/2000/svg" width="155" height="154" viewBox="0 0 155 154"
                             fill="none">
    <path
        d="M139.66 57.2996C139.423 54.9003 138.219 41.3553 138.058 40.7038C137.759 39.4773 136.801 39.2167 135.72 38.8564C126.522 35.7902 121.57 34.4794 121.57 34.1881C121.57 32.655 121.823 30.0334 121.907 28.4543C121.968 27.3122 120.205 26.1547 119.416 25.3881C107.488 13.9282 98.9873 9.29057 94.503 5.77977C92.5636 4.24667 92.602 3.71775 91.4368 3.8404C85.3044 4.4843 66.3936 7.51217 55.2173 10.8543C54.788 10.9846 54.0138 11.0306 53.7915 11.4676C53.6823 12.036 53.6642 12.6182 53.7379 13.1923C53.6612 14.4188 53.5922 15.6453 53.5386 16.8717C48.8549 15.8522 39.7407 14.1122 39.6563 14.1275C39.1658 14.2271 38.9971 14.8481 38.8361 15.2467C36.4697 21.2299 33.525 26.9679 30.0438 32.3791C29.6682 32.9463 29.0703 33.4982 28.9936 34.2034C29.006 34.5429 29.0574 34.8799 29.1469 35.2076C29.2466 35.9742 31.5156 54.0341 31.6229 54.5477C44.0793 57.1769 46.31 57.8362 47.0306 58.0355C44.959 60.365 43.3604 63.0752 42.3239 66.0153C40.1469 72.7302 42.094 75.6508 47.8431 79.6292C50.0817 81.1745 52.5871 82.2921 55.2326 82.9254C53.4619 85.7386 51.2696 89.6557 51.7142 93.0745C51.7142 93.1741 51.9518 93.4348 51.9288 93.5037C51.9058 93.5727 51.4459 93.8334 51.3692 93.887C44.2403 98.9156 33.4626 117.182 19.5651 114.929C19.3504 114.89 19.0362 114.814 18.9442 115.082C18.8971 115.218 18.8687 115.36 18.8598 115.504C18.8598 115.373 18.3309 115.297 18.2389 115.274C16.5602 114.86 15.8626 117.19 15.5254 118.378C15.3107 119.145 14.1456 122.61 15.832 122.295C16.9128 122.088 17.8097 120.08 18.3846 119.229C19.9177 120.686 23.4361 121.743 24.08 121.897C27.8421 122.797 31.7269 123.072 35.5783 122.709C44.5009 121.897 52.68 117.673 56.6738 113.61C57.2947 112.974 58.0459 111.686 58.9734 111.518C59.74 111.403 60.2535 112.123 60.6981 112.576C67.3671 119.352 68.3636 121.705 68.3176 121.628C72.4459 128.941 75.1461 136.971 76.2744 145.292C76.3281 145.706 76.2744 146.143 76.6194 146.357C76.857 146.495 77.4319 146.227 77.4473 146.488C77.5086 147.438 77.202 148.22 77.8612 148.956C78.6891 149.891 81.3873 149.309 82.4605 149.178C83.2271 149.086 84.4535 149.025 84.9671 148.412C85.4807 147.798 84.7908 147.201 84.2006 146.978C83.434 146.702 80.9274 146.81 80.5365 146.143C81.5176 146.02 81.8243 146.097 82.2305 145.116C84.7525 139.129 84.9901 131.578 84.5302 125.185C83.8709 116.217 79.9309 108.635 74.1281 101.943C75.4542 100.978 76.1901 99.4598 76.926 98.034C78.6506 94.7044 79.7889 91.1027 80.2912 87.3867C82.1012 87.4077 83.911 87.3206 85.7107 87.126C89.1755 86.6201 92.7553 85.6466 95.3309 83.0863C97.7399 80.5718 99.109 77.2393 99.1636 73.7574C103.387 75.1755 119.301 80.6564 119.86 80.871C120.129 81.004 120.412 81.1044 120.704 81.17C121.355 81.032 122.321 79.3916 122.766 78.8703C127.766 72.9821 133.279 67.549 139.239 62.6348C140.358 61.6766 140.174 62.5735 139.66 57.2996ZM18.7065 116.807C18.5379 118.018 18.4536 119.022 17.618 120.019C17.2348 120.471 15.4564 123.085 15.3184 121.253C15.2111 119.85 16.1846 117.573 16.8055 116.339C17.1734 115.573 17.3191 115.366 18.2236 115.573C19.1281 115.78 18.8138 116.063 18.7065 116.807ZM80.4828 146.357C81.2494 146.948 82.7135 146.848 83.618 147.124C83.9476 147.224 84.7985 147.4 84.8445 147.89C84.9058 148.473 83.618 148.657 83.25 148.657C82.3828 148.809 81.5075 148.912 80.6284 148.964C80.0229 148.964 78.7121 149.224 78.1908 148.856C77.6696 148.488 77.8305 147.04 77.7462 146.35C78.4054 146.327 80.0305 145.989 80.4828 146.357ZM92.4486 4.95956C101.988 11.5059 111.084 18.676 119.677 26.423C120.212 26.8468 120.719 27.3052 121.194 27.7951C121.677 28.3777 121.509 27.4961 121.072 34.1115C101.394 28.071 90.6856 25.6794 90.4096 25.6181C90.5323 24.8132 91.7588 13.2613 92.4486 4.95956ZM54.3511 11.7129C66.1306 8.19204 78.2209 5.80993 90.4556 4.59928C90.6626 4.59928 91.5058 4.36932 91.6668 4.4843C91.8277 4.59928 91.7128 5.41182 91.6668 5.82576C91.1685 11.023 90.402 19.2021 90.08 25.4954C82.1922 23.5254 54.1211 16.9867 53.9755 16.9484C54.0062 16.0975 54.0982 12.0885 54.3511 11.7129ZM59.1037 97.3518C57.3097 96.4515 55.5807 95.4269 53.9295 94.2856C52.9023 93.5191 52.1128 93.0055 52.3044 91.618C52.8563 87.1567 55.4626 82.7337 58.3908 79.1999C58.8124 78.694 59.7016 77.7741 59.556 77.6668C59.2877 77.4445 56.1985 81.055 55.5239 82.4731C51.4524 81.3479 47.7061 79.2725 44.5929 76.4173C42.232 74.0104 41.6187 72.1936 42.3469 68.2919C43.2975 63.2327 46.8389 58.917 50.4954 55.3066C51.3462 54.471 52.1358 53.5742 53.4006 53.4975C54.0522 53.4975 56.0145 53.6585 56.4668 54.264C56.7427 54.6167 56.4668 55.7971 56.4668 56.2187C56.3671 57.2383 56.2138 58.2424 56.0452 59.2849C55.7042 61.7282 55.0631 64.12 54.1365 66.4062C54.0215 66.6592 53.5616 67.3491 53.5846 67.5867C53.5846 68.016 53.8605 67.9086 54.2285 67.993C57.7546 68.7978 62.0243 69.7407 64.8835 72.0787C65.8724 72.8912 67.3058 74.501 68.4173 74.2557C68.6826 74.1609 68.9167 73.9949 69.0939 73.7758C69.271 73.5568 69.3844 73.2931 69.4215 73.0139C70.4857 73.6449 71.672 74.042 72.9016 74.179C72.5567 76.3254 73.4612 78.5637 73.5609 80.7177C73.8828 88.2069 69.3295 101.162 67.9574 101.338C65.4814 100.418 65.8954 100.909 59.1037 97.3518ZM52.7414 51.0062C52.588 50.4006 53.0096 50.8529 53.2626 51.0599C53.5156 51.2668 53.9755 51.8264 54.1365 51.5275C54.2974 51.2285 53.2473 50.6229 53.5232 50.1937C53.9372 50.1937 54.3741 50.7073 54.6731 50.9602C54.7804 51.0522 55.3323 51.7268 55.4396 51.7268C55.8765 51.7268 55.5009 51.3818 55.4396 51.1135C55.294 50.1937 55.5469 50.1477 56.0299 50.9372C56.1218 51.1442 56.2522 51.3282 56.3441 51.5351C56.6084 52.1533 56.6908 52.8341 56.5818 53.4975V53.6125C56.1542 53.4206 55.7166 53.2517 55.271 53.1066C54.6884 52.9456 53.6919 53.0376 53.2243 52.7769C53.0633 52.6926 52.588 52.2787 52.588 52.0641C52.588 51.5811 53.186 52.0641 53.4542 52.1867C53.7225 52.3093 52.818 51.2898 52.7414 51.0062ZM74.0821 74.0027C73.2635 74.0175 72.4466 73.9247 71.6521 73.7268C70.8832 73.5341 70.1415 73.2457 69.4445 72.8682C69.4907 72.6709 69.5265 72.4714 69.5518 72.2703C69.6821 72.2703 69.8737 72.3163 69.9887 72.2243C70.4016 71.5335 70.5462 70.7151 70.395 69.9247C70.2954 69.7714 69.7971 69.71 69.6285 69.6104C68.379 68.8438 68.8619 67.1344 69.8738 67.556C70.2494 67.7093 71.1386 69.1658 71.7595 68.6982C72.1887 68.3762 71.1539 66.7128 70.9929 66.2836C71.121 66.4299 71.2773 66.5488 71.4525 66.6331C71.6277 66.7174 71.8182 66.7654 72.0124 66.7741C71.5973 66.2913 71.3428 65.6912 71.2842 65.0571C72.6793 66.2376 74.542 65.724 76.1901 65.8619C76.8957 65.8761 77.5894 66.0463 78.2215 66.3602C78.7504 66.7358 78.6354 67.8933 78.6737 68.5755C78.7581 70.1086 78.8424 72.3163 77.3783 73.1748C76.0521 73.9414 74.2354 73.5275 74.1358 73.5658C74.0361 73.6041 74.0821 74.0027 74.0821 74.0027ZM74.3504 73.8341C76.65 74.478 78.4514 73.3128 78.8577 71.7107C79.1477 70.1913 79.1477 68.6308 78.8577 67.1114L83.273 68.5295C83.9169 68.7365 87.2054 69.4264 87.2974 70.0626C87.4798 71.2567 87.7514 72.4354 88.11 73.5888C86.6279 73.3427 85.1154 73.3427 83.6333 73.5888C81.9234 73.702 80.2259 73.9584 78.5588 74.3553C77.2798 74.6752 76.0205 75.0694 74.7873 75.5358C74.4577 75.5358 74.4194 75.0682 74.3887 74.8382C74.3811 74.7463 74.3504 73.8341 74.3504 73.8341ZM78.8117 65.9233C78.9949 66.1152 79.164 66.3202 79.3176 66.5365C78.7887 66.3449 79.0723 66.5212 78.8117 65.9233ZM75.5769 62.3665C72.8863 63.0794 70.211 63.7309 67.4821 64.2215C69.1972 63.2031 70.9653 62.2768 72.779 61.4466C75.4082 60.2355 76.5274 59.5762 78.5358 60.2891C81.8626 61.4773 77.5929 61.8069 75.5769 62.3435V62.3665ZM75.0863 60.1358C68.8159 62.0982 68.1873 63.202 65.949 64.2599C65.8954 63.9456 65.8647 63.6236 65.8417 63.3017C65.7206 62.0535 66.0239 60.801 66.7027 59.7466C67.3815 58.6922 68.3961 57.8976 69.5825 57.4912C70.8319 57.1156 71.8821 56.8167 73.1316 57.3456C74.4156 57.8969 75.5795 58.6937 76.5581 59.6912C76.3051 59.9519 75.4619 59.9978 75.0863 60.1128V60.1358ZM68.8466 71.5421C69.0382 71.8257 69.1839 72.3086 69.4291 72.3086C68.6626 76.5706 66.0947 72.232 63.4347 70.7219C60.5426 69.1635 57.4268 68.062 54.1978 67.4564C55.2677 65.2565 56.0187 62.9154 56.4285 60.5038C56.4285 60.5038 61.3267 61.9679 61.7943 62.1059C62.9825 62.4508 64.2013 62.6654 65.3971 63.0564C65.5121 69.2501 67.9267 70.1623 68.8466 71.5421ZM98.5121 73.8954C98.3511 78.0654 96.5267 82.0821 92.9852 84.4125C89.3211 86.8194 84.6452 86.8731 80.3831 86.8654C80.6284 84.8799 80.7027 82.8769 80.6055 80.8787C80.6055 80.6027 80.3602 80.549 80.3678 80.8327C80.5314 85.8872 79.5157 90.9105 77.4013 95.5044C76.5427 97.3671 75.5845 99.7205 73.9901 101.07C72.3957 102.419 70.211 101.905 68.3713 101.438C69.9044 99.7511 70.671 97.1065 71.4375 94.7762C72.2197 92.3531 72.8571 89.8855 73.3462 87.3867C74.9406 78.855 72.3804 77.1226 73.1163 74.1944C73.4427 74.2234 73.771 74.2234 74.0974 74.1944C74.1894 75.4515 74.5727 76.8236 76.2898 76.1721C76.0502 76.2392 75.7981 76.2485 75.5542 76.1992C75.3103 76.1499 75.0817 76.0434 74.887 75.8884C78.3211 74.2327 82.0466 73.8187 85.8103 73.7651C86.6277 73.7879 87.4424 73.8699 88.2479 74.0104C88.3399 74.133 88.7692 74.4396 88.7002 73.7957C88.5636 73.2303 88.3894 72.6746 88.179 72.1323C87.4124 68.9895 86.5922 61.4543 88.6619 58.9783C89.6201 57.8285 91.3755 58.1658 92.4946 58.8557C95.0472 60.4348 98.788 66.9658 98.5121 73.8954ZM90.7546 56.1881C90.7546 56.2954 91.4368 55.9505 91.5211 55.9198C92.9239 55.2376 93.5678 55.6285 93.0542 55.9965L92.3337 56.4794C92.1497 56.602 92.464 56.6787 92.556 56.6787C92.6479 56.6787 93.7594 56.1574 93.8898 56.3261C94.1427 56.6633 92.7859 57.0926 92.7323 57.1693C92.326 57.6675 93.0542 57.2153 93.3838 57.3992C93.7135 57.5832 93.1922 57.6829 92.9162 57.8132C92.2647 58.1198 92.027 57.8132 91.3831 57.7135C90.6795 57.5057 89.9252 57.5518 89.2521 57.8438C89.3038 57.3482 89.469 56.8712 89.7348 56.4498C90.0007 56.0284 90.3602 55.6739 90.7852 55.4139C91.1685 55.1379 92.4563 54.5707 91.4981 55.4752C91.2222 55.6515 90.6932 55.8585 90.7546 56.1881ZM122.183 79.1846C121.869 79.5525 121.302 80.5031 120.872 80.7177C120.443 80.9323 120.704 80.8173 120.29 80.7177C119.29 80.4583 118.312 80.1252 117.362 79.7212C99.1483 73.1442 99.1713 73.2898 99.156 73.0828C99.0946 72.3163 98.972 71.4654 98.926 70.8292C98.7838 68.6549 98.246 66.5248 97.3392 64.5435C96.3427 62.2438 94.8939 59.4459 92.5713 58.2118C93.0159 58.1428 94.388 57.2843 93.1922 57.2306C94.0584 56.8933 94.457 55.7435 93.1922 56.1881C94.4417 55.0229 92.3337 55.3219 91.7204 55.5135C92.1727 55.3755 92.0654 54.4404 91.2375 54.747C90.6194 55.0216 90.0793 55.4456 89.6658 55.9808C89.2523 56.5161 88.9784 57.1457 88.8689 57.8132C88.7769 58.4187 88.3399 58.3881 87.9873 58.8633C87.6157 59.4187 87.3554 60.0409 87.2208 60.6954C86.9051 62.0595 86.7635 63.4581 86.7992 64.8578C86.8406 66.2583 86.9584 67.6554 87.1518 69.0431C86.0633 68.5372 79.7009 66.8125 79.7239 66.6208C79.8581 65.7778 79.8581 64.9189 79.7239 64.0759C79.6856 63.8613 79.126 62.1059 78.8654 62.1672C79.4863 62.0215 80.4981 61.7762 80.3218 60.9177C80.0995 59.8599 77.7309 59.8215 77.1866 59.6759C76.6424 59.5302 76.4201 59.216 75.9295 58.779C73.2006 56.1804 71.5602 55.6745 68.1107 57.8132C67.3489 58.314 66.7109 58.9813 66.2448 59.7648C65.7787 60.5483 65.4967 61.4274 65.4201 62.3358C62.8292 61.6153 60.2382 60.9024 57.6396 60.2201C57.4152 60.1803 57.1947 60.1213 56.9804 60.0438C56.8807 59.9902 56.5894 60.0438 56.5358 59.9289C56.5661 59.5195 56.6354 59.1139 56.7427 58.7177C56.8884 57.8515 57.0264 56.9853 57.1107 56.1114C57.2668 55.4329 57.2668 54.7279 57.1107 54.0494C57.1107 53.9268 56.7811 53.7275 56.6968 53.6508C56.8926 52.9061 56.8415 52.118 56.5511 51.4048C56.4285 51.0369 56.1295 50.1783 55.6696 50.1017C55.0793 49.9944 55.0947 50.6536 55.202 51.0599C54.8724 50.7379 52.611 49.0132 53.3469 50.7456C52.4041 49.8871 52.2584 51.0292 52.933 51.7114C51.8215 51.3052 52.5497 52.662 53.1093 52.8613C50.5414 53.1679 47.9811 56.74 47.4445 57.4989C45.1908 56.809 32.9337 54.3944 32.1672 54.3024C31.7839 52.34 31.6306 50.8222 29.8675 34.4334C66.7692 40.6271 103.188 51.3588 139.591 61.8529C133.296 67.1262 127.46 72.9242 122.145 79.1846H122.183ZM29.8675 33.9581C33.3395 28.5091 36.3375 22.7721 38.8285 16.8104C39.0431 16.2968 39.3421 15.0244 39.9936 14.8787C40.6452 14.7331 42.1706 15.308 42.9218 15.4536C68.9386 20.5665 84.6682 23.3644 135.544 39.554C136.037 39.6539 136.511 39.8325 136.947 40.0829C137.644 40.6348 137.545 41.8996 137.644 42.7198C137.798 44.0383 139.745 61.117 139.791 61.5309C103.617 50.6843 67.6508 39.6306 29.8292 33.9428L29.8675 33.9581Z"
        fill="#5755FF"/>
    <path
        d="M35.3398 31.7121C38.8743 32.8097 42.5632 33.3274 46.2632 33.2452L35.3398 31.7121ZM42.2771 30.6083C40.1756 30.1128 38.0457 29.7467 35.8994 29.5121C37.9231 30.3271 40.0974 30.7008 42.2771 30.6083ZM134.692 41.5009C134.608 40.9184 125.739 38.8257 125.271 38.841C124.804 38.8563 124.911 39.3393 124.85 39.6076C124.482 41.1407 124.183 42.2062 124.037 43.172C123.999 43.425 123.815 44.3678 124.229 44.4368C127.242 44.9657 134.57 47.503 134.761 47.503C134.953 47.503 134.754 41.8612 134.692 41.5009ZM125.379 44.1379C124.612 43.9309 124.566 43.9999 124.612 43.195C124.69 41.8357 124.948 40.4928 125.379 39.2013C125.67 39.2473 134.079 41.6926 134.163 41.8076C134.432 42.1908 134.363 45.9469 134.485 46.9741C132.485 46.1769 129.357 45.2264 125.379 44.1379ZM93.5516 19.9302C95.6673 21.3637 97.5377 21.9233 103.317 25.6027C103.547 25.7483 104.253 26.3692 104.467 26.3692C104.966 26.2773 104.858 25.6027 104.935 25.1274C105.219 23.28 105.387 21.4173 105.487 19.5546C105.602 17.347 105.165 16.9177 103.524 15.7219C101.884 14.526 97.5147 11.4675 95.675 10.448C95.4144 10.3024 94.8165 9.75044 94.7015 10.3024C94.1726 12.901 93.9349 14.8557 93.452 18.0752C93.383 18.5044 93.0994 19.6389 93.5516 19.9302ZM93.8889 18.1288C94.3335 14.871 94.6555 12.1804 94.9084 10.2794C94.9084 10.2794 94.9084 10.2027 94.9698 10.2104C96.0046 10.9769 103.103 16.2431 103.816 16.795C104.851 17.6076 104.851 18.2515 104.82 19.4933C104.759 21.6243 104.605 23.7476 104.398 25.8633C100.336 23.5637 97.4074 21.6626 95.3224 20.3288C94.9544 20.0912 94.0499 19.7769 93.7893 19.3783C93.5286 18.9797 93.8429 18.4968 93.8889 18.1442V18.1288ZM75.3997 67.073C75.0701 66.9197 74.2729 67.1957 74.2499 67.625C74.6107 67.3975 74.9966 67.2123 75.3997 67.073ZM78.2666 66.9121C78.2177 66.8277 78.1506 66.7554 78.07 66.7005C77.9895 66.6456 77.8976 66.6095 77.8013 66.5948C77.7049 66.58 77.6065 66.5871 77.5132 66.6155C77.42 66.6439 77.3343 66.6928 77.2625 66.7587C77.6027 66.7624 77.9408 66.814 78.2666 66.9121ZM77.1475 70.4229L76.7105 70.4765C78.6039 71.2431 77.3544 68.3992 76.9175 67.8319C77.0402 68.3302 77.9294 70.2619 77.1475 70.4229ZM74.9245 68.5678C75.0241 68.9817 75.1851 68.2765 75.1468 68.1309C75.0625 67.7399 74.8862 68.3762 74.9245 68.5678ZM77.9217 67.8319C78.1133 68.2229 78.167 67.6096 78.098 67.418C77.983 67.1114 77.7684 67.5023 77.9217 67.8319ZM76.9788 71.5727C76.4237 71.6028 75.8771 71.4252 75.4457 71.0744C75.3614 71.68 76.4576 72.0556 76.9788 71.5727ZM79.1022 81.2542C78.3356 81.3922 77.5691 81.5455 76.8485 81.7448C77.5308 81.6988 78.2206 81.6145 78.9029 81.5225C78.6116 82.0744 78.2896 82.6033 77.9523 83.1246C77.488 82.7136 77.0784 82.2448 76.7335 81.7295C76.9558 82.2507 77.6151 83.5845 78.2053 83.1783C78.4123 83.0173 79.3398 81.1776 79.1022 81.2542Z"
        fill="#5755FF"/>
</svg>
