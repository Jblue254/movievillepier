import { useState } from 'react';

export default function AddMovie({ onAddMovie }) {
  const [title, setTitle] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title) return alert("Please type a movie title!");

    // Dynamically gets the current calendar year 
    const currentYear = new Date().getFullYear();

    onAddMovie({ 
      title: title, 
      genre: "General", 
      year: currentYear 
    });
    
    setTitle('');
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-2 pb-4 border-b border-gray-200 mb-5">
      <input 
        type="text" 
        placeholder="Enter movie title..." 
        value={title} 
        onChange={(e) => setTitle(e.target.value)} 
        className="w-full border border-gray-300 rounded p-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <button 
        type="submit" 
        className="bg-emerald-500 hover:bg-emerald-600 text-white font-medium p-2 rounded transition-colors text-sm"
      >
        add movie
      </button>
    </form>
  );
}