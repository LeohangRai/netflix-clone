import { FetchAction, FetchState } from '../common/types';
import { ActionType } from '../common/enums';

export function createFetchReducer<K>(initialState?: FetchState<K>) {
  return function (
    state: FetchState<K>,
    action: FetchAction<K>
  ): FetchState<K> {
    switch (action.type) {
      case ActionType.FETCHING_DATA:
        return {
          ...state,
          loading: true,
          error: null
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
        if (initialState) {
          return initialState;
        }
        return {
          data: null,
          error: null,
          loading: false
        };
    }
  };
}
