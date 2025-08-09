import React, { useState } from 'react';
import { AuthorsService } from '../api/authors';


export default function AuthorForm({ onAdded }) {
  const [name, setName] = useState('');
  const [bio, setBio] = useState('');
  const [error, setError] = useState(null);

  async function handleSubmit(e) {
    e.preventDefault();
    setError(null);

    try {
      const res = await AuthorsService.create({ name, bio });
      onAdded(res.data);
      setName('');
      setBio('');
    } catch (err) {
      console.error('Error adding author:', err);

      if (err.response) {
        setError(`Server responded ${err.response.status}: ${err.response.data}`);
      } else {
        setError('Network error or CORS issue');
      }
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>
          Name*
          <input
            value={name}
            onChange={e => setName(e.target.value)}
            placeholder="Name"
            required
          />
        </label>
      </div>
      <div>
        <label>
          Bio
          <input
            value={bio}
            onChange={e => setBio(e.target.value)}
            placeholder="Bio"
          />
        </label>
      </div>
      <button type="submit">Add Author</button>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </form>
  );
}
