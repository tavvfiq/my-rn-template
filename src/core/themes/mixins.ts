import { Dimensions, Platform } from 'react-native';

const WINDOW_WIDTH = Dimensions.get('window').width;
const WINDOW_HEIGHT = Dimensions.get('window').height;
const FONT_SCALE = Dimensions.get('window').fontScale;
const guidelineBaseWidth = 375; // Mockup or design BaseWidth
const guidelineBaseHeight = 812; // mockup or design BaseHeight

export const scaleWidth = (size: number = 0) =>
  (WINDOW_WIDTH / guidelineBaseWidth) * size;
export const scaleHeight = (size: number = 0) =>
  (WINDOW_HEIGHT / guidelineBaseHeight) * size;

export const scaleFont = (size = 0) => size * FONT_SCALE;

function dimensions(
  top = 0,
  right = top,
  bottom = top,
  left = right,
  property = 'margin',
) {
  let styles: { [key: string]: number } = {};
  styles[`${property}Top`] = top;
  styles[`${property}Right`] = right;
  styles[`${property}Bottom`] = bottom;
  styles[`${property}Left`] = left;
  return styles;
}

export function margin(top = 0, right = top, bottom = top, left = right) {
  return dimensions(top, right, bottom, left, 'margin');
}

export function padding(top = 0, right = top, bottom = top, left = right) {
  return dimensions(top, right, bottom, left, 'padding');
}

export function boxShadow(
  color: string = 'black',
  offset: { height: number; width: number } = { height: 2, width: 2 },
  radius = 2,
  opacity = 0.2,
) {
  if (Platform.OS === 'ios') {
    return {
      shadowColor: color,
      shadowOffset: offset,
      shadowOpacity: opacity,
      shadowRadius: radius,
    };
  }
  return {
    elevation: 0.37 * radius,
  };
}
