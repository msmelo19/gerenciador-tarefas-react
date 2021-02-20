import axios from '../../../services/axios';
import * as types from './types';

const initialState = {
  isLoggedIn: false,
  token: '',
};

export default function (state = initialState, action) {
  switch (action.type) {
    case types.LOGIN_FAILURE: {
      delete axios.defaults.headers.Authorization;
      return initialState;
    }

    case types.LOGIN_SUCCESS: {
      const newState = { ...state };
      newState.isLoggedIn = true;
      newState.token = action.payload.token;
      return newState;
    }

    default:
      return state;
  }
}
