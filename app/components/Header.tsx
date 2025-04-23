'use client'; // Enable client-side interactivity in Next.js App Router

import Link from 'next/link'; // For client-side navigation
import Image from 'next/image'; // For optimized image rendering
import { useRouter } from 'next/navigation'; // For programmatic navigation

// Define props for the Header component
type HeaderProps = {
  isLoggedIn: boolean; // True if user is authenticated
};

// Main Header component
export default function Header({ isLoggedIn }: HeaderProps) {
  const router = useRouter(); // Access Next.js navigation

  // Logout function: log to console and redirect to home
  const logout = () => {
    console.log('User logged out');
    router.push('/');
  };

  // Scroll smoothly to the Add Item form if it exists on the page
  const scrollToForm = () => {
    const form = document.getElementById('add-item-form');
    if (form) {
      form.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <header className="flex justify-between items-center px-6 py-4 bg-white shadow">
      {/* Left side: logo + DawgDonate title */}
      <div className="flex items-center space-x-2">
        <Image src="/images/logo.png" width={40} height={40} alt="DawgDonate Logo" />
        <Link href="/" className="text-xl font-bold text-black">DawgDonate</Link>
      </div>

      {/* Right side: navigation links depending on login status */}
      <nav className="flex items-center space-x-4">
        {isLoggedIn ? (
          <>
            {/* When logged in: show Add Item and Logout */}
            <button onClick={scrollToForm} className="text-blue-600">Add Item</button>
            <button onClick={logout} className="text-red-500">Logout</button>
          </>
        ) : (
          <>
            {/* When logged out: show Login and Signup */}
            <Link href="/login" className="text-blue-600">Login</Link>
            <Link href="/signup" className="text-blue-600">Signup</Link>
          </>
        )}
      </nav>
    </header>
  );
}
