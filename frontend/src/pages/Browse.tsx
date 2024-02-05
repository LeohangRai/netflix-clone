import NavBar from '../components/NavBar';
import BillBoard from '../components/bill-board/BillBoard';
import MovieList from '../components/movies/MovieList';
import useFetchMovies from '../hooks/useFetchMovies';

export default function BrowsePage() {
  const { data, loading, error } = useFetchMovies();

  return (
    <div>
      <NavBar />
      <BillBoard />
      <div className="pb-5">
        {loading && <p>Loading...</p>}
        {error && <p>{error}</p>}
        {data && <MovieList movies={data} />}
      </div>
    </div>
  );
}
