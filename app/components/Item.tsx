'use client';
import { useState } from 'react'; // Hook for managing state

// This component will handle both displaying and adding items
export default function ItemComponent() {
  // Initial list of items (you can replace this with data from a database or API)
  const [items, setItems] = useState([
    { title: 'Used Books', image: 'https://example.com/image1.jpg' },
    { title: 'Old Clothes', image: 'https://example.com/image2.jpg' },
  ]);

  // State for the new item input fields
  const [newItem, setNewItem] = useState({ title: '', image: '' });

  // Handle changes in the input fields
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setNewItem((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Add the new item to the list
    setItems((prevItems) => [...prevItems, newItem]);

    // Clear the form after submission
    setNewItem({ title: '', image: '' });
  };

  return (
    <div className="min-h-screen bg-[#DB6B71] px-6 py-12 text-white font-sans">
      <section className="text-center mb-12">
        <h1 className="text-3xl font-bold">Welcome to your donations</h1>
      </section>

      {/* Add Item Form */}
      <form onSubmit={handleSubmit} className="w-full max-w-sm bg-white p-8 rounded-xl shadow-lg">
        <input
          type="text"
          name="title"
          placeholder="Item Title"
          value={newItem.title}
          onChange={handleInputChange}
          required
          className="w-full mb-4 p-3 border border-gray-300 rounded text-black placeholder:text-gray-500"
        />
        <input
          type="text"
          name="image"
          placeholder="Image URL"
          value={newItem.image}
          onChange={handleInputChange}
          required
          className="w-full mb-4 p-3 border border-gray-300 rounded text-black placeholder:text-gray-500"
        />
        <button
          type="submit"
          className="w-full bg-black text-white font-semibold py-2 rounded hover:bg-opacity-80 transition"
        >
          Add Item
        </button>
      </form>

      {/* Render the List of Items */}
      <section className="max-w-6xl mx-auto mt-16">
        <h2 className="text-2xl font-bold mb-6 text-center">Items Donated</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {items.map((item, index) => (
            <div key={index} className="bg-white text-black p-4 rounded-xl shadow-md text-center">
              <img
                src={item.image}
                alt={item.title}
                className="mx-auto mb-4 rounded"
                width={200}
                height={200}
              />
              <h3 className="text-lg font-semibold">{item.title}</h3>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
