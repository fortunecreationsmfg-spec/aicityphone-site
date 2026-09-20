"use client";

import { useMemo, useState } from "react";
import { CONTACT_EMAIL } from "@/lib/constants";
import {
  estimateMonthly,
  formatUsd,
  type Coverage,
  type OrgType,
  type SizeBand,
} from "@/lib/estimate";
import { useI18n } from "@/components/LanguageProvider";

const SIZES: SizeBand[] = ["xs", "s", "m", "l"];
const COVERAGES: Coverage[] = ["evenings", "nights", "overflow"];

export function EstimateCalculator() {
  const { t } = useI18n();
  const [org, setOrg] = useState<OrgType>("city");
  const [size, setSize] = useState<SizeBand>("s");
  const [coverage, setCoverage] = useState<Coverage>("evenings");
  const [departments, setDepartments] = useState(1);

  const result = useMemo(
    () => estimateMonthly({ org, size, coverage, departments }),
    [org, size, coverage, departments],
  );

  const sizes = org === "city" ? t.estimate.citySizes : t.estimate.schoolSizes;
  const coverageLabels = {
    evenings: t.estimate.evenings,
    nights: t.estimate.nights,
    overflow: t.estimate.overflow,
  };

  const mail = useMemo(() => {
    const body = [
      `Org: ${org}`,
      `Size: ${size}`,
      `Coverage: ${coverage}`,
      `Departments: ${departments}`,
      `Monthly estimate: ${formatUsd(result.monthlyLow)}–${formatUsd(result.monthlyHigh)}`,
      `Setup estimate: ${formatUsd(result.setupLow)}–${formatUsd(result.setupHigh)}`,
    ].join("\n");
    return `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(t.estimate.emailSubject)}&body=${encodeURIComponent(body)}`;
  }, [org, size, coverage, departments, result, t.estimate.emailSubject]);

  return (
    <section id="estimate" className="mx-auto max-w-6xl scroll-mt-24 px-4 py-16 sm:px-6">
      <h2 className="font-display text-3xl text-navy sm:text-4xl">{t.estimate.title}</h2>
      <p className="mt-4 max-w-2xl text-lg leading-8 text-ink/75">{t.estimate.lead}</p>

      <div className="mt-8 grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
        <form className="grid gap-5 rounded-2xl border border-navy/10 bg-white p-6">
          <fieldset>
            <legend className="text-sm font-semibold text-navy">{t.estimate.orgLabel}</legend>
            <div className="mt-2 grid gap-2 sm:grid-cols-2">
              {(["city", "school"] as const).map((value) => (
                <label key={value} className="flex items-center gap-2 rounded-xl border border-navy/10 px-3 py-2">
                  <input
                    type="radio"
                    name="org"
                    checked={org === value}
                    onChange={() => setOrg(value)}
                  />
                  {value === "city" ? t.estimate.city : t.estimate.school}
                </label>
              ))}
            </div>
          </fieldset>

          <label className="grid gap-2 text-sm font-semibold text-navy">
            {t.estimate.sizeLabel}
            <select
              className="rounded-xl border border-navy/15 bg-paper px-3 py-2 font-normal text-ink"
              value={size}
              onChange={(e) => setSize(e.target.value as SizeBand)}
            >
              {SIZES.map((value) => (
                <option key={value} value={value}>
                  {sizes[value]}
                </option>
              ))}
            </select>
          </label>

          <label className="grid gap-2 text-sm font-semibold text-navy">
            {t.estimate.coverageLabel}
            <select
              className="rounded-xl border border-navy/15 bg-paper px-3 py-2 font-normal text-ink"
              value={coverage}
              onChange={(e) => setCoverage(e.target.value as Coverage)}
            >
              {COVERAGES.map((value) => (
                <option key={value} value={value}>
                  {coverageLabels[value]}
                </option>
              ))}
            </select>
          </label>

          <label className="grid gap-2 text-sm font-semibold text-navy">
            {t.estimate.deptLabel}
            <input
              type="range"
              min={1}
              max={6}
              value={departments}
              onChange={(e) => setDepartments(Number(e.target.value))}
            />
            <span className="font-normal text-ink/80">
              {departments} — {t.estimate.deptHint}
            </span>
          </label>
        </form>

        <aside className="rounded-2xl bg-navy p-6 text-paper">
          <p className="text-sm uppercase tracking-[0.16em] text-gold-bright">{t.estimate.monthly}</p>
          <p className="mt-2 font-display text-3xl">
            {formatUsd(result.monthlyLow)}–{formatUsd(result.monthlyHigh)}
          </p>
          <p className="mt-6 text-sm uppercase tracking-[0.16em] text-gold-bright">{t.estimate.setup}</p>
          <p className="mt-2 font-display text-2xl">
            {formatUsd(result.setupLow)}–{formatUsd(result.setupHigh)}
          </p>
          <p className="mt-5 text-sm leading-6 text-mist">{t.estimate.included}</p>
          <p className="mt-3 text-sm leading-6 text-mist/90">{t.estimate.disclaimer}</p>
          <a href={mail} className="btn-gold mt-6 inline-flex">
            {t.estimate.emailCta}
          </a>
        </aside>
      </div>
    </section>
  );
}
