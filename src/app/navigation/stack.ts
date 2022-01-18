import { LayoutStackChildren } from 'react-native-navigation';
import { AppScreens } from './screens';

function createStackChildren() {
  const stackChildren: LayoutStackChildren[] = AppScreens.filter(
    screen => !screen.isTab,
  ).map(screen => ({
    component: {
      id: screen.id,
      name: screen.name,
    },
  }));
  return stackChildren;
}

const stacks = createStackChildren();

export default stacks;
