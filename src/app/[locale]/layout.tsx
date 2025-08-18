import type {Metadata} from 'next';
import {NextIntlClientProvider} from 'next-intl';
import {getMessages, setRequestLocale} from 'next-intl/server';
import {routing} from '../../i18n/routing';
import {Toaster} from '@/components/ui/toaster';
import IdentityRedirect from '@/components/IdentityRedirect';

export function generateStaticParams() {
  return routing.locales.map((locale) => ({locale}));
}

export const metadata: Metadata = {
  title: 'Kapunka - Quiet care for sensitive skin',
  description: 'Pure argan oil taught through a simple, disciplined method for sensitive skin care.'
};

export default async function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{locale: string}>;
}) {
  const {locale} = await params;      // Next 15: params is a Promise
  setRequestLocale(locale);
  const messages = await getMessages();

  return (
    <NextIntlClientProvider messages={messages} locale={locale}>
      {children}
      <Toaster />
      <IdentityRedirect />
    </NextIntlClientProvider>
  );
}
