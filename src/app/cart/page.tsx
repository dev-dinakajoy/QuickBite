"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import {
  ArrowLeft,
  Minus,
  Plus,
  ShoppingBag,
  Trash2,
  Utensils,
} from "lucide-react";
import Footer from "@/components/Footer";

type CartItem = {
  id: string;
  name: string;
  restaurant: string;
  price: number;
  quantity: number;
  image: string;
};

const initialItems: CartItem[] = [
  {
    id: "meal-1",
    name: "Classic Cheeseburger",
    restaurant: "Burger House",
    price: 4500,
    quantity: 1,
    image:
      "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: "meal-2",
    name: "Crispy Chicken",
    restaurant: "Chicken Corner",
    price: 6000,
    quantity: 2,
    image:
      "https://images.unsplash.com/photo-1562967914-608f82629710?auto=format&fit=crop&w=400&q=80",
  },
];

const formatPrice = (amount: number) => `₦${amount.toLocaleString("en-NG")}`;

export default function CartPage() {
  const [items, setItems] = useState<CartItem[]>(initialItems);
  const [notice, setNotice] = useState("");

  const subtotal = useMemo(
    () => items.reduce((total, item) => total + item.price * item.quantity, 0),
    [items],
  );

  const deliveryFee = items.length > 0 ? 1500 : 0;
  const total = subtotal + deliveryFee;

  function updateQuantity(id: string, change: number) {
    setItems((currentItems) =>
      currentItems.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + change) }
          : item,
      ),
    );
    setNotice("");
  }

  function removeItem(id: string) {
    setItems((currentItems) => currentItems.filter((item) => item.id !== id));
    setNotice("Item removed from your cart.");
  }

  function handleCheckout() {
    setNotice("Checkout is not connected yet. No order has been placed.");
  }

  return (
    <main className="min-h-screen bg-[#fbf8f3] text-[#25251f]">
      <header className="border-b border-[#eae3d9] bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <Link
            href="/"
            className="flex items-center gap-2 text-xl font-extrabold tracking-tight"
          >
            <span className="grid size-9 place-items-center rounded-xl bg-[#d85f35] text-white">
              <Utensils size={19} aria-hidden="true" />
            </span>
            QuickBite<span className="text-[#d85f35]">.</span>
          </Link>

          <Link
            href="/restaurants"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#625d56] hover:text-[#b94a26]"
          >
            <ArrowLeft size={16} aria-hidden="true" />
            Continue shopping
          </Link>
        </div>
      </header>

      <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
        <div>
          <p className="text-xs font-extrabold tracking-[0.16em] text-[#bd5728]">
            YOUR ORDER
          </p>
          <h1 className="mt-2 text-3xl font-extrabold tracking-tight sm:text-4xl">
            Your shopping cart
          </h1>
          <p className="mt-3 text-sm text-[#716d65]">
            Review your items before moving to checkout.
          </p>
        </div>

        {notice && (
          <p
            role="status"
            aria-live="polite"
            className="mt-6 rounded-xl border border-[#e9c6b7] bg-[#fff1eb] px-4 py-3 text-sm text-[#8f3b20]"
          >
            {notice}
          </p>
        )}

        {items.length === 0 ? (
          <div className="mt-10 rounded-3xl border border-[#eae3d9] bg-white px-6 py-16 text-center">
            <span className="mx-auto grid size-16 place-items-center rounded-2xl bg-[#fff1eb] text-[#d85f35]">
              <ShoppingBag size={30} aria-hidden="true" />
            </span>
            <h2 className="mt-5 text-xl font-bold">Your cart is empty</h2>
            <p className="mx-auto mt-2 max-w-sm text-sm leading-6 text-[#716d65]">
              Looks like you haven&apos;t added anything to your cart yet.
              Explore our restaurants and find something delicious.
            </p>
            <Link
              href="/"
              className="mt-6 inline-flex rounded-xl bg-[#d85f35] px-6 py-3 text-sm font-bold text-white hover:bg-[#b94a26]"
            >
              Explore restaurants
            </Link>
          </div>
        ) : (
          <div className="mt-8 grid items-start gap-8 lg:grid-cols-[1fr_360px]">
            <section className="rounded-3xl border border-[#eae3d9] bg-white p-4 sm:p-6">
              <div className="flex items-center justify-between border-b border-[#eee8df] pb-4">
                <h2 className="text-lg font-bold">Cart items</h2>
                <span className="text-sm text-[#716d65]">
                  {items.reduce((count, item) => count + item.quantity, 0)}{" "}
                  items
                </span>
              </div>

              <div className="divide-y divide-[#eee8df]">
                {items.map((item) => (
                  <article
                    key={item.id}
                    className="flex flex-col gap-4 py-5 sm:flex-row sm:items-center"
                  >
                    <img
                      src={item.image}
                      alt={item.name}
                      className="size-24 shrink-0 rounded-2xl object-cover sm:size-28"
                    />

                    <div className="min-w-0 flex-1">
                      <p className="text-xs font-medium text-[#8a847c]">
                        {item.restaurant}
                      </p>
                      <h3 className="mt-1 font-bold">{item.name}</h3>
                      <p className="mt-2 font-extrabold text-[#bd5728]">
                        {formatPrice(item.price)}
                      </p>

                      <div className="mt-4 flex items-center justify-between gap-4 sm:justify-start">
                        <div
                          className="inline-flex items-center rounded-xl border border-[#e4dbcf]"
                          aria-label={`Quantity of ${item.name}`}
                        >
                          <button
                            type="button"
                            onClick={() => updateQuantity(item.id, -1)}
                            disabled={item.quantity <= 1}
                            aria-label={`Decrease ${item.name} quantity`}
                            className="grid size-9 place-items-center rounded-l-xl hover:bg-[#fbf8f3] disabled:cursor-not-allowed disabled:opacity-40"
                          >
                            <Minus size={15} aria-hidden="true" />
                          </button>
                          <span
                            aria-live="polite"
                            className="min-w-9 text-center text-sm font-bold"
                          >
                            {item.quantity}
                          </span>
                          <button
                            type="button"
                            onClick={() => updateQuantity(item.id, 1)}
                            aria-label={`Increase ${item.name} quantity`}
                            className="grid size-9 place-items-center rounded-r-xl hover:bg-[#fbf8f3]"
                          >
                            <Plus size={15} aria-hidden="true" />
                          </button>
                        </div>

                        <button
                          type="button"
                          onClick={() => removeItem(item.id)}
                          aria-label={`Remove ${item.name}`}
                          className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#a13f2a] hover:text-[#762c1c]"
                        >
                          <Trash2 size={15} aria-hidden="true" />
                          Remove
                        </button>
                      </div>
                    </div>

                    <p className="text-sm font-extrabold sm:text-right">
                      {formatPrice(item.price * item.quantity)}
                    </p>
                  </article>
                ))}
              </div>

              <Link
                href="/"
                className="mt-2 inline-flex items-center gap-2 py-2 text-sm font-bold text-[#bd5728] hover:underline"
              >
                <ArrowLeft size={15} aria-hidden="true" />
                Add more items
              </Link>
            </section>

            <aside className="rounded-3xl border border-[#eae3d9] bg-white p-5 sm:p-6">
              <h2 className="text-lg font-bold">Order summary</h2>

              <div className="mt-6 space-y-4 text-sm">
                <div className="flex justify-between gap-4 text-[#716d65]">
                  <span>Subtotal</span>
                  <span className="font-semibold text-[#25251f]">
                    {formatPrice(subtotal)}
                  </span>
                </div>
                <div className="flex justify-between gap-4 text-[#716d65]">
                  <span>Delivery fee</span>
                  <span className="font-semibold text-[#25251f]">
                    {formatPrice(deliveryFee)}
                  </span>
                </div>
                <div className="border-t border-[#eee8df] pt-4">
                  <div className="flex justify-between gap-4 text-base font-extrabold">
                    <span>Total</span>
                    <span>{formatPrice(total)}</span>
                  </div>
                </div>
              </div>

              <button
                type="button"
                onClick={handleCheckout}
                className="mt-6 w-full rounded-xl bg-[#d85f35] px-5 py-3.5 text-sm font-bold text-white shadow-sm hover:bg-[#b94a26]"
              >
                Proceed to checkout
              </button>

              <p className="mt-4 text-center text-xs leading-5 text-[#8a847c]">
                Delivery fees are sample values. Checkout and order placement are not connected yet.
              </p>
            </aside>
          </div>
        )}
      </section>
      <Footer />
    </main>
  );
}
