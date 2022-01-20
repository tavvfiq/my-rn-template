import { observer } from 'mobx-react-lite';
import React, { useRef } from 'react';
import {
  Layout,
  Navigation,
  NavigationFunctionComponent,
} from 'react-native-navigation';
import Screen from '~common/types/screen';
import UserList from '~features/example2/ui/screen/User/UserListViewController';
import CounterStoreSingleton from '~features/example/data/store/counterStore';
import CounterViewModel from '~features/example/viewmodel/counterViewModel';
import CounterView from './DemoView';
import images from '~features/example/assets/images';
import { Modal } from '~core/ui/modal';
import { View, Text } from 'react-native';
import Overlay from '~core/ui/overlay/Overlay';
import { RNNBottomSheet } from 'react-native-navigation-bottom-sheet';
import { PressableOpacity } from '~common/ui/component/PressableOpacity';

const DemoViewController: NavigationFunctionComponent = observer(
  ({ componentId }) => {
    const vm = useRef(new CounterViewModel(CounterStoreSingleton));

    const increase = function () {
      vm.current.increment(1);
    };

    const decrease = function () {
      vm.current.decrement(1);
    };

    const navigateToCounter2 = async function () {
      const layout: Layout = {
        component: {
          name: UserList.name,
          id: 'UserList.id',
        },
      };
      Navigation.push(componentId, layout);
    };

    const showOverlay = function () {
      Overlay.open({
        renderContent: () => (
          <View
            style={{
              width: '100%',
              backgroundColor: 'blue',
              height: 100,
              elevation: 200,
            }}>
            <Text>notification</Text>
          </View>
        ),
      });
    };

    const showModal = function () {
      Modal.open({
        dimissable: false,
        renderContent: (closeThisModal: () => void) => (
          <View
            style={{
              width: 300,
              backgroundColor: 'green',
              height: 100,
              elevation: 200,
            }}>
            <Text>modal</Text>
            <PressableOpacity onPress={closeThisModal} >
              <Text>close</Text>
            </PressableOpacity>
          </View>
        ),
      });
    };

    const showBottomsheet = function () {
      RNNBottomSheet.openBottomSheet({
        snapPoints: ['0%', '50%'],
        renderContent: () => (
          <View
            style={{
              width: '100%',
              backgroundColor: 'green',
              height: 100,
            }}>
            <Text>bottomsheet</Text>
          </View>
        ),
      });
    };

    return (
      <CounterView
        showOverlay={showOverlay}
        showBottomsheet={showBottomsheet}
        showModal={showModal}
        navigateToCounter2={navigateToCounter2}
        counter={vm.current.getCounter()}
        increase={increase}
        decrease={decrease}
      />
    );
  },
);

DemoViewController.options = {
  layout: {
    componentBackgroundColor: 'white',
  },
  topBar: {
    visible: false,
  },
  bottomTabs: {
    visible: false,
  },
  bottomTab: {
    icon: images.ic_course_inactive,
    selectedIcon: images.ic_course_active,
    text: 'Counter',
  },
};

const Counter: Screen = {
  id: 'DEMO_VIEW',
  name: 'Demo',
  component: DemoViewController,
  isTab: false,
};

export default Counter;
