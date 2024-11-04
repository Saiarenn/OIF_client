import React from 'react';
import {Outlet} from "react-router-dom";

const MobileLayout = () => {
    return (
        <div className={"flex flex-col justify-content h-[100dvh] max-w-[500px] p-4 mx-auto"}>
            <Outlet/>
        </div>
    );
};

export default MobileLayout;