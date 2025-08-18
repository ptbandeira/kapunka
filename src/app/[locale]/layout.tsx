import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";
import { Toaster } from "@/components/ui/toaster";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Kapunka - Quiet care for sensitive skin",
  description: "Pure argan oil taught through a simple, disciplined method for sensitive skin care.",
  keywords: ["Kapunka", "argan oil", "sensitive skin", "skincare", "pure care"],
  authors: [{ name: "Kapunka" }],
  openGraph: {
    title: "Kapunka - Quiet care for sensitive skin",
    description: "Pure argan oil taught through a simple, disciplined method for sensitive skin care.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kapunka - Quiet care for sensitive skin",
    description: "Pure argan oil taught through a simple, disciplined method for sensitive skin care.",
  },
};

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const { locale } = await params;
  const messages = await getMessages();

  return (
    <html lang={locale} suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        <NextIntlClientProvider messages={messages}>
          {children}
          <Toaster />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}