import * as actions from './filter';

describe('todo actions', () => {
  it('setFilter should create SET_FILTER action', () => {
    expect(actions.setFilter(actions.SHOW_ALL)).toEqual({
      type: actions.SET_FILTER,
      filter: actions.SHOW_ALL,
    });
  });
});
