import React, { useEffect, useState } from 'react';
import api from '../api/api';

export default function AuthorsList() {
  const [authors, setAuthors] = useState([]);

  useEffect(() => {
    api.get('/Authors').then(res => setAuthors(res.data));
  }, []);

  return (
    <ul>
      {authors.map(a => (
        <li key={a.id}>
          <strong>{a.name}</strong> – {a.bio} ({a.books.length} books)
        </li>
      ))}
    </ul>
  );
}
