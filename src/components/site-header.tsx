import { brand } from "@/config/brand";
import Link from "next/link";

export function SiteHeader() {
  return (
    <header className="relative z-10 border-b border-white/10 px-6 py-5 sm:px-10 lg:px-16">
      <div className="mx-auto flex max-w-6xl items-center justify-between">
        <Link
          href="/"
          className="focus-visible:outline-moss-300 flex items-center gap-3 text-white focus-visible:outline-2 focus-visible:outline-offset-4"
        >
          <span
            aria-hidden="true"
            className="bg-moss-400 text-ink-950 grid size-8 place-items-center rounded-full text-sm font-bold"
          >
            L
          </span>
          <span className="text-sm font-bold tracking-[0.16em] uppercase">{brand.name}</span>
        </Link>
        <span className="text-ink-100 text-xs font-medium tracking-[0.16em] uppercase">
          Coming soon
        </span>
      </div>
    </header>
  );
}
