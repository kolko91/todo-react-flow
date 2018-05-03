import type { Store as ReduxStore, Dispatch as ReduxDispatch } from 'redux';

import type { TodosAction } from './todos';

export type ReduxInitAction = { type: '@@INIT' };

export type Action = ReduxInitAction | TodosAction;

export type Dispatch = ReduxDispatch<Action>;

export type DefaultState = {
  data: Array<{}>,
  loaded: boolean,
  error: boolean
}

export type DefaultAction = {
  type: string,
  payload: {
    data: {} | Array<{}>
  }
}
