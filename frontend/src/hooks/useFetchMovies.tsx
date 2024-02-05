import axios from 'axios';
import { useEffect, useReducer } from 'react';
import { Movie } from '../common/types';

enum ActionType {
  FETCHING_DATA = 'FETCHING_DATA',
  FETCH_SUCCESS = 'FETCH_SUCCESS',
  FETCH_ERROR = 'FETCH_ERROR'
}

type FetchMovieAction =
  | {
      type: ActionType.FETCHING_DATA;
      payload?: null;
    }
  | {
      type: ActionType.FETCH_SUCCESS;
      payload: Movie[];
    }
  | {
      type: ActionType.FETCH_ERROR;
      payload: string;
    };

interface State {
  data: Movie[] | null;
  error: string | null;
  loading: boolean;
}

const initialState: State = {
  data: null,
  error: null,
  loading: false
};

const reducer = (_state: State, action: FetchMovieAction): State => {
  switch (action.type) {
    case ActionType.FETCHING_DATA:
      return {
        loading: true,
        error: null,
        data: null
      };
    case ActionType.FETCH_ERROR:
      return {
        loading: false,
        error: action.payload,
        data: null
      };
    case ActionType.FETCH_SUCCESS:
      return {
        loading: false,
        error: null,
        data: action.payload
      };
    default:
      return initialState;
  }
};

const useFetchMovies = () => {
  const [{ data, loading, error }, dispatch] = useReducer(
    reducer,
    initialState
  );

  useEffect(() => {
    fetchMoviesList();
  }, []);

  const fetchMoviesList = async () => {
    dispatch({ type: ActionType.FETCHING_DATA });
    try {
      const { data } = await axios.get('http://localhost:8080/movies');
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

export default useFetchMovies;
