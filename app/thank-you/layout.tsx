import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Thank you",
  description:
    "Next step after AI City Phone checkout. FortuneCreations, LLC follows up when payment is completed on Stripe.",
  robots: { index: false, follow: false },
};

export default function ThankYouLayout({ children }: { children: React.ReactNode }) {
  return children;
}
