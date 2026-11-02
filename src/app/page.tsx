"use client";

import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { RestaurantCard } from "@/components/RestaurantCard";
import { restaurants } from "@/data/restaurants";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />

      <section
        id="restaurants"
        aria-labelledby="restaurants-heading"
        className="mx-auto max-w-7xl scroll-mt-24 px-4 pb-16 pt-4 sm:px-6 sm:pb-20 lg:px-8"
      >
        <div className="mb-6 flex flex-col gap-3 sm:mb-8 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-xs font-extrabold tracking-[0.16em] text-[#bd5728]">
              MADE FOR YOUR CRAVINGS
            </p>
            <h2
              id="restaurants-heading"
              className="mt-2 text-2xl font-extrabold tracking-tight text-[#8d8d51] sm:text-3xl"
            >
              Popular restaurants
            </h2>
            <p className="mt-2 text-sm text-[#cfcabf] sm:text-base">
              Discover places serving something delicious.
            </p>
          </div>
        </div>

        {restaurants.length > 0 && (
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
            {restaurants.map((restaurant) => (
              <RestaurantCard key={restaurant.id} restaurant={restaurant} />
            ))}
          </div>
        )}
      </section>
      <Footer />
    </main>
  );
}
