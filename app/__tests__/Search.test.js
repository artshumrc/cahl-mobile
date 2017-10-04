import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import SearchScreen from '../modules/Search';

it('renders correctly', () => {
  const tree = renderer.create(
    <SearchScreen />,
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
