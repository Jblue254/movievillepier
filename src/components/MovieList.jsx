import MovieItem from './MovieItem';

export default function MovieList({ movies, onDeleteMovie }) {
  if (movies.length === 0) {
    return <p className="empty-message">No movies left in your watch list</p>;
  }

  return (
    <div className="movie-list">
      {movies.map((movie) => (
        <MovieItem 
          key={movie.id} 
          movie={movie} 
          onDelete={onDeleteMovie} 
        />
      ))}
    </div>
  );
}