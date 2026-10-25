"use client";

import { CONTACT_EMAIL, STRIPE_PAYMENT_LINK } from "@/lib/constants";
import { useI18n } from "@/components/LanguageProvider";

type CheckoutActionsProps = {
  /** Gold primary button for use on the dark closing band. */
  onDark?: boolean;
};

export function CheckoutActions({ onDark = false }: CheckoutActionsProps) {
  const { t } = useI18n();
  const startMail = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(t.pricing.mailSubject)}`;
  const questionMail = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(t.pricing.questionSubject)}`;
  const checkoutHref = STRIPE_PAYMENT_LINK ?? startMail;
  const linked = STRIPE_PAYMENT_LINK !== null;

  return (
    <div>
      <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
        <a
          href={checkoutHref}
          className={`${onDark ? "btn-gold" : "btn-primary"} w-full sm:w-auto`}
          data-checkout-mode={linked ? "stripe" : "contact"}
        >
          {t.pricing.subscribe}
        </a>
        <a
          href={questionMail}
          className={`${onDark ? "btn-on-dark" : "btn-secondary"} w-full sm:w-auto`}
        >
          {t.pricing.contact}
        </a>
      </div>
      <p className={`mt-4 max-w-2xl text-sm leading-6 ${onDark ? "text-mist" : "text-ink/75"}`}>
        {linked ? t.pricing.connectedNote : t.pricing.fallbackNote}
      </p>
    </div>
  );
}
