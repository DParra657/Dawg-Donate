'use client';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

export default function Header() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const logout = () => {
    setIsLoggedIn(false);
    console.log("User logged out");
  };

  return (
    <header className="flex justify-between items-center px-6 py-4 bg-white shadow">
      <div className="flex items-center space-x-2">
        <Image src="/images/logo.png" width={40} height={40} alt="DawgDonate Logo" />
        <Link href="/" className="text-xl font-bold text-black">DawgDonate</Link>
      </div>

      <nav className="flex items-center space-x-4">
        {isLoggedIn ? (
          <>
            <Link href="/add" className="text-blue-600">Add Item</Link>
            <button onClick={logout} className="text-red-500">Logout</button>
          </>
        ) : (
          <>
            <Link href="/login" className="text-blue-600">Login</Link>
            <Link href="/signup" className="text-blue-600">Signup</Link>
          </>
        )}
      </nav>
    </header>
  );
}
