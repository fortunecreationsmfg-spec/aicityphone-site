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
 * Live Stripe Payment Link for the $450/month plan (hosted checkout, billed monthly).
 * This is not a secret. Never put a Stripe secret key, restricted key, or webhook
 * secret in this project.
 */
export const DEFAULT_STRIPE_PAYMENT_LINK = "https://buy.stripe.com/dRmeVfgs9gesdeic5V5ZC01";

/**
 * Public Payment Link used by Get started.
 * NEXT_PUBLIC_STRIPE_PAYMENT_LINK overrides the live default when it is a non-empty
 * https URL. Missing, blank, or invalid values keep the live default.
 */
function readStripePaymentLink(): string {
  const raw = process.env.NEXT_PUBLIC_STRIPE_PAYMENT_LINK;
  if (typeof raw === "string") {
    const trimmed = raw.trim();
    if (trimmed) {
      try {
        const url = new URL(trimmed);
        if (url.protocol === "https:") return url.toString();
      } catch {
        // Ignore a malformed override and keep the live Payment Link.
      }
    }
  }
  return DEFAULT_STRIPE_PAYMENT_LINK;
}

export const STRIPE_PAYMENT_LINK = readStripePaymentLink();
