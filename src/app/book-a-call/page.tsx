import type { Metadata } from "next";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { BookForm } from "@/components/book-form";
import { BOOK } from "@/lib/content";

export const metadata: Metadata = {
  title: "Book a call",
  description:
    "Book a call with Jwebly — twenty minutes, a live look at the system, and a straight read on whether it fits your business.",
  alternates: { canonical: "/book-a-call" },
};

export default function BookACallPage() {
  return (
    <>
      <Nav />
      <main>
        <section className="border-b border-border">
          <div className="mx-auto grid max-w-page gap-14 px-6 py-24 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
            {/* Left: pitch */}
            <div>
              <p className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.16em] text-faint">
                <span aria-hidden className="h-px w-6 bg-faint" />
                {BOOK.kicker}
              </p>
              <h1 className="mt-6 font-semibold tracking-[-0.03em] text-[clamp(32px,4.5vw,56px)]">
                {BOOK.heading}
              </h1>
              <p className="mt-5 max-w-md text-lg leading-relaxed text-muted">
                {BOOK.sub}
              </p>
            </div>

            {/* Right: form */}
            <div className="lg:pt-2">
              <BookForm />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
