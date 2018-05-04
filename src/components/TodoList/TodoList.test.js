import React from 'react';
import renderer from 'react-test-renderer';
import TodoList from './index';


describe('component', () => {
  describe('TodoList', () => {
    it('should render correctly', () => {
      const props = {
        onSave: jest.fn(),
        todos: {
          data: [
            {
              id: 1,
              title: 'title1',
              done: true,
            },
            {
              title: 'test2',
              done: false,
              id: 4,
            },
          ],
          loaded: false,
          error: false,
        },
      };
      const tree = renderer.create(<TodoList {...props} />).toJSON();
      expect(tree).toMatchSnapshot();
    });
  });
});
