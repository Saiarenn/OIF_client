import React, {useContext, useMemo} from 'react';
import {useRoutes} from "react-router-dom";
import {Context} from "../main.jsx";
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
                path: '*',
                element: <div>Not found</div>,
            }
        ]
    },
];


const AppRouter = observer(() => {
    const {userStore} = useContext(Context);

    const routeList = useMemo(() => {
        return userStore.isAuth ? privateRoutes : publicRoutes
    }, [userStore.isAuth])

    const context = useRoutes(routeList)

    return (
        <>
            {context}
        </>
    );
});

export default AppRouter;