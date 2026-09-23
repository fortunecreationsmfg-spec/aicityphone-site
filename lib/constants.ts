export const BRAND = "AI City Phone";
export const LEGAL_NAME = "FortuneCreations, LLC";
export const CONTACT_EMAIL = "fortunecreationsut@froyorobo.com";
export const PLANNED_DOMAIN = "aicityphone.com";
/**
 * The only allowed outbound GoHighLevel / HighLevel URL.
 * Every HighLevel CTA must import this constant. Do not link the HighLevel
 * homepage, drop `fp_ref=jer78`, or invent another affiliate URL.
 */
export const BOOTCAMP_URL =
  "https://www.gohighlevel.com/highlevel-bootcamp?fp_ref=jer78" as const;
export const SITE_URL = "https://aicityphone.com";

export const MEDIA = {
  video: "/media/marketing-video.mp4",
  poster: "/media/marketing-video-poster.jpg",
  cityCall: "/media/sample-call-city.mp3",
  schoolCall: "/media/sample-call-school.mp3",
} as const;
