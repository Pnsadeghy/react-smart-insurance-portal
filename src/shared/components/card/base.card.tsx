import React, {useMemo} from "react";

interface componentProps {
    title?: string;
    actions?: React.ReactNode;
    children: React.ReactNode;
}

export default function BaseCard({title, actions, children}: Readonly<componentProps>) {

    const showHeader = useMemo(() => title || actions, [title, actions]);

    return (
        <div className="bg-white ring-1 ring-gray-200 rounded-lg px-4 py-4 space-y-4 mb-8 last:mb-0" >
            {showHeader && <div className="flex items-center flex-wrap justify-between" >
                {title && <h2 className="text-lg font-semibold" >{title}</h2>}
                {actions && <div className="flex gap-1 justify-between" >{actions}</div>}
            </div>}
            <div>
                {children}
            </div>
        </div>
    );
}