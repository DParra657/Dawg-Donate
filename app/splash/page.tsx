'use client';
import Image from 'next/image';
import Link from 'next/link';
import Header from '../components/Header';

export default function Splash() {
  return (
    <>
      <Header isLoggedIn={false} />

      <main className="min-h-screen bg-[#DB6B71] flex flex-col items-center px-6 py-12 text-center text-white font-sans">
        {/* Logo + Title */}
        <div className="flex items-center gap-2 mb-4">
          <Image src="/images/logo.png" width={60} height={60} alt="DawgDonate Logo" />
          <h1 className="text-5xl font-extrabold tracking-tight">DawgDonate</h1>
        </div>

        {/* Tagline */}
        <p className="text-lg max-w-md text-white/90 mb-8">
          Give What You Can, Find What You Need.
        </p>

        {/* Get Started CTA */}
        <Link href="/login">
          <button className="bg-white text-[#DB6B71] font-semibold text-lg px-6 py-2 rounded-full shadow hover:opacity-90 transition">
            Get Started
          </button>
        </Link>

        {/* Section title */}
        <h2 className="text-2xl font-bold mt-16">How to Buy/Sell?</h2>

        {/* Info Icons Section */}
        <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-6 text-sm text-white">
          <div>
            <Image src="/images/list.svg" alt="List Items" width={48} height={48} className="mx-auto" />
            <p className="mt-2">List Items</p>
          </div>
          <div>
            <Image src="/images/ship.svg" alt="Easy Shipping" width={48} height={48} className="mx-auto" />
            <p className="mt-2">Easy Shipping</p>
          </div>
          <div>
            <Image src="/images/track.svg" alt="Track Donations" width={48} height={48} className="mx-auto" />
            <p className="mt-2">Track Donations</p>
          </div>
          <div>
            <Image src="/images/cart.svg" alt="Add to Cart" width={48} height={48} className="mx-auto" />
            <p className="mt-2">Add to Cart</p>
          </div>
        </div>
      </main>
    </>
  );
}
