# AI City Phone

Marketing website for **AI City Phone** — after-hours AI phone answering for small cities and school districts.

Operated by **FortuneCreations, LLC**. Planned public domain: [aicityphone.com](https://aicityphone.com). Contact: [fortunecreationsut@froyorobo.com](mailto:fortunecreationsut@froyorobo.com).

The product runs on GoHighLevel Voice AI. The site is bilingual (English / Spanish), states that **911 is never held**, and features the conceptual marketing video plus city and school sample calls.

## Stack

- Next.js App Router
- TypeScript
- Tailwind CSS
- `package.json` name: `aicityphone-site`

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

The homepage language toggle is stored in the browser (`acp-locale`). Privacy copy lives at `/privacy`.

## Featured media

Files in `public/media/`:

| File | Use |
| --- | --- |
| `marketing-video.mp4` | Homepage HTML5 video |
| `marketing-video-poster.jpg` | Video poster frame |
| `sample-call-city.mp3` | City / resident sample (utility billing / City Hall line) |
| `sample-call-school.mp3` | School / parent sample (district office / dress-code follow-up) |

They appear in the **See & hear it in action** band directly under the hero. An IT-handoff band follows the media, before how-it-works.

## Deploy on Vercel

1. In Vercel, choose **Add New → Project → Import Git Repository**.
2. Import this repo: `https://github.com/fortunecreationsmfg-spec/aicityphone-site`.
3. Framework Preset should detect **Next.js**.
4. Deploy from the `main` branch. No extra environment variables are required.
5. When DNS is ready, attach `aicityphone.com`.

The primary trial CTA is a soft “try one department” link to the HighLevel Boot Camp page. Offers on that page belong to HighLevel; this site does not invent a separate 30-day-only municipal package.

## Notes

- The listed price is **$497 per month**. Usage-based telecom and AI communication fees may apply (HighLevel’s standard usage charges). This site does not publish other monthly tiers or setup-fee ranges.
- Setup can be handed to the city’s or district’s IT manager. They can run it through the [HighLevel Boot Camp](https://www.gohighlevel.com/highlevel-bootcamp?fp_ref=jer78).
- Emergency callers are told to hang up and dial 911. This line is not dispatch.
