"use client";

import { MEDIA } from "@/lib/constants";
import { useI18n } from "@/components/LanguageProvider";

export function MediaShowcase() {
  const { t } = useI18n();

  return (
    <section id="see-it" className="scroll-mt-24 bg-navy text-paper">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-16">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-gold-bright">
          {t.media.kicker}
        </p>
        <h2 className="mt-3 max-w-4xl font-display text-3xl leading-tight sm:text-4xl lg:text-[2.6rem]">
          {t.media.title}
        </h2>
        <p className="mt-4 max-w-3xl text-base leading-7 text-mist sm:text-lg">
          {t.media.videoCaption}
        </p>

        <div className="mt-8 overflow-hidden rounded-2xl border border-white/10 bg-navy-deep shadow-[0_24px_80px_rgba(0,0,0,0.35)]">
          <video
            className="aspect-video w-full bg-black"
            controls
            playsInline
            preload="metadata"
            poster={MEDIA.poster}
            aria-label={t.media.videoLabel}
          >
            <source src={MEDIA.video} type="video/mp4" />
          </video>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-2">
          <figure className="rounded-2xl border border-white/10 bg-white/5 p-5">
            <figcaption className="font-display text-xl text-gold-bright">
              {t.media.cityTitle}
            </figcaption>
            <audio className="mt-4 w-full" controls preload="metadata" src={MEDIA.cityCall}>
              Your browser does not support audio.
            </audio>
            <p className="mt-3 text-sm leading-6 text-mist">{t.media.cityCaption}</p>
          </figure>
          <figure className="rounded-2xl border border-white/10 bg-white/5 p-5">
            <figcaption className="font-display text-xl text-gold-bright">
              {t.media.schoolTitle}
            </figcaption>
            <audio className="mt-4 w-full" controls preload="metadata" src={MEDIA.schoolCall}>
              Your browser does not support audio.
            </audio>
            <p className="mt-3 text-sm leading-6 text-mist">{t.media.schoolCaption}</p>
          </figure>
        </div>
      </div>
    </section>
  );
}
