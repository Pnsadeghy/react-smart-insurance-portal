import BaseSectionTitle from "@/shared/components/section-title/base.section.title";
import InsuranceTable from "@/modules/insurance/components/table/insurance.table";
import BaseButtonLink from "@/shared/components/button/base.button.link";
import Link from "next/link";
import {useTranslations} from "next-intl";

export default function Home() {
    const t = useTranslations('insurance');

  return (
      <div>
        <BaseSectionTitle title={t('table.title')}>
            <BaseButtonLink href="/insurance/create">{t('create.link')}</BaseButtonLink>
        </BaseSectionTitle>
        <InsuranceTable />
      </div>
  );
}