import {
  TODO_FAIL,
  TODO_FETCH,
  TODO_SUCCESS,
  TOGGLE_TODO,
  // ADD_TODO,
  // CLEAR_COMPLETED,
  // COMPLETE_ALL_TODOS,
  // COMPLETE_TODO,
  // DELETE_TODO,
  // EDIT_TODO,
  // SET_VISIBILITY_FILTER
} from 'actions/todo';

import type { TodosState, Todos, Id, TodosAction } from 'types/todos';
import { ADD_TODO } from '../actions/todo';

const initialState: TodosState = {
  data: [],
  loaded: false,
  error: false,
};

const toggleTodo = (todos: Todos, id: Id): Todos => todos.map(t => (t.id !== id ? t : { ...t, completed: !t.completed }));

export default (state: TodosState = initialState, action: TodosAction) => {
  switch (action.type) {
    case TODO_FETCH:
      return {
        ...state,
        data: [],
        loaded: false,
        error: false,
      };
    case TODO_SUCCESS:
      return {
        ...state,
        data: action.payload.data,
        loaded: true,
      };
    case TODO_FAIL:
      return {
        ...state,
        data: [],
        loaded: true,
        error: true,
      };
    case TOGGLE_TODO: {
      const newData = toggleTodo(state.data, action.payload.data.id);
      return { ...state, data: newData };
    }
    case ADD_TODO:
      return { ...state, data: [...state.data, action.payload.data] };
    default:
      return state;
  }
};
