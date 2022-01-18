import * as React from 'react';
import Svg, {
  SvgProps,
  Path,
  Circle,
  Defs,
  LinearGradient,
  Stop,
} from 'react-native-svg';

function MyCourseInactive(props: SvgProps) {
  return (
    <Svg width={23} height={23} fill="none" {...props}>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11.738 2.185a9 9 0 100 18 9 9 0 000-18zm-11 9c0-6.075 4.925-11 11-11s11 4.925 11 11-4.925 11-11 11-11-4.925-11-11z"
        fill="#A7A7A7"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9.266 6.304a1 1 0 011.027.05l6 4a1 1 0 010 1.663l-6 4a1 1 0 01-1.555-.832v-8a1 1 0 01.528-.881zm1.472 2.75v4.263l3.197-2.132-3.197-2.131z"
        fill="#A7A7A7"
      />
    </Svg>
  );
}

function MyCourseActive(props: SvgProps) {
  return (
    <Svg width={23} height={23} fill="none" {...props}>
      <Circle
        cx={11.738}
        cy={11.185}
        r={11}
        fill="url(#prefix__paint0_linear_401:571)"
      />
      <Path
        d="M16.734 11.882l-6.363 3.692c-.54.313-1.233-.066-1.233-.697V7.493c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 010 1.393z"
        fill="#FCB30B"
      />
      <Defs>
        <LinearGradient
          id="prefix__paint0_linear_401:571"
          x1={-2.945}
          y1={0.185}
          x2={20.574}
          y2={26.217}
          gradientUnits="userSpaceOnUse">
          <Stop stopColor="#FF4048" />
          <Stop offset={1} stopColor="#8D1217" />
        </LinearGradient>
      </Defs>
    </Svg>
  );
}

export { MyCourseInactive, MyCourseActive };
