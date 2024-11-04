import React from 'react';

const AppButton = ({children, variant, ...props}) => {
    const variants = {
        outlined: "bg-white border-[1px] text-[#5755FF]",
        disabled: "bg-[#B3B7BD] border-[1px] text-[#B3B7BD]",
    }

    return (
        <button disabled={variant === "disabled"}
                className={`bg-[#5755FF] w-full p-4 rounded-2xl
                 flex items-center justify-center border-none text-white ${variants[variant]}`}
                {...props}>
            {children}
        </button>
    );
};

export default AppButton;