import { useState } from 'react';

export default function AddMovie({ onAddMovie }) {
  const [title, setTitle] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title) return alert("Please type a movie title");

    // Pass a simple object back to App.jsx
    onAddMovie({ 
      title: title, 
      genre: "General", 
      year: 2026 
    });
    
    setTitle(''); // Clear the input box
  };

  return (
    <form onSubmit={handleSubmit} className="movie-form">
      <input 
        type="text" 
        placeholder="Enter movie title" 
        value={title} 
        onChange={(e) => setTitle(e.target.value)} 
        className="form-input"
      />
      <button type="submit" className="submit-button">
        add movie
      </button>
    </form>
  );
}