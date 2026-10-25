export const BRAND = "AI City Phone";
export const LEGAL_NAME = "FortuneCreations, LLC";
export const CONTACT_EMAIL = "fortunecreationsut@froyorobo.com";
export const PLANNED_DOMAIN = "aicityphone.com";
export const SITE_URL = "https://aicityphone.com";

/**
 * HighLevel's public Boot Camp page for city and school IT managers.
 * Do not add affiliate parameters (no fp_ref or similar).
 */
export const BOOTCAMP_URL = "https://www.gohighlevel.com/highlevel-bootcamp";

/** Published plan. Button and FAQ copy in lib/i18n.ts repeats this price in full sentences. */
export const PLAN_PRICE_LABEL = "$450";

export const MEDIA = {
  video: "/media/marketing-video.mp4",
  poster: "/media/marketing-video-poster.jpg",
  /** Resident / City Hall demonstration. Do not point the school player at this file. */
  cityCall: "/media/sample-call-city.mp3",
  /** Parent / district demonstration. Do not point the city player at this file. */
  schoolCall: "/media/sample-call-school.mp3",
} as const;

/**
 * Public Stripe Payment Link (hosted checkout, recurring monthly).
 * Read from NEXT_PUBLIC_STRIPE_PAYMENT_LINK. This is not a secret.
 * Never put a Stripe secret key, restricted key, or webhook secret in this project.
 * Returns null when the variable is missing, blank, or not an https URL so callers
 * can fall back to the contact email instead of a broken checkout link.
 */
function readStripePaymentLink(): string | null {
  const raw = process.env.NEXT_PUBLIC_STRIPE_PAYMENT_LINK;
  if (typeof raw !== "string") return null;
  const trimmed = raw.trim();
  if (!trimmed) return null;
  let url: URL;
  try {
    url = new URL(trimmed);
  } catch {
    return null;
  }
  if (url.protocol !== "https:") return null;
  return url.toString();
}

export const STRIPE_PAYMENT_LINK = readStripePaymentLink();
