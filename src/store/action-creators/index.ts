import axios from 'axios';
import { Dispatch } from 'redux';
import { ActionType } from '../actions-types';
import { Action } from '../actions';

const BASE_URL = 'https://registry.npmjs.org/-/v1/search';

export const searchRepositories = (lib: string) => {
  return async (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.SEARCH_REPOSITORIES
    });

    try {
      const { data } = await axios.get(BASE_URL, {
        params: {
          text: lib
        }
      });

      const repos = data.objects.map((result: any) => {
        return result.package.name
      });

      dispatch({
        type: ActionType.SEARCH_REPOSITORIES_SUCCESS,
        payload: repos,
      });

    } catch (err: string | any) {
      dispatch({
        type: ActionType.SEARCH_REPOSITORIES_ERROR,
        payload: err.message,
      });
    }
  };
};