import React, {useMemo} from 'react';
import {useRoutes} from "react-router-dom";
import PhoneNumberScreen from "./PhoneNumberScreen/index.jsx";
import CodeVerification from "./CodeVerification/index.jsx";
import PasswordRegistration from "./PasswordRegistration/index.jsx";
import MobileLayout from "../layouts/MobileLayout.jsx";
import MobileLayoutNav from "../layouts/MobileLayoutNav.jsx";
import HomePage from "./HomePage/index.jsx";
import {observer} from "mobx-react-lite";
import {CategoryPage} from "./CategoryPage/index.jsx";
import {SubcategoryPage} from "./SubcategoryPage/index.jsx";
import {CategoryProducts} from "./CategoryProducts/index.jsx";
import {ProductPage} from "./ProductPage/index.jsx";
import {CartPage} from "./CartPage/index.jsx";
import {OrdersPage} from "./OrdersPage/index.jsx";
import {OrderPage} from "./OrderPage/index.jsx";
import {PaymentPage} from "./PaymentPage/index.jsx";
import {PaymentSuccess} from "./PaymentSuccess/index.jsx";


const publicRoutes = [
    {
        path: '/',
        element: <MobileLayout/>,
        children: [
            {
                path: '/',
                element: <PhoneNumberScreen/>,
            },
            {
                path: '/code-verification',
                element: <CodeVerification/>,
            },
            {
                path: '/forget-password',
                element: <CodeVerification/>,
            },
            {
                path: '/registration/password',
                element: <PasswordRegistration/>,
            },
            {
                path: '/login',
                element: <PasswordRegistration/>,
            },
        ]
    }
];

const privateRoutes = [
    {
        path: '/',
        element: <MobileLayoutNav/>,
        children: [
            {
                path: '/',
                element: <HomePage/>,
            },
            {
                path: '/category',
                element: <CategoryPage/>,
            },
            {
                path: '/category/:path',
                element: <SubcategoryPage/>,
            },
            {
                path: '/category/:path/products',
                element: <CategoryProducts/>,
            },
            {
                path: '/product/:id',
                element: <ProductPage/>,
            },
            {
                path: '/cart',
                element: <CartPage/>,
            },
            {
                path: '/orders',
                element: <OrdersPage/>,
            },
            {
                path: '/orders/create',
                element: <OrderPage/>,
            },
            {
                path: '/orders/create/payment',
                element: <PaymentPage/>,
            },
            {
                path: '/orders/create/payment/success',
                element: <PaymentSuccess/>,
            },
            {
                path: '*',
                element: <div>Not found</div>,
            }
        ]
    },
];


const AppRouter = observer(() => {
    const routeList = useMemo(() => {
        return localStorage.getItem("token") ? privateRoutes : publicRoutes
    }, [localStorage.getItem("token")])

    const context = useRoutes(routeList)

    return (
        <>
            {context}
        </>
    );
});

export default AppRouter;