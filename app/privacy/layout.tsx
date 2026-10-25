import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy",
  description:
    "Privacy notice for AI City Phone, operated by FortuneCreations, LLC. This website is not an emergency service. Hang up and dial 911.",
};

export default function PrivacyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
