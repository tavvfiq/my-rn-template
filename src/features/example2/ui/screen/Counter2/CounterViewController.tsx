import { observer } from 'mobx-react-lite';
import React, { useRef } from 'react';
import { NavigationFunctionComponent } from 'react-native-navigation';
import { withNavigationProvider } from 'react-native-navigation-hooks/dist';
import Screen from '~common/types/screen';
import CounterStoreSingleton from '~features/example/data/store/counterStore';
import CounterViewModel from '~features/example/viewmodel/counterViewModel';
import images from '~features/example2/assets/images';
import CounterView from './CounterView';

const CounterViewController: NavigationFunctionComponent = observer(
  ({ componentId }) => {
    const vm = useRef(new CounterViewModel(CounterStoreSingleton));

    const increase = function () {
      vm.current.increment(1);
    };

    const decrease = function () {
      vm.current.decrement(1);
    };

    return (
      <CounterView
        counter={vm.current.getCounter()}
        increase={increase}
        decrease={decrease}
      />
    );
  },
);

CounterViewController.options = {
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

const Counter2: Screen = {
  id: 'COUNTER2_VIEW',
  name: 'Counter2',
  component: withNavigationProvider(CounterViewController),
  isTab: false,
};

export default Counter2;
