import { ViewAnimationOptions } from 'react-native-navigation';

export const SlideEnter: ViewAnimationOptions = {
  translationX: {
    from: require('react-native').Dimensions.get('window').width,
    to: 0,
    duration: 300,
  },
};

export const SlideExit: ViewAnimationOptions = {
  translationX: {
    from: 0,
    to: require('react-native').Dimensions.get('window').width,
    duration: 300,
  },
};
