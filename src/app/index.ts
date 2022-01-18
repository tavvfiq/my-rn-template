import { RNNBottomSheet } from 'react-native-navigation-bottom-sheet';
import { Navigation } from 'react-native-navigation';
import { SlideEnter, SlideExit } from './navigation/animation';
import { setRootStack } from './navigation/roots';
import { AppScreens } from './navigation/screens';

function registerScreens() {
  RNNBottomSheet.init();
  AppScreens.forEach(({ name, component }) => {
    Navigation.registerComponent(name, () => component);
  });
}

function setDefaultOption() {
  Navigation.setDefaultOptions({
    animations: {
      push: {
        content: SlideEnter,
      },
      pop: {
        content: SlideExit,
      },
      setRoot: {
        waitForRender: true,
      },
      setStackRoot: {
        waitForRender: true,
      },
    },
    bottomTabs: {
      animate: true,
      hideShadow: false,
      translucent: true,
      animateTabSelection: true,
      preferLargeIcons: false,
      tabsAttachMode: 'onSwitchToTab',
    },
  });
}

export function initializeApp() {
  registerScreens();
  setDefaultOption();
  Navigation.events().registerAppLaunchedListener(() => {
    setRootStack();
  });
}
