import {useTranslations} from "next-intl";
import React, {memo} from "react";

const AppLayoutHeader = memo(function AppLayoutHeader() {
    const t = useTranslations('common');

    return (
        <header className="sticky-top w-full bg-white border-b border-gray-200" >
            <div className="container">
                <div className="flex justify-between h-12 items-center">
                    <h2 className="font-semibold text-lg" >{t('title')}</h2>
                </div>
            </div>
        </header>
    )
})

export default AppLayoutHeader;