import React from 'react';
import renderer from 'react-test-renderer';
import TodoEditTextInput from './index';


describe('component', () => {
  describe('TodoEditTextInput', () => {
    it('should render correctly', () => {
      const props = {
        onSave: jest.fn(),
        title: 'Test',
      };
      const tree = renderer.create(<TodoEditTextInput {...props} />).toJSON();
      expect(tree).toMatchSnapshot();
    });
  });
});
