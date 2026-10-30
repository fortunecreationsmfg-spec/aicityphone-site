# AI City Phone

Marketing website for **AI City Phone** — 24/7 AI phone answering for home-service companies (HVAC, roofing, plumbing, electrical, landscaping, and similar contractors), cities and towns, and school districts.

Operated by **FortuneCreations, LLC**. Planned public domain: [aicityphone.com](https://aicityphone.com). Contact: [fortunecreationsut@froyorobo.com](mailto:fortunecreationsut@froyorobo.com).

The product runs on GoHighLevel Voice AI. The site is bilingual (English / Spanish). **911 is never held.** The published plan is **$450 per month**.

## Stack

- Next.js App Router
- TypeScript
- Tailwind CSS
- `package.json` name: `aicityphone-site`
- Vercel Web Analytics

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

```bash
npm run build
npm start
```

The homepage language toggle is stored in the browser (`acp-locale`). Privacy copy lives at `/privacy`. After checkout, Stripe can send the customer to `/thank-you`.

## Pricing

One plan: **$450/month**. The price, what it includes, and a **Questions? Contact us** mailto are on the homepage (`/#pricing`).

There is no second public price. A second phone number is a conversation, not a line item invented on the site.

## Stripe Payment Link

**Get started, $450/month** opens a [Stripe Payment Link](https://docs.stripe.com/payment-links) (Stripe-hosted checkout, billed monthly). The default link is `https://buy.stripe.com/dRmeVfgs9gesdeic5V5ZC01`.

The site uses that URL unless `NEXT_PUBLIC_STRIPE_PAYMENT_LINK` is set to a different `https` URL (see `lib/constants.ts`). The value is not a secret. **Do not add Stripe secret keys.** Payment Links do not need a server-side secret, a webhook, or a restricted key. Do not create any of these in Vercel or in local env files:

- `STRIPE_SECRET_KEY`
- `STRIPE_WEBHOOK_SECRET`
- any key that starts with `sk_live_`, `sk_test_`, or `rk_live_`

If `NEXT_PUBLIC_STRIPE_PAYMENT_LINK` is missing, blank, or not an `https` URL, **Get started, $450/month** keeps the live Payment Link above. A valid `https` value replaces that default. **Questions? Contact us** always emails `fortunecreationsut@froyorobo.com`.

`NEXT_PUBLIC_` values are included when the site is built. Changing the variable does nothing until the next deployment.

### Set the link on Vercel

1. In the Stripe Dashboard, create a product with a recurring price of **$450 USD per month**.
2. Create a **Payment Link** for that price. Leave it as Stripe’s hosted checkout page.
3. In the Payment Link settings, after payment, redirect the customer to this site’s thank-you page (do not rely on Stripe’s default confirmation page if you want them back here):
   - This Vercel project, until the custom domain is attached: `https://aicityphone-site.vercel.app/thank-you`
   - After `aicityphone.com` is attached: `https://aicityphone.com/thank-you`
   - Use a preview host only while you are testing. Do not leave a preview URL as the live redirect.
4. Copy the Payment Link URL. It looks like `https://buy.stripe.com/...`.
5. In Vercel, open this project → **Settings** → **Environment Variables**.
6. Add a variable:
   - **Key:** `NEXT_PUBLIC_STRIPE_PAYMENT_LINK`
   - **Value:** the Payment Link URL from step 4
   - **Environments:** Production. Add it to Preview as well if you want checkout on preview deployments.
7. **Redeploy.** Vercel bakes `NEXT_PUBLIC_` variables in at build time. Saving the variable without a new deployment leaves the old button in place.
8. Open the site, choose **Get started, $450/month**, and confirm it lands on Stripe checkout. Confirm a completed test payment returns to `/thank-you`.

### Set the link locally

```bash
cp .env.example .env.local
```

Put the same Payment Link URL in `.env.local`:

```bash
NEXT_PUBLIC_STRIPE_PAYMENT_LINK=https://buy.stripe.com/your_link
```

Leave the value empty to use the live Payment Link. Restart `npm run dev` after you change it. `.env.local` is gitignored. Do not commit a `.env` file, and do not commit a secret key.

## Featured media

Files in `public/media/`:

| File | Use |
| --- | --- |
| `marketing-video.mp4` | Homepage HTML5 video (city and school marketing film) |
| `marketing-video-poster.jpg` | Video poster frame |
| `sample-call-city.mp3` | City / resident sample (utility billing / City Hall line) |
| `sample-call-school.mp3` | School / parent sample (district office / dress-code follow-up) |

The city player is labeled **City / resident call sample** and uses `sample-call-city.mp3`. The school player is labeled **School / parent call sample** and uses `sample-call-school.mp3`. Do not swap those files. They appear in the **See & hear it in action** band directly under the hero. An IT-handoff band for cities and school districts follows the media.

The IT button opens HighLevel’s public Boot Camp page (`https://www.gohighlevel.com/highlevel-bootcamp`) with no affiliate parameter. Home-service setup is by email to FortuneCreations, LLC.

## Deploy on Vercel

1. In Vercel, choose **Add New → Project → Import Git Repository**.
2. Import this repo: `https://github.com/fortunecreationsmfg-spec/aicityphone-site`.
3. Framework Preset should detect **Next.js**.
4. Deploy from the `main` branch. The only environment variable is the optional `NEXT_PUBLIC_STRIPE_PAYMENT_LINK` described above. With it unset, the subscribe button uses the live Payment Link.
5. When DNS is ready, attach `aicityphone.com`, then point the Payment Link redirect at `https://aicityphone.com/thank-you` and redeploy if you change the env var.

The homepage (`/`) is the address already sent in city and school email. It opens with a line chooser for home services, cities and towns, and school districts.

## Notes

- Sign the service as **FortuneCreations, LLC** only. Do not add a personal name, street address, or phone number to the site.
- Contact email: fortunecreationsut@froyorobo.com.
- Emergency callers are told to hang up and dial 911. This line is not dispatch.
- Do not publish invented testimonials, star ratings, or call-volume statistics.
