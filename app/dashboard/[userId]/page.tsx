'use client';
import { useParams } from 'next/navigation';
import Image from 'next/image';
import Header from '../../components/Header';
import AddItem from '../../components/add';
import Item from '../../components/Item';
import { items } from '../../data/dummyData';

export default function DashboardPage() {
  const params = useParams();
  const userId = params?.userId;

  return (
    <>
      <Header isLoggedIn={true} />

      <main className="min-h-screen bg-[#DB6B71] px-6 py-12 text-white font-sans">
        {/* Welcome Banner */}
        <section className="text-center mb-12">
          <div className="flex items-center justify-center gap-2">
            <Image src="/images/logo.png" width={40} height={40} alt="Logo" />
            <h1 className="text-3xl font-bold">Welcome to your donations</h1>
          </div>
        </section>

        {/* Add Item Form */}
        <section id="add-item-form" className="bg-white text-black p-6 rounded-xl shadow-md max-w-xl mx-auto mb-16">
          <AddItem />
        </section>

        {/* Donated Items */}
        <section className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold mb-6 text-center">Items Donated</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {items.map((item) => (
              <div key={item.id} className="bg-white text-black p-4 rounded-xl shadow-md text-center">
                <Image src={item.image} alt={item.title} width={200} height={200} className="mx-auto mb-4 rounded" />
                <h3 className="text-lg font-semibold">{item.title}</h3>
              </div>
            ))}
          </div>

          <div className="mt-8 flex justify-center">
            <button className="bg-white text-[#DB6B71] font-semibold px-6 py-2 rounded-full shadow hover:bg-pink-50">
              View other donations
            </button>
          </div>
        </section>
      </main>
    </>
  );
}
