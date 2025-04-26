'use client'; // Enables client-side rendering in Next.js

import { useState } from 'react'; // React hook to manage local state
import { useRouter } from 'next/navigation'; // Next.js hook to programmatically navigate
import Link from 'next/link'; // Next.js component for client-side navigation

export default function LoginPage() {
  // State variables to store user input
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter(); // Used to redirect user after login

  // Handles form submission for login
  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault(); // Prevents default form behavior (page reload)

    // Send login request to the API
    const res = await fetch('/api/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }), // Send email and password as JSON
    });

    const data = await res.json(); // Parse response JSON

    // If login is successful, redirect to user's dashboard
    if (res.ok) {
      localStorage.setItem('authToken', data.data.token);  // make sure your API returns this
      localStorage.setItem('name', data.data.name);

      router.push(`/dashboard/${data.data.userId}`);
    } else {
      alert(data.error || 'Login failed'); // Show error if login fails
    }

    // Clear input fields after submission
    setEmail('');
    setPassword('');
  };

  return (
    // Centered container for the login page
    <main
      className="flex flex-col items-center justify-center min-h-screen p-6"
      style={{ backgroundColor: '#DB6B71', color: 'black' }}
    >
      <h1 className="text-3xl font-extrabold mb-6 text-white drop-shadow">
        Login to DawgDonate
      </h1>

      {/* Login form */}
      <form className="w-full max-w-sm bg-white p-8 rounded-xl shadow-lg" onSubmit={handleLogin}>
        {/* Email input field */}
        <input
          type="email"
          placeholder="Email"
          className="w-full mb-4 p-3 border border-gray-300 rounded text-black placeholder:text-gray-500"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        {/* Password input field */}
        <input
          type="password"
          placeholder="Password"
          className="w-full mb-4 p-3 border border-gray-300 rounded text-black placeholder:text-gray-500"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        {/* Submit button */}
        <button
          type="submit"
          className="w-full bg-black text-white font-semibold py-2 rounded hover:bg-opacity-80 transition"
        >
          Login
        </button>

        {/* Link to signup page */}
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

