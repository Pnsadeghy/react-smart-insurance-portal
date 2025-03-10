import React from "react";

interface componentProps {
    children: React.ReactNode;
}

export default function BaseButton({children}: componentProps) {
    return (<button type="button" className="button" >{children}</button>)
}