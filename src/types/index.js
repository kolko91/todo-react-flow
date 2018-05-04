import type { Dispatch as ReduxDispatch } from 'redux';

import type { TodosAction, TodosState } from './todos';
import type { FilterAction, FilterState } from './filter';
import type { TokenAction, TokenState } from './token';

export type ReduxInitAction = { type: '@@INIT' };

export type Action = ReduxInitAction | TodosAction | FilterAction | TokenState;

export type State = TodosState & FilterState & TokenAction;

export type Dispatch = ReduxDispatch<Action>;

export type DefaultState = {
  data: Array<{}>,
  loaded: boolean,
  error: boolean
}
