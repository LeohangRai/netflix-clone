import MovieCard from './MovieCard';

export default function MovieList() {
  return (
    <div className="px-12 mt-4 space-y-8">
      <p className="text-2xl font-semibold mb-4">Trending Shows</p>
      <div className="grid grid-cols gap-2">
        <MovieCard />
      </div>
    </div>
  );
}
