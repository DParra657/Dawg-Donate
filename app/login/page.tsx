'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    const res = await fetch('/api/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    });

    const data = await res.json();

    if (res.ok) {
      router.push(`/dashboard/${data.userId}`);
    } else {
      alert(data.error || 'Login failed');
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
        Login to DawgDonate
      </h1>
      <form className="w-full max-w-sm bg-white p-8 rounded-xl shadow-lg" onSubmit={handleLogin}>
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
          Login
        </button>
        <p className="text-sm mt-4 text-center text-black">
          Don’t have an account?{' '}
          <Link href="/signup" className="text-black font-bold underline">
            Sign up
          </Link>
        </p>
      </form>
    </main>
  );
}

