'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useTranslations, useLocale } from 'next-intl';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu, Globe } from 'lucide-react';

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const t = useTranslations('navigation');
  const pathname = usePathname();
  const locale = useLocale();

  const navItems = [
    { href: `/${locale}`, label: t('home') },
    { href: `/${locale}/products`, label: t('products') },
    { href: `/${locale}/method`, label: t('method') },
    { href: `/${locale}/story`, label: t('story') },
    { href: `/${locale}/professionals`, label: t('professionals') },
    { href: `/${locale}/contact`, label: t('contact') },
  ];

  const languages = [
    { code: 'en', label: 'EN' },
    { code: 'es', label: 'ES' },
    { code: 'pt', label: 'PT' },
  ];

  const isActive = (href: string) => {
    if (href === `/${locale}`) {
      return pathname === `/${locale}` || pathname === '/';
    }
    return pathname.startsWith(href);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href={`/${locale}`} className="flex items-center space-x-2">
            <div className="h-8 w-8 rounded-full bg-[var(--kapunka-sage-medium)] flex items-center justify-center">
              <span className="text-white font-bold text-lg">K</span>
            </div>
            <span className="font-semibold text-lg">Kapunka</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`text-sm font-medium transition-colors hover:text-[var(--kapunka-sage-medium)] ${
                  isActive(item.href) ? 'text-[var(--kapunka-sage-medium)]' : 'text-muted-foreground'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Language Selector & Mobile Menu */}
          <div className="flex items-center space-x-4">
            {/* Language Selector */}
            <div className="hidden sm:flex items-center space-x-1">
              <Globe className="h-4 w-4 text-muted-foreground" />
              <select
                value={locale}
                onChange={(e) => {
                  const newLocale = e.target.value;
                  const currentPath = pathname.split('/').slice(2).join('/');
                  window.location.href = `/${newLocale}${currentPath ? '/' + currentPath : ''}`;
                }}
                className="bg-transparent border-none text-sm font-medium cursor-pointer focus:outline-none"
              >
                {languages.map((lang) => (
                  <option key={lang.code} value={lang.code}>
                    {lang.label}
                  </option>
                ))}
              </select>
            </div>

            {/* Mobile Menu */}
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <div className="flex flex-col space-y-4 mt-8">
                  {navItems.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className={`text-sm font-medium transition-colors hover:text-[var(--kapunka-sage-medium)] ${
                        isActive(item.href) ? 'text-[var(--kapunka-sage-medium)]' : 'text-muted-foreground'
                      }`}
                    >
                      {item.label}
                    </Link>
                  ))}
                  <div className="pt-4 border-t">
                    <p className="text-sm font-medium mb-2">Language</p>
                    <div className="flex flex-col space-y-2">
                      {languages.map((lang) => (
                        <button
                          key={lang.code}
                          onClick={() => {
                            const currentPath = pathname.split('/').slice(2).join('/');
                            window.location.href = `/${lang.code}${currentPath ? '/' + currentPath : ''}`;
                          }}
                          className={`text-left text-sm transition-colors ${
                            locale === lang.code ? 'text-[var(--kapunka-sage-medium)]' : 'text-muted-foreground hover:text-[var(--kapunka-sage-medium)]'
                          }`}
                        >
                          {lang.label}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}