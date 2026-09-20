import type { Metadata } from "next";
import { Fraunces, Source_Sans_3 } from "next/font/google";
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
    default: `${BRAND} | After-hours answering for cities & schools`,
    template: `%s | ${BRAND}`,
  },
  description:
    "AI phone answering for small cities and school districts. English and Spanish. 911 is never held. Morning logs for staff. Built on GoHighLevel by FortuneCreations, LLC.",
  applicationName: BRAND,
  authors: [{ name: LEGAL_NAME, url: SITE_URL }],
  keywords: [
    "AI City Phone",
    "small city phone answering",
    "school district after hours",
    "GoHighLevel",
    "municipal AI voice",
  ],
  openGraph: {
    title: `${BRAND} | After-hours answering for cities & schools`,
    description:
      "Upgrade after-hours voicemail with an AI voice agent for local governments and schools. 911 is never held.",
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
      </body>
    </html>
  );
}
