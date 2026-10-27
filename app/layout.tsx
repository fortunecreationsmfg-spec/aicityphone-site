import type { Metadata } from "next";
import { Fraunces, Source_Sans_3 } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { SiteShell } from "@/components/SiteShell";
import { BRAND, CONTACT_EMAIL, PLANNED_DOMAIN, SITE_URL } from "@/lib/constants";
import "./globals.css";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin", "latin-ext"],
});

const sourceSans = Source_Sans_3({
  variable: "--font-source-sans",
  subsets: ["latin", "latin-ext"],
});

const TITLE = `${BRAND} | AI phone answering for cities and home services`;
const DESCRIPTION =
  "Done-for-you AI phone answering for small city and town departments and local home services companies. 24/7 call answering, missed-call text-back, automatic callbacks, scheduling, and text replies. Pricing available upon request.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: TITLE,
    template: `%s | ${BRAND}`,
  },
  description: DESCRIPTION,
  applicationName: BRAND,
  authors: [{ name: BRAND, url: SITE_URL }],
  keywords: [
    "AI City Phone",
    "AI phone answering",
    "small city phone answering",
    "town hall after hours",
    "school district after hours",
    "home services answering service",
    "roofer missed calls",
    "HVAC answering service",
    "plumber answering service",
    "missed call text back",
  ],
  openGraph: {
    title: TITLE,
    description:
      "Done-for-you AI phone answering for small city and town departments and for local home services companies. Pricing available upon request.",
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
