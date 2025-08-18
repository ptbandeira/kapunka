'use client';

import Link from 'next/link';
import { useTranslations, useLocale } from 'next-intl';

export function Footer() {
  const t = useTranslations();
  const locale = useLocale();

  const footerLinks = [
    { href: `/${locale}/story`, label: t('footer.about') },
    { href: `/${locale}/contact`, label: t('footer.contact') },
    { href: `/${locale}/privacy`, label: t('footer.privacy') },
    { href: `/${locale}/terms`, label: t('footer.terms') },
  ];

  return (
    <footer className="bg-muted/50 border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Brand */}
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <div className="h-8 w-8 rounded-full bg-[var(--kapunka-sage-medium)] flex items-center justify-center">
                  <span className="text-white font-bold text-lg">K</span>
                </div>
                <span className="font-semibold text-lg">Kapunka</span>
              </div>
              <p className="text-muted-foreground mb-4 max-w-md">
                Quiet strength. Pure care. Pure argan oil taught through a simple, disciplined method for sensitive skin.
              </p>
              <p className="text-sm text-muted-foreground">
                {t('footer.copyright')}
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                {footerLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-[var(--kapunka-sage-medium)] transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="font-semibold mb-4">Contact</h3>
              <div className="space-y-2 text-sm text-muted-foreground">
                <p>Email: info@kapunka.com</p>
                <p>Phone: +34 900 000 000</p>
                <p>Madrid, Spain</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}