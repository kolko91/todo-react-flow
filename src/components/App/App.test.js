import React from 'react';
import { createRenderer } from 'react-test-renderer/shallow';
import TodoForm from 'containers/TodoForm';
import Footer from 'components/Footer';
import TodoListContainer from 'containers/TodoListContainer';
import App from './index';

const setup = () => {
  const renderer = createRenderer();
  renderer.render(<App />);
  const output = renderer.getRenderOutput();
  return output;
};

describe('components', () => {
  describe('TodoForm', () => {
    it('should render', () => {
      const output = setup();
      const [form] = output.props.children;
      expect(form.type).toBe(TodoForm);
    });
  });

  describe('FilterLink', () => {
    it('should render', () => {
      const output = setup();
      const [,, footer] = output.props.children;
      expect(footer.type).toBe(Footer);
    });
  });

  describe('TodoListContainer', () => {
    it('should render', () => {
      const output = setup();
      const [, list] = output.props.children;
      expect(list.type).toBe(TodoListContainer);
    });
  });
});
