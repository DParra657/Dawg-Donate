'use client';

import { useEffect } from 'react';
import confetti from 'canvas-confetti';
import { useRouter } from 'next/navigation';
import { CheckCircle } from 'lucide-react'; // Optional for cute icon

export default function SuccessPage() {
  const router = useRouter();

  useEffect(() => {
    confetti({
      particleCount: 200,
      spread: 70,
      origin: { y: 0.6 }
    });
  }, []);

  return (
    <main className="min-h-screen bg-[#DB6B71] flex flex-col items-center justify-center text-white text-center p-6">
      <CheckCircle className="w-20 h-20 text-green-300 mb-6" />
      <h1 className="text-4xl font-bold mb-4">Purchase Successful!</h1>
      <p className="text-lg mb-8">Thank you for supporting DawgDonate!</p>
      <button
        onClick={() => router.push('/')}
        className="bg-white text-[#DB6B71] font-semibold px-6 py-3 rounded-full hover:opacity-90 transition"
      >
        Back to Home
      </button>
    </main>
  );
}
