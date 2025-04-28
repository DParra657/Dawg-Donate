'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Header from '../components/Header';

type Item = {
  id: string;
  title: string;
  image: string;
  owner: string;
};

export default function Splash() {
  const [items, setItems] = useState<Item[]>([]);

  useEffect(() => {
    const fetchPublicItems = async () => {
      const res = await fetch('/api/public-items');
      const data = await res.json();
      if (res.ok) {
        setItems(data);
      } else {
        console.error('Failed to fetch public items');
      }
    };

    fetchPublicItems();
  }, []);

  return (
    <>
      <Header isLoggedIn={false} />

      <main className="flex flex-col items-center px-6 text-center text-[#DB6B71] font-sans bg-white">
        {/* Hero Section */}
        <div className="w-full bg-[#DB6B71] text-white py-12 px-6 flex flex-col items-center">
          <div className="flex items-center gap-2 mb-4">
            <Image src="/images/logo.png" width={60} height={60} alt="DawgDonate Logo" />
            <h1 className="text-5xl font-extrabold tracking-tight">DawgDonate</h1>
          </div>
          <p className="text-lg max-w-md mb-8 text-black italic">
            Give What You Can, Find What You Need
          </p>
          <p className="text-lg mb-8 text-black">
            DawgDonate is an online donation program for UGA students looking to buy items on a budget!
          </p>
          <Link href="/login">
            <button className="bg-white text-[#DB6B71] font-semibold text-lg px-6 py-2 rounded-full shadow hover:opacity-90 transition">
              Get Started
            </button>
          </Link>
        </div>

        {/* How it works section */}
        <section className="mt-32">
          <h2 className="text-2xl font-bold">How to Buy/Sell?</h2>
          <div className="mt-16 grid grid-cols-2 gap-x-12 gap-y-20 text-sm text-[#DB6B71] max-w-4xl">
            {/* 4 Features */}
            <div className="flex flex-col items-center mb-16">
              <Image src="/images/list.png" alt="List Items" width={100} height={100} />
              <p className="mt-3 text-lg font-semibold">List Items</p>
              <p className="text-[#DB6B71]/90 mt-1 text-center">
                Post your unused items for other students to find and reuse.
              </p>
            </div>

            <div className="flex flex-col items-center mb-16">
              <Image src="/images/easy.png" alt="Easy Shipping" width={100} height={100} />
              <p className="mt-3 text-lg font-semibold">Easy Shipping</p>
              <p className="text-[#DB6B71]/90 mt-1 text-center">
                Coordinate pickups or drop-offs via email with local students.
              </p>
            </div>

            <div className="flex flex-col items-center">
              <Image src="/images/track.png" alt="Track Donations" width={100} height={100} />
              <p className="mt-3 text-lg font-semibold">Track Donations</p>
              <p className="text-[#DB6B71]/90 mt-1 text-center">
                Edit and delete your items once it's sold.
              </p>
            </div>

            
          </div>

          {/* Donation Promotion section */}
          <div className="mt-24 flex justify-center">
            <div className="w-full max-w-4xl bg-[#DB6B71] text-white rounded-xl px-6 py-8 flex flex-col md:flex-row items-start md:items-center gap-6 shadow-md">
              <div className="flex items-center justify-center">
                <Image
                  src="/images/ga.png"
                  width={180}
                  height={180}
                  alt="Georgia Icon"
                  className="rounded"
                />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-center mb-4">Donate</h3>
                <p className="text-base mb-4">
                  At DawgDonate, you can easily donate items you no longer need to fellow UGA students. We ensure that donations reach students who can benefit from them the most, whether it's books, clothes, or dorm essentials. By giving, you’re helping fellow Dawgs and fostering a supportive campus community.
                </p>
                <p className="text-sm font-semibold text-center">
                  Share the Dawg Spirit – Give, Receive, Repeat!
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Public Donations Section ✅ */}
        <section className="mt-32 w-full max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-10 text-[#DB6B71] text-center">See What Other Dawgs Are Donating!</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {items.length === 0 ? (
              <p className="text-center w-full">No public donations yet.</p>
            ) : (
              items.map((item) => (
                <div key={item.id} className="bg-white text-black p-4 rounded-xl shadow-md text-center">
                  <Image
                    src={item.image || '/placeholder.png'}
                    alt={item.title}
                    width={200}
                    height={200}
                    className="mx-auto mb-4 rounded"
                  />
                  <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-600">Donated by {item.owner}</p>
                </div>
              ))
            )}
          </div>
        </section>

      </main>

      {/* Footer */}
      <footer
        className="w-full px-10 py-6 flex flex-col md:flex-row justify-between items-center md:items-start text-left"
        style={{ backgroundColor: '#FADCDC' }}
      >
        <div className="flex items-center gap-2 md:justify-start w-full md:w-1/3 mb-4 md:mb-0">
          <Image src="/images/logo.png" width={50} height={50} alt="DawgDonate Logo" />
          <span className="text-2xl font-bold text-[#DB6B71]">DawgDonate</span>
        </div>

        <div className="text-center w-full md:w-1/3">
          <h3 className="text-lg font-bold text-[#DB6B71] mb-1">About Us</h3>
          <p className="text-black max-w-md mx-auto">
            DawgDonate is a student-to-student donation platform at UGA, making it easy to give and receive free essentials like books, clothes, and dorm items.
          </p>
        </div>
      </footer>
    </>
  );
} 