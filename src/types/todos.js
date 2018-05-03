import type { DefaultState } from './index';

export type Id = number;

export type Text = string;
export type Completed = boolean;

export type Todo = {
  +id: Id,
  +text: Text,
  +completed: boolean
};

export type Todos = Array<Todo>;

export type TodosState = {
  ...DefaultState,
  data: Todos
};
