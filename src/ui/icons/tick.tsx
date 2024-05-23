import * as React from 'react';
import type { SvgProps } from 'react-native-svg';
import Svg, { Path } from 'react-native-svg';

export function TickIcon({ color = '#363853', ...props }: SvgProps) {
  return (
    <Svg width={20} height={20} viewBox="0 0 24 24" fill="none" {...props}>
      <Path
        d="M18 7L9.429 17 6 13"
        stroke={color}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}
