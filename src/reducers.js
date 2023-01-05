const initialState = {
  users: [],
  total: 0,
  user: {},
  loading: false,
};

export function reducer(state = initialState, action) {
  switch (action.type) {
    case 'LOADING_USERS':
      return {
        ...state,
        loading: true,
      };
    case 'FETCH_USERS':
      return {
        ...state,
        users: action.payload.users,
        total: action.payload.total,
        loading: false,
      };
    case 'LOADING_USER':
      return {
        ...state,
        loading: true,
      };
    case 'FETCH_USER':
      return {
        ...state,
        user: action.payload.user,
        loading: false,
      };
    default:
      return state;
  }
}
