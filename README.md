# AI City Phone

Marketing website for a done-for-you AI phone answering service from **FortuneCreations, LLC**. It speaks to small city and town departments and to local home services companies (roofers, HVAC, plumbers, and similar contractors).

Contact: [fortunecreationsut@froyorobo.com](mailto:fortunecreationsut@froyorobo.com). Planned public domain: [aicityphone.com](https://aicityphone.com).

The site is bilingual (English / Spanish). City and school lines state that **911 is never held**. The homepage includes a conceptual marketing video plus city and school sample calls. The homepage opens with large Cities & Towns and Home Services choices. School district copy stays with Cities & Towns.

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

They appear in the **See & hear it in action** band. A done-for-you band follows the media: setup and ongoing management are handled by FortuneCreations.

## Deploy on Vercel

1. In Vercel, choose **Add New → Project → Import Git Repository**.
2. Import this repo: `https://github.com/fortunecreationsmfg-spec/aicityphone-site`.
3. Framework Preset should detect **Next.js**.
4. Deploy from the `main` branch. No extra environment variables are required.
5. When DNS is ready, attach `aicityphone.com`.

## Notes

- Pricing available upon request. This site does not publish a public price.
- Emergency callers are told to hang up and dial 911. This line is not dispatch.
- Do not add customer counts, testimonials, or performance claims.
