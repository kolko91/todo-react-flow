import type { Id, Text, Completed } from 'types/todos';

export const TODO_FETCH = 'TODO_FETCH';
export const TODO_SUCCESS = 'TODO_SUCCESS';
export const TODO_FAIL = 'TODO_FAIL';
export const TOGGLE_TODO = 'TOGGLE_TODO';
export const ADD_TODO = 'ADD_TODO';
export const DELETE_TODO = 'DELETE_TODO';
export const EDIT_TODO = 'EDIT_TODO';
export const COMPLETE_TODO = 'COMPLETE_TODO';
export const COMPLETE_ALL_TODOS = 'COMPLETE_ALL_TODOS';
export const CLEAR_COMPLETED = 'CLEAR_COMPLETED';
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER';


export function fetchTodos() {
  return async (dispatch) => {
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
      /* const success = await axios({
        method: 'get',
        url: `/info/fleets/sites`,
        headers: {},
        withCredentials: true,
        params
      }) */

      // return onSuccess(success);
      return onSuccess({
        data: [
          {
            id: 1,
            text: 'title1',
            completed: false,
          },
          {
            id: 2,
            text: 'title2',
            completed: false,
          },
        ],
      });
    } catch (error) {
      return onError(error);
    }
  };
}

export function toggleTodo(id: Id, completed: Completed) {
  return async (dispatch) => {
    function onSuccess(success) {
      dispatch({ type: TOGGLE_TODO, payload: success });
      return success;
    }
    function onError(error) {
      dispatch({ type: TODO_FAIL, error });
      return error;
    }
    try {
      /* const success = await axios({
        method: 'get',
        url: `/info/fleets/sites`,
        headers: {},
        withCredentials: true,
        params
      }) */

      // return onSuccess(success);
      return onSuccess({
        data: {
          id,
          completed,
        },
      });
    } catch (error) {
      return onError(error);
    }
  };
}

export const addTodo = (text: Text) => ({ type: ADD_TODO, text });
export const deleteTodo = (id: Id) => ({ type: DELETE_TODO, id });
export const editTodo = (id: Id, text: Text) => ({ type: EDIT_TODO, id, text });
export const completeTodo = (id: Id) => ({ type: COMPLETE_TODO, id });
export const completeAllTodos = () => ({ type: COMPLETE_ALL_TODOS });
export const clearCompleted = () => ({ type: CLEAR_COMPLETED });
export const setVisibilityFilter = (filter: string) => ({ type: SET_VISIBILITY_FILTER, filter });
