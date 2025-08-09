import React, { useState } from 'react';
import api from '../api/api';

export default function CategoryForm({ onAdded }) {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    try {
      // Use the relative path — baseURL is already set in api.js
      const res = await api.post('/Categories', { name, description });
      
      // Notify parent of the newly created category
      onAdded(res.data);
      
      // Reset form
      setName('');
      setDescription('');
    } catch (err) {
      console.error('Failed to add category:', err.response || err.message);
      // Optionally surface error to the UI
    } finally {
      setLoading(false);
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={name}
        onChange={e => setName(e.target.value)}
        placeholder="Category name"
        required
      />
      <input
        value={description}
        onChange={e => setDescription(e.target.value)}
        placeholder="Description"
      />
      <button type="submit" disabled={loading}>
        {loading ? 'Adding…' : 'Add Category'}
      </button>
    </form>
  );
}
