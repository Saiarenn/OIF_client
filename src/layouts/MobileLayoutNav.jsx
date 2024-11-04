import React from 'react';
import {Outlet} from "react-router-dom";
import {NavbarMobile} from "../components/NavbarMobile/index.jsx";

const MobileLayoutNav = () => {
    return (
        <div>
            <Outlet />
            <div style={{height: '58px'}}></div>
            <NavbarMobile />
        </div>
    );
};

export default MobileLayoutNav;