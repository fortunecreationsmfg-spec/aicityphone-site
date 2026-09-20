import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto max-w-xl px-4 py-24 text-center">
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-teal">404</p>
      <h1 className="mt-3 font-display text-4xl text-navy">Page not found</h1>
      <p className="mt-4 text-ink/70">That address is not part of the AI City Phone site.</p>
      <Link href="/" className="btn-primary mt-8">
        Back to the homepage
      </Link>
    </div>
  );
}
