import { observer } from 'mobx-react-lite';
import React, { useRef } from 'react';
import { NavigationFunctionComponent } from 'react-native-navigation';
import { withNavigationProvider } from 'react-native-navigation-hooks/dist';
import Screen from '~common/interface/screen';
import images from '~features/example2/assets/images';
import UserClientApi from '~features/example2/data/repository/api/userClient';
import UserRepository from '~features/example2/data/repository/userRepositoryImpl';
import UserViewModel from '~features/example2/data/viewmodel/userViewModel';
import useFetchOnMount from '~core/hooks/useFetchOnMount';
import UserListView from './UserListView';

const UserListViewController: NavigationFunctionComponent = observer(({}) => {
  const vm = useRef(new UserViewModel(new UserRepository(new UserClientApi()))).current;

  useFetchOnMount(() => {
    vm.getUser();
  });

  return (
    <UserListView
      users={vm.user}
      loading={vm.loading}
      error={vm.error}
    />
  );
});

UserListViewController.options = {
  layout: {
    backgroundColor: 'white',
  },
  topBar: {
    visible: false,
  },
  bottomTabs: {
    visible: false,
  },
  bottomTab: {
    icon: images.ic_home_inactive,
    selectedIcon: images.ic_home_active,
    text: 'Counter',
  },
};

const UserList: Screen = {
  id: 'USERLIST_VIEW',
  name: 'UserList',
  component: withNavigationProvider(UserListViewController),
  isTab: false,
};

export default UserList;
