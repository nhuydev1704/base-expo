import * as React from 'react';
import type { SvgProps } from 'react-native-svg';
import Svg, { Path } from 'react-native-svg';

export function BackIcon({ color = '#000', ...props }: SvgProps) {
  return (
    <Svg width={30} height={30} viewBox="0 0 24 24" fill="none" {...props}>
      <Path
        d="M17.5 12h-11m0 0l4.588 4M6.5 12l4.588-4"
        stroke={color}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}
