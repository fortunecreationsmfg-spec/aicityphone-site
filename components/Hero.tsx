"use client";

import { useAudience, type AudienceId } from "@/components/AudienceProvider";
import { useI18n } from "@/components/LanguageProvider";

export function Hero() {
  const { t } = useI18n();
  const { audience, setAudience } = useAudience();
  const a = t.audiences;
  const copy = audience === "city"
    ? { title: t.hero.cityTitle, body: t.hero.cityBody }
    : { title: t.hero.homeTitle, body: t.hero.homeBody };

  function select(next: AudienceId) {
    setAudience(next);
  }

  function onKeyDown(event: React.KeyboardEvent<HTMLButtonElement>, current: AudienceId) {
    if (event.key !== "ArrowRight" && event.key !== "ArrowLeft" && event.key !== "ArrowDown" && event.key !== "ArrowUp") {
      return;
    }
    event.preventDefault();
    const next: AudienceId = current === "city" ? "home" : "city";
    setAudience(next);
    requestAnimationFrame(() => {
      document.getElementById(next === "city" ? "audience-city" : "audience-home")?.focus();
    });
  }

  return (
    <section id="audiences" className="relative z-10 mx-auto max-w-6xl scroll-mt-24 px-4 pb-4 pt-6 sm:px-6 sm:pt-8">
      <div role="tablist" aria-label={a.label} className="grid grid-cols-1 gap-3 md:grid-cols-2 md:gap-4">
        <AudienceChoice
          id="audience-city"
          selected={audience === "city"}
          controls="hero-copy panel-city"
          label={a.cityTab}
          hint={a.cityTabHint}
          onSelect={() => select("city")}
          onKeyDown={(event) => onKeyDown(event, "city")}
        />
        <AudienceChoice
          id="audience-home"
          selected={audience === "home"}
          controls="hero-copy panel-home"
          label={a.homeTab}
          hint={a.homeTabHint}
          onSelect={() => select("home")}
          onKeyDown={(event) => onKeyDown(event, "home")}
        />
      </div>

      <div id="hero-copy" aria-live="polite" className="mt-8 sm:mt-10">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-teal">{t.hero.eyebrow}</p>
        <h1 className="mt-3 max-w-3xl font-display text-3xl leading-[1.15] text-navy sm:text-4xl">
          {copy.title}
        </h1>
        <p className="mt-4 max-w-2xl text-lg leading-8 text-ink/80">{copy.body}</p>
      </div>

      <div className="mt-8 flex flex-wrap gap-3">
        <a href="#see-it" className="btn-primary">
          {t.hero.primary}
        </a>
        <a href="#pricing" className="btn-secondary">
          {t.hero.secondary}
        </a>
      </div>
      <ul className="mt-8 flex flex-wrap gap-2">
        {t.hero.chips.map((chip) => (
          <li
            key={chip}
            className="rounded-full border border-navy/10 bg-white/70 px-3 py-1 text-sm text-navy"
          >
            {chip}
          </li>
        ))}
      </ul>
    </section>
  );
}

function AudienceChoice({
  id,
  selected,
  controls,
  label,
  hint,
  onSelect,
  onKeyDown,
}: {
  id: string;
  selected: boolean;
  controls: string;
  label: string;
  hint: string;
  onSelect: () => void;
  onKeyDown: (event: React.KeyboardEvent<HTMLButtonElement>) => void;
}) {
  return (
    <button
      type="button"
      role="tab"
      id={id}
      aria-selected={selected}
      aria-controls={controls}
      tabIndex={selected ? 0 : -1}
      onClick={onSelect}
      onKeyDown={onKeyDown}
      className={`flex min-h-[9.5rem] w-full flex-col justify-between rounded-3xl border-2 px-6 py-7 text-left shadow-sm transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal sm:min-h-[11rem] sm:px-8 sm:py-9 md:min-h-[13.5rem] ${
        selected
          ? "border-navy bg-navy text-paper"
          : "border-navy/20 bg-white text-navy hover:border-navy/50"
      }`}
    >
      <span className="block font-display text-4xl leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
        {label}
      </span>
      <span className="mt-4 flex items-end justify-between gap-4">
        <span className={`block text-base leading-6 sm:text-lg ${selected ? "text-mist" : "text-ink/70"}`}>
          {hint}
        </span>
        <span
          aria-hidden="true"
          className={`mb-1 h-1.5 w-14 shrink-0 rounded-full ${selected ? "bg-gold-bright" : "bg-gold/80"}`}
        />
      </span>
    </button>
  );
}
