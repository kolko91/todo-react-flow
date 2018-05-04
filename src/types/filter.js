import {
  SET_FILTER,
  SHOW_ACTIVE,
  SHOW_ALL,
  SHOW_COMPLETED,
} from 'actions/filter';

export type Filter = typeof SHOW_ALL | typeof SHOW_ACTIVE | typeof SHOW_COMPLETED;

export type FilterState = {
  filter: Filter
};

export type FilterAction = {
  type: typeof SET_FILTER,
  filter: Filter
};
