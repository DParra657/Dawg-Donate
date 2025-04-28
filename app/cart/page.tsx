'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import Header from '@/app/components/Header'; // adjust if your Header path is different
import { ShoppingCart } from 'lucide-react'; // using lucide-react icons (optional)

type CartItem = {
  id: string;
  title: string;
  image: string;
  owner: string;
};

export default function CartPage() {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const router = useRouter();

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem('cart') || '[]');
    setCartItems(storedCart);
  }, []);

  const handleRemoveItem = (id: string) => {
    const updatedCart = cartItems.filter(item => item.id !== id);
    setCartItems(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  const handleCheckout = () => {
    if (cartItems.length === 0) {
      alert('Your cart is empty!');
      return;
    }
    alert(`Thank you for purchasing ${cartItems.length} item${cartItems.length > 1 ? 's' : ''}!`);
    localStorage.removeItem('cart');
    setCartItems([]);
    router.push('/success');
  };

  return (
    <>
      <Header isLoggedIn={true} />
      <main className="min-h-screen bg-[#DB6B71] px-6 py-12 text-white font-sans">

        {/* Cart Icon + Title */}
        <section className="text-center mb-12">
          <div className="flex items-center justify-center gap-2">
            <ShoppingCart className="w-10 h-10" />
            <h1 className="text-3xl font-bold">Your Cart</h1>
          </div>
          <p className="text-sm mt-2">Manage your selected donations here!</p>
        </section>

        {cartItems.length === 0 ? (
          <p className="text-center text-white">Your cart is empty. 🛒</p>
        ) : (
          <>
            {/* Cart Items */}
            <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mb-20">
              {cartItems.map((item) => (
                <div key={item.id} className="bg-white text-black p-4 rounded-xl shadow-md text-center relative">
                  <Image
                    src={item.image || '/placeholder.png'}
                    alt={item.title}
                    width={200}
                    height={200}
                    className="mx-auto mb-4 rounded"
                  />
                  <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-600 mb-4">Donated by {item.owner}</p>

                  {/* Remove Button */}
                  <button
                    onClick={() => handleRemoveItem(item.id)}
                    className="absolute top-2 right-2 bg-red-500 text-white rounded-full w-8 h-8 flex items-center justify-center hover:opacity-90 transition"
                    title="Remove from Cart"
                  >
                    ×
                  </button>
                </div>
              ))}
            </div>

            {/* Checkout Summary Box */}
            <section className="max-w-md mx-auto bg-white text-black p-8 rounded-2xl shadow-lg">
              <h2 className="text-2xl font-bold mb-6 text-center text-[#DB6B71]">Checkout Summary</h2>
              <div className="flex justify-between mb-4">
                <span className="font-semibold">Total Items:</span>
                <span>{cartItems.length}</span>
              </div>

              <div className="flex justify-center mt-6">
                <button
                  onClick={handleCheckout}
                  className="bg-[#DB6B71] text-white font-semibold py-3 px-8 rounded-full hover:opacity-90 transition"
                >
                  Complete Checkout
                </button>
              </div>
            </section>
          </>
        )}
      </main>
    </>
  );
}
