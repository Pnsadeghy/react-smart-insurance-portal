import { useTranslations } from 'next-intl';

export default function Home() {
  const t = useTranslations('common');

  return <h1>{t('title')}</h1>;
}