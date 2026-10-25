import type { Metadata } from "next";
import { Fraunces, Source_Sans_3 } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { SiteShell } from "@/components/SiteShell";
import {
  BRAND,
  CONTACT_EMAIL,
  LEGAL_NAME,
  PLANNED_DOMAIN,
  SITE_URL,
} from "@/lib/constants";
import "./globals.css";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin", "latin-ext"],
});

const sourceSans = Source_Sans_3({
  variable: "--font-source-sans",
  subsets: ["latin", "latin-ext"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${BRAND} | 24/7 AI phone answering`,
    template: `%s | ${BRAND}`,
  },
  description:
    "24/7 AI phone answering for home-service companies, cities and towns, and school districts. Callbacks, scheduling, text-back, English and Spanish. $450 a month from FortuneCreations, LLC. 911 is never held.",
  applicationName: BRAND,
  authors: [{ name: LEGAL_NAME, url: SITE_URL }],
  keywords: [
    "AI City Phone",
    "AI answering service",
    "HVAC answering service",
    "contractor answering service",
    "small city phone answering",
    "school district after hours",
    "FortuneCreations",
  ],
  openGraph: {
    title: `${BRAND} | 24/7 AI phone answering`,
    description:
      "AI answering for home-service companies, cities and towns, and school districts. $450 a month. 911 is never held.",
    url: SITE_URL,
    siteName: BRAND,
    locale: "en_US",
    type: "website",
  },
  alternates: {
    canonical: SITE_URL,
  },
  other: {
    "contact:email": CONTACT_EMAIL,
    "og:see_also": `https://${PLANNED_DOMAIN}`,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${sourceSans.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-paper font-sans text-ink">
        <SiteShell>{children}</SiteShell>
        <Analytics />
      </body>
    </html>
  );
}
