import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { NextIntlClientProvider } from "next-intl";
import Head from "next/head";
import { Header } from "../components/Header";
import { notFound } from "next/navigation";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ismael Santana Portfolio",
  description: "Ismael Santana Portfolio",
};

export default async function RootLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  let messages;
  try {
    messages = (await import(`../../messages/${locale}.json`)).default;
  } catch (error) {
    notFound();
  }

  return (
    <html lang={locale}>
      <Head>
        <title>Ismael Santana</title>
      </Head>
      <head>
        <script
          src="/static/scripts/new-relic.js"
          type="text/javascript"
          async
        />
      </head>
      <body className={`${inter.className} bg-bprimary`}>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <Header locale={locale} />
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
