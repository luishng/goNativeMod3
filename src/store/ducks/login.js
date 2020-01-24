/*
  Actions Types
*/
export const Types = {
  REQUEST: 'LOGIN_REQUEST',
  SUCCESS: 'LOGIN_SUCCESS',
  FAILURE: 'LOGIN_FAILURE',
}

/*
  Reducer
*/

const INITIAL_STATE = {
  username: null,
  error: false,
};

export default login = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case Types.REQUEST:
      return { ...state, loading: true }
      break;
    case Types.SUCCESS:
      return { ...state, username: action.payload.username, error: false, loading: false }
      break;
    case Types.FAILURE:
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
  loginRequest: username => ({
    type: Types.REQUEST,
    payload: { username },
  }),

  loginSuccess: username => ({
    type: Types.SUCCESS,
    payload: { username },
  }),

  loginFailure: () => ({
    type: Types.FAILURE,
  }),

}
