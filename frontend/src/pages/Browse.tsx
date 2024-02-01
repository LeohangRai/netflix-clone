import NavBar from '../components/NavBar';
import BillBoard from '../components/bill-board/BillBoard';
import MovieList from '../components/movies/MovieList';

export default function BrowsePage() {
  return (
    <div>
      <NavBar />
      <BillBoard />
      <div className="pb-5">
        <MovieList />
      </div>
    </div>
  );
}
