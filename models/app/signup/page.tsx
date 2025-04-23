'use client'; // Enables client-side rendering in Next.js

import { useState } from 'react'; // Hook for managing component state
import { useRouter } from 'next/navigation'; // For programmatic navigation after signup
import Link from 'next/link'; // Next.js component for internal navigation

export default function SignupPage() {
  // Local state for input fields
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');  // Add state for name
  const router = useRouter(); // Router for navigating to dashboard after signup

  // Function to handle form submission
  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault(); // Prevents default form behavior (refresh)

    // Send POST request to the API with email and password
    const res = await fetch('/api/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password, name }), 
    });

    const data = await res.json(); // Parse the response JSON

    if (res.ok) {
      // Save data to localStorage after successful signup
      localStorage.setItem('username', email);
      localStorage.setItem('name', name);  
      // Redirect to dashboard after signup
      router.push(`/dashboard/${data.userId}`); 
    } else {
      alert(data.error || 'Signup failed'); // Show error alert if signup fails
    }

    // Clear input fields
    setEmail('');
    setPassword('');
    setName(''); 
  };

  return (
    <main
      className="flex flex-col items-center justify-center min-h-screen p-6"
      style={{ backgroundColor: '#DB6B71', color: 'black' }}
    >
      {/* Page title */}
      <h1 className="text-3xl font-extrabold mb-6 text-white drop-shadow">
        Sign up for DawgDonate
      </h1>

      {/* Signup form */}
      <form onSubmit={handleSignup} className="w-full max-w-sm bg-white p-8 rounded-xl shadow-lg">
        {/* Name input */}
        <input
          type="text"
          placeholder="Name"
          className="w-full mb-4 p-3 border border-gray-300 rounded text-black placeholder:text-gray-500"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        {/* Email input */}
        <input
          type="email"
          placeholder="Email"
          className="w-full mb-4 p-3 border border-gray-300 rounded text-black placeholder:text-gray-500"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        {/* Password input */}
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
          Sign Up
        </button>

        {/* Link to login page */}
        <p className="text-sm mt-4 text-center text-black">
          Already have an account?{' '}
          <Link href="/login" className="text-black font-bold underline">
            Login
          </Link>
        </p>
      </form>
    </main>
  );
}
