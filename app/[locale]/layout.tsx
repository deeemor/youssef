import type { Metadata } from "next";
import { Inter, Manrope, JetBrains_Mono } from "next/font/google";
import "../globals.css";
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { SmoothScroll } from "@/components/SmoothScroll";
import { Analytics } from "@vercel/analytics/next"

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Youssef Slimani | Full-Stack Developer",
  description: "I build modern web platforms that combine performance, design, and scalability.",
};

export default async function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{locale: string}>;
}) {
  const {locale} = await params;
  const messages = await getMessages();

  return (
    <html lang={locale} className="dark">
      <body
        className={`${inter.variable} ${manrope.variable} ${jetbrainsMono.variable} antialiased bg-[#030303] text-[#e5e5e5]`}
      >
        <NextIntlClientProvider messages={messages}>
          <SmoothScroll>
            {children}
                      <Analytics/>

          </SmoothScroll>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
