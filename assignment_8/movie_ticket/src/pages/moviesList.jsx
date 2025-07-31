import { movies } from "../data.js";
import MovieCard from "../components/MovieCard";

export default function MoviesList() {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">Now Showing</h1>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
}

