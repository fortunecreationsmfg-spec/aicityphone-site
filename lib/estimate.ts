export type OrgType = "city" | "school";
export type SizeBand = "xs" | "s" | "m" | "l";
export type Coverage = "evenings" | "nights" | "overflow";

export type EstimateInput = {
  org: OrgType;
  size: SizeBand;
  coverage: Coverage;
  departments: number;
};

export type EstimateResult = {
  monthlyLow: number;
  monthlyHigh: number;
  setupLow: number;
  setupHigh: number;
};

const monthlyMid: Record<OrgType, Record<SizeBand, number>> = {
  city: { xs: 450, s: 650, m: 900, l: 1250 },
  school: { xs: 400, s: 575, m: 800, l: 1100 },
};

const setupMid: Record<SizeBand, number> = {
  xs: 2000,
  s: 2750,
  m: 3500,
  l: 4500,
};

const coverageMult: Record<Coverage, number> = {
  evenings: 1,
  nights: 1.25,
  overflow: 1.45,
};

function roundTo25(value: number) {
  return Math.max(25, Math.round(value / 25) * 25);
}

export function estimateMonthly(input: EstimateInput): EstimateResult {
  const departments = Math.min(6, Math.max(1, Math.round(input.departments)));
  const deptMult = 1 + 0.15 * (departments - 1);
  const mid =
    monthlyMid[input.org][input.size] * coverageMult[input.coverage] * deptMult;
  const setup =
    setupMid[input.size] *
    (input.coverage === "overflow" ? 1.15 : 1) *
    (1 + 0.1 * (departments - 1));

  return {
    monthlyLow: roundTo25(mid * 0.85),
    monthlyHigh: roundTo25(mid * 1.25),
    setupLow: roundTo25(setup * 0.75),
    setupHigh: roundTo25(setup * 1.2),
  };
}

export function formatUsd(value: number) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(value);
}
