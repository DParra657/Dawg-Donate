'use client';

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import Image from 'next/image';
import Header from '../../components/Header';

type Item = {
  id: string;
  title: string;
  image: string;
};

export default function DashboardPage() {
  const [name, setName] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [items, setItems] = useState<Item[]>([]);
  const [editingIndex, setEditingIndex] = useState<number | null>(null);
  const [newItem, setNewItem] = useState<Item>({ id: '', title: '', image: '' });
  const [searchQuery, setSearchQuery] = useState(''); // State for search query
  const [filteredItems, setFilteredItems] = useState<Item[]>([]); // State for filtered items
  const params = useParams();
  const userId = Array.isArray(params?.userId) ? params.userId[0] : params?.userId || '';

  const checkSession = async () => {
    if (typeof window === 'undefined') return { token: null, name: null };

    const token = localStorage.getItem('authToken');
    const name = localStorage.getItem('name');
    return { token, name };
  };

  // Fetch items from the backend
  const fetchItems = async () => {
    const userId = localStorage.getItem('userId');
    console.log('Fetching items with userId:', userId);
    
    if (!userId) {
      console.error('No userId found in localStorage');
      return;
    }
    
    try {
      const res = await fetch('/api/items', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'userId': userId,
        },
      });
      
      if (!res.ok) {
        console.error('Failed to fetch items');
        return;
      }
      
      const data = await res.json();
      console.log('API response data:', data); // Log the data to see its structure
  
      if (Array.isArray(data)) {
        const mapped = data.map((item) => ({
          id: item.id,
          title: item.title,
          image: item.image,
        }));
        setItems(mapped);
        setFilteredItems(mapped); // Initialize filteredItems with all items
      } else {
        console.error('Unexpected data format from API:', data);
        setItems([]);
        setFilteredItems([]);
      }
    } catch (error) {
      console.error('Error fetching items:', error);
      setItems([]);
      setFilteredItems([]);
    }
  };
  
  useEffect(() => {
    checkSession().then(({ token, name }) => {
      if (token && name) {
        setIsAuthenticated(true);
        setName(name);
        fetchItems(); // Fetch items after authentication
      } else {
        console.error('Authentication failed');
      }
    });
  }, []);

  // Handle the search input and filter items
  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const query = event.target.value;
    setSearchQuery(query);

    // Filter items based on title matching the search query (case-insensitive)
    const filtered = items.filter(item =>
      item.title.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredItems(filtered); // Update filteredItems state with the filtered results
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newItem.title || !newItem.image) return;
  
    try {
      const res = await fetch('/api/items', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          title: newItem.title,
          image: newItem.image,
          userId 
        }),
      });
  
      const data = await res.json();
  
      if (res.ok) {
        // Use the full item returned from backend
        setItems(prev => [...prev, data.item]);
        setFilteredItems(prev => [...prev, data.item]);
        setNewItem({ id: '', title: '', image: '' });
      } else {
        console.error('Error adding item:', data.error);
      }
    } catch (error) {
      console.error('Error submitting item:', error);
    }
  };

  const handleEdit = (index: number) => {
    setNewItem(items[index]);
    setEditingIndex(index);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleDelete = async (index: number) => {
    try {
      if (!userId) {
        console.error('User ID is missing');
        return;
      }
  
      const itemId = items[index].id;
      const res = await fetch('/api/items', {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id: itemId, userId }), // Send itemId and userId in the body
      });
  
      if (res.ok) {
        const updated = [...items];
        updated.splice(index, 1);
        setItems(updated);
        setFilteredItems(updated); // Update filteredItems
      } else {
        const errorData = await res.json();
        console.error('Error deleting item:', errorData.error);
      }
    } catch (error) {
      console.error('Error deleting item:', error);
    }
  };

  return (
    <>
      <Header isLoggedIn={true} />
      <main className="min-h-screen bg-[#DB6B71] px-6 py-12 text-white font-sans">
        <section className="text-center mb-12">
          <h1 className="text-3xl font-bold">Welcome to your donations, {name}!</h1>
        </section>

        <section className="bg-white text-black p-6 rounded-xl shadow-md max-w-xl mx-auto mb-16">
          {/* Search bar */}
          <input
            type="text"
            placeholder="Search Items"
            className="w-full mb-4 p-3 border border-gray-300 rounded"
            value={searchQuery}
            onChange={handleSearch}
          />
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
            {filteredItems.map((item, index) => (
              <div key={item.id || index} className="bg-white text-black p-4 rounded-xl shadow-md text-center">
                <Image src={item.image || '/placeholder.png'} alt={item.title} width={200} height={200} className="mx-auto mb-4 rounded" />
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
