/*
  Actions Types
*/
export const Types = {
  LOAD_REQUEST: 'LOAD_REPOSITORIES_REQUEST',
  LOAD_SUCCESS: 'LOAD_REPOSITORIES_SUCCESS',
  LOAD_FAILURE: 'LOAD_REPOSITORIES_FAILURE',
}

/*
  Reducer
*/
const INITIAL_STATE = {
  data: [],
  error: false,
  loading: false,
};

export default repositories = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case Types.LOAD_REQUEST:
      return { ...state, loading: true }
      break;
    case Types.LOAD_SUCCESS:
      return { ...state, data: action.payload.data, error: false, loading: false }
      break;
    case Types.LOAD_FAILURE:
      return { ...state, error: true, loading: false }
      break;
    default:
      return state;
  }
};

/*
  Actions Creators
*/
export const Creators = {
  loadRepositoriesRequest: () => ({
    type: Types.LOAD_REQUEST,
  }),

  loadRepositoriesSuccess: data => ({
    type: Types.LOAD_SUCCESS,
    payload: { data },
  }),

  loadRepositoriesFailure: () => ({
    type: Types.LOAD_FAILURE,
  }),
}

