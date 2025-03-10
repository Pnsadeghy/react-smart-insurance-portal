import InsuranceCreate from "@/modules/insurance/components/create/insurance.create";
import BaseCard from "@/shared/components/card/base.card";
import {useTranslations} from "next-intl";
import BaseButtonLink from "@/shared/components/button/base.button.link";

export default function InsuranceCreatePage() {
    const t = useTranslations('insurance');

    return (
        <div className="w-xl max-w-full mx-auto py-8" >
            <BaseCard title={t('create.title')}
                      actions={<BaseButtonLink href="/" >{t('table.return')}</BaseButtonLink>} >
                <InsuranceCreate />
            </BaseCard>
        </div>
    );
}