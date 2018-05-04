import axios from 'axios';
import {
  TOKEN_SUCCESS,
  TOKEN_FAIL,
  TOKEN_CLEAR,
  FETCH_TOKEN,
} from 'actions/token';

import type { TokenState, TokenAction } from 'types/token';

const initialState: TokenState = {
  data: null,
  loaded: false,
  error: false,
};


export default (state: TokenState = initialState, action: TokenAction) => {
  switch (action.type) {
    case FETCH_TOKEN:
    case TOKEN_CLEAR:
      return {
        ...state,
        data: null,
        loaded: false,
        error: false,
      };
    case TOKEN_SUCCESS: {
      axios.defaults.headers.common['x-auth-token'] = action.payload.data['x-auth-token'];
      return {
        ...state,
        data: action.payload.data['x-auth-token'],
        loaded: true,
      };
    }
    case TOKEN_FAIL:
      return {
        ...state,
        data: null,
        loaded: false,
        error: true,
      };
    default:
      return state;
  }
};
