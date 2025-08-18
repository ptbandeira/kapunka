import {getRequestConfig} from 'next-intl/server';
import {routing} from './routing';

export default getRequestConfig(async ({requestLocale}) => {
  const requested = (await requestLocale) ?? routing.defaultLocale;
  const base = requested.split('-')[0];

  const locale = (routing.locales as readonly string[]).includes(base)
    ? (base as (typeof routing.locales)[number])
    : routing.defaultLocale;

  const messages = (await import(`@/messages/${locale}.json`)).default;

  return {locale, messages};
});
