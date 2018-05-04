import React from 'react';
import styled from 'styled-components';

import Todo from 'components/Todo';

import type { TodosState, Id, Text } from 'types/todos';

const List = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
`;

export type Props = {
  todos: TodosState,
  onTodoClick: (id: Id) => void,
  onDeleteClick: (id: Id) => void,
  editTodo: (id: Id, text: Text) => void
};

const TodoList = ({
  todos, onTodoClick, onDeleteClick, editTodo,
}: Props) => (
  <List>
    {todos.data.map(todo => (
      <Todo
        key={todo.id}
        {...todo}
        onClick={() => onTodoClick(todo.id)}
        onDeleteClick={() => onDeleteClick(todo.id)}
        editTodo={(text: Text) => editTodo(todo.id, text)}
      />
    ))}
  </List>
);

export default TodoList;
