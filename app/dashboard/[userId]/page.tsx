
'use client';

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import Image from 'next/image';
import Header from '../../components/Header';
import { items as initialItems } from '../../data/dummyData';


useEffect(() => {
  fetch('https://jsonplaceholder.typicode.com/posts')
    .then((res) => res.json())
    .then((data) => {
      console.log('External API data:', data); // Just logging to demonstrate integration
    })
    .catch((err) => {
      console.error('External API error:', err);
    });
}, []);


type Item = {
  id: number;
  title: string;
  image: string;
};

export default function DashboardPage() {
  const [name, setName] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [items, setItems] = useState<Item[]>(initialItems);
  const [editingIndex, setEditingIndex] = useState<number | null>(null);
  const [newItem, setNewItem] = useState<Item>({ id: Date.now(), title: '', image: '' });
  const params = useParams();
  const userId = params?.userId;

  const checkSession = async () => {
    return new Promise<{ token: string | null; name: string | null }>((resolve) => {
      setTimeout(() => {
        resolve({
          token: localStorage.getItem('authToken'),
          name: localStorage.getItem('name'),
        });
      }, 300);
    });
  };

  useEffect(() => {
    checkSession().then(({ token, name }) => {
      if (token && name) {
        setIsAuthenticated(true);
        setName(name);
      }
    });
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newItem.title || !newItem.image) return;
    if (editingIndex !== null) {
      const updated = [...items];
      updated[editingIndex] = { ...newItem, id: updated[editingIndex].id };
      setItems(updated);
      setEditingIndex(null);
    } else {
      setItems([...items, { ...newItem, id: Date.now() }]);
    }
    setNewItem({ id: Date.now(), title: '', image: '' });
  };

  const handleEdit = (index: number) => {
    setNewItem(items[index]);
    setEditingIndex(index);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleDelete = (index: number) => {
    const updated = [...items];
    updated.splice(index, 1);
    setItems(updated);
  };

  if (!isAuthenticated) {
    return <p>Please log in to view your dashboard.</p>;
  }

  return (
    <>
      <Header isLoggedIn={true} />
      <main className="min-h-screen bg-[#DB6B71] px-6 py-12 text-white font-sans">
        <section className="text-center mb-12">
          <h1 className="text-3xl font-bold">Welcome to your donations, {name}!</h1>
        </section>

        <section className="bg-white text-black p-6 rounded-xl shadow-md max-w-xl mx-auto mb-16">
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Item Title"
              className="w-full mb-4 p-3 border border-gray-300 rounded"
              value={newItem.title}
              onChange={(e) => setNewItem({ ...newItem, title: e.target.value })}
              required
            />
            <input
              type="text"
              placeholder="Image URL"
              className="w-full mb-4 p-3 border border-gray-300 rounded"
              value={newItem.image}
              onChange={(e) => setNewItem({ ...newItem, image: e.target.value })}
              required
            />
            <button type="submit" className="w-full bg-black text-white py-2 rounded">
              {editingIndex !== null ? 'Update Item' : 'Add Item'}
            </button>
          </form>
        </section>

        <section className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold mb-6 text-center">Items Donated</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {items.map((item, index) => (
              <div key={item.id} className="bg-white text-black p-4 rounded-xl shadow-md text-center">
                <Image src={item.image} alt={item.title} width={200} height={200} className="mx-auto mb-4 rounded" />
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <div className="flex justify-center gap-2">
                  <button onClick={() => handleEdit(index)} className="bg-yellow-500 text-white px-3 py-1 rounded text-sm">
                    Edit
                  </button>
                  <button onClick={() => handleDelete(index)} className="bg-red-500 text-white px-3 py-1 rounded text-sm">
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}
