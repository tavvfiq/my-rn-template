import React, { useCallback } from 'react';
import {
  PressableProps,
  Pressable,
  PressableStateCallbackType,
  StyleProp,
  ViewStyle,
} from 'react-native';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
  WithTimingConfig,
} from 'react-native-reanimated';

const AnimatedPressable = Animated.createAnimatedComponent(Pressable);

export interface PressableOpacityProps extends PressableProps {
  /**
   * The opacity to use when `disabled={true}`
   *
   * @default 0.3
   */
  disabledOpacity?: number;
  /**
   * The opacity to animate to when the user presses the button
   *
   * @default 0.2
   */
  activeOpacity?: number;

  children?: React.ReactNode | null;
}

export type StyleType = (
  state: PressableStateCallbackType,
) => StyleProp<ViewStyle>;

const timingConfig: WithTimingConfig = {
  duration: 250,
};

function _PressableOpacity({
  style,
  disabled = false,
  disabledOpacity = 0.3,
  activeOpacity = 0.2,
  children = null,
  ...passThroughProps
}: PressableOpacityProps): React.ReactElement {
  const pressed = useSharedValue(false);
  const animatedOpacity = useAnimatedStyle(() => {
    return {
      opacity: disabled
        ? disabledOpacity
        : pressed.value
        ? withTiming(activeOpacity, timingConfig)
        : withTiming(1, timingConfig),
    };
  });

  const renderChildren = useCallback(
    function ({ pressed: _pressed }: { pressed: boolean }) {
      pressed.value = _pressed;
      return children;
    },
    [children, pressed],
  );

  return (
    <AnimatedPressable
      style={[style, animatedOpacity]}
      disabled={disabled}
      children={renderChildren}
      {...passThroughProps}
    />
  );
}

export class PressableOpacity extends React.Component<PressableOpacityProps> {
  render() {
    return <_PressableOpacity {...this.props} />;
  }
}
