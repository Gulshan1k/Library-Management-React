import React, { useState } from 'react';
import AuthorsList from '../components/AuthorsList';
import AuthorForm from '../components/AuthorForm';

export default function AuthorsPage() {
  const [refreshKey, setRefreshKey] = useState(0);

  return (
    <section>
      <h2>Authors</h2>
      <AuthorForm onAdded={() => setRefreshKey(k => k + 1)} />
      <AuthorsList key={refreshKey} />
    </section>
  );
}
