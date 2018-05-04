import React from 'react';
import renderer from 'react-test-renderer';
import Todo from './index';


describe('component', () => {
  describe('Todo', () => {
    it('should render correctly', () => {
      const props = {
        onClick: jest.fn(),
        onDeleteClick: jest.fn(),
        editTodo: jest.fn(),
        done: false,
        title: 'Test',
      };
      const tree = renderer.create(<Todo {...props} />).toJSON();
      expect(tree).toMatchSnapshot();
    });
  });
});
