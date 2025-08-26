'use client';
import Link from 'next/link';
import {useTranslations, useLocale} from 'next-intl';

const Footer = () => {
  const year = new Date().getFullYear();
  const t = useTranslations('footer');
  const c = useTranslations('contact.info');
  const locale = useLocale();
  return (
    <footer className="border-t">
      {/* Top area (brand, quick links, contact) */}
      <div className="container mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-3 gap-10">
        <div>
          <div className="flex items-center gap-3">
            <div className="h-8 w-8 rounded-full bg-[var(--kapunka-sage-medium)] text-white flex items-center justify-center font-semibold">K</div>
            <span className="text-lg font-semibold">Kapunka</span>
          </div>
          <p className="mt-3 text-sm text-muted-foreground">{t('tagline')}</p>
        </div>

        <div>
          <h3 className="font-semibold mb-3">{t('quick_links')}</h3>
          <ul className="space-y-2 text-sm">
            <li><Link href={`/${locale}/story`} className="hover:underline">{t('about')}</Link></li>
            <li><Link href={`/${locale}/contact`} className="hover:underline">{t('contact')}</Link></li>
            <li><Link href={`/${locale}/privacy`} className="hover:underline">{t('privacy')}</Link></li>
            <li><Link href={`/${locale}/terms`} className="hover:underline">{t('terms')}</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold mb-3">{t('contact')}</h3>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>{c('email')}</li>
            <li>{c('phone')}</li>
            <li>{c('address')}</li>
          </ul>
        </div>
      </div>

      {/* Bottom bar with tight admin dot */}
      <div className="border-t">
        <div className="container mx-auto px-4 py-6 text-sm text-muted-foreground">
          <p>
            {t('copyright', {year})}
            <Link
              href="/admin"
              aria-label="Admin"
              title="Admin"
              className="inline-block align-baseline"
            >.</Link>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
export { Footer };
