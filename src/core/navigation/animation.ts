import { ViewAnimationOptions } from 'react-native-navigation';

export const TRANSITION_ANIMATION_DURATION = 300;

export const SlideInLeft: ViewAnimationOptions = {
  translationX: {
    from: require('react-native').Dimensions.get('window').width,
    to: 0,
    duration: TRANSITION_ANIMATION_DURATION,
  },
};

export const SlideOutRight: ViewAnimationOptions = {
  translationX: {
    from: 0,
    to: require('react-native').Dimensions.get('window').width,
    duration: TRANSITION_ANIMATION_DURATION,
  },
};
