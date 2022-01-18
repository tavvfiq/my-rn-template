import * as React from 'react';
import Svg, {
  SvgProps,
  Path,
  Ellipse,
  Defs,
  LinearGradient,
  Stop,
} from 'react-native-svg';

function AccountActive(props: SvgProps) {
  return (
    <Svg width={21} height={23} fill="none" {...props}>
      <Path
        d="M1.907 22.185v-4.877l2.198-3.274h12.918l2.583 3.274v4.877h-17.7z"
        fill="url(#prefix__paint0_linear_401:569)"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2.365 14.996a5.584 5.584 0 013.929-1.61h8.889c1.473 0 2.886.579 3.928 1.61a5.473 5.473 0 011.627 3.89v2.2c0 .607-.497 1.1-1.111 1.1a1.106 1.106 0 01-1.111-1.1v-2.2c0-.876-.351-1.715-.976-2.334a3.35 3.35 0 00-2.357-.967h-8.89a3.35 3.35 0 00-2.356.967 3.283 3.283 0 00-.977 2.333v2.2c0 .608-.497 1.1-1.11 1.1a1.106 1.106 0 01-1.112-1.1v-2.2c0-1.459.585-2.857 1.627-3.889z"
        fill="url(#prefix__paint1_linear_401:569)"
      />
      <Ellipse
        cx={10.756}
        cy={5.687}
        rx={5.558}
        ry={5.502}
        fill="url(#prefix__paint2_linear_401:569)"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.105 7.245c.378 1.525 1.87 2.664 3.651 2.664 1.782 0 3.273-1.139 3.651-2.664H7.105z"
        fill="#FCB30B"
      />
      <Defs>
        <LinearGradient
          id="prefix__paint0_linear_401:569"
          x1={-2.61}
          y1={13.385}
          x2={3.882}
          y2={29.717}
          gradientUnits="userSpaceOnUse">
          <Stop stopColor="#FF4048" />
          <Stop offset={1} stopColor="#8D1217" />
        </LinearGradient>
        <LinearGradient
          id="prefix__paint1_linear_401:569"
          x1={-2.61}
          y1={13.385}
          x2={3.882}
          y2={29.717}
          gradientUnits="userSpaceOnUse">
          <Stop stopColor="#FF4048" />
          <Stop offset={1} stopColor="#8D1217" />
        </LinearGradient>
        <LinearGradient
          id="prefix__paint2_linear_401:569"
          x1={3.338}
          y1={0.185}
          x2={15.089}
          y2={13.323}
          gradientUnits="userSpaceOnUse">
          <Stop stopColor="#FF4048" />
          <Stop offset={1} stopColor="#8D1217" />
        </LinearGradient>
      </Defs>
    </Svg>
  );
}

function AccountInactive(props: SvgProps) {
  return (
    <Svg width={21} height={23} fill="none" {...props}>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2.365 14.937a5.596 5.596 0 013.929-1.604h8.889c1.473 0 2.886.577 3.928 1.604a5.44 5.44 0 011.627 3.874V21c0 .606-.497 1.096-1.111 1.096s-1.111-.49-1.111-1.095V18.81c0-.872-.351-1.708-.976-2.325a3.357 3.357 0 00-2.357-.962h-8.89c-.883 0-1.731.346-2.356.963a3.264 3.264 0 00-.977 2.324V21c0 .606-.497 1.096-1.11 1.096-.615 0-1.112-.49-1.112-1.095V18.81a5.44 5.44 0 011.627-3.874z"
        fill="#A7A7A7"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M.738 20.87c0-.726.597-1.314 1.333-1.314h17.334c.736 0 1.333.588 1.333 1.314 0 .726-.597 1.315-1.333 1.315H2.07A1.324 1.324 0 01.738 20.87zM10.738 2.376c-1.84 0-3.333 1.472-3.333 3.287 0 1.816 1.492 3.287 3.333 3.287 1.841 0 3.334-1.471 3.334-3.287 0-1.815-1.493-3.287-3.334-3.287zM5.183 5.663c0-3.025 2.487-5.478 5.555-5.478 3.068 0 5.556 2.453 5.556 5.478 0 3.026-2.488 5.478-5.556 5.478S5.183 8.69 5.183 5.663z"
        fill="#A7A7A7"
      />
    </Svg>
  );
}

export { AccountActive, AccountInactive };
