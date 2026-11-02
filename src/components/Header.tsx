import Link from "next/link";
import { ShoppingBag, Utensils } from "lucide-react";

export function Header() {
  return (
    <header className="sticky top-0 z-20 border-b border-[#eae3d9] bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          aria-label="QuickBite home"
          className="flex items-center gap-2 text-xl font-extrabold tracking-tight text-[#25251f] sm:text-2xl"
        >
          <span className="grid size-9 place-items-center rounded-xl bg-[#d85f35] text-white">
            <Utensils size={19} aria-hidden="true" />
          </span>
          QuickBite<span className="text-[#d85f35]">.</span>
        </Link>

        <nav
          aria-label="Main navigation"
          className="flex items-center gap-3 sm:gap-5"
        >
          <Link
            href="/restaurants"
            className="rounded-lg px-2 py-2 text-sm font-semibold text-[#45413b] hover:text-[#b94a26] sm:px-3"
          >
            Restaurants
          </Link>
          <Link
            href="/login"
            className="rounded-lg px-2 py-2 text-sm font-semibold text-[#45413b] hover:text-[#b94a26] sm:px-3"
          >
            Login
          </Link>
          <Link
            href="/register"
            className="rounded-lg bg-[#d85f35] px-3 py-2.5 text-sm font-semibold text-white hover:bg-[#b94a26] sm:px-4"
          >
            Sign up
          </Link>
          <Link
            href="/cart"
            aria-label="Shopping cart"
            className="grid size-10 place-items-center rounded-xl border border-[#eae3d9] text-[#37342f] hover:bg-[#fbf8f3]"
          >
            <ShoppingBag size={19} aria-hidden="true" />
          </Link>
        </nav>
      </div>
    </header>
  );
}
