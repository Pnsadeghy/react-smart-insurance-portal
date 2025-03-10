import InsuranceTable from "@/modules/insurance/components/table/insurance.table";
import { useTranslations } from 'next-intl';
import Link from "next/link";

export default function Home() {
  const t = useTranslations('common');

  return (
      <div>
        <h1>{t('title')}</h1>

          <Link href="/insurance/create">Create</Link>

        <InsuranceTable />
      </div>
  );
}