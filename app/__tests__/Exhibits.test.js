import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import ExhibitsScreen from '../modules/Exhibits';

it('renders correctly', () => {
  const tree = renderer.create(
    <ExhibitsScreen />,
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
