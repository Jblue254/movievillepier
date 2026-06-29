import { useState } from 'react';
import AddMovie from './components/AddMovie';
import MovieList from './components/MovieList';


export default function App() {
  // 1. Initialise your movie state array
  const [movies, setMovies] = useState([
    { id: 1, title: "Inception", genre: "Sci-Fi", year: 2010 },
    { id: 2, title: "Interstellar", genre: "Sci-Fi", year: 2014 }
  ]);

  // 2. DEFINE THE MISSING FUNCTION HERE!
  const addMovie = (newMovie) => {
    const movieWithId = {
      ...newMovie,
      id: Date.now() // Gives the new movie a unique ID
    };
    
    setMovies([...movies, movieWithId]); // Appends it to state
  };

  // 3. Define your delete function (if you have one)
  const deleteMovie = (id) => {
    setMovies(movies.filter(movie => movie.id !== id));
  };

  return (
    <div className="max-w-md mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4 text-center"> Movieville</h1>
      
      {/* Passing the newly defined function here */}

      <AddMovie onAddMovie={addMovie}/>

      <MovieList movies={movies} onDeleteMovie={deleteMovie}/>
     



    </div>
  );
}