import React, { useEffect } from 'react';
import { Pressable, StyleSheet } from 'react-native';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import { dispatch } from '~core/utils/event';
import { CLOSE_MODAL_EVENT, MODAL_SHOW_ANIMATION_DURATION } from './constant';

/**
 * Modal Component Props
 */
export interface ModalComponentProps {
  /**
   * content to be displayed in modal
   * @type {Function}
   * @return {React.ReactNode}
   */
  renderContent?: () => React.ReactNode;
  /**
   * opacity of the backdrop
   */
  backdropOpacity?: number;
  /**
   * is modal can be dismissed when touching backdrop?
   */
  dimissable?: boolean;
}

type Props = ModalComponentProps & {
  componentId: any;
};

const AnimatedPressable = Animated.createAnimatedComponent(Pressable);

const ModalComponent = ({
  renderContent,
  backdropOpacity = 0.4,
  dimissable,
  componentId,
}: Props) => {
  const show = useSharedValue(false);

  const style = useAnimatedStyle(() => {
    const backgroundColor = `rgba(0,0,0,${backdropOpacity})`;
    return {
      backgroundColor,
      opacity: show.value
        ? withTiming(1, { duration: MODAL_SHOW_ANIMATION_DURATION })
        : withTiming(0, { duration: MODAL_SHOW_ANIMATION_DURATION }),
    };
  });

  useEffect(() => {
    show.value = true;
  }, [show]);

  const dismissModal = function () {
    show.value = false;
    setTimeout(() => {
      dispatch(CLOSE_MODAL_EVENT, componentId);
    }, MODAL_SHOW_ANIMATION_DURATION);
  };

  const backdropOnPress = function () {
    if (dimissable && show.value) {
      dismissModal();
    }
  };

  return (
    <AnimatedPressable
      onPress={backdropOnPress}
      style={[styles.container, style]}>
      {renderContent && renderContent()}
    </AnimatedPressable>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default ModalComponent;
