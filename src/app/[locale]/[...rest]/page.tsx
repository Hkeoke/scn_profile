import { notFound } from 'next/navigation';
import i18nConfig from '../../../../next-i18next.config';

export function generateStaticParams() {
  return i18nConfig.locales.map(locale => ({
    locale,
    rest: ['404']
  }));
}

export default function CatchAllPage() {
  notFound();
}
