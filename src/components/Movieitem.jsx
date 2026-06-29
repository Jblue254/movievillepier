export default function MovieItem({ movie, onDelete }) {
  return (
    <div className="flex items-center justify-between p-4 mb-4 bg-white rounded-lg shadow border border-gray-200">
      <div>
        <h3 className="text-lg font-semibold text-gray-800">
          {movie.title}
        </h3>

        <p className="text-sm text-gray-600">
          <span className="font-medium">Genre:</span> {movie.genre}{" "}
          <span className="mx-2">|</span>
          <span className="font-medium">Year:</span> {movie.year}
        </p>
      </div>

      <button
        onClick={() => onDelete(movie.id)}
        className="px-3 py-2 bg-red-500 hover:bg-red-600 active:bg-red-700 text-white text-sm font-medium rounded-md transition-colors"
      >
        Remove
      </button>
    </div>
  );
}