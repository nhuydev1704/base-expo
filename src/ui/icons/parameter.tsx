import * as React from 'react';
import type { SvgProps } from 'react-native-svg';
import Svg, { Path } from 'react-native-svg';

function ParameterIcon(props: SvgProps) {
  return (
    <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
      <Path
        d="M18.48 18.537H21M4.68 12L3 12.044M4.68 12a2.4 2.4 0 104.8 0 2.4 2.4 0 00-4.8 0zm5.489.044H21m-8.199-6.493H3m18 0h-2.52M3 18.537h9.801m5.079.063a2.4 2.4 0 11-4.8 0 2.4 2.4 0 014.8 0zm0-13.2a2.4 2.4 0 11-4.8 0 2.4 2.4 0 014.8 0z"
        stroke={props.color || '#363853'}
        strokeWidth={1.5}
        strokeLinecap="round"
      />
    </Svg>
  );
}

export default ParameterIcon;
