import Image from "next/image";
import { ArrowDown } from "lucide-react";

export function Hero() {
  return (
    <section className="mx-auto max-w-7xl px-4 pb-10 pt-8 sm:px-6 sm:pb-14 sm:pt-12 lg:px-8 lg:pt-16">
      <div className="relative isolate overflow-hidden rounded-[2rem] bg-[#f3e4d2]">
        <Image
          src="https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=1800&q=90"
          alt="A colourful table of freshly prepared food"
          fill
          priority
          sizes="(max-width: 768px) 100vw, 1200px"
          className="-z-20 object-cover object-center"
          unoptimized
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#211a16]/90 via-[#211a16]/65 to-[#211a16]/20" />

        <div className="max-w-3xl px-5 py-14 text-white sm:px-10 sm:py-20 lg:px-14 lg:py-24">
          <p className="mb-4 inline-flex items-center rounded-full border border-white/30 bg-white/10 px-3 py-1.5 text-xs font-bold tracking-[0.16em] text-[#ffe0ca]">
            GOOD FOOD, LESS HASSLE
          </p>
          <h1 className="max-w-2xl text-4xl font-extrabold leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl">
            Your next favourite meal is just a click away.
          </h1>
          <p className="mt-5 max-w-xl text-base leading-7 text-white/85 sm:text-lg">
            Discover restaurants, explore menus, and get ready to enjoy the food
            you love.
          </p>

          <a
            href="#restaurants"
            className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-white/90 hover:text-white"
          >
            Explore restaurants <ArrowDown size={16} aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
}
