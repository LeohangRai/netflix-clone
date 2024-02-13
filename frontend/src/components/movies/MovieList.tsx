import { Movie } from '../../common/types';
import MovieCard from './MovieCard';

export default function MovieList({
  movies,
  intersectionHandler
}: {
  readonly movies: Movie[];
  readonly intersectionHandler: (node: HTMLDivElement) => void;
}) {
  return (
    <div className="px-12 mt-4 space-y-8">
      <p className="text-2xl font-semibold mb-4">Trending Shows</p>
      <div className="flex flex-wrap gap-2 justify-between">
        {movies.map((movie, index) => (
          /* 
            - pass the intersectionHandler only to the <div> corresponding to the last element of the 'movies' array
            - it attaches the intersection observer to the <div> corresponding to the last elemtent of the 'movies' array for the purpose of lazy loading data
          */
          <MovieCard
            key={movie.id}
            movie={movie}
            intersectionHandler={
              index === movies.length - 1 ? intersectionHandler : undefined
            }
          />
        ))}
      </div>
    </div>
  );
}
