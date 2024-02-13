import axios from 'axios';
import { useEffect, useReducer } from 'react';
import { FetchState, Movie } from '../common/types';
import { ActionType } from '../common/enums';
import { createFetchReducer } from '../reducers/fetch-reducer';

const initialState: FetchState<Movie[]> = {
  data: null,
  error: null,
  loading: false
};

const fetchMoviesReducer = createFetchReducer<Movie[]>();

const useFetchMovies = (offset: number) => {
  const [{ data, loading, error }, dispatch] = useReducer(
    fetchMoviesReducer,
    initialState
  );

  useEffect(() => {
    fetchMoviesList();
  }, [offset]);

  const fetchMoviesList = async () => {
    dispatch({ type: ActionType.FETCHING_DATA });
    try {
      const response = await axios.get(
        `http://localhost:8080/movies?offset=${offset}`
      );
      /* 
        instead of replacing the data (payload) with new set of data, we combine the old data and new set of data 
        and pass them as the payload to the dispatch function 
        (meaning, if the 'data' object already exists, combine the old and new data; otherwise just pass the newly obtained data as the payload)
      */
      const moviesData = data
        ? [...data, ...response.data.movies]
        : response.data.movies;
      dispatch({ type: ActionType.FETCH_SUCCESS, payload: moviesData });
    } catch (error) {
      dispatch({
        type: ActionType.FETCH_ERROR,
        payload: 'Oops! Something went wrong'
      });
    }
  };
  return { data, loading, error };
};

export default useFetchMovies;
