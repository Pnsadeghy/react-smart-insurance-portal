import React from "react";

interface componentProps {
    title: string;
    children: React.ReactNode;
}

export default function BaseSectionTitle({title, children}: Readonly<componentProps>) {
    return (
        <div className="flex items-center justify-between pb-2 border-b border-gray-200" >
            <h3 className="font-semibold" >{title}</h3>
            <div>
                {children}
            </div>
        </div>
    )
}