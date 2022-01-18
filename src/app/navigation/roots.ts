import { Navigation } from 'react-native-navigation';
import tabs from './bottomTabs';
import stacks from './stack';

export function setRootBottomTabs() {
  Navigation.setRoot({
    root: {
      bottomTabs: {
        id: 'TAB_VIEW',
        children: tabs,
      },
    },
  });
}

export function setRootStack() {
  Navigation.setRoot({
    root: {
      stack: {
        id: 'STACK_VIEW',
        children: stacks,
      },
    },
  });
}
