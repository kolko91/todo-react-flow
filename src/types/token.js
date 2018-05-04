import {
  FETCH_TOKEN,
  TOKEN_CLEAR,
  TOKEN_FAIL,
  TOKEN_SUCCESS,
} from 'actions/token';
import type { DefaultState } from './index';

export type Token = string;

type TokenPayload = {
  data: {'x-auth-token': string}
}

export type TokenState = {
  ...DefaultState,
  data: ?Token
};

export type TokenAction =
  | { type: typeof FETCH_TOKEN}
  | { type: typeof TOKEN_SUCCESS, payload: TokenPayload }
  | { type: typeof TOKEN_FAIL, error: any }
  | { type: typeof TOKEN_CLEAR };

