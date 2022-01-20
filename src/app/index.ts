import { RNNBottomSheet } from 'react-native-navigation-bottom-sheet';
import { Navigation } from 'react-native-navigation';
import { SlideInLeft, SlideOutRight } from '../core/navigation/animation';
import { setRootStack } from './navigation/roots';
import { AppScreens } from './navigation/screens';
import Modal from '~core/view/modal/Modal';
import Overlay from '~core/view/overlay/Overlay';

function registerScreens() {
  Modal.init();
  Overlay.init();
  RNNBottomSheet.init();
  AppScreens.forEach(({ name, component }) => {
    Navigation.registerComponent(name, () => component);
  });
}

function setDefaultOption() {
  Navigation.setDefaultOptions({
    animations: {
      push: {
        content: SlideInLeft,
      },
      pop: {
        content: SlideOutRight,
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
