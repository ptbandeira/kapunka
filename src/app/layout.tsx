import './globals.css';
import localFont from 'next/font/local';

const geistSans = localFont({
  src: '../../public/fonts/Geist-Regular.woff2',
  variable: '--font-geist-sans',
  weight: '400',
});

const geistMono = localFont({
  src: '../../public/fonts/GeistMono-Regular.woff2',
  variable: '--font-geist-mono',
  weight: '400',
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable}`}
    >
      <body className="antialiased bg-background text-foreground">{children}</body>
    </html>
  );
}
