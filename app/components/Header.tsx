'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useRouter, usePathname } from 'next/navigation'; // ⬅️ Also import usePathname if needed

type HeaderProps = {
  isLoggedIn: boolean;
};

export default function Header({ isLoggedIn }: HeaderProps) {
  const router = useRouter();
  const pathname = usePathname(); // Get current page URL

  const logout = () => {
    console.log('User logged out');
    localStorage.removeItem('authToken');
    localStorage.removeItem('name');
    localStorage.removeItem('email');
    localStorage.removeItem('userId');
    router.push('/');
  };

  const scrollToFormOrRedirect = () => {
    const form = document.getElementById('add-item-form');
    if (form) {
      form.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else {
      const userId = localStorage.getItem('userId');
      if (userId) {
        router.push(`/dashboard/${userId}`);
      } else {
        console.error('No userId found');
        router.push('/signup');
      }
    }
  };

  return (
    <header className="flex justify-between items-center px-6 py-4 bg-white shadow">
      <div className="flex items-center space-x-2">
        <Image src="/images/logo.png" width={40} height={40} alt="DawgDonate Logo" />
        <Link href="/" className="text-xl font-bold text-black">
          DawgDonate
        </Link>
      </div>

      <nav className="flex items-center space-x-4">
        {isLoggedIn ? (
          <>
            <button onClick={scrollToFormOrRedirect} className="text-blue-600">
              Add Item
            </button>
            <Link href="/account" className="text-green-600">
              Account
            </Link>
            <button onClick={logout} className="text-red-500">
              Logout
            </button>
          </>
        ) : (
          <>
            <Link href="/login" className="text-blue-600">
              Login
            </Link>
            <Link href="/signup" className="text-blue-600">
              Signup
            </Link>
          </>
        )}
      </nav>
    </header>
  );
}
