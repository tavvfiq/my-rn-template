import { observer } from 'mobx-react-lite';
import React, { useRef } from 'react';
import { NavigationFunctionComponent } from 'react-native-navigation';
import {
  useNavigation,
  withNavigationProvider,
} from 'react-native-navigation-hooks/dist';
import Screen from '~common/types/screen';
import Counter2 from '~features/example2/ui/screen/Counter2/CounterViewController';
import CounterStoreSingleton from '~features/example/data/store/counterStore';
import CounterViewModel from '~features/example/viewmodel/counterViewModel';
import CounterView from './CounterView';
import images from '~features/example/assets/images';

const CounterViewController: NavigationFunctionComponent = observer(
  ({ componentId }) => {
    const vm = useRef(new CounterViewModel(CounterStoreSingleton));
    const { popTo } = useNavigation(componentId);

    const increase = function () {
      vm.current.increment(1);
    };

    const decrease = function () {
      vm.current.decrement(1);
    };

    const navigateToCounter2 = async function () {
      await popTo({
        
      });
    };

    return (
      <CounterView
        navigateToCounter2={navigateToCounter2}
        counter={vm.current.getCounter()}
        increase={increase}
        decrease={decrease}
      />
    );
  },
);

CounterViewController.options = {
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
  id: 'COUNTER3_VIEW',
  name: 'Counter3',
  component: withNavigationProvider(CounterViewController),
  isTab: false,
};

export default Counter;
