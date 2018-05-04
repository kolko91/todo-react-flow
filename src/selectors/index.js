import { createSelector } from 'reselect';

import type { State } from 'types';
import { SHOW_ALL, SHOW_COMPLETED, SHOW_ACTIVE } from 'actions/filter';

const todosSelector = (state: {todos: State}) => state.todos;
const filterSelector = (state: State) => state.filter;

export const filteredTodosSelector = createSelector(
  todosSelector,
  filterSelector,
  (todos, filter) => {
    switch (filter) {
      case SHOW_COMPLETED:
        return { ...todos, data: todos.data.filter(t => t.completed) };
      case SHOW_ACTIVE:
        return { ...todos, data: todos.data.filter(t => !t.completed) };
      case SHOW_ALL:
      default:
        return todos;
    }
  },
);
