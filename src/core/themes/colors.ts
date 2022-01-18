import { boxShadow } from './mixins';

// put color themes in here
export const MAIN_RED = '#FF4048';
export const PRIMARY_RED = '#FF4048';
export const GREEN = '#21B573';
export const MAIN_RED10 = 'rgba(255, 64, 72, 0.1)';
export const MAIN_RED20 = 'rgba(255, 64, 72, 0.2)';
export const BG_GREEN = '#F5FFFB';

export const COLOR_BLUE = '#1882E4';

export const BG_GREY = '#F6F8FD';
export const BG_PRIMARY = 'rgb(243,246,252)';
export const COLOR_WHITE = '#ffffff';
export const BORDER_GREY = '#C2C2C2';
export const BORDER_GREY2 = '#D4D4D4';
export const BORDER_GREY3 = '#484C57';
export const BORDER_GREY4 = '#E4E4E4';
export const BORDER_GREY5 = '#EAEAEA';
export const BORDER_GREY6 = '#CECECE';
export const BORDER_GREY7 = '#EBEBEB';
export const BORDER_GREY8 = '#D9D9D9';
export const BORDER_GREY9 = '#D7D7D7';
export const BORDER_GREY10 = '#B2B2B2';
export const BORDER_GREY11 = '#D0D0D0';
export const BORDER_GREY12 = '#C0C0C0';
export const BORDER_GREY13 = '#6D6D6D';
export const BORDER_GREY14 = '#D2D2D2';
export const BORDER_GREY15 = '#B6B6B6';

export const STATUSBAR_RED = '#B20007';

export const ERROR_HEADSUP = '#EE1E26';

export const TABBAR_INACTIVE = '#A7A7A7';

export const GRAY_BG = '#F5F5F5';

export const TEXT_COLOR = '#484C57';
export const TEXT_BLACK = '#5B5B5B';
export const INACTIVE_TEXT = '#949494';
export const BLUE_HARD = '#2A3447';
export const TEXT_GRAY1 = '#333333';
export const TEXT_OTHER_GRAY = '#8C8C8C';
export const TEXT_GRAY3 = '#828282';
export const TEXT_GRAY4 = '#848484';
export const TEXT_GRAY5 = '#8A8A8A';
export const TEXT_GRAY6 = '#6C6C6C';
export const TEXT_GRAY7 = '#868686';
export const TEXT_GRAY8 = '#939393';
export const TEXT_GRAY9 = '#9E9E9E';
export const TEXT_GRAY10 = '#B0B0B0';
export const TEXT_GRAY11 = '#C5C5C5';
export const TEXT_GRAY12 = '#A5A5A5';
export const TEXT_GRAY13 = '#CACACA';
export const ANOTHER_GRAY = '#EEEEEE';

export const SUCCESS_GREEN = '#21B573';
export const OTHER_GREY = '#E5E5E5';

export const MAIN_ORANGE = '#FCB30B';
export const ICON_BG_GRAY = '#F4F4F4';
export const OTHER_ICON_BG_GRAY = '#F8F8F8';
export const ICON_BG_YELLOW = 'rgba(245,130,32,0.15)';
export const BADGE_BG = '#EFEFEF';
export const TAG_GREY = TEXT_COLOR;
export const TAG_GREEN = '#2ECD71';
export const PROGRESSBAR_GREEN = '#27AE60';
export const PROGRESSBAR_RED = MAIN_RED;
export const PROGRESSBAR_GREY = '#EBEBEB';

export const BOTTOM_TAB_SHADOW = 'rgb(216, 216, 216)';

export const BG_BACKBUTTON = 'rgba(29, 29, 29, 0.35)';

export const ICON_SHADOW_COLOR = 'rgba(73, 73, 73)';
export const CARD_SHADOW_COLOR = 'rgba(77, 77, 77)';

export const BACKDROP_COLOR = 'rgba(0,0,0,0.5)';

export const BUTTON_TEXT_COLOR = '#BCBCBC';

export const iconShadow = boxShadow(
  ICON_SHADOW_COLOR,
  { height: 4, width: 2 },
  10,
  0.05,
);

export const cardShadow = boxShadow(
  CARD_SHADOW_COLOR,
  { height: 6, width: 4 },
  6,
  0.05,
);

export const buttonShadow = (color: string) =>
  boxShadow(color, { height: 8, width: 0 }, 16, 0.3);
