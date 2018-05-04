import {
  TODO_FETCH,
  TODO_SUCCESS,
  TODO_FAIL,
  TOGGLE_TODO,
  EDIT_TODO,
  DELETE_TODO,
  ADD_TODO,
} from 'actions/todo';
import type { DefaultState } from './index';

export type Id = number;

export type Text = string;
export type Completed = boolean;

export type Todo = {
  id: Id,
  text: Text,
  completed: boolean
};

export type Todos = Array<Todo>;

export type TodosState = {
  ...DefaultState,
  data: Todos
};

type TodoListPayload = {
  data: Array<Todo>
}

type TodoPayload = {
  data: Todo
}

export type TodosAction =
  | { type: typeof TODO_FETCH}
  | { type: typeof TODO_SUCCESS, payload: TodoListPayload }
  | { type: typeof TODO_FAIL, error: any }
  | { type: typeof ADD_TODO, payload: TodoPayload }
  | { type: typeof DELETE_TODO, payload: TodoPayload }
  | { type: typeof EDIT_TODO, payload: TodoPayload }
  | { type: typeof TOGGLE_TODO, payload: TodoPayload };

