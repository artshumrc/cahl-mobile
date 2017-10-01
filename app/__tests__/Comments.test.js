import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import CommentsScreen from '../modules/Comments';

it('renders correctly', () => {
  const tree = renderer.create(
    <CommentsScreen />,
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
