import {useLocation, useNavigate} from "react-router-dom";

export const NavbarMobile = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const navItems = [
        {
            link: "/",
            icon: HomeIcon
        },
        {
            link: "/category",
            icon: CategoryIcon
        },
        {
            link: "/cart",
            icon: CartIcon
        },
        {
            link: "/favorites",
            icon: HeartIcon
        },
        {
            link: "/personal",
            icon: UserIcon
        },
    ];

    return (
        <nav className={"fixed z-50 bottom-0 w-full py-4 px-6 bg-white shadow-[3px_0px_36px_0px_rgba(0,0,0,0.10)]"}>
            <div className={"flex justify-between"}>
                {navItems.map(item =>
                    <button
                        key={item.link}
                        className={"flex items-center border-none bg-transparent"}
                        onClick={() => navigate(item.link)}
                    >
                        <item.icon isActive={item.link === "/" ? location.pathname === "/" : location.pathname.includes(item.link)} />
                    </button>
                )}
            </div>
        </nav>
    );
}

const HomeIcon = ({isActive}) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 26 26" fill="none">
            <path
                d="M9.75016 22.1174V14.5341C9.75016 13.9358 10.2352 13.4508 10.8335 13.4508H15.1668C15.7651 13.4508 16.2502 13.9358 16.2502 14.5341V22.1174M4.3335 19.9508V11.7618C4.3335 10.4621 4.91688 9.23104 5.9228 8.40802L11.6281 3.74C12.4263 3.08699 13.5741 3.08699 14.3722 3.74L20.0775 8.40802C21.0834 9.23104 21.6668 10.4621 21.6668 11.7618V19.9508C21.6668 21.1474 20.6968 22.1174 19.5002 22.1174H17.3335H8.66683H6.50016C5.30355 22.1174 4.3335 21.1474 4.3335 19.9508Z"
                stroke={isActive ? "#5755FF" : "#B3B7BD"} strokeWidth="1.3" strokeLinecap="round"/>
        </svg>
    )
}

const CategoryIcon = ({isActive}) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path
                d="M2 6C2 3.79086 3.79086 2 6 2C8.20914 2 10 3.79086 10 6C10 8.20914 8.20914 10 6 10C3.79086 10 2 8.20914 2 6Z"
                stroke={isActive ? "#5755FF" : "#B3B7BD"} strokeWidth="1.2"/>
            <path
                d="M2 18C2 15.7909 3.79086 14 6 14C8.20914 14 10 15.7909 10 18C10 20.2091 8.20914 22 6 22C3.79086 22 2 20.2091 2 18Z"
                stroke={isActive ? "#5755FF" : "#B3B7BD"} strokeWidth="1.2"/>
            <path
                d="M14 6C14 3.79086 15.7909 2 18 2C20.2091 2 22 3.79086 22 6C22 8.20914 20.2091 10 18 10C15.7909 10 14 8.20914 14 6Z"
                stroke={isActive ? "#5755FF" : "#B3B7BD"} strokeWidth="1.2"/>
            <path
                d="M14 18C14 15.7909 15.7909 14 18 14C20.2091 14 22 15.7909 22 18C22 20.2091 20.2091 22 18 22C15.7909 22 14 20.2091 14 18Z"
                stroke={isActive ? "#5755FF" : "#B3B7BD"} strokeWidth="1.2"/>
        </svg>
    )
}

const CartIcon = ({isActive}) => {
    return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M1 1H5L7.68 14.39C7.77144 14.8504 8.02191 15.264 8.38755 15.5583C8.75318 15.8526 9.2107 16.009 9.68 16H19.4C19.8693 16.009 20.3268 15.8526 20.6925 15.5583C21.0581 15.264 21.3086 14.8504 21.4 14.39L23 6H6M10 21C10 21.5523 9.55228 22 9 22C8.44772 22 8 21.5523 8 21C8 20.4477 8.44772 20 9 20C9.55228 20 10 20.4477 10 21ZM21 21C21 21.5523 20.5523 22 20 22C19.4477 22 19 21.5523 19 21C19 20.4477 19.4477 20 20 20C20.5523 20 21 20.4477 21 21Z"
                stroke={isActive ? "#5755FF" : "#B3B7BD"} strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
    )
}

const HeartIcon = ({isActive}) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path
                d="M8.96173 18.9109L9.27127 18.5182L8.96173 18.9109ZM12 5.50063L11.6398 5.84737C11.734 5.9453 11.8641 6.00063 12 6.00063C12.1359 6.00063 12.266 5.9453 12.3602 5.84737L12 5.50063ZM15.0383 18.9109L15.3478 19.3035L15.0383 18.9109ZM9.27127 18.5182C7.77045 17.3351 6.08543 16.148 4.75136 14.6458C3.43443 13.1629 2.5 11.4125 2.5 9.1371H1.5C1.5 11.7246 2.57528 13.7014 4.00365 15.3098C5.41487 16.8989 7.21071 18.1672 8.65219 19.3035L9.27127 18.5182ZM2.5 9.1371C2.5 6.8927 3.76859 4.99759 5.52043 4.19682C7.24074 3.41046 9.5178 3.64273 11.6398 5.84737L12.3602 5.1539C9.98236 2.68336 7.25942 2.3024 5.1047 3.28733C2.98149 4.25786 1.5 6.51856 1.5 9.1371H2.5ZM8.65219 19.3035C9.16673 19.7092 9.70317 20.1286 10.243 20.4441C10.7826 20.7594 11.3731 21 12 21V20C11.6269 20 11.2174 19.8553 10.7475 19.5807C10.2777 19.3062 9.79501 18.9311 9.27127 18.5182L8.65219 19.3035ZM15.3478 19.3035C16.7893 18.1672 18.5851 16.8989 19.9964 15.3098C21.4247 13.7014 22.5 11.7246 22.5 9.1371H21.5C21.5 11.4125 20.5656 13.1629 19.2486 14.6458C17.9146 16.148 16.2295 17.3351 14.7287 18.5182L15.3478 19.3035ZM22.5 9.1371C22.5 6.51856 21.0185 4.25786 18.8953 3.28733C16.7406 2.3024 14.0176 2.68336 11.6398 5.1539L12.3602 5.84737C14.4822 3.64273 16.7593 3.41046 18.4796 4.19682C20.2314 4.99759 21.5 6.8927 21.5 9.1371H22.5ZM14.7287 18.5182C14.205 18.9311 13.7223 19.3062 13.2525 19.5807C12.7826 19.8553 12.3731 20 12 20V21C12.6269 21 13.2174 20.7594 13.757 20.4441C14.2968 20.1286 14.8333 19.7092 15.3478 19.3035L14.7287 18.5182Z"
                fill={isActive ? "#5755FF" : "#B3B7BD"}/>
        </svg>
    )
}

const UserIcon = ({isActive}) => {
    return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M20 21V19C20 17.9391 19.5786 16.9217 18.8284 16.1716C18.0783 15.4214 17.0609 15 16 15H8C6.93913 15 5.92172 15.4214 5.17157 16.1716C4.42143 16.9217 4 17.9391 4 19V21M16 7C16 9.20914 14.2091 11 12 11C9.79086 11 8 9.20914 8 7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7Z"
                stroke={isActive ? "#5755FF" : "#B3B7BD"} strokeLinecap="round" strokeLinejoin="round"/>
        </svg>

    )
}