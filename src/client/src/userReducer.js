import { ERROR_HANDLE, SET_USER, SUCCESS_HANDLE } from './types';

const userReducer = (state = [], action) => {
  switch (action.type) {
    case SUCCESS_HANDLE:
      return { ...state, user: action.payload};
    case ERROR_HANDLE:
      return { ...state, user: false };
    default:
      return state;
  }
};

export default userReducer;
