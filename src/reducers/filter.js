import { SHOW_ALL, SET_FILTER } from 'actions/filter';
import type { Filter } from 'types/filter';
import type { Action } from 'types';

export default (
  state: Filter = SHOW_ALL,
  action: Action,
): Filter => {
  switch (action.type) {
    case SET_FILTER:
      return action.filter;
    default:
      return state;
  }
};

