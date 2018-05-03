import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import _ from 'lodash';
import * as todosActions from 'actions/todo';
import type { TodosState, Id } from 'types/todos';
// import { toggleTodo } from '../actions/todos';
// import { visibleTodosSelector } from '../selectors';
import TodoList from 'components/TodoList';

// import type { State, Dispatch } from '../types';
type Props = {
  todos: TodosState,
  todosActions: any
}
class TodoListContainer extends Component<Props> {
  componentDidMount() {
    const { todos } = this.props;
    if (todos.data.length === 0) {
      this.props.todosActions.fetchTodos();
    }
  }

  onTodoClick = (id: Id) => {
    const { todos } = this.props;
    const todo = _.find(todos.data, { id });
    this.props.todosActions.toggleTodo(id, !todo.completed);
  }

  render() {
    const { todos } = this.props;
    return <TodoList todos={todos} onTodoClick={this.onTodoClick} />;
  }
}

const mapStateToProps = (state: any) => ({
  todos: state.todos,
});

const mapDispatchToProps = (dispatch: any) => ({
  todosActions: bindActionCreators(todosActions, dispatch),
});

const connector = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default connector(TodoListContainer);
