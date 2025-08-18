import {getRequestConfig} from 'next-intl/server';
import {routing} from './routing';

export default getRequestConfig(async ({requestLocale}) => {
  const requested = (await requestLocale) ?? routing.defaultLocale;
  // Normalize region variants: en-GB -> en
  const base = requested.split('-')[0];

  const locale = (routing.locales as readonly string[]).includes(base)
    ? (base as (typeof routing.locales)[number])
    : routing.defaultLocale;

  // Try both common message paths
  let messages: Record<string, any>;
  try {
    messages = (await import(`../../messages/${locale}.json`)).default;
  } catch {
    messages = (await import(`../messages/${locale}.json`)).default;
  }

  return {locale, messages};
});
