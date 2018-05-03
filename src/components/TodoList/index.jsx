import React from 'react';
import styled from 'styled-components';

import Todo from 'components/Todo';

import type { TodosState, Id } from 'types/todos';

const List = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
`;

export type Props = {
  todos: TodosState,
  onTodoClick: (id: Id) => void
};

const TodoList = ({ todos, onTodoClick }: Props) => (
  <List>
    {todos.data.map(todo => (
      <Todo key={todo.id} {...todo} onClick={() => onTodoClick(todo.id)} />
    ))}
  </List>
);

export default TodoList;
