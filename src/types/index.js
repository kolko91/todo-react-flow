import type { Store as ReduxStore, Dispatch as ReduxDispatch } from 'redux';

import type { TodosAction, TodosState } from './todos';
import type { FilterAction, FilterState } from './filter';

export type ReduxInitAction = { type: '@@INIT' };

export type Action = ReduxInitAction | TodosAction | FilterAction;

export type State = TodosState & FilterState;

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
