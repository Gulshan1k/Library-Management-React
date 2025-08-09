import React from 'react';
import { useParams } from 'react-router-dom';
import BookDetail from '../components/BookDetail';

export default function BookDetailPage() {
  const { id } = useParams();
  return (
    <section>
      <h2>Book Details</h2>
      <BookDetail id={id} />
    </section>
  );
}
