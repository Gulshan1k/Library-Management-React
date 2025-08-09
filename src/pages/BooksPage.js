import React, { useState } from 'react';
import BooksList from '../components/BooksList';
// If you have a BookForm component, import it here
// import BookForm from '../components/BookForm';

export default function BooksPage() {
  const [refreshKey, setRefreshKey] = useState(0);

  return (
    <section>
      <h2>Books</h2>

      {/* Uncomment if you built a BookForm component */}
      {/*
      <BookForm onAdded={() => setRefreshKey(k => k + 1)} />
      */}

      <BooksList key={refreshKey} />
    </section>
  );
}
