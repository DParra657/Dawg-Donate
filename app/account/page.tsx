'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation'; // 🛑 Add router import!
import Header from '../components/Header';
import Image from 'next/image';

type Item = {
  id: string;
  title: string;
  image: string;
};

export default function AccountPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [items, setItems] = useState<Item[]>([]);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const router = useRouter(); // 🛑 Hook for navigating

  const checkSession = async () => {
    if (typeof window === 'undefined') return { token: null, name: null, email: null };
    const token = localStorage.getItem('authToken');
    const name = localStorage.getItem('name');
    const email = localStorage.getItem('email');
    return { token, name, email };
  };

  const fetchItems = async (userId: string) => {
    try {
      const res = await fetch('/api/items', {
        method: 'GET',
        headers: { 'Content-Type': 'application/json', userId },
      });

      const data = await res.json();
      if (res.ok) {
        setItems(data);
      } else {
        console.error('Error fetching items:', data.error);
      }
    } catch (error) {
      console.error('Error fetching items:', error);
    }
  };

  useEffect(() => {
    checkSession().then(({ token, name, email }) => {
      if (token) {
        setIsAuthenticated(true);
        if (name) setName(name);
        if (email) setEmail(email);

        const userId = localStorage.getItem('userId') || '';
        if (userId) {
          fetchItems(userId);
        }
      } else {
        console.error('Authentication failed');
        router.push('/signup'); // 🛑 REDIRECT to signup or any other page if no token
      }
    });
  }, []);

  if (!isAuthenticated) {
    return null; // 🛑 Return nothing while redirecting
  }

  return (
    <>
      <Header isLoggedIn={true} />
      <main className="min-h-screen bg-[#DB6B71] text-white p-8 font-sans">
        <section className="max-w-3xl mx-auto bg-white text-black p-8 rounded-lg shadow-md">
          <h1 className="text-3xl font-bold mb-6 text-center">My Account</h1>

          <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-2">Profile Information</h2>
            <p><strong>Name:</strong> {name}</p>
            <p><strong>Email:</strong> {email}</p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4">My Donations</h2>
            {items.length === 0 ? (
              <p>No items donated yet.</p>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {items.map((item) => (
                  <div key={item.id} className="bg-gray-100 text-black p-4 rounded-lg shadow text-center">
                    <Image
                      src={item.image || '/placeholder.png'}
                      alt={item.title}
                      width={200}
                      height={200}
                      className="mx-auto rounded mb-2"
                    />
                    <h3 className="font-semibold">{item.title}</h3>
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>
      </main>
    </>
  );
}
