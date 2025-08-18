import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import type { Metadata } from "next";
import { Toaster } from "@/components/ui/toaster";

export function generateStaticParams() {
  return [{ locale: 'en' }, { locale: 'es' }, { locale: 'pt' }];
}

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
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const messages = await getMessages();

  return (
    <NextIntlClientProvider messages={messages} locale={locale}>
      {children}
      <Toaster />
    </NextIntlClientProvider>
  );
}