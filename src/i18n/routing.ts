export const routing = {
  locales: ['en', 'es', 'pt'] as const,
  defaultLocale: 'en' as const
};
export type Locale = typeof routing.locales[number];
