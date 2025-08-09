import React, { useEffect, useState } from 'react';
import api from '../api/api';

export default function BookDetail({ id }) {
  const [book, setBook] = useState(null);

  useEffect(() => {
    api.get(`/Books/${id}`).then(res => setBook(res.data));
  }, [id]);

  if (!book) return <p>Loading...</p>;

  return (
    <div>
      <h3>{book.title}</h3>
      <p><em>by {book.author}</em></p>
      <p>{book.description}</p>
      <p>Published: {book.publicationYear}</p>
      <p>Category: {book.category.name}</p>
    </div>
  );
}
