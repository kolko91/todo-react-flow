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
              text: 'title1',
              completed: true,
            },
            {
              text: 'test2',
              completed: false,
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
