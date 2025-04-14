'use client';
import { useState } from 'react';

export default function AddItem() {
  const [title, setTitle] = useState('');
  const [image, setImage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault(); // ✅ Prevent form refresh
    console.log({ title, image }); // ✅ Log the data
    setTitle(''); // ✅ Clear input boxes
    setImage('');
  };

  return (
    <form
      id="add-item-form" // ✅ Enables scroll targeting from the Header
      onSubmit={handleSubmit}
      className="p-6 max-w-lg mx-auto"
    >
      <h2 className="text-xl mb-4">Add New Item</h2>

      <input
        type="text"
        placeholder="Item Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)} // ✅ Handles onChange
        className="w-full border p-2 mb-4"
        required
      />

      <input
        type="text"
        placeholder="Image URL"
        value={image}
        onChange={(e) => setImage(e.target.value)} // ✅ Handles onChange
        className="w-full border p-2 mb-4"
        required
      />

      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Submit
      </button>
    </form>
  );
}
