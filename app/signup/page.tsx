'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function SignupPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
 
    const res = await fetch('/api/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });

    const data = await res.json();

    if (res.ok) {
      router.push(`/dashboard/${data.userId}`);
    } else {
      alert(data.error || 'Signup failed');
    }

    setEmail('');
    setPassword('');
  };

  return (
    <main
      className="flex flex-col items-center justify-center min-h-screen p-6"
      style={{ backgroundColor: '#DB6B71', color: 'black' }}
    >
      <h1 className="text-3xl font-extrabold mb-6 text-white drop-shadow">
        Sign up for DawgDonate
      </h1>
      <form onSubmit={handleSignup} className="w-full max-w-sm bg-white p-8 rounded-xl shadow-lg">
        <input
          type="email"
          placeholder="Email"
          className="w-full mb-4 p-3 border border-gray-300 rounded text-black placeholder:text-gray-500"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full mb-4 p-3 border border-gray-300 rounded text-black placeholder:text-gray-500"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button
          type="submit"
          className="w-full bg-black text-white font-semibold py-2 rounded hover:bg-opacity-80 transition"
        >
          Sign Up
        </button>
        <p className="text-sm mt-4 text-center text-black">
          Already have an account?{' '}
          <Link href="/login" className="text-white font-bold underline">
            Login
          </Link>
        </p>
      </form>
    </main>
  );
}
