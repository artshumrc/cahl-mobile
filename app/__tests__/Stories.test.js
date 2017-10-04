import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import StoriesScreen from '../modules/Stories';

it('renders correctly', () => {
  const tree = renderer.create(
    <StoriesScreen />,
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
