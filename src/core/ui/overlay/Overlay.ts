import { Layout, Navigation } from 'react-native-navigation';
import { listen } from '~core/utils/event';
import { CLOSE_OVERLAY_EVENT } from './constant';
import OverlayComponent, { OverlayComponentProps } from './OverlayComponent';

const notInitialized = 'You have not initialized RNNBottomSheet component.';
// const openedInstance =
//   'You already have running instance of the component. Aborting...';

interface OverlaysInterface {
  [key: string]: any;
}

export default class Overlay {
  private static _registered = false;
  private static _overlayName = '__globalOverlay__';

  private static _activeOverlay = '';

  private static _counter = 0;

  private static _overlays: OverlaysInterface = {};

  static getComponentName() {
    return this._overlayName;
  }

  static getActiveOverlay() {
    return this._activeOverlay;
  }

  static init() {
    if (!this._registered) {
      this._registered = true;
      // registering overlay
      Navigation.registerComponent(this._overlayName, () => OverlayComponent);
      listen(CLOSE_OVERLAY_EVENT, (overlayId: string) => {
        this.unregisterOverlay(overlayId);
      });
    }
  }

  /**
   * open the overlay
   * @param props props to be passed to OverlayComponent
   * @returns void
   */
  static open(props: OverlayComponentProps) {
    const id = `${this._overlayName}_${this._counter++}`;
    this.registerOverlay(id);
    const layout: Layout<OverlayComponentProps> = {
      component: {
        id: id,
        passProps: props,
        name: this._overlayName,
        options: {
          layout: {
            backgroundColor: 'transparent',
            componentBackgroundColor: 'transparent',
          },
          overlay: {
            interceptTouchOutside: false,
          },
        },
      },
    };
    Navigation.showOverlay(layout);
  }

  private static registerOverlay(overlayId: string) {
    this._overlays[overlayId] = {
      opened: true,
    };
    this._activeOverlay = overlayId;
  }

  private static unregisterOverlay(overlayId: string) {
    delete this._overlays[overlayId];
    Navigation.dismissOverlay(overlayId);
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

    // dispatch(DISMISS_MODAL_EVENT);
  }
}
