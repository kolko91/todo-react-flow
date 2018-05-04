import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

import * as actions from './todo';

const mock = new MockAdapter(axios);

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('todo actions', () => {
  afterEach(() => {

  });

  it('creates TODO_SUCCESS when fetching todos has been done', () => {
    mock.onGet('/todos').reply(200, [{
      id: 1,
      title: 'title1',
      done: true,
    }]);

    const expectedActions = [
      { type: actions.TODO_FETCH },
      {
        type: actions.TODO_SUCCESS,
        payload: {
          data: [{
            id: 1,
            title: 'title1',
            done: true,
          }],
        },
      },
    ];
    const store = mockStore({
      todos: {
        data: [],
        loaded: false,
        error: false,
      },
    });

    return store.dispatch(actions.fetchTodos()).then(() => {
      // return of async actions
      expect(store.getActions()).toMatchObject(expectedActions);
    });
  });

  it('creates TOGGLE_TODO when toggled todos has been done', () => {
    mock.onPut('/todos/1').reply(200, {
      id: 1,
      title: 'title1',
      done: false,
    });

    const expectedActions = [
      {
        type: actions.TOGGLE_TODO,
        payload: {
          data: {
            id: 1,
            title: 'title1',
            done: false,
          },
        },
      },
    ];

    const store = mockStore({
      todos: {
        data: [{
          id: 1,
          title: 'title1',
          done: true,
        }],
        loaded: false,
        error: false,
      },
    });

    return store.dispatch(actions.toggleTodo(1, {
      id: 1,
      title: 'title1',
      done: true,
    })).then(() => {
      // return of async actions
      expect(store.getActions()).toMatchObject(expectedActions);
    });
  });
});
