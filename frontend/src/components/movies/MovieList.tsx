import { Movie } from '../../common/types';
import MovieCard from './MovieCard';

export default function MovieList({ movies }: { readonly movies: Movie[] }) {
  return (
    <div className="px-12 mt-4 space-y-8">
      <p className="text-2xl font-semibold mb-4">Trending Shows</p>
      <div className="flex flex-wrap gap-2 justify-between">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
}
