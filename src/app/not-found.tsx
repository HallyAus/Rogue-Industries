import Link from "next/link";

export default function NotFound() {
  return (
    <section className="flex min-h-screen items-center justify-center bg-[#FFFBF5] px-4">
      <div className="text-center">
        <div className="mb-8 text-8xl font-serif font-bold text-[#4A7C6F]/15">
          404
        </div>
        <h1 className="font-serif text-3xl font-bold text-[#2C2418]">
          Page Not Found
        </h1>
        <p className="mt-4 text-[#8B7E6A]">
          Looks like this page hit the wrong note. Let&apos;s get you back on track.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/"
            className="rounded-xl bg-[#4A7C6F] px-6 py-3 font-semibold text-white transition-all hover:bg-[#3A6357] shadow-md"
          >
            Back to Home
          </Link>
          <Link
            href="/contact"
            className="rounded-xl border-2 border-[#4A7C6F] px-6 py-3 font-semibold text-[#4A7C6F] transition-all hover:bg-[#4A7C6F] hover:text-white"
          >
            Contact Keon
          </Link>
        </div>
      </div>
    </section>
  );
}
