"use client";

import { useMemo, useState } from "react";
import { Search, SearchX } from "lucide-react";
import { Header } from "@/components/Header";
import { RestaurantCard } from "@/components/RestaurantCard";
import { restaurants } from "@/data/restaurants";
import Footer from "@/components/Footer";

export default function RestaurantsPage() {
  const [query, setQuery] = useState("");

  const filteredRestaurants = useMemo(() => {
    const normalizedQuery = query.trim().toLocaleLowerCase();
    if (!normalizedQuery) return restaurants;

    return restaurants.filter((restaurant) =>
      restaurant.name.toLocaleLowerCase().includes(normalizedQuery),
    );
  }, [query]);

  return (
    <main className="min-h-screen">
      <Header />

      <section
        id="restaurants"
        aria-labelledby="restaurants-heading"
        className="mt-8 mx-auto max-w-7xl scroll-mt-24 px-4 pb-16 pt-4 sm:px-6 sm:pb-20 lg:px-8"
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
              {query.trim() ? "Search results" : "All restaurants"}
            </h2>
            <p className="mt-2 text-sm text-[#cfcabf] sm:text-base">
              {query.trim()
                ? `${filteredRestaurants.length} ${
                    filteredRestaurants.length === 1
                      ? "restaurant"
                      : "restaurants"
                  } found for “${query.trim()}”`
                : "Discover places serving something delicious."}
            </p>
          </div>

          {query && (
            <button
              type="button"
              onClick={() => setQuery("")}
              className="self-start rounded-lg border border-[#e2d8cc] px-4 py-2 text-sm font-semibold text-[#514b43] hover:bg-white sm:self-auto"
            >
              Clear search
            </button>
          )}
        </div>

        <form
          className="my-8 flex w-[100%] items-center gap-2 rounded-2xl bg-white p-2 shadow-xl shadow-black/10"
          onSubmit={(event) => {
            event.preventDefault();
            document.getElementById("restaurants")?.scrollIntoView({
              behavior: "smooth",
            });
          }}
          role="search"
        >
          <Search
            className="ml-2 shrink-0 text-[#777168]"
            size={21}
            aria-hidden="true"
          />
          <label htmlFor="restaurant-search" className="sr-only">
            Search restaurants by name
          </label>
          <input
            id="restaurant-search"
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search restaurants..."
            autoComplete="off"
            className="min-w-0 flex-1 bg-transparent px-1 py-3 text-sm text-[#25251f] outline-none placeholder:text-[#8a847c] sm:text-base"
          />
          <button
            type="submit"
            className="rounded-xl bg-[#d85f35] px-4 py-3 text-sm font-bold text-white hover:bg-[#b94a26] sm:px-5 cursor-pointer"
          >
            Search
          </button>
        </form>

        {filteredRestaurants.length > 0 ? (
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
            {filteredRestaurants.map((restaurant) => (
              <RestaurantCard key={restaurant.id} restaurant={restaurant} />
            ))}
          </div>
        ) : (
          <div className="flex min-h-64 flex-col items-center justify-center rounded-2xl border border-dashed border-[#dfd4c8] bg-white/70 px-6 py-12 text-center">
            <span className="grid size-14 place-items-center rounded-full bg-[#f5e7d6] text-[#b94a26]">
              <SearchX size={26} aria-hidden="true" />
            </span>
            <h3 className="mt-4 text-lg font-bold text-[#25251f]">
              No restaurants found
            </h3>
            <p className="mt-2 max-w-sm text-sm leading-6 text-[#716d65]">
              We couldn’t find a restaurant matching “{query.trim()}”. Check the
              spelling or try another name.
            </p>
            <button
              type="button"
              onClick={() => setQuery("")}
              className="mt-5 rounded-xl bg-[#d85f35] px-5 py-3 text-sm font-bold text-white hover:bg-[#b94a26]"
            >
              Show all restaurants
            </button>
          </div>
        )}
      </section>
      <Footer />
    </main>
  );
}
