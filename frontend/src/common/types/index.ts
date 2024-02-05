import { ActionType } from '../enums';

export interface Movie {
  id: string;
  title: string;
  description: string;
  thumbnailUrl: string;
  videoUrl: string;
  duration: string;
  genre: string;
}

export type FetchAction<K> =
  | {
      type: ActionType.FETCHING_DATA;
      payload?: null;
    }
  | {
      type: ActionType.FETCH_SUCCESS;
      payload: K;
    }
  | {
      type: ActionType.FETCH_ERROR;
      payload: string;
    };

export interface FetchState<K> {
  data: K | null;
  error: string | null;
  loading: boolean;
}
