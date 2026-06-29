import MovieItem from "./Movieitem";

export default function MovieList({ movies, onDeleteMovie }) {
  return (
    <div className="w-full bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden mt-4">
      {/* Tab Header */}
      <div className="bg-gray-50 border-b border-gray-200 px-4 py-2.5">
        <span className="inline-block bg-white text-blue-600 px-4 py-1.5 text-xs font-semibold rounded-t-lg border-t border-x border-gray-200 -mb-[11px] relative z-10">
          Watch List ({movies.length})
        </span>
      </div>

      {/* Tab Content Box */}
      <div className="p-4 bg-white space-y-2">
        {movies.length === 0 ? (
          <p className="text-sm text-gray-400 text-center py-6">
            No movies left in your watch list
          </p>
        ) : (
          movies.map((movie) => (
            <MovieItem 
              key={movie.id} 
              movie={movie} 
              onDelete={onDeleteMovie} 
            />
          ))
        )}
      </div>
    </div>
  );
}