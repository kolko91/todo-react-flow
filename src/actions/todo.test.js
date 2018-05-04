import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';

import * as actions from './todo';

describe('todo actions', () => {
  afterEach(() => {
    fetchMock.reset();
    fetchMock.restore();
  });

  it('creates TODO_SUCCESS when fetching todos has been done', () => {



    expect(actions.fetchTodos()).toEqual({
      type: actions.TODO_FETCH,
    });
  });
});
