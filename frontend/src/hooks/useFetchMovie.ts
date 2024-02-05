import axios from 'axios';
import { useEffect, useReducer } from 'react';
import { FetchState, Movie } from '../common/types';
import { ActionType } from '../common/enums';
import { createFetchReducer } from '../reducers/fetch-reducer';

const initialState: FetchState<Movie> = {
  data: null,
  error: null,
  loading: false
};

const fetchMovieReducer = createFetchReducer<Movie>();

const useFetchMovie = (id: string) => {
  const [{ data, loading, error }, dispatch] = useReducer(
    fetchMovieReducer,
    initialState
  );

  useEffect(() => {
    fetchMovieData();
  }, []);

  const fetchMovieData = async () => {
    dispatch({ type: ActionType.FETCHING_DATA });
    try {
      const { data } = await axios.get(`http://localhost:8080/movies/${id}`);
      dispatch({ type: ActionType.FETCH_SUCCESS, payload: data });
    } catch (error) {
      dispatch({
        type: ActionType.FETCH_ERROR,
        payload: 'Oops! Something went wrong'
      });
    }
  };
  return { data, loading, error };
};

export default useFetchMovie;
