import type {NextRequest} from 'next/server';
import {NextResponse} from 'next/server';
import {routing} from './i18n/routing';

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  // 1) Bypass admin and static stuff
  if (
    pathname.startsWith('/admin') ||
    pathname.startsWith('/_next') ||
    pathname.startsWith('/images') ||
    pathname.startsWith('/public') ||
    pathname === '/favicon.ico' ||
    pathname === '/robots.txt' ||
    pathname === '/sitemap.xml'
  ) {
    return NextResponse.next();
  }

  // 2) If already has locale, continue
  const seg = pathname.split('/')[1];
  if ((routing.locales as readonly string[]).includes(seg)) {
    return NextResponse.next();
  }

  // 3) Otherwise, prefix default locale
  const url = req.nextUrl.clone();
  url.pathname = `/${routing.defaultLocale}${pathname}`;
  return NextResponse.redirect(url);
}

export const config = {
  // Run on all paths except files and the ones we skip explicitly above.
  matcher: ['/((?!api|_next|.*\\..*).*)']
};
