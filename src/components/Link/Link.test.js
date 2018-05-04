import React from 'react';
import renderer from 'react-test-renderer';
import Link from './index';


describe('component', () => {
  describe('Link', () => {
    it('should render correctly', () => {
      const props = {
        active: false,
        children: 'All',
        onClick: jest.fn(),
      };
      const tree = renderer.create(<Link {...props} />).toJSON();
      expect(tree).toMatchSnapshot();
    });
  });
});
