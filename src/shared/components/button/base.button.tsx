import React from "react";

interface componentProps {
    children: React.ReactNode;
    onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export default function BaseButton({children, onClick}: componentProps) {
    return (
        <button type="button"
                onClick={onClick}
                className="button" >
            {children}
        </button>
    )
}