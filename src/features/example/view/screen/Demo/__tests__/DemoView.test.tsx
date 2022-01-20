import React from 'react';
import { render } from '@testing-library/react-native';
import DemoView from '../DemoView';

test('UserListView renders correctly', () => {
  const counter = 0;
  const increase = () => {};
  const decrease = () => {};
  const navigateToCounter2 = () => {};
  const showOverlay = () => {};
  const showModal = () => {};
  const showBottomsheet = () => {};
  const view = render(<DemoView counter={counter} increase={increase} decrease={decrease} navigateToCounter2={navigateToCounter2} showOverlay={showOverlay} showModal={showModal} showBottomsheet={showBottomsheet}/>).toJSON();
  expect(view).toMatchSnapshot();
})
