import React from 'react';
import styled from 'styled-components';

import Todo from 'components/Todo';

import type { TodosState, Id, Title, Todo as TodoType } from 'types/todos';

const List = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
`;

export type Props = {
  todos: TodosState,
  onTodoClick: (id: Id) => void,
  onDeleteClick: (id: Id) => void,
  editTodo: (id: Id, todo: TodoType) => void
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
        editTodo={(title: Title) => editTodo(todo.id, { ...todo, text: title })}
      />
    ))}
  </List>
);

export default TodoList;
