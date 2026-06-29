export default function MovieItem({ movie, onDelete }) {
  return (
    <div className="movie-card">
      <div className="movie-info">
        <h3>{movie.title}</h3>
        <p><span>Genre:</span> {movie.genre} | <span>Year:</span> {movie.year}</p>
      </div>
      <button className="delete-btn" onClick={() => onDelete(movie.id)}>
        Remove
      </button>
    </div>
  );
}