import { useCallback, useRef, useState } from 'react';
import NavBar from '../components/NavBar';
import BillBoard from '../components/bill-board/BillBoard';
import MovieList from '../components/movies/MovieList';
import useFetchMovies from '../hooks/useFetchMovies';
import MovieListLoadingCards from '../components/movies/MovieListLoadingCards';

export default function BrowsePage() {
  const [offset, setOffset] = useState(0);
  const { data, loading, error } = useFetchMovies(offset);

  /* a single intersection observer instance to observe the visibility of the <div> corresponding to the last element of the 'movies' array */
  const intersectionObserver = useRef(
    new IntersectionObserver((entries, observer) => {
      if (entries[0].isIntersecting) {
        setOffset(offset + 12);
        observer.unobserve(entries[0].target);
      }
    })
  );

  /* we will apply this as a ref on the <div> corresponding to the last element of our 'movies' array for loading more data (lazy-loading) */
  const setIntersectionObserver = useCallback(
    (node: HTMLDivElement) => {
      if (loading || !node) return;
      intersectionObserver.current.observe(node);
    },
    [loading]
  );

  return (
    <div>
      <NavBar />
      <BillBoard />
      <div className="pb-5">
        {data && (
          <MovieList
            movies={data}
            intersectionHandler={setIntersectionObserver} // although we are passing this intersectionHandler here unconditionally, it will be passed only to the <div> corresponding to the last element from the 'movies' array (the logic is implemented inside the MovieList component)
          />
        )}
        {error && <p>{error}</p>}
        {loading && <MovieListLoadingCards />}
      </div>
    </div>
  );
}
