const SEARCH_REPOSITORIES = 'search_repositories';
const SEARCH_REPOSITORIES_SUCCESS = 'search_repositories_success';
const SEARCH_REPOSITORIES_ERROR = 'search_repositories_error';

interface RepositoriesState {
  loading: boolean;
  error: string | null;
  data: string[];
};

interface SearchRepositoriesAction {
  type: typeof SEARCH_REPOSITORIES;
};

interface SearchRepositoriesSuccessAction {
  type: typeof SEARCH_REPOSITORIES_SUCCESS;
  payload: string[];
};

interface SearchRepositoriesErrorAction {
  type: typeof SEARCH_REPOSITORIES_ERROR;
  payload: string;
};

type Action = 
  | SearchRepositoriesAction
  | SearchRepositoriesSuccessAction
  | SearchRepositoriesErrorAction;

const reducer = (
  state: RepositoriesState,
  action: Action,
  ): RepositoriesState => {
  switch(action.type) {
    case SEARCH_REPOSITORIES:
      return {
        loading: true,
        error: null,
        data: [],
      };
    case SEARCH_REPOSITORIES_SUCCESS:
      return {
        loading: false,
        error: null,
        data: action.payload,
      };
    case SEARCH_REPOSITORIES_ERROR:
      return {
        loading: false,
        error: action.payload,
        data: [],
      };
    default:
      return state;
  };
};

export default reducer;