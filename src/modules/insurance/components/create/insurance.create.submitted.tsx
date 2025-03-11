import BaseButtonLink from "@/shared/components/button/base.button.link";
import {useTranslations} from "next-intl";

export default function InsuranceCreateSubmitted() {
    const t = useTranslations()

    return (
        <div className="py-8" >
            <h4 className="text-lg text-center font-bold" >{t('insurance.create.message')}</h4>

            <div className="mt-8 flex justify-center">
                <BaseButtonLink href="/">
                    {t('home.return')}
                </BaseButtonLink>
            </div>
        </div>
    );
}