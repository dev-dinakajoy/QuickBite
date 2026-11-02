"use client";

import Link from "next/link";
import { useState, SubmitEvent } from "react";
import { ArrowLeft, Eye, EyeOff, Utensils } from "lucide-react";

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [message, setMessage] = useState("");

  function handleSubmit(event: SubmitEvent<HTMLFormElement>) {
    event.preventDefault();
    setMessage("");

    const form = new FormData(event.currentTarget);
    const email = String(form.get("email") ?? "").trim();
    const password = String(form.get("password") ?? "");

    if (!email || !password) {
      setMessage("Enter your email address and password.");
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setMessage("Enter a valid email address.");
    } else {
      setMessage(
        "Form validated!",
      );
    }
  }

  const inputClass =
    "w-full rounded-xl border border-[#ded5c9] bg-white px-4 py-3 text-sm outline-none transition placeholder:text-[#9a9389] focus:border-[#d85f35] focus:ring-2 focus:ring-[#d85f35]/15 text-[#0a0a0ae3]";

  return (
    <main className="min-h-screen bg-[#fbf8f3]">
      <header className="border-b border-[#eae3d9] bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <Link
            href="/"
            className="flex items-center gap-2 text-xl font-extrabold tracking-tight text-[#25251f]"
          >
            <span className="grid size-9 place-items-center rounded-xl bg-[#d85f35] text-white">
              <Utensils size={19} aria-hidden="true" />
            </span>
            QuickBite<span className="text-[#d85f35]">.</span>
          </Link>
          <Link
            href="/"
            className="inline-flex items-center gap-1 text-sm font-semibold text-[#625d56] hover:text-[#b94a26]"
          >
            <ArrowLeft size={16} aria-hidden="true" /> Home
          </Link>
        </div>
      </header>

      <section className="mx-auto grid min-h-[calc(100vh-73px)] max-w-7xl items-center gap-10 px-4 py-10 sm:px-6 lg:grid-cols-2 lg:px-8 lg:py-16">
        <div className="hidden overflow-hidden rounded-[2rem] bg-[#f1e1ce] lg:block">
          <div className="relative min-h-[560px] bg-[linear-gradient(180deg,rgba(35,25,18,0.08),rgba(35,25,18,0.76)),url('https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=1200&q=85')] bg-cover bg-center">
            <div className="absolute inset-x-0 bottom-0 p-10 text-white">
              <p className="text-xs font-bold tracking-[0.18em] text-[#ffe0ca]">
                WELCOME BACK
              </p>
              <h1 className="mt-4 max-w-lg text-4xl font-extrabold leading-tight">
                Your next delicious meal is waiting.
              </h1>
              <p className="mt-4 max-w-md leading-7 text-white/85">
                Sign in to continue your QuickBite journey.
              </p>
            </div>
          </div>
        </div>

        <div className="mx-auto w-full max-w-md">
          <p className="text-xs font-extrabold tracking-[0.16em] text-[#bd5728]">
            WELCOME BACK
          </p>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-[#25251f] sm:text-4xl">
            Log in to QuickBite
          </h2>
          <p className="mt-3 text-sm leading-6 text-[#716d65]">
            Enter your account details to continue.
          </p>

          <form className="mt-8 space-y-5" onSubmit={handleSubmit} noValidate>
            <div>
              <label
                htmlFor="email"
                className="mb-2 block text-sm font-semibold text-[#37342f]"
              >
                Email address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                maxLength={254}
                placeholder="you@example.com"
                className={inputClass}
              />
            </div>

            <div>
              <label
                htmlFor="password"
                className="mb-2 block text-sm font-semibold text-[#37342f]"
              >
                Password
              </label>
              <div className="relative">
                <input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  autoComplete="current-password"
                  required
                  maxLength={128}
                  placeholder="Enter your password"
                  className={`${inputClass} pr-12`}
                />
                <button
                  type="button"
                  aria-label={showPassword ? "Hide password" : "Show password"}
                  onClick={() => setShowPassword((value) => !value)}
                  className="absolute inset-y-0 right-0 grid w-12 place-items-center text-[#716d65] hover:text-[#b94a26]"
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>

            {message && (
              <p
                role="status"
                aria-live="polite"
                className="rounded-xl border border-[#e9c6b7] bg-[#fff1eb] px-4 py-3 text-sm leading-6 text-[#8f3b20]"
              >
                {message}
              </p>
            )}

            <button
              type="submit"
              className="w-full rounded-xl bg-[#d85f35] px-5 py-3.5 text-sm font-bold text-white shadow-sm hover:bg-[#b94a26]"
            >
              Log in
            </button>
          </form>

          <p className="mt-6 text-center text-sm text-[#716d65]">
            Don&apos;t have an account?{" "}
            <Link
              href="/register"
              className="font-bold text-[#b94a26] hover:underline"
            >
              Sign up
            </Link>
          </p>
        </div>
      </section>
    </main>
  );
}
