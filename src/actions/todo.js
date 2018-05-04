import axios from 'axios';
import type { Id, Text, Todo } from 'types/todos';
import type { Dispatch } from 'types';

export const TODO_FETCH: 'TODO_FETCH' = 'TODO_FETCH';
export const TODO_SUCCESS: 'TODO_SUCCESS' = 'TODO_SUCCESS';
export const TODO_FAIL: 'TODO_FAIL' = 'TODO_FAIL';
export const TOGGLE_TODO: 'TOGGLE_TODO' = 'TOGGLE_TODO';
export const ADD_TODO: 'ADD_TODO' = 'ADD_TODO';
export const DELETE_TODO: 'DELETE_TODO' = 'DELETE_TODO';
export const EDIT_TODO: 'EDIT_TODO' = 'EDIT_TODO';

export function fetchTodos() {
  return async (dispatch: Dispatch) => {
    dispatch({ type: TODO_FETCH });

    function onSuccess(success) {
      dispatch({ type: TODO_SUCCESS, payload: success });
      return success;
    }

    function onError(error) {
      dispatch({ type: TODO_FAIL, error });
      return error;
    }

    try {
      const success = await axios({
        method: 'GET',
        url: '/todos',
      });
      return onSuccess(success);
    } catch (error) {
      return onError(error);
    }
  };
}

export function toggleTodo(id: Id, todo: Todo) {
  return async (dispatch: Dispatch) => {
    function onSuccess(success) {
      dispatch({ type: TOGGLE_TODO, payload: success });
      return success;
    }

    function onError(error) {
      dispatch({ type: TODO_FAIL, error });
      return error;
    }

    try {
      const success = await axios({
        method: 'PUT',
        url: `/todos/${id}`,
        data: { ...todo, completed: !todo.completed },
      });
      return onSuccess(success);
    } catch (error) {
      return onError(error);
    }
  };
}


export const addTodo = (text: Text) => async (dispatch: Dispatch) => {
  function onSuccess(success) {
    dispatch({ type: ADD_TODO, payload: success });
    return success;
  }

  function onError(error) {
    dispatch({ type: TODO_FAIL, error });
    return error;
  }
  try {
    const success = await axios({
      method: 'POST',
      url: '/todos',
      data: {
        text,
        completed: false,
      },
    });

    return onSuccess(success);
  } catch (error) {
    return onError(error);
  }
};

export const deleteTodo = (id: Id) => async (dispatch: Dispatch) => {
  function onSuccess(success) {
    dispatch({ type: DELETE_TODO, payload: success });
    return success;
  }

  function onError(error) {
    dispatch({ type: TODO_FAIL, error });
    return error;
  }
  try {
    await axios({
      method: 'DELETE',
      url: `/todos/${id}`,
    });
    return onSuccess({
      data: { id },
    });
  } catch (error) {
    return onError(error);
  }
};

export const editTodo = (id: Id, todo: Todo) => async (dispatch: Dispatch) => {
  function onSuccess(success) {
    dispatch({ type: EDIT_TODO, payload: success });
    return success;
  }

  function onError(error) {
    dispatch({ type: TODO_FAIL, error });
    return error;
  }
  try {
    const success = await axios({
      method: 'PUT',
      url: `/todos/${id}`,
      data: todo,
    });

    return onSuccess(success);
  } catch (error) {
    return onError(error);
  }
};
