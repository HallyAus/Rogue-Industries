import Link from "next/link";

export default function NotFound() {
  return (
    <section className="flex min-h-screen items-center justify-center bg-[#0C0A09] px-4">
      <div className="text-center">
        <div className="mb-8 text-8xl font-serif font-bold text-[#D97706]/20">
          404
        </div>
        <h1 className="font-serif text-3xl font-bold text-[#FAFAF9]">
          Page Not Found
        </h1>
        <p className="mt-4 text-[#A8A29E]">
          Looks like this page hit the wrong note. Let&apos;s get you back on track.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/"
            className="rounded-lg bg-gradient-to-r from-[#D97706] to-[#F59E0B] px-6 py-3 font-semibold text-[#0C0A09] transition-all hover:from-[#F59E0B] hover:to-[#D97706]"
          >
            Back to Home
          </Link>
          <Link
            href="/contact"
            className="rounded-lg border-2 border-[#D97706] px-6 py-3 font-semibold text-[#D97706] transition-all hover:bg-[#D97706] hover:text-[#0C0A09]"
          >
            Contact Keon
          </Link>
        </div>
      </div>
    </section>
  );
}
