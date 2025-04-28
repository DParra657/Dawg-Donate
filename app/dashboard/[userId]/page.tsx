'use client';

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import Image from 'next/image';
import Header from '../../components/Header';
import { useRouter } from 'next/navigation';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';

type PublicItem = {
  id: string;
  title: string;
  image: string;
  owner: string; // 👈 This is needed for splash/public donations
  isPublic?: boolean; // Optional isPublic property added
};


type Item = {
  id: string;
  title: string;
  image: string;
  isPublic: boolean;
   // Added isPublic property
};



export default function DashboardPage() {
  const router = useRouter();
  const [cart, setCart] = useState<Item[]>([]);
  const [publicItems, setPublicItems] = useState<PublicItem[]>([]);
  const [name, setName] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [items, setItems] = useState<Item[]>([]);
  const [editingIndex, setEditingIndex] = useState<number | null>(null);
  const [newItem, setNewItem] = useState<Item>({ id: '', title: '', image: '', isPublic: false });
  const [searchQuery, setSearchQuery] = useState(''); // State for search query
  const [filteredItems, setFilteredItems] = useState<Item[]>([]);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editForm, setEditForm] = useState({
    title: '',
    image: '', 
    isPublic: false
  }); // State for filtered items
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
          isPublic: item.isPublic || false, // Default to false if not provided
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
    
      const fetchPublicItems = async () => {
        const res = await fetch('/api/public-items');
        const data = await res.json();
        if (res.ok) {
          setPublicItems(data);
        } else {
          console.error('Failed to fetch public items');
        }
      };
    
      fetchPublicItems();
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
        setNewItem({ id: '', title: '', image: '', isPublic: false }); // Reset newItem state
      } else {
        console.error('Error adding item:', data.error);
      }
    } catch (error) {
      console.error('Error submitting item:', error);
    }
  };

  

  const handleEditClick = (itemId: string) => {
    const itemToEdit = items.find(item => item.id === itemId);
    if (itemToEdit) {
      setEditingId(itemId);
      setEditForm({
        title: itemToEdit.title,
        image: itemToEdit.image,
        isPublic: itemToEdit.isPublic, // Include isPublic in the edit form
      });
    }
  };

  const handleEditSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!editingId || !editForm.title || !editForm.image || !userId) {
      console.error("Missing required fields");
      return;
    }

    try {
      const res = await fetch('/api/items', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          id: editingId,
          title: editForm.title,
          image: editForm.image,
          userId
        }),
      });
      if (res.ok) {
        // Update local state
        setItems(items.map(item => 
          item.id === editingId ? { ...item, title: editForm.title, image: editForm.image } : item
        ));
        setFilteredItems(filteredItems.map(item => 
          item.id === editingId ? { ...item, title: editForm.title, image: editForm.image } : item
        ));
        
        // Reset edit state
        setEditingId(null);
        setEditForm({ title: '', image: '', isPublic: false });
        setNewItem({ id: '', title: '', image: '', isPublic: false }); // Reset newItem state
      } else if (res.status === 404) {
        console.error('Item not found for editing:', editingId);
      } else if (res.status === 400) {
        console.error('Bad request:', await res.json());
      } else {
        const errorData = await res.json();
        console.error('Update failed:', errorData.error);
      }
    } catch (error) {
      console.error('Edit error:', error);
    }
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

  const handleAddToCart = (item: PublicItem) => {
    // Save selected item somewhere, like localStorage (quick way)
    const existingCart = JSON.parse(localStorage.getItem('cart') || '[]');
    const updatedCart = [...existingCart, item];
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  
    // Navigate to the Cart page
    router.push('/cart');
  };
  
  

  return (
    <>
      <Header isLoggedIn={true} />
      <main className="min-h-screen bg-[#DB6B71] px-6 py-12 text-white font-sans">
        
        {/* Welcome Section */}
        <section className="text-center mb-12">
          <h1 className="text-3xl font-bold">Welcome to your donations, {name}!</h1>
        </section>
  
        {/* Form Section */}
        <section className="bg-white text-black p-6 rounded-xl shadow-md max-w-xl mx-auto mb-16">
          <input
            type="text"
            placeholder="Search Items"
            className="w-full mb-4 p-3 border border-gray-300 rounded"
            value={searchQuery}
            onChange={handleSearch}
          />
  
          <form onSubmit={editingId ? handleEditSubmit : handleSubmit}>
            <input
              type="text"
              placeholder="Item Title"
              className="w-full mb-4 p-3 border border-gray-300 rounded"
              value={editingId ? editForm.title : newItem.title}
              onChange={(e) =>
                editingId
                  ? setEditForm({ ...editForm, title: e.target.value })
                  : setNewItem({ ...newItem, title: e.target.value })
              }
              required
            />
  
            <input
              type="text"
              placeholder="Image URL"
              className="w-full mb-4 p-3 border border-gray-300 rounded"
              value={editingId ? editForm.image : newItem.image}
              onChange={(e) =>
                editingId
                  ? setEditForm({ ...editForm, image: e.target.value })
                  : setNewItem({ ...newItem, image: e.target.value })
              }
              required
            />
  
            <div className="flex items-center mb-4">
              <input
                type="checkbox"
                title="Make this donation public"
                checked={editingId ? editForm.isPublic : newItem.isPublic}
                onChange={(e) =>
                  editingId
                    ? setEditForm({ ...editForm, isPublic: e.target.checked })
                    : setNewItem({ ...newItem, isPublic: e.target.checked })
                }
                className="mr-2"
              />
              <label className="text-sm text-black">Make this donation public</label>
            </div>
  
            <button type="submit" className="w-full bg-black text-white py-2 rounded">
              {editingId ? 'Update Item' : 'Add Item'}
            </button>
  
            {editingId && (
              <button
                type="button"
                onClick={() => {
                  setEditingId(null);
                  setEditForm({ title: '', image: '', isPublic: false });
                  setNewItem({ id: '', title: '', image: '', isPublic: false });
                }}
                className="w-full bg-gray-500 text-white py-2 rounded mt-2"
              >
                Cancel Edit
              </button>
            )}
          </form>
        </section>
  
        {/* Your Items Section */}
        <section className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold mb-6 text-center">Items You Donated</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {filteredItems.map((item) => (
              <div key={item.id} className="bg-white text-black p-4 rounded-xl shadow-md text-center">
                <Image
                  src={item.image || '/placeholder.png'}
                  alt={item.title}
                  width={200}
                  height={200}
                  className="mx-auto mb-4 rounded"
                />
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <div className="flex justify-center gap-2">
                  <button
                    onClick={() => handleEditClick(item.id)}
                    className="bg-yellow-500 text-white px-3 py-1 rounded text-sm"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(items.findIndex(i => i.id === item.id))}
                    className="bg-red-500 text-white px-3 py-1 rounded text-sm"
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>
  
        {/* Available Public Donations Section */}
        <section className="max-w-6xl mx-auto mt-20">
  <h2 className="text-2xl font-bold mb-6 text-center">Available Public Donations</h2>
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
    {publicItems.length === 0 ? (
      <p className="text-center w-full">No public donations yet.</p>
    ) : (
      publicItems.map((item: PublicItem) => (
        <div key={item.id} className="bg-white text-black p-4 rounded-xl shadow-md text-center">
          <Image 
            src={item.image || '/placeholder.png'}
            alt={item.title}
            width={200}
            height={200}
            className="mx-auto mb-4 rounded"
          />
          <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
          <p className="text-sm text-gray-600">
            Donated by {item.owner}
          </p>

          <button
            onClick={() => handleAddToCart({ ...item, isPublic: true })}
            className="mt-2 bg-[#DB6B71] text-white px-4 py-2 rounded-full hover:opacity-90 transition"
          >
            Add to Cart
          </button>
        </div>
      ))
    )}
  </div>
</section>

  
      </main>
    </>
  );
}  