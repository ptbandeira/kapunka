'use client';
import Link from 'next/link';

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t">
      {/* Top area (brand, quick links, contact) */}
      <div className="container mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-3 gap-10">
        <div>
          <div className="flex items-center gap-3">
            <div className="h-8 w-8 rounded-full bg-[var(--kapunka-sage-medium)] text-white flex items-center justify-center font-semibold">K</div>
            <span className="text-lg font-semibold">Kapunka</span>
          </div>
          <p className="mt-3 text-sm text-muted-foreground">
            Quiet strength. Pure care. Pure argan oil taught through a
            simple, disciplined method for sensitive skin.
          </p>
        </div>

        <div>
          <h3 className="font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><Link href="/en/story" className="hover:underline">About Kapunka</Link></li>
            <li><Link href="/en/contact" className="hover:underline">Contact</Link></li>
            <li><Link href="/en/privacy" className="hover:underline">Privacy Policy</Link></li>
            <li><Link href="/en/terms" className="hover:underline">Terms of Service</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold mb-3">Contact</h3>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>Email: info@kapunka.com</li>
            <li>Phone: +34 900 000 000</li>
            <li>Madrid, Spain</li>
          </ul>
        </div>
      </div>

      {/* Bottom bar with tight admin dot */}
      <div className="border-t">
        <div className="container mx-auto px-4 py-6 text-sm text-muted-foreground">
          <p>
            © {year} Kapunka. All rights reserved
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
}
