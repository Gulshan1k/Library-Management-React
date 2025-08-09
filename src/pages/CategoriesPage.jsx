import React, { useState } from 'react';
import CategoriesList from '../components/CategoriesList';
import CategoryForm from '../components/CategoryForm';

export default function CategoriesPage() {
  const [refreshKey, setRefreshKey] = useState(0);

  return (
    <section>
      <h2>Categories</h2>
      <CategoryForm onAdded={() => setRefreshKey(k => k + 1)} />
      <CategoriesList key={refreshKey} />
    </section>
  );
}
