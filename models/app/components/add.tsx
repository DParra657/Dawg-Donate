'use client';
import { useState } from 'react';

export default function AddItem() {
  const [title, setTitle] = useState('');
  const [image, setImage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const res = await fetch('/api/items', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title, image }),
      });

      const data = await res.json();
      console.log('Server response:', data);

      if (res.ok) {
        setTitle('');
        setImage('');
      } else {
        alert(data.error || 'Failed to add item');
      }
    } catch (err) {
      console.error('Submission error:', err);
      alert('An error occurred while submitting');
    }
  };

  return (
    <form
      id="add-item-form"
      onSubmit={handleSubmit}
      className="p-6 max-w-lg mx-auto"
    >
      <h2 className="text-xl mb-4">Add New Item</h2>

      <input
        type="text"
        placeholder="Item Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="w-full border p-2 mb-4"
        required
      />

      <input
        type="text"
        placeholder="Image URL"
        value={image}
        onChange={(e) => setImage(e.target.value)}
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
