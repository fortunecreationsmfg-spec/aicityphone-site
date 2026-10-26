"use client";

import { createContext, useContext, useMemo, useState } from "react";

export type AudienceId = "city" | "home";

type AudienceContextValue = {
  audience: AudienceId;
  setAudience: (audience: AudienceId) => void;
};

const AudienceContext = createContext<AudienceContextValue | null>(null);

export function AudienceProvider({ children }: { children: React.ReactNode }) {
  const [audience, setAudience] = useState<AudienceId>("city");
  const value = useMemo(() => ({ audience, setAudience }), [audience]);

  return <AudienceContext.Provider value={value}>{children}</AudienceContext.Provider>;
}

export function useAudience() {
  const ctx = useContext(AudienceContext);
  if (!ctx) {
    throw new Error("useAudience must be used within AudienceProvider");
  }
  return ctx;
}
