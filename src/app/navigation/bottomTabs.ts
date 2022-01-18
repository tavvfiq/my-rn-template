import { LayoutTabsChildren } from 'react-native-navigation';
import { AppScreens } from './screens';

function createBottomTabChildren() {
  const tabChildren: LayoutTabsChildren[] = AppScreens.filter(
    screen => screen.isTab,
  ).map(screen => ({
    stack: {
      id: screen.id + '_TAB',
      children: [
        {
          component: {
            id: screen.id,
            name: screen.name,
          },
        },
      ],
    },
  }));
  return tabChildren;
}

const tabs = createBottomTabChildren();

export default tabs;
