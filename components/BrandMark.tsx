export function BrandMark({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <rect width="40" height="40" rx="10" fill="#0B1C33" />
      <path
        d="M8 27.5V16.2c0-.7.4-1.3 1-1.6l10.2-5.3c.5-.3 1.1-.3 1.6 0L31 14.6c.6.3 1 .9 1 1.6V27.5"
        stroke="#E6C86A"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <path
        d="M14 27.5v-6.2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v6.2"
        stroke="#D7E2EA"
        strokeWidth="1.5"
      />
      <circle cx="20" cy="22.2" r="1.3" fill="#C9A227" />
      <path
        d="M8 27.5h24"
        stroke="#1C6B72"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  );
}
