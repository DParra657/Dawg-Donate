'use client';
import { useParams } from 'next/navigation';
import Image from 'next/image';
import Header from '../../components/Header';
import AddItem from '../../components/add';
import Item from '../../components/Item';
import { items } from '../../data/dummyData'

export default function DashboardPage() {
    const params = useParams();
    const userId = params?.userId;
  
    return (
      <>
        <Header />
        <main className="flex flex-col items-center justify-center min-h-screen bg-white p-6">
          <Image src="/images/logo.png" width={150} height={150} alt="Logo" />
          <h1 className="text-3xl font-bold mt-4">Welcome, User {userId}!</h1>
          <p className="text-gray-600 mt-2">Add new items or browse what’s available.</p>
  
          {/* Add Item Form */}
          <div className="mt-8 w-full max-w-xl">
            <AddItem />
          </div>
  
          {/* List of Existing Items */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-4xl">
            {items.map((item) => (
              <Item key={item.id} title={item.title} image={item.image} />
            ))}
          </div>
        </main>
      </>
    );
  }
  