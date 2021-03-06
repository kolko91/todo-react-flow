import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { addTodo } from 'actions/todo';
import { bindActionCreators } from 'redux';
import type { Title as TitleType, Todo } from 'types/todos';

const TodoInput = styled.input`
    position: relative;
    margin: 0;
    width: 100%;
    font-size: 24px;
    font-family: inherit;
    font-weight: inherit;
    line-height: 1.4em;
    border: 0;
    outline: none;
    color: inherit;
    box-sizing: border-box;
    padding: 16px 16px 16px 60px;
    border: none;
    background: rgba(0, 0, 0, 0.003);
    box-shadow: inset 0 -2px 1px rgba(0,0,0,0.03);
`;

const Title = styled.h1`
    position: absolute;
    top: -155px;
    width: 100%;
    font-size: 100px;
    font-weight: 100;
    text-align: center;
    color: rgba(175, 47, 47, 0.15);
    -webkit-text-rendering: optimizeLegibility;
    -moz-text-rendering: optimizeLegibility;
    text-rendering: optimizeLegibility;
`;

export type Props = {
  addTodo: (title: TitleType) => Promise<Todo>
};

export type State = {
  value: TitleType
};

class AddTodo extends Component<Props, State> {
  state = {
    value: '',
  }
  handleChange = (event: SyntheticKeyboardEvent<HTMLInputElement>) => {
    this.setState({ value: event.currentTarget.value });
  }
  handleSubmit = (event: Event) => {
    event.preventDefault();
    const { value } = this.state;
    if (!value.trim()) {
      return;
    }
    this.props.addTodo(value).then(() => {
      this.setState({ value: '' });
    });
  }

  render() {
    return (
      <div>
        <Title>todos</Title>
        <form onSubmit={this.handleSubmit}>
          <TodoInput
            placeholder="What needs to be done?"
            value={this.state.value}
            onChange={this.handleChange}
          />
        </form>
      </div>
    );
  }
}

const mapStateToProps = () => ({});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  addTodo: bindActionCreators(addTodo, dispatch),
});

const connector = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default connector(AddTodo);
