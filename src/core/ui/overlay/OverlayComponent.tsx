import React, { useEffect, useRef } from 'react';
import { StyleSheet } from 'react-native';
import { Navigation } from 'react-native-navigation';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import { dispatch, listen } from '~core/utils/event';
import {
  CLOSE_OVERLAY_EVENT,
  DISMISS_ACTIVE_OVERLAY,
  OVERLAY_SHOW_ANIMATION_DURATION,
} from './constant';

/**
 * Overlay Component Props
 */
export interface OverlayComponentProps {
  /**
   * content to be displayed in overlay
   * @type {Function}
   * @return {React.ReactNode}
   */
  renderContent?: () => React.ReactNode;
  overlayDuration?: number;
}

type Props = OverlayComponentProps & {
  componentId: any;
};

const OverlayComponent = ({
  overlayDuration = 2000,
  renderContent,
  componentId,
}: Props) => {
  const constant = useRef(Navigation.constantsSync());
  const show = useSharedValue(false);
  const height = useSharedValue(0);

  const style = useAnimatedStyle(() => {
    return {
      top: show.value
        ? withTiming(constant.current.statusBarHeight, {
            duration: OVERLAY_SHOW_ANIMATION_DURATION,
          })
        : withTiming(-constant.current.statusBarHeight - height.value, {
            duration: OVERLAY_SHOW_ANIMATION_DURATION,
          }),
    };
  });

  const dismissOverlay = function () {
    show.value = false;
    setTimeout(() => {
      dispatch(CLOSE_OVERLAY_EVENT, componentId);
    }, OVERLAY_SHOW_ANIMATION_DURATION);
  };

  useEffect(() => {
    show.value = true;
    const _listener = setTimeout(() => {
      dismissOverlay();
    }, overlayDuration);
    () => clearTimeout(_listener);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [show]);

  useEffect(() => {
    const _listener = listen(DISMISS_ACTIVE_OVERLAY, (overlayId: string) => {
      console.log(overlayId);
      if (overlayId === componentId) {
        dismissOverlay();
      }
    });
    () => _listener();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [componentId]);

  return (
    <Animated.View
      onLayout={event => {
        const { layout } = event.nativeEvent;
        height.value = layout.height;
      }}
      style={[styles.container, style]}>
      {renderContent && renderContent()}
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    top: -50,
    alignSelf: 'center',
    width: '80%',
    flexDirection: 'column',
    alignItems: 'center',
  },
});

export default OverlayComponent;
