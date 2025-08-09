import React, { useEffect, useState } from 'react';
import api from '../api/api';

export default function CategoriesList() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    api.get('/Categories')
      .then(res => setCategories(res.data))
      .catch(err => console.error('Failed to fetch categories', err));
  }, []);

  return (
    <ul>
      {categories.map(cat => (
        <li key={cat.id}>
          <strong>{cat.name}</strong> – {cat.description}
          {' '}({cat.books.length} books)
        </li>
      ))}
    </ul>
  );
}
