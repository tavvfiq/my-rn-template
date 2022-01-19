import {
  Layout,
  Navigation,
  OptionsModalPresentationStyle,
} from 'react-native-navigation';
import { dispatch, listen } from '~core/utils/event';
import { CLOSE_MODAL_EVENT, DISMISS_MODAL_EVENT } from './constant';
import ModalComponent, { ModalComponentProps } from './ModalComponent';

const notInitialized = 'You have not initialized RNNBottomSheet component.';
const openedInstance =
  'You already have running instance of the component. Aborting...';

export default class Modal {
  private static _modalOpened = false;
  private static _registered = false;
  private static _modalName = '__globalModal__';

  static getComponentName() {
    return this._modalName;
  }

  static isOpened() {
    return this._modalOpened;
  }

  static init() {
    if (!this._registered) {
      // registering modal
      Navigation.registerComponent(this._modalName, () => ModalComponent);
      this._registered = true;
      listen(CLOSE_MODAL_EVENT, (componentId: string) => {
        this._modalOpened = false;
        Navigation.dismissModal(componentId);
      });
    }
  }

  /**
   * open the modal
   * @param props props to be passed to ModalComponent
   * @returns void
   */
  static open(props: ModalComponentProps) {
    if (!this._registered) {
      console.error(notInitialized);
      return;
    }
    if (this._modalOpened) {
      console.error(openedInstance);
      return;
    }
    this._modalOpened = true;
    const layout: Layout<ModalComponentProps> = {
      component: {
        id: this._modalName,
        passProps: props,
        name: this._modalName,
        options: {
          animations: {
            showModal: {
              enabled: false,
            },
            dismissModal: {
              enabled: false,
            },
          },
          layout: {
            backgroundColor: 'transparent',
            componentBackgroundColor: 'transparent',
          },
          hardwareBackButton: {
            dismissModalOnPress: false,
          },
          modal: {
            swipeToDismiss: false,
          },
          popGesture: false,
          modalPresentationStyle:
            'overCurrentContext' as OptionsModalPresentationStyle,
        },
      },
    };
    Navigation.showModal(layout);
  }

  /**
   * close the modal
   * @returns void
   */
  static close() {
    if (!this._registered) {
      console.error(notInitialized);
      return;
    }

    dispatch(DISMISS_MODAL_EVENT);
  }
}
