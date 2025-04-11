'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation'; // ✅ import router
import Link from 'next/link';

export default function SignupPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter(); // ✅ use the router

  const handleSignup = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Sign up with:', { email, password });

    // ✅ Simulate signup and redirect
    const fakeUserId = '1234';
    router.push(`/dashboard/${fakeUserId}`);

    setEmail('');
    setPassword('');
  };

  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-6 bg-gray-50">
      <h1 className="text-3xl font-bold mb-6">Sign up for DawgDonate</h1>
      <form onSubmit={handleSignup} className="w-full max-w-sm bg-white p-6 rounded-lg shadow-md">
        <input
          type="email"
          placeholder="Email"
          className="w-full mb-4 p-2 border rounded"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full mb-4 p-2 border rounded"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
        >
          Sign Up
        </button>
        <p className="text-sm mt-4 text-center">
          Already have an account?{' '}
          <Link href="/login" className="text-blue-600 hover:underline">
            Login
          </Link>
        </p>
      </form>
    </main>
  );
}
