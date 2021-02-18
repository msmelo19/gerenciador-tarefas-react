import * as types from './types';

const initialState = {
  isLoggedIn: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case types.LOGIN_REQUEST: {
      const newState = { ...state };
      return newState;
    }

    default:
      return state;
  }
}
