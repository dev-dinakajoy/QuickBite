import Image from "next/image";
import Link from "next/link";
import { Clock3, Star } from "lucide-react";
import type { Restaurant } from "@/types/restaurant";

export function RestaurantCard({ restaurant }: { restaurant: Restaurant }) {
  return (
    <article className="group overflow-hidden rounded-2xl border border-[#eae3d9] bg-white shadow-sm transition duration-200 hover:-translate-y-1 hover:shadow-lg">
      <Link
        href={`/restaurants/${restaurant.id}`}
        aria-label={`View ${restaurant.name}`}
        className="block focus-visible:outline-offset-[-3px]"
      >
        <div className="relative aspect-[5/3] overflow-hidden bg-[#f0e4d7]">
          <Image
            src={restaurant.image}
            alt={restaurant.imageAlt}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover transition duration-300 group-hover:scale-105"
            unoptimized
            loading="eager"
          />
          {restaurant.featured && (
            <span className="absolute left-3 top-3 rounded-full bg-white px-3 py-1 text-xs font-bold text-[#9f4829] shadow-sm">
              Customer favourite
            </span>
          )}
        </div>

        <div className="p-4 sm:p-5">
          <div className="flex items-start justify-between gap-3">
            <h3 className="text-lg font-bold text-[#292721]">
              {restaurant.name}
            </h3>
            <span className="flex shrink-0 items-center gap-1 rounded-lg bg-[#fff4dc] px-2 py-1 text-xs font-bold text-[#6b4c0d]">
              <Star size={13} fill="currentColor" aria-hidden="true" />
              {restaurant.rating}
            </span>
          </div>
          <p className="mt-1 text-sm text-[#716d65]">{restaurant.category}</p>
          <div className="mt-5 flex items-center gap-2 text-sm text-[#716d65]">
            <Clock3 size={16} aria-hidden="true" />
            <span>{restaurant.deliveryTime}</span>
          </div>
        </div>
      </Link>
    </article>
  );
}
