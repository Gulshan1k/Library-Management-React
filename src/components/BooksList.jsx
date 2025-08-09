import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import api from '../api/api';

export default function BooksList() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    api.get('/Books').then(res => setBooks(res.data));
  }, []);

  return (
    <ul>
      {books.map(b => (
        <li key={b.id}>
          <Link to={`/books/${b.id}`}>{b.title}</Link> by {b.author}
        </li>
      ))}
    </ul>
  );
}
