import React, { useState } from 'react';
import api from '../api/api';

export default function CategoryForm({ onAdded }) {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const res = await api.post('/Categories', { name, description });
      onAdded(res.data);
      setName('');
      setDescription('');
    } catch (err) {
      console.error('Failed to add category', err);
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
      <button type="submit">Add Category</button>
    </form>
  );
}
