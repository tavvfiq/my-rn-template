import React from 'react';
import { render } from '@testing-library/react-native';
import User from '~features/example2/data/domain/user';
import UserListView from '../UserListView';

test('UserListView renders correctly', () => {
  const users: User[] = [];
  const loading = false;
  const error = false;
  const view = render(<UserListView users={users} loading={loading} error={error}/>).toJSON();
  expect(view).toMatchSnapshot();
})
