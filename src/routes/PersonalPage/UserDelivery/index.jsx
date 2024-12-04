import React, {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";

export const UserDelivery = () => {
    const navigate = useNavigate();
    const [orders, setOrders] = useState([]);
    const [contentHeight, setContentHeight] = useState(window.innerHeight);

    useEffect(() => {
        const updateContentHeight = () => {
            const fixedHeight = orders.length ? 115 + 133 : 115 + 88;
            setContentHeight(window.innerHeight - fixedHeight);
        };

        updateContentHeight();
        window.addEventListener("resize", updateContentHeight);

        return () => window.removeEventListener("resize", updateContentHeight);
    }, [orders.length]);

    return (
        <div style={orders.length ? {} : {height: contentHeight + "px"}}>
            <div className="bg-white px-6 py-4 flex border-b-[1px] border-[#EBECEE]">
                <button onClick={() => navigate("/personal")}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M13.9998 6L8.70696 11.2929C8.31643 11.6834 8.31643 12.3166 8.70696 12.7071L13.9998 18"
                              stroke="#0E0D35" strokeLinecap="round"/>
                    </svg>
                </button>

                <span className="uppercase w-full text-center">
                    Доставки
                </span>
            </div>

            {orders.length ?
                <div className="bg-[#EBECEE]">

                </div>
                :
                <div className="flex flex-col gap-8 h-full items-center justify-center">
                    {emptyOrdersIcon}
                    <div className="text-center">
                        <div className="text-[23px]">Нет актуальных доставок</div>
                        <div className="text-[#6E6E86]">Закажите товары из Каталога!</div>
                    </div>
                </div>
            }
            <div style={{height: orders.length ? "133px" : "88px"}}></div>

            <div
                className="bg-white fixed p-4 w-full bottom-[58px] rounded-t-xl shadow-[3px_0px_36px_0px_rgba(0,0,0,0.10)]">
                <button
                    className="p-4 bg-[#5755FF] text-white w-full rounded-2xl"
                    onClick={() => navigate("/")}>
                    {"За покупками"}
                </button>

            </div>

        </div>
    )
}

const emptyOrdersIcon = <svg xmlns="http://www.w3.org/2000/svg" width="155" height="154" viewBox="0 0 155 154"
                             fill="none">
    <path
        d="M117.882 64.8348C117.56 64.8348 117.56 65.4327 117.882 65.4327C118.649 65.4327 129.327 65.2564 130.224 65.0801C130.306 65.0678 130.38 65.0266 130.434 64.964C130.488 64.9014 130.518 64.8216 130.518 64.739C130.518 64.6564 130.488 64.5765 130.434 64.5139C130.38 64.4513 130.306 64.4101 130.224 64.3978C127.411 64.0299 120.979 64.7735 117.882 64.8348ZM122.16 80.4877C121.807 80.4877 121.868 81.078 122.206 81.0933C124.705 81.1776 128.599 81.0473 131.151 80.9323C131.619 80.9323 131.673 80.1658 131.151 80.1658C128.292 80.1811 125.027 80.2194 122.16 80.4877ZM122.489 54.0494C122.415 54.0526 122.344 54.0827 122.291 54.1341C122.237 54.1855 122.204 54.2546 122.197 54.3287C122.191 54.4028 122.211 54.4767 122.255 54.5367C122.299 54.5967 122.363 54.6388 122.436 54.655C123.808 54.8236 128.261 54.9999 129.603 54.4327C129.672 54.3987 129.727 54.3432 129.762 54.2747C129.796 54.2062 129.807 54.1283 129.793 54.053C129.779 53.9776 129.741 53.9088 129.685 53.857C129.628 53.8052 129.557 53.7732 129.48 53.7658C127.702 53.6585 124.85 54.2257 122.489 54.0494ZM113.735 68.8592C120.205 68.7672 127.533 68.3149 134.064 67.717C134.471 67.717 134.432 66.9505 134.011 66.9505C127.587 67.1114 120.082 67.533 113.697 68.1923C113.609 68.1973 113.526 68.2374 113.467 68.3035C113.408 68.3696 113.378 68.4564 113.383 68.5449C113.388 68.6333 113.428 68.7161 113.494 68.775C113.56 68.834 113.647 68.8642 113.735 68.8592ZM123.011 34.717C124.812 34.5791 126.613 34.4717 128.376 34.2571C128.882 34.2034 128.752 33.4906 128.254 33.4906C126.46 33.6285 124.666 33.8585 122.888 34.0655C122.474 34.1115 122.589 34.7477 123.011 34.717ZM112.494 50.7073C112.11 50.7073 112.095 51.3588 112.494 51.3895C116.827 51.5913 121.17 51.2878 125.433 50.485C125.916 50.4006 125.839 49.6341 125.349 49.7184C121.103 50.4424 116.8 50.7735 112.494 50.7073ZM126.759 38.3888C127.426 38.5498 127.526 37.4613 126.912 37.5686C123.921 38.0536 120.888 38.2411 117.859 38.1282C117.453 38.1282 117.361 38.7184 117.775 38.7644C120.772 39.0653 123.797 38.9388 126.759 38.3888ZM110.156 68.4989C109.558 68.2689 106.798 68.6522 106.024 68.7365C105.648 68.7365 105.633 69.3421 106.024 69.3344L109.159 69.2348C110.608 69.1811 110.6 68.6752 110.156 68.4989ZM113.321 101.668C112.678 101.514 108.101 101.859 107.35 101.905C106.951 101.905 107.028 102.518 107.427 102.511C108.239 102.511 112.693 102.511 113.398 102.288C113.712 102.181 113.605 101.729 113.321 101.668ZM107.342 98.425C109.496 98.5246 114.832 98.6166 116.986 98.103C117.036 98.1027 117.086 98.0917 117.131 98.071C117.177 98.0502 117.218 98.0201 117.252 97.9825C117.285 97.9449 117.31 97.9007 117.326 97.8528C117.341 97.8049 117.346 97.7543 117.341 97.7043C117.336 97.6542 117.32 97.6059 117.295 97.5623C117.269 97.5187 117.235 97.481 117.195 97.4514C117.154 97.4218 117.107 97.401 117.058 97.3905C117.009 97.3799 116.958 97.3798 116.909 97.3902C113.758 97.3902 110.838 97.9191 107.434 97.7811C107.028 97.7658 106.921 98.402 107.342 98.425ZM114.778 84.7957C115.238 84.7114 115.199 84.0292 114.717 84.0292C111.313 84.3741 110.6 84.4585 107.112 84.5964C106.775 84.5964 106.737 85.179 107.112 85.202C109.675 85.3721 112.248 85.2357 114.778 84.7957ZM119.5 79.9741C115.33 80.1274 110.999 80.8327 106.645 80.986C106.567 80.998 106.496 81.0374 106.445 81.0971C106.393 81.1569 106.365 81.233 106.365 81.3118C106.365 81.3905 106.393 81.4666 106.445 81.5264C106.496 81.5861 106.567 81.6256 106.645 81.6376C110.255 81.6376 116.066 81.4689 119.584 80.687C119.658 80.6545 119.719 80.5993 119.758 80.5296C119.798 80.4599 119.814 80.3792 119.805 80.2995C119.796 80.2197 119.761 80.1451 119.706 80.0866C119.651 80.028 119.579 79.9886 119.5 79.9741ZM133.704 99.7894C133.643 99.7894 129.434 100.134 128.714 100.111C128.645 100.124 128.583 100.158 128.536 100.208C128.488 100.259 128.458 100.323 128.451 100.392C128.443 100.461 128.458 100.531 128.493 100.591C128.528 100.651 128.581 100.698 128.645 100.725C129.503 100.886 133.121 100.947 133.865 100.318C133.902 100.277 133.929 100.227 133.941 100.172C133.953 100.118 133.951 100.062 133.935 100.008C133.918 99.9549 133.889 99.9067 133.848 99.8684C133.808 99.83 133.758 99.8028 133.704 99.7894ZM135.061 83.071C129.749 83.4159 123.815 83.6152 118.526 84.0675C118.112 84.0675 118.189 84.6884 118.588 84.7114C121.447 84.7957 131.619 84.2745 135.13 83.8299C135.18 83.8261 135.229 83.8122 135.273 83.7892C135.318 83.7662 135.358 83.7344 135.39 83.6958C135.422 83.6572 135.446 83.6126 135.461 83.5645C135.475 83.5164 135.48 83.4659 135.475 83.4159C135.465 83.3155 135.416 83.223 135.339 83.1585C135.261 83.0939 135.161 83.0625 135.061 83.071ZM115.107 65.6397C115.209 65.6397 115.307 65.5993 115.378 65.5274C115.45 65.4555 115.491 65.358 115.491 65.2564C115.491 65.1547 115.45 65.0572 115.378 64.9854C115.307 64.9135 115.209 64.8731 115.107 64.8731C111.804 64.9574 108.469 64.9804 105.142 65.2334C105.071 65.2493 105.007 65.2891 104.961 65.3462C104.915 65.4034 104.89 65.4744 104.89 65.5477C104.89 65.6209 104.915 65.692 104.961 65.7491C105.007 65.8063 105.071 65.8461 105.142 65.8619C108.484 65.9233 111.804 65.747 115.107 65.6397ZM128.177 96.5853C127.012 96.5853 122.811 96.8842 121.815 97.0605C121.493 97.1142 121.447 97.6431 121.815 97.6584C122.896 97.7121 127.073 97.4438 128.284 97.3365C128.752 97.3518 128.652 96.5853 128.177 96.5853ZM125.939 100.886L116.303 101.499C115.866 101.499 115.974 102.166 116.403 102.143C118.273 102.058 124.291 101.821 125.977 101.591C126.353 101.545 126.36 100.886 125.939 100.886ZM119.04 34.2571C116.211 33.9351 107.335 34.4717 104.322 34.7784C103.908 34.8167 103.878 35.4606 104.322 35.4223C109.274 35.1003 114.096 34.993 119.048 35.0083C119.134 34.9899 119.211 34.9421 119.267 34.873C119.322 34.804 119.352 34.718 119.351 34.6296C119.35 34.5412 119.318 34.4558 119.262 34.3879C119.205 34.32 119.127 34.2738 119.04 34.2571ZM119.86 54.9463C120.343 54.8773 120.167 54.1797 119.684 54.1797C114.75 54.7418 109.786 54.9979 104.82 54.9463C104.748 54.9578 104.683 54.9946 104.635 55.0501C104.588 55.1056 104.562 55.1761 104.562 55.2491C104.562 55.322 104.588 55.3926 104.635 55.4481C104.683 55.5036 104.748 55.5404 104.82 55.5519C109.842 55.7937 114.874 55.591 119.86 54.9463ZM114.655 38.8947C114.706 38.8899 114.755 38.8752 114.799 38.8514C114.844 38.8275 114.884 38.7951 114.916 38.7559C114.948 38.7167 114.972 38.6715 114.986 38.623C115.001 38.5744 115.005 38.5235 115 38.4731C114.995 38.4227 114.981 38.3737 114.957 38.329C114.933 38.2843 114.901 38.2448 114.861 38.2127C114.822 38.1806 114.777 38.1567 114.728 38.1421C114.68 38.1276 114.629 38.1229 114.579 38.1282C111.198 38.5498 107.994 38.5651 104.659 38.8564C104.307 38.8947 104.268 39.4696 104.659 39.485C108.001 39.539 111.343 39.3417 114.655 38.8947ZM105.158 51.0292C104.774 51.0292 104.767 51.6348 105.204 51.6501C106.579 51.7797 107.962 51.8155 109.343 51.7574C109.405 51.7297 109.458 51.6845 109.495 51.6273C109.532 51.5702 109.552 51.5036 109.552 51.4355C109.552 51.3674 109.532 51.3007 109.495 51.2436C109.458 51.1865 109.405 51.1413 109.343 51.1135C109.205 51.0369 105.863 51.0292 105.158 51.0292ZM95.5911 55.4445C96.0357 55.4445 97.6838 52.7156 98.6113 51.7804C98.9486 51.4432 98.3967 50.8759 98.0517 51.1979C97.0738 52.0795 96.2272 53.0965 95.5375 54.2181L93.5981 52.432C93.1995 52.0641 92.6859 52.6926 93.0538 53.0682C93.4218 53.4438 95.0239 55.4445 95.5911 55.4445ZM90.3479 42.9268C93.4908 43.1108 96.7563 43.0494 100.206 43.0724C100.451 43.0724 100.597 42.3902 100.206 34.2494C100.206 33.6592 100.152 33.2223 100.144 33.0613C100.146 33.0375 100.143 33.0137 100.135 32.9912C100.127 32.9687 100.115 32.9482 100.098 32.931C99.8761 32.6933 98.4273 32.7087 95.1695 32.793C89.6887 32.9233 89.0831 32.885 89.0831 33.1993C89.0601 33.2606 89.4051 42.8348 90.3479 42.9268ZM90.5625 42.3595C90.1793 40.3128 89.9033 35.9895 89.6657 33.5672C91.8963 33.6975 96.9786 33.4446 99.5388 33.3832C99.5388 33.3832 99.6768 40.1979 99.7381 42.3979C96.7333 42.3289 93.5981 42.2139 90.5319 42.3212L90.5625 42.3595Z"
        fill="#5755FF"/>
    <path
        d="M101.263 57.4452C101.907 57.1923 101.156 50.048 101.048 48.17C101.043 48.1314 101.024 48.0959 100.995 48.0703C100.535 47.6717 90.8072 48.2006 90.3166 48.239C89.826 48.2773 90.3166 50.9449 90.4009 52.7616C90.5772 57.2843 90.7842 57.6752 91.0142 57.7059C92.6852 57.9435 99.7298 58.0431 101.263 57.4452ZM90.7842 48.8675C94.1034 48.6529 97.4685 48.6376 100.458 48.6222C100.535 50.416 100.657 55.4675 100.811 56.832C97.6865 57.1551 94.5426 57.2448 91.4051 57.1003C91.5354 55.9581 90.8992 50.163 90.7842 48.8675ZM97.0239 68.2229L98.8023 66.6132C98.8542 66.5255 98.877 66.4238 98.8675 66.3224C98.858 66.221 98.8168 66.1252 98.7496 66.0487C98.6824 65.9722 98.5928 65.9188 98.4935 65.8963C98.3942 65.8738 98.2904 65.8832 98.1967 65.9233C97.4685 66.3718 96.8078 66.9215 96.2344 67.556L94.6399 66.0842C94.5535 66.0039 94.4388 65.9613 94.3209 65.9656C94.203 65.9699 94.0917 66.0208 94.0114 66.1072C93.9311 66.1936 93.8884 66.3084 93.8927 66.4263C93.897 66.5442 93.948 66.6555 94.0344 66.7358L95.5675 68.2689C94.1877 69.7254 93.5821 70.6376 93.7201 71.0515C93.8581 71.4654 94.3563 71.2815 94.4866 71.0975C95.0232 70.4383 95.6288 69.687 96.2804 68.9895C96.9263 69.6947 97.6429 70.3317 98.419 70.8905C98.4991 70.9113 98.5833 70.9101 98.6627 70.887C98.7422 70.8639 98.8139 70.8199 98.8704 70.7594C98.9269 70.699 98.9661 70.6245 98.9838 70.5437C99.0015 70.4629 98.997 70.3788 98.971 70.3003C98.3939 69.5437 97.7416 68.8477 97.0239 68.2229ZM97.4302 35.3609C96.2057 36.4318 95.2053 37.7344 94.4866 39.1937C93.9092 38.5024 93.2444 37.8892 92.5089 37.3693C92.0567 37.055 91.4741 37.6529 91.9187 37.9902C92.7931 38.763 93.6103 39.5982 94.364 40.4891C94.5633 40.6961 94.7549 40.5888 94.9236 40.3665C95.7584 38.7401 96.788 37.2214 97.9898 35.8438C98.3577 35.4376 97.8288 34.9853 97.4302 35.3609ZM97.1849 85.409C97.5835 85.133 99.1013 82.2048 99.9828 81.2083C100.328 80.825 99.7298 80.2961 99.3389 80.7024C98.2895 81.7835 97.3898 83.0003 96.6636 84.3205L94.8776 82.7874C94.4866 82.4578 93.9654 83.048 94.3717 83.4389C94.7779 83.8299 96.5257 85.9762 97.1849 85.409ZM103.034 95.2361C102.742 94.6612 92.256 95.2361 92.1563 95.2361C92.1335 95.2389 92.1117 95.2474 92.0929 95.2608C92.0742 95.2742 92.0591 95.2921 92.049 95.3128C91.6964 95.88 92.049 105.102 92.302 105.96C92.6009 107.003 102.765 106.136 103.271 106.182C103.287 106.186 103.302 106.186 103.318 106.182C103.333 106.179 103.347 106.172 103.36 106.163C103.372 106.153 103.382 106.141 103.389 106.128C103.397 106.114 103.401 106.098 103.402 106.083C103.563 104.91 103.072 95.3128 103.034 95.2361ZM92.6469 95.7957C95.7131 95.926 99.3389 95.7344 102.451 95.7267C102.497 97.0069 102.773 104.519 102.811 105.531C99.4079 105.684 96.5487 105.631 92.9229 105.531C92.9612 104.251 92.6929 96.9609 92.6469 95.8187V95.7957Z"
        fill="#5755FF"/>
    <path
        d="M96.3507 100.763C96.8949 100.763 99.6775 100.955 99.8998 100.832C99.9584 100.799 100.009 100.752 100.046 100.696C100.084 100.641 100.108 100.577 100.117 100.51C100.126 100.443 100.119 100.375 100.098 100.311C100.076 100.248 100.04 100.19 99.9918 100.142C99.5855 99.7128 97.0176 99.8048 96.5883 99.8891C96.0058 99.9965 95.8984 100.219 95.9138 100.387C95.9342 100.49 95.9883 100.582 96.0675 100.65C96.1467 100.719 96.2464 100.758 96.3507 100.763ZM97.3855 78.2648C94.8713 78.3108 92.2267 78.4027 91.7897 78.4334C91.6211 78.4334 91.4448 78.579 91.4218 80.1735C91.4218 82.0822 91.7514 88.1303 92.5179 88.1839C94.051 88.2989 101.977 88.3296 102.997 88.2529C103.158 88.2529 103.288 88.2529 102.997 84.2669C102.836 82.2125 102.475 78.4794 102.475 78.4794C102.445 78.3261 102.429 78.1881 97.3855 78.2648ZM101.901 78.9393C102.084 81.7986 102.184 84.7268 102.491 87.6013H92.7402C92.4413 84.8341 92.242 81.9825 92.0274 79.0543L101.901 78.9393ZM93.5988 73.9491C96.711 73.9491 101.916 73.5275 101.962 73.5045C102.452 73.2515 101.962 66.3296 101.801 63.3707C101.801 62.8418 99.0949 62.8341 96.849 62.9184C95.8678 62.9184 90.9925 63.1791 91.0078 63.8766C91.2685 74.1407 91.2071 73.6425 91.3988 73.7498C92.1161 73.9369 92.8595 74.0043 93.5988 73.9491ZM91.9814 73.1825C91.8051 70.1623 91.7437 66.9582 91.6211 63.9839C94.8042 63.7012 98.0004 63.5938 101.195 63.662C101.195 64.7122 101.402 71.6954 101.533 72.8606C100.398 72.9372 93.1695 72.9909 92.0044 73.1902L91.9814 73.1825Z"
        fill="#5755FF"/>
    <path
        d="M149.557 85.294C147.548 30.662 148.391 31.1219 148.023 30.8C147.502 30.3094 143.478 30.6313 142.489 30.685L142.075 22.3066C142.095 22.2561 142.102 22.2015 142.096 22.1476C142.09 22.0937 142.072 22.0419 142.042 21.9968C142.011 21.9517 141.971 21.9144 141.923 21.8883C141.876 21.8622 141.823 21.8479 141.768 21.8467C125.671 21.6474 109.106 22.7129 92.4946 23.8397C88.018 24.154 83.365 24.43 78.8117 24.9129C78.7691 24.906 78.7256 24.9087 78.6842 24.9208C78.6427 24.9328 78.6045 24.9539 78.5723 24.9825C78.54 25.0111 78.5145 25.0465 78.4976 25.0862C78.4806 25.1258 78.4727 25.1688 78.4744 25.2118C79.3176 45.6787 81.7706 78.763 86.0096 115.396C86.0556 115.818 89.5511 115.45 92.6939 115.243C92.735 116.145 92.8975 117.037 93.1768 117.895C93.6368 118.478 150.499 114.952 150.43 112.53C150.185 103.431 149.856 94.2167 149.557 85.294ZM145.249 109.195C125.088 112.261 106.959 113.12 86.7148 114.868C82.7058 80.1351 81.0577 56.3108 79.0493 25.4495C85.2737 25.0815 108.293 22.9659 141.546 22.5289C142.374 44.8125 145.456 106.742 145.226 109.195H145.249ZM49.0236 56.4947C48.5023 56.4947 48.51 57.5066 48.7553 57.8899C48.7836 57.946 48.8277 57.9926 48.8822 58.0239C48.9367 58.0552 48.9991 58.0699 49.0619 58.0662C49.5295 58.0125 49.5065 56.5484 49.0236 56.4947ZM46.287 60.9254C46.6166 61.0097 47.5058 61.0634 47.7128 60.7568C48.004 60.3275 47.2145 56.4334 47.1149 56.1575C47.0943 56.1012 47.0545 56.0539 47.0024 56.0243C46.9504 55.9946 46.8895 55.9844 46.8305 55.9954C46.7716 56.0065 46.7186 56.038 46.6808 56.0846C46.643 56.1311 46.623 56.1895 46.6243 56.2495C46.6243 56.947 46.9385 59.3157 47.0612 60.3045L46.2946 60.3505C46.2386 60.3744 46.1907 60.414 46.1568 60.4646C46.1229 60.5152 46.1044 60.5745 46.1035 60.6355C46.1027 60.6964 46.1196 60.7562 46.1522 60.8077C46.1848 60.8591 46.2316 60.9001 46.287 60.9254ZM48.372 55.0613C48.5989 54.9992 48.8375 54.9932 49.0672 55.044C49.297 55.0947 49.5109 55.2006 49.6905 55.3526C49.9894 55.6209 50.5643 55.1073 49.7441 54.586C49.1539 54.1874 47.7741 54.0495 47.9197 54.7547C47.9435 54.8529 48.003 54.9387 48.0866 54.9954C48.1702 55.0521 48.272 55.0756 48.372 55.0613Z"
        fill="#5755FF"/>
    <path
        d="M70.8467 82.9254C65.9178 78.0655 57.0488 72.3547 49.0767 71.2202C49.2087 70.7645 49.2087 70.2808 49.0767 69.8251C49.6835 69.3179 50.2476 68.7615 50.7631 68.1617C51.8593 66.8739 51.8363 65.6167 50.2725 66.253C51.8056 62.8648 51.8056 55.5213 51.2537 51.3972C53.8216 52.9993 58.1526 51.4586 57.6237 48.331C61.1115 49.3812 63.3805 42.4516 58.9498 41.2021C59.5708 35.9589 52.8558 35.2 50.8014 38.2586C49.6439 34.8781 44.3241 36.6565 44.7073 39.3087C42.308 36.7331 37.1262 37.63 36.4056 40.8418C34.2363 38.8718 30.6565 39.7073 30.9708 42.6126C27.5366 41.0181 25.7199 45.1269 28.3875 46.4453C26.6781 47.3652 26.7317 51.1519 29.3533 51.1519C29.3533 53.6816 30.8864 59.4767 34.6809 62.6502C35.0871 66.1993 34.3589 68.016 33.0941 71.3045C20.584 73.2056 11.0865 82.9638 6.82444 95.0676C1.96451 108.865 4.27183 121.897 18.6753 124.641C18.6453 126.482 18.4296 128.316 18.0314 130.114C18.0242 130.182 18.0417 130.25 18.0807 130.306C18.1197 130.362 18.1776 130.402 18.2438 130.419C18.3099 130.436 18.3798 130.428 18.4408 130.398C18.5018 130.367 18.5496 130.315 18.5757 130.252C19.0888 128.466 19.3671 126.621 19.4035 124.764C22.8735 125.279 26.4184 124.738 29.5767 123.211C32.7349 121.684 35.3603 119.241 37.1108 116.201C39.3298 117.044 41.5948 117.761 43.8948 118.348C51.131 120.394 60.5673 122.426 69.5052 120.003C69.3289 124.288 69.0836 127.723 68.7004 131.134C68.7004 131.471 69.168 131.571 69.2216 131.233C69.5206 129.44 70.2641 121.567 70.2181 119.796C75.9059 118.049 79.708 114.101 80.6432 108.973C82.276 100.28 78.5965 90.5219 70.8467 82.9254ZM38.2913 49.9101C38.4906 52.1485 38.2913 53.7429 37.6091 54.7777C37.3561 55.1533 36.9729 55.5443 36.6432 55.5443C36.3903 55.2683 34.7345 53.5512 33.1708 54.5554C32.1513 55.2223 32.1053 56.5178 33.0711 58.2042C33.7614 59.2285 34.2553 60.3722 34.5276 61.577C31.5917 58.3882 30.6948 55.3986 30.0202 51.1136C30.7995 50.9731 31.5107 50.5797 32.0439 49.9944C33.3854 51.9875 36.6662 51.5889 38.2913 49.9101ZM33.5387 55.0613C34.5736 54.4251 35.5317 55.1917 36.4056 55.9582C36.9192 56.4105 37.7624 55.7742 38.161 55.1917C39.2035 53.7505 39.1115 51.3589 38.9736 50.1631C39.7176 50.8717 40.7057 51.2669 41.7331 51.2669C42.7606 51.2669 43.7487 50.8717 44.4927 50.1631C44.646 52.3708 49.276 52.8767 50.4948 51.0446C51.0544 54.8774 51.3227 63.1638 49.4676 66.6362C47.9345 67.3108 44.4467 68.8516 42.7143 68.1693C41.2272 67.5791 40.476 65.3101 38.7436 64.3366C37.5784 63.6927 36.5819 64.4209 37.3945 65.724C39.4488 68.9896 39.2648 70.2314 37.6398 73.5889C36.2155 73.2007 34.8835 72.5308 33.7227 71.6188C35.4091 69.2042 35.869 64.8962 35.4474 62.0293C35.0718 59.4767 34.6809 59.63 33.669 57.7443C33.2014 56.9701 32.7875 55.5366 33.5387 55.0613ZM46.4704 70.5227C46.4093 70.551 46.3606 70.6008 46.3336 70.6625C46.3067 70.7243 46.3032 70.7938 46.324 70.8579C46.3447 70.9221 46.3882 70.9764 46.4463 71.0106C46.5043 71.0449 46.5729 71.0567 46.639 71.0439C47.2964 70.9264 47.9195 70.6646 48.4634 70.2774C48.5076 70.9921 48.3193 71.702 47.9269 72.301C47.7889 72.4927 48.0342 73.0676 48.5324 72.3547C48.4941 74.4704 47.4133 77.0843 45.3359 78.1115C43.928 77.857 42.5881 77.3135 41.4007 76.5153C40.2133 75.7171 39.2042 74.6815 38.437 73.4739C40.7366 69.5338 38.7129 66.5749 38.0384 65.3484C37.6628 64.6432 37.8544 64.5359 38.4676 64.9345C39.9164 65.8544 41.1889 68.4223 42.5917 68.7673C45.2363 69.4035 48.4941 67.8091 50.0885 67.0962C50.9164 66.7206 51.3993 66.4676 50.4028 67.7171C49.069 69.3652 48.3101 69.7101 46.4704 70.5227ZM14.03 103.239C14.0023 103.301 13.9979 103.372 14.0178 103.437C14.0377 103.502 14.0804 103.558 14.1381 103.594C14.1959 103.631 14.2648 103.645 14.3322 103.635C14.3997 103.624 14.4611 103.59 14.5053 103.538C21.2279 92.9442 32.3506 85.593 38.0767 74.2558C38.9659 76.2335 42.768 78.7784 45.1136 78.7784C45.1136 80.6871 44.922 82.9561 44.7227 85.1331C42.423 84.6042 36.2063 82.6571 35.0871 80.1122C34.9568 79.7979 34.4509 80.0125 34.5736 80.3268C35.6237 83.1707 42.1087 85.455 44.6537 85.938C44.1161 91.6656 43.0512 97.3314 41.4725 102.863C40.315 107.003 38.8279 112.008 36.6816 115.711C34.9704 118.755 32.3522 121.189 29.1919 122.674C26.0315 124.16 22.4865 124.622 19.0509 123.997C4.9004 121.514 2.76939 108.75 7.57566 95.2669C12.0676 82.6341 21.9025 73.7422 33.2474 72.0558C34.4806 72.9651 35.8287 73.7074 37.2565 74.2634C31.5074 85.3554 20.5457 92.6376 14.03 103.239ZM42.1317 103.185C49.5804 100.046 57.4946 98.1532 65.5575 97.5819C67.8572 97.4286 70.1568 97.4362 72.4565 97.4362C72.7937 97.4362 72.8014 96.8843 72.4565 96.8843C70.8926 96.7758 69.3242 96.7477 67.7575 96.8C67.3819 93.7338 61.8551 84.7881 59.977 82.3122C59.9289 82.2667 59.8661 82.2401 59.8 82.2371C59.734 82.234 59.669 82.2549 59.617 82.2957C59.5649 82.3366 59.5293 82.3948 59.5166 82.4597C59.5039 82.5247 59.515 82.592 59.5478 82.6495C63.3115 87.9233 66.3547 94.6383 66.9603 96.8306C60.2223 97.0836 49.8279 98.678 42.3464 102.342C43.0516 99.7589 45.7805 89.1038 45.8418 78.5791C47.9499 77.6362 49.4523 74.2251 49.276 71.9331C57.2239 73.7432 64.5135 77.7236 70.3331 83.4314C77.1631 90.1233 81.3484 98.7624 80.0606 108.153C79.3784 113.518 75.5686 117.673 69.8808 119.183C60.0767 121.866 49.9889 119.536 40.3073 116.531C39.3701 116.216 38.4154 115.954 37.4481 115.749C39.4073 111.72 40.9756 107.513 42.1317 103.185Z"
        fill="#5755FF"/>
    <path
        d="M41.7562 53.8348C41.9543 53.542 42.2185 53.3 42.5274 53.1282C42.8364 52.9564 43.1814 52.8597 43.5346 52.8459C44.0942 52.8459 44.0635 52.0027 43.5346 52.0794C43.0793 52.1273 42.6409 52.2785 42.253 52.5216C41.8651 52.7647 41.5378 53.0933 41.2963 53.4822C41.097 53.7965 41.5415 54.1414 41.7562 53.8348ZM43.5652 55.9581C43.251 56.2111 43.274 57.4912 43.7492 57.4912C43.8579 57.4799 43.9596 57.432 44.0375 57.3555C44.1155 57.2789 44.1652 57.1781 44.1785 57.0696C44.3548 56.4027 43.9025 55.7205 43.5652 55.9581ZM42.8907 62.2898C42.8764 62.2299 42.8439 62.1759 42.7976 62.1351C42.7514 62.0943 42.6937 62.0689 42.6325 62.0621C42.5712 62.0554 42.5094 62.0678 42.4554 62.0976C42.4015 62.1274 42.3581 62.1731 42.3311 62.2285C42.2544 62.3358 42.1088 62.6654 42.4307 63.3323C42.6493 63.7863 43.0265 64.1446 43.4911 64.3395C43.9558 64.5344 44.4757 64.5524 44.9527 64.3902C45.0173 64.3645 45.0702 64.316 45.1014 64.2539C45.1327 64.1918 45.14 64.1204 45.122 64.0533C45.104 63.9861 45.062 63.9279 45.004 63.8897C44.9459 63.8515 44.8758 63.8359 44.8071 63.8459C43.7185 64.0606 43.09 63.3707 42.8907 62.2898Z"
        fill="#5755FF"/>
</svg>
