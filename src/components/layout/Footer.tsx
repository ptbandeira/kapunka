'use client';
import Link from 'next/link';

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t py-8 text-sm text-muted-foreground">
      <div className="container mx-auto px-4 flex items-center justify-between">
        <p>
          © {year} Kapunka. All rights reserved
          {/* The dot below is a link to /admin */}
          <Link
            href="/admin"
            aria-label="Admin"
            title="Admin"
            className="ml-1 inline-block align-baseline hover:text-foreground focus:text-foreground"
          >
            .
          </Link>
        </p>

        <div className="opacity-80">
          {/* keep any extra footer links/info here if you had them */}
        </div>
      </div>
    </footer>
  );
}

export default Footer;
