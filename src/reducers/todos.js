import {
  TODO_FAIL,
  TODO_FETCH,
  TODO_SUCCESS,
  TOGGLE_TODO,
  EDIT_TODO,
  ADD_TODO,
  DELETE_TODO,
} from 'actions/todo';

import type { TodosState, Todos, Todo, Id, TodosAction } from 'types/todos';

const initialState: TodosState = {
  data: [],
  loaded: false,
  error: false,
};

const toggleTodo = (todos: Todos, id: Id): Todos => todos.map((t: Todo) => {
  if (t.id !== id) {
    return t;
  }
  return { ...t, completed: !t.completed };
});

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
    case DELETE_TODO: {
      const { payload: { data: { id } } } = action;
      return { ...state, data: state.data.filter(t => t.id !== id) };
    }
    case EDIT_TODO: {
      const { payload: { data } } = action;
      return {
        ...state,
        data: state.data.map((todo: Todo) => {
          if (todo.id === data.id) {
            return { ...todo, ...data };
          }
          return todo;
        }),
      };
    }
    default:
      return state;
  }
};
